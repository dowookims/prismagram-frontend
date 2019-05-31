import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT } from "./AuthQueries"
import { toast } from "react-toastify";


export default () => {
  const [action, setAction] = useState("logIn");
  const name = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");
  const requestSecretMutation = useMutation(LOG_IN, {
    variables: { email: email.value },
  });
  const createAccountMutation = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      name: name.value,
      firstName: firstName.value,
      lastName: lastName.value,
    }
  })

  const onSubmit = async (e) => {
    e.preventDefault();
    if(action === "logIn") {
      if (email.value !== ""){
        try {
          const { requestSecret } = await requestSecretMutation();
            if (!requestSecret){
              toast.error("You dont have an account yet, create one");
              setTimeout(() => setAction("signUp"), 2000);
            }
        } catch {
          toast.error("Can't request secret, try again")
        }
      } else {
        toast.error("Email is required");
      }
    } else if (action==="signUp") {
      if(
        email.value !== "" &&
        name.value !== "" &&
        firstName.value !== "" &&
        lastName.value !== "" 
      ) {
        try {
          const { createAccount } = await createAccountMutation();
          if (!createAccount){
            toast.error("Can't create account");
          } else {
            toast.success("Account created! Log in now");
            setTimeout(() => setAction("logIn"), 3000);
          }
        } catch(e) {
          toast.error(e.message)
        }
      } else {
        toast.error("All field are required");
      }
    }
  };

  return (
    <AuthPresenter 
      setAction={setAction} 
      action={action} 
      name={name} 
      firstName={firstName}
      lastName={lastName}
      email={email}
      onSubmit={onSubmit}
    />
  );
};
import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Components/Input";
import Button from "../Components/Button";

const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Box = styled.div`
  ${props => props.theme.whiteBox}
  border-radius: 0px;
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled.div`
  text-align:center;
  padding:20px 0px;
`

const Link = styled.a`
  color: ${ props => props.theme.blueColor};
  cursor: pointer;
`

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 15px;
  width: 100%; 
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
    button {
      margin-top: 1rem;
    }
  }
`

export default () => {
  const [action, setAction] = useState("logIn");

  return (
    <Wrapper>
      <Form>
        {action === "logIn" ? (
          <form>
            <Input placeholder={"Username"}/>
            <Input placeholder={"Password"}/>
            <Button text={"Log in"} />
          </form>
        ) : <form>
          <Input placeholder={"First name"}/>
          <Input placeholder={"Last name"}/>
          <Input placeholder={"Email"}/>
          <Input placeholder={"Username"}/>
          <Input placeholder={"Password"}/>
          <Button text={"Sign up"} />
        </form>}
      </Form>
      <StateChanger>
        {action ==="login" ? (
          <>
            Don't have an account? <Link onClick={() => setAction("signUp")}>Sign up</Link>
          </>
        ) : (
          <>
            Have an account? <Link onClick={() => setAction("login")}>Log in</Link>
          </>
        )}
      </StateChanger>
    </Wrapper>
  );
};
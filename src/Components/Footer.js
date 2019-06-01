import React from "react";
import styled from "styled-components"

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const List = styled.ul`
  display:flex;
`

const ListItem = styled.li`
  &:not(:last-child){
    margin-right: 1.3rem;
  }
`;

const Link = styled.a`
  text-transform: uppercase;
  color: ${props => props.theme.darkBlueColor};
  font-size: 1rem;
  font-weight: 600
`;

const Copyright = styled.span`
  color: ${props => props.theme.darkGreyColor};
`;


export default () => (
  <Footer>
    <List>    
      <ListItem>
        <Link href="#">about us</Link>
        </ListItem>
      <ListItem>
        <Link href="#">support</Link>
        </ListItem>
      <ListItem>
        <Link href="#">press</Link>
        </ListItem>
      <ListItem>
        <Link href="#">api</Link>
        </ListItem>
      <ListItem>
        <Link href="#">jobs</Link>
        </ListItem>
      <ListItem>
        <Link href="#">directory</Link>
        </ListItem>
      <ListItem>
        <Link href="#">profiles</Link>
        </ListItem>
      <ListItem>
        <Link href="#">hashtags</Link>
        </ListItem>
      <ListItem>
        <Link href="#">language</Link>
        </ListItem>
    </List>
    <Copyright>
      InstaClone{new Date().getFullYear()} &copy;
    </Copyright>
  </Footer>
);


import styled from "styled-components";
import { Input, withStyles } from "@material-ui/core";

export const NavigationWrapper = styled.nav`
  grid-column: 1 / -1;
  background-color: #0080ae;
  box-shadow: 0 0 2px black;
  display: flex;
  color: white;
`;

export const NavigationLogo = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Anton&display=swap");
  font-family: "Anton", sans-serif;
  text-transform: uppercase;
  margin-left: 10px;
  font-size: 2rem;
`;

export const NavigationLinks = styled.div`
  margin-bottom: 3px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  align-items: flex-end;
  a {
    margin: 5px;
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const NavigationSearchWrapper = styled.div`
  display: flex;
  margin-right: 20px;
  margin-left: auto;
  align-items: center;
`;

export const inputStyles = withStyles({
  root: {
    color: "white",

    "&:before": {
      border: 0,

      content: "none"
    },
    "&:after": {
      border: 0
    },
    "&:hover:not(.Mui-disabled):before": {
      border: 0
    }
  },
  input: {
    "&:focus-within": {
      cursor: "text"
    },
    paddingBottom: 4,
    paddingTop: 3
  }
})(Input);

export const StyledInput: any = styled(inputStyles)`
  border: 1px solid white;
  border-radius: 10px;
  height: 70%;
  padding: 0 10px;
  align-self: center;
  &:hover {
    background-color: #93a9ad;
  }
  &:focus-within {
    background-color: white;
    color: black;
  }
`;

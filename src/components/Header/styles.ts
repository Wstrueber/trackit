import styled from "styled-components";
import { Input, withStyles } from "@material-ui/core";

export const NavigationWrapper = styled.nav`
  display: grid;

  grid-template-columns: 20% auto auto;
  grid-template-rows: auto;
  background-color: #0080ae;
  box-shadow: 0 0 2px black;
  color: white;
`;

export const NavigationLogo = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Anton&display=swap");
  font-family: "Anton", sans-serif;
  text-transform: uppercase;
  display: flex;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
`;

export const NavigationLinksWrapper = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: repeat(3, auto);
  margin-top: auto;
  justify-self: center;
  grid-column-gap: 10px;
`;

export const NavigationLinks = styled.div`
  margin-bottom: 3px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const NavigationSearchWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const StyledInput = withStyles({
  root: {
    color: "white",
    "&:before": {
      border: 0
    },
    "&:focus": {
      border: 0
    },
    "&:hover:not(.Mui-disabled):before": {
      border: 0
    }
  }
})(Input);

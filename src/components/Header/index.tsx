import React from "react";
import { Input, InputAdornment, IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import {
  NavigationWrapper,
  NavigationLogo,
  NavigationLinksWrapper,
  NavigationLinks,
  NavigationSearchWrapper,
  StyledInput
} from "./styles";

const Header = () => {
  return (
    <NavigationWrapper>
      <NavigationLogo>Track it</NavigationLogo>
      <NavigationLinksWrapper>
        <NavigationLinks>TV Shows</NavigationLinks>
        <NavigationLinks>Calendar</NavigationLinks>
        <NavigationLinks>News</NavigationLinks>
      </NavigationLinksWrapper>
      <NavigationSearchWrapper>
        <StyledInput
          // @ts-ignore next
          endAdornment={
            <InputAdornment position="end">
              <IconButton>
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
      </NavigationSearchWrapper>
    </NavigationWrapper>
  );
};

export default Header;

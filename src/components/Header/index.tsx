import React, { useState } from "react";
import { InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import {
  NavigationWrapper,
  NavigationLogo,
  NavigationLinks,
  NavigationSearchWrapper,
  StyledInput
} from "./styles";

const Header = () => {
  const [color, setColor] = useState("white");
  return (
    <NavigationWrapper>
      <NavigationLogo>Track it</NavigationLogo>
      <NavigationLinks>
        <a href="#">TV Shows</a> <a href="#">Calendar</a> <a href="#">News</a>
      </NavigationLinks>
      <NavigationSearchWrapper>
        <StyledInput
          placeholder="Search"
          onFocus={() => setColor("black")}
          onBlur={() => setColor("white")}
          endAdornment={
            <InputAdornment position="end">
              <Search style={{ color }} />
            </InputAdornment>
          }
        />
      </NavigationSearchWrapper>
    </NavigationWrapper>
  );
};

export default Header;

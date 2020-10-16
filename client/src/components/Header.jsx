import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { header } from './style/header.style'
const Header = () => {
  return (
      <header css={header}>
      <h1>Weekly Hour Log</h1>
    </header>
  );
};

export default Header
import { css, jsx } from "@emotion/core";

import { topHeader } from './style/topHeader.style'
const HeaderTop = () => {
  return (
    <header css={topHeader}>
      <h1>Weekly Hour Log</h1>
    </header>
  );
};

export default HeaderTop;
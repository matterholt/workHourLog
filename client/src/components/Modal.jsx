import {useState} from 'react'
/** @jsxImportSource @emotion/core */
import { css, jsx } from "@emotion/core";


const itemModal = css`
height: 100vw;
position: absolute;
top: 0;
left: 0;
background: gray;
z-index:10;
`
const Modal = ({ children,modalName }) => {
  const [isShowing, setShowing] = useState(false);
  return (
    <div>
      <h3>{modalName}</h3>
      <button onClick={() => setShowing(!isShowing)}>
        {isShowing ? "Close" : "Show"}
      </button>
      {isShowing ? (
        <div css={itemModal}>
          <button onClick={() => setShowing(!isShowing)}>Save & Close</button>
          {children}
        </div>
      ) : null}
    </div>
  );
};

export { Modal}
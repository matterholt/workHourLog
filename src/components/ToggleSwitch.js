/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const togSwitch = css`
  position: relative;
  display: block;
  width: 8px;
  height: 35px;
  & input {
    display: none;
  }
`;
const slider = css`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  transition: 0.5s;
  border: 3px solid gray;
  &:before {
    position: absolute;
    content: "";
    top: 2px;
    left: 2px;
    background-color: gray;
    transition: 0.5s;
  }
  &:before {
    width: 25px;
    height: 25px;
    border-radius: 100%;
  }
`;
const round = css``;
const togInput = css`
  display: none;
  & :checked {
    transform: translateX(50px);
    background: white;
  }
`;

export const ToggleSwitch = (props) => {
  return (
    <div>
      <label css={togSwitch} htmlFor={props.Name}>
        <input
          css={togInput}
          type="checkbox"
          name={props.Name}
          id={props.Name}
        />
        <span css={[slider, round]}></span>
      </label>
    </div>
  );
};

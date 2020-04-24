import styled from "@emotion/styled";

export const Form = styled.form`
  margin: 10px;
  max-width: 400px;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: inherit;
  background-color: white;

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  & li {
    margin-top: 1em;
    display: flex;
    flex-flow: ${(props) => (props.row ? "row" : "column")};
  }

  & label {
    display: inline-block;
    width: 90px;
    margin-bottom: 0.2em;
    font-weight: 900;
  }

  & input,
  textarea {
    font: 1em sans-serif;
    width: 300px;
    box-sizing: border-box;
    border: 1px solid #999;

    &:focus {
      border-color: #000;
    }
  }

  & textarea {
    height: 5em;
    vertical-align: top;
  }

  & button {
    margin: 0 10px;
  }

  & h1 {
    margin: 0;
    text-align: center;
  }

  & p {
    margin: 1em 0 0 0;
    text-align: center;
  }
`;

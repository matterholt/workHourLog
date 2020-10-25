import React, { useState} from 'react'

const Modal = ({ children }) => {
  const [isShowing, setShowing] = useState(false);
  return (
    <div>
      <button onClick={() => setShowing(!isShowing)}>
        {isShowing ? "Show" : "Close"}
      </button>
      isShowing ? <div>{children}</div>: null
    </div>
  );
};

export { Modal}
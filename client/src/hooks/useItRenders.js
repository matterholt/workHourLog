import { useRef } from "react";
function useItRenders(compName) {
  const renders = useRef(0);
  console.log(`render comp ${compName}`, renders.current++);
}

export { useItRenders };

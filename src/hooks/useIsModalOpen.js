import { useState } from "react";

// 1. open and close modal custom Hooks
export function useIsModalOpen(initial) {
  const [isModalShown, setIsModalShown] = useState(initial);
  const setTrue = () => setIsModalShown(true);
  const setFalse = () => setIsModalShown(false);
  return [isModalShown, setTrue, setFalse];
}

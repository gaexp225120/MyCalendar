import { RefObject, useCallback } from "react";

type TextRef = RefObject<HTMLTextAreaElement>;

export const useFocusTextArea = (textRef: TextRef) => {
  const handleFocusTextArea = () => {
    if (textRef.current) {
      textRef.current.focus();
    }
  };

  return handleFocusTextArea;
};

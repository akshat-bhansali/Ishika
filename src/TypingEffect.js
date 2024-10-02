import React, { useEffect, useState } from "react";

const TypingEffect = ({ text, typingSpeed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(intervalId); // Stop when finished
      }
    }, typingSpeed);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [text, typingSpeed]);

  return <div>{displayedText}</div>;
};

export default TypingEffect;

import React, { useState, useEffect } from 'react';

const RotatingText = () => {
  const words = ['websites', 'AI models', 'Rest APIs', 'user interfaces'];
  const [displayText, setDisplayText] = useState(words[0]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentWordIndex + 1) % words.length;
      scrambleToWord(words[nextIndex]);
      setCurrentWordIndex(nextIndex);
    }, 2500);

    return () => clearInterval(interval);
  }, [currentWordIndex]);

  const scrambleToWord = (nextWord) => {
    let iteration = 0;
    const originalLength = nextWord.length;

    const scramble = setInterval(() => {
      const scrambled = nextWord
        .split('')
        .map((letter, i) => {
          if (i < iteration) return nextWord[i];
          return randomChar();
        })
        .join('');

      setDisplayText(scrambled);

      iteration++;
      if (iteration > originalLength) clearInterval(scramble);
    }, 50);
  };

  const randomChar = () => {
    const chars = '*&^%$#@!~<>?/|';
    return chars[Math.floor(Math.random() * chars.length)];
  };

  return (
    <span className="font-semibold text-white inline-block">
      {displayText}
    </span>
  );
};

export default RotatingText;

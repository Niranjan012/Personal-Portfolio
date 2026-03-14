"use client";

import { useState, useEffect } from "react";

interface CyclingTypewriterProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}

export const CyclingTypewriter: React.FC<CyclingTypewriterProps> = ({
  words,
  className = "",
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    if (isPaused) return;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < word.length) {
          setCurrentText(word.substring(0, currentText.length + 1));
        } else {
          // Finished typing, pause before deleting
          setIsPaused(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsPaused(false);
          }, pauseTime);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(word.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, isPaused, words, typeSpeed, deleteSpeed, pauseTime]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};
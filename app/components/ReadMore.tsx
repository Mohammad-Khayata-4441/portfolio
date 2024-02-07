"use client"
import { Button } from '@nextui-org/button';
import React, { useState, useEffect } from 'react';

interface ReadMoreProps {
  text: string;
  wordsCount?: number;
  default?: boolean;
  className:string
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, wordsCount = 20, default: defaultState = false , className=''}) => {
  const [expand, setExpand] = useState(defaultState);
  const [textLength, setTextLength] = useState<number | null>(null);

  useEffect(() => {
    setTextLength(text?.split(' ').length ?? 0);
  }, [text]);

  return (
    <p className={`transition-all ${className}`}>
      {expand || textLength! <= wordsCount
        ? text
        : text?.split(' ').slice(0, wordsCount).join(' ') + ' ... '}
      {text && text.split(' ').length > wordsCount && (
        <button
          className={"text-xl hover:bg-white underline border-primary transition hover:bg-opacity-10 p-1 rounded-lg" }
          onClick={() => setExpand(!expand)}
        >
          {expand ? 'Read Less' : 'Read More'}
        </button>
      )}
    </p>
  );
};

export default ReadMore;

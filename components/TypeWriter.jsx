'use client';
import Typewriter from 'typewriter-effect';
import React from 'react';
import { useEffect, useState } from 'react';

const TypeWriter = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStart(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {start && (
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 40,
            strings: [
              'I have a passion for bringing projects to life.',
              'I like to learn new skills.',
              'I have the ambition to go the extra mile.',
            ],
          }}
        />
      )}
    </>
  );
};

export default TypeWriter;

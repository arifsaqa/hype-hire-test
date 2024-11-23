'use client'
import React from 'react';

type TextProps = {
  content: string;
  isHeading?: boolean;
  className?: string;
};
const Text = (props: TextProps) => {
  const { content, isHeading, className } = props;
  return isHeading ? (
    <h1 className={`text-5xl font-black ${className}`}>{content}</h1>
  ) : (
    <p className={`text-base font-black ${className}`}>{content}</p>
  );
};

export default Text;

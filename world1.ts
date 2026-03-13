import React from 'react';
import { zhuyinDict } from '../data/lessons';

interface PhoneticTextProps {
  text: string;
  className?: string;
  rtClassName?: string;
  showPhonetic?: boolean;
}

export default function PhoneticText({ 
  text, 
  className = "", 
  rtClassName = "", 
  showPhonetic = true 
}: PhoneticTextProps) {
  const chars = text.split('');
  
  return (
    <span className={className}>
      {chars.map((char, index) => {
        const zhuyin = zhuyinDict[char];
        if (!zhuyin || !showPhonetic) return <span key={index}>{char}</span>;
        
        return (
          <ruby key={index} className="mx-[0.05em]">
            {char}
            <rt className={`text-[0.5em] font-sans font-bold select-none ${rtClassName}`}>
              {zhuyin}
            </rt>
          </ruby>
        );
      })}
    </span>
  );
}

import React, { useState, useMemo } from 'react';
import { Lesson, lessons } from '../data/lessons';
import { ZhuyinSettings } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle, RotateCcw, Target, XCircle, HelpCircle } from 'lucide-react';

import PhoneticText from './PhoneticText';

interface FlashcardGameProps {
  lesson: Lesson;
  settings: ZhuyinSettings;
  onComplete: () => void;
  onBack: () => void;
}

export default function FlashcardGame({ lesson, settings, onComplete, onBack }: FlashcardGameProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [completedCards, setCompletedCards] = useState<string[]>([]);
  const [showCompletion, setShowCompletion] = useState(false);
  const [score, setScore] = useState(0);

  const currentCard = lesson.flashcards[currentIndex];
  const isLastCard = currentIndex === lesson.flashcards.length - 1;

  // Generate options for the current card
  const options = useMemo(() => {
    const correct = currentCard.definition;
    const allOtherDefinitions = lessons
      .flatMap(l => l.flashcards)
      .filter(f => f.definition !== correct)
      .map(f => f.definition);
    
    // Shuffle and pick 3 distractors
    const shuffledDistractors = [...new Set(allOtherDefinitions)]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    
    return [correct, ...shuffledDistractors].sort(() => Math.random() - 0.5);
  }, [currentCard]);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    
    if (options[index] === currentCard.definition) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (!completedCards.includes(currentCard.id)) {
      setCompletedCards([...completedCards, currentCard.id]);
    }

    if (isLastCard) {
      setShowCompletion(true);
    } else {
      setIsAnswered(false);
      setSelectedOption(null);
      setCurrentIndex(prev => prev + 1);
    }
  };

  if (showCompletion) {
    return (
      <div className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-splat-yellow border-4 border-ink-black brutal-shadow-pink p-12 max-w-lg w-full text-center transform -skew-x-3"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-full border-4 border-ink-black brutal-shadow">
              <CheckCircle className="w-20 h-20 text-splat-green" />
            </div>
          </div>
          <h2 className="text-5xl font-display text-ink-black mb-4 tracking-wider">
            <PhoneticText text="STAGE 已完成!" showPhonetic={settings.stage} />
          </h2>
          <p className="text-xl text-ink-black font-bold mb-2">
            <PhoneticText text="你已經掌握了古文！" showPhonetic={settings.training} />
          </p>
          <p className="text-2xl text-splat-pink font-display mb-8">
            <PhoneticText text="得分: " showPhonetic={settings.training} /> {score} / {lesson.flashcards.length}
          </p>
          <button
            onClick={onComplete}
            className="w-full bg-splat-pink text-white font-display text-3xl py-4 border-4 border-ink-black brutal-shadow hover:-translate-y-2 hover:bg-white hover:text-splat-pink transition-all transform skew-x-6"
          >
            <PhoneticText text="太棒了!" showPhonetic={settings.training} />
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl flex justify-between items-center mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white hover:text-splat-pink transition-colors font-display text-xl"
        >
          <ArrowLeft className="w-6 h-6" />
          <PhoneticText text="放棄任務" showPhonetic={settings.title} />
        </button>
        <div className="bg-splat-cyan text-ink-black font-display px-4 py-1 border-4 border-ink-black transform skew-x-6 brutal-shadow text-xl">
          <PhoneticText text="挑戰模式" showPhonetic={settings.training} />
        </div>
      </div>

      <main className="w-full max-w-4xl flex-1 flex flex-col">
        
        {/* Progress Bar */}
        <div className="w-full mb-12">
          <div className="flex justify-between text-white font-display text-xl mb-2">
            <span>
              <PhoneticText text="墨水量" showPhonetic={settings.training} />
            </span>
            <span>{completedCards.length} / {lesson.flashcards.length}</span>
          </div>
          <div className="h-6 bg-ink-black border-4 border-white w-full overflow-hidden transform -skew-x-6">
            <motion.div 
              className="h-full bg-splat-green"
              initial={{ width: 0 }}
              animate={{ width: `${(completedCards.length / lesson.flashcards.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Question Card */}
          <motion.div
            key={currentIndex}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white border-8 border-ink-black brutal-shadow-pink p-6 md:p-8 min-h-[200px] md:min-h-[300px] flex flex-col items-center justify-center text-center transform -skew-x-2 relative"
          >
            <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-ink-black text-white px-2 py-0.5 md:px-3 md:py-1 font-display text-sm md:text-lg transform skew-x-6">
              <PhoneticText text="古文原文" showPhonetic={settings.training} />
            </div>
            <h2 className="text-3xl md:text-6xl font-bold text-ink-black leading-tight font-serif">
              <PhoneticText text={currentCard.term} showPhonetic={settings.training} />
            </h2>
          </motion.div>

          {/* Options */}
          <div className="space-y-4">
            <div className="bg-splat-yellow text-ink-black font-display text-xl px-4 py-2 border-4 border-ink-black inline-block transform -skew-x-6 mb-2">
              <PhoneticText text="選擇正確的含義：" showPhonetic={settings.training} />
            </div>
            {options.map((option, index) => {
              const isCorrect = option === currentCard.definition;
              const isSelected = selectedOption === index;
              
              let buttonClass = "bg-white text-ink-black border-4 border-ink-black hover:bg-gray-100";
              if (isAnswered) {
                if (isCorrect) buttonClass = "bg-splat-green text-ink-black border-4 border-ink-black scale-105 z-10";
                else if (isSelected) buttonClass = "bg-splat-pink text-white border-4 border-ink-black opacity-50";
                else buttonClass = "bg-white text-ink-black border-4 border-ink-black opacity-30";
              }

              return (
                  <motion.button
                    key={index}
                    whileHover={!isAnswered ? { x: 10 } : {}}
                    onClick={() => handleOptionClick(index)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 md:p-6 text-lg md:text-xl font-bold transition-all brutal-shadow-small flex items-center justify-between ${buttonClass}`}
                  >
                    <span><PhoneticText text={option} showPhonetic={settings.training} /></span>
                    {isAnswered && isCorrect && <CheckCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />}
                    {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />}
                  </motion.button>
              );
            })}

            {/* Next Button */}
            <AnimatePresence>
              {isAnswered && (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={handleNext}
                    className="w-full mt-4 md:mt-8 bg-splat-cyan text-ink-black font-display text-2xl md:text-3xl py-4 md:py-6 border-4 border-ink-black brutal-shadow hover:-translate-y-2 transition-transform transform skew-x-6 flex items-center justify-center gap-4"
                  >
                    <PhoneticText text={isLastCard ? '完成任務' : '下一題'} showPhonetic={settings.training} />
                    <Target className="w-6 h-6 md:w-8 md:h-8" />
                  </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>

      </main>
    </div>
  );
}


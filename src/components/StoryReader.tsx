import React, { useState } from 'react';
import { Lesson } from '../data/lessons';
import { ZhuyinSettings } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, BookOpen, Play, Eye, EyeOff } from 'lucide-react';

import PhoneticText from './PhoneticText';

interface StoryReaderProps {
  lesson: Lesson;
  settings: ZhuyinSettings;
  onNext: () => void;
  onBack: () => void;
}

export default function StoryReader({ lesson, settings, onNext, onBack }: StoryReaderProps) {
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-3xl flex justify-between items-center mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-white hover:text-splat-yellow transition-colors font-display text-xl"
        >
          <ArrowLeft className="w-6 h-6" />
          <PhoneticText text="返回地圖" showPhonetic={settings.title} />
        </button>
        <div className="bg-splat-cyan text-ink-black font-display px-4 py-1 border-4 border-ink-black transform skew-x-6 brutal-shadow text-xl">
          STAGE {lesson.world}-{lesson.stage}
        </div>
      </div>

      <main className="w-full max-w-3xl space-y-8">
        {/* Mission Briefing */}
        <div className="skew-container bg-splat-pink border-4 border-ink-black brutal-shadow p-6 md:p-10">
          <div className="unskew-content">
            <div className="flex items-center gap-3 mb-6 bg-ink-black text-white inline-flex px-4 py-2 border-2 border-white transform -skew-x-6">
              <BookOpen className="w-6 h-6 text-splat-yellow" />
              <h2 className="font-display text-2xl tracking-wider">
                <PhoneticText text="任務簡介" showPhonetic={settings.intro} />
              </h2>
            </div>
            
            <h1 className="text-2xl md:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight">
              <PhoneticText text={lesson.storyTitle} showPhonetic={settings.intro} />
            </h1>
            
            <div className="bg-white text-ink-black p-4 md:p-6 border-4 border-ink-black brutal-shadow-white text-lg md:text-xl leading-relaxed font-medium whitespace-pre-line">
              <PhoneticText text={lesson.storyContent} showPhonetic={settings.intro} />
            </div>
          </div>
        </div>

        {/* Decode Ancient Text */}
        <div className="skew-container bg-splat-yellow border-4 border-ink-black brutal-shadow p-4 md:p-10">
          <div className="unskew-content">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="font-display text-xl md:text-2xl text-ink-black tracking-wider bg-white px-4 py-1 border-4 border-ink-black transform -skew-x-6">
                <PhoneticText text="解讀古文" showPhonetic={settings.interpretation} />
              </h2>
              <button
                onClick={() => setShowOriginal(!showOriginal)}
                className="flex items-center gap-2 bg-ink-black text-white px-4 py-2 border-2 border-ink-black hover:bg-splat-pink transition-colors font-bold transform skew-x-6 text-sm md:text-base"
              >
                {showOriginal ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                <PhoneticText text={showOriginal ? '隱藏' : '顯示'} showPhonetic={settings.interpretation} />
              </button>
            </div>

            <AnimatePresence>
              {showOriginal && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="bg-white border-4 border-ink-black p-4 md:p-6 text-xl md:text-4xl font-serif font-bold text-ink-black leading-relaxed text-justify flex flex-wrap gap-y-4 md:gap-y-6 brutal-shadow-white mb-6">
                    {lesson.phoneticOriginalText.map((item, index) => (
                      <ruby key={index} className="mx-[0.1em]">
                        {item.char}
                        {settings.interpretation && (
                          <rt className="text-xs md:text-base text-splat-pink font-sans select-none font-bold tracking-tighter">{item.zhuyin}</rt>
                        )}
                      </ruby>
                    ))}
                  </div>

                  <div className="bg-ink-black text-white p-4 md:p-6 border-4 border-white brutal-shadow transform -skew-x-2">
                    <h3 className="font-display text-lg md:text-xl text-splat-yellow mb-2 tracking-wider">
                      <PhoneticText text="白話翻譯" showPhonetic={settings.interpretation} />
                    </h3>
                    <p className="text-base md:text-xl leading-relaxed font-medium">
                      <PhoneticText text={lesson.translation} showPhonetic={settings.interpretation} />
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Start Training Button */}
        <div className="flex justify-center pt-8 pb-16">
          <button
            onClick={onNext}
            className="group relative flex items-center gap-4 bg-splat-green text-ink-black px-8 py-4 border-4 border-ink-black brutal-shadow transform -skew-x-6 hover:-translate-y-2 hover:bg-white transition-all"
          >
            <span className="font-display text-3xl tracking-wider">
              <PhoneticText text="開始訓練!" showPhonetic={settings.training} />
            </span>
            <Play className="w-8 h-8 fill-current" />
          </button>
        </div>
      </main>
    </div>
  );
}

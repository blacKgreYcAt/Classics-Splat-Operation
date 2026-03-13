import React, { useState, useEffect, useMemo } from 'react';
import { analectsLessons, shishuoProcessedLessons, Lesson } from './data/lessons';
import { ZhuyinSettings } from './types';
import StoryReader from './components/StoryReader';
import FlashcardGame from './components/FlashcardGame';
import PhoneticText from './components/PhoneticText';
import { Lock, Play, CheckCircle, Settings, Eye, EyeOff } from 'lucide-react';

type ViewState = 'text-select' | 'world-select' | 'map' | 'story' | 'practice';
type TextType = 'analects' | 'shishuo';

function App() {
  const [view, setViewState] = useState<ViewState>('text-select');
  const [currentText, setCurrentText] = useState<TextType>('analects');
  const [currentWorld, setCurrentWorld] = useState<number | null>(null);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [completedStages, setCompletedStages] = useState<string[]>([]);
  const [showSettings, setShowSettings] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [zhuyinSettings, setZhuyinSettings] = useState<ZhuyinSettings>({
    title: true,
    stage: true,
    intro: true,
    interpretation: true,
    training: true,
  });

  const lessons = currentText === 'analects' ? analectsLessons : shishuoProcessedLessons;
  const appTitle = currentText === 'analects' ? '論語大作戰' : '世說新語大作戰';
  const appEnglishTitle = currentText === 'analects' ? 'ANALECTS SPLAT OPERATION' : 'SHI SHUO XIN YU SPLAT OPERATION';
  const progressKey = currentText === 'analects' ? 'splatoon_analects_progress' : 'splatoon_shishuo_progress';

  useEffect(() => {
    const saved = localStorage.getItem(progressKey);
    if (saved) {
      setCompletedStages(JSON.parse(saved));
    } else {
      setCompletedStages([]);
    }
  }, [currentText]);

  const handleComplete = (lessonId: string) => {
    const newCompleted = [...new Set([...completedStages, lessonId])];
    setCompletedStages(newCompleted);
    localStorage.setItem(progressKey, JSON.stringify(newCompleted));
    setViewState('map');
  };

  // Dynamically group lessons by world
  const worlds = [...new Set(lessons.map(l => l.world))].sort((a, b) => a - b);
  
  // Get unique world names/books
  const worldBooks = useMemo(() => {
    const map = new Map<number, string>();
    lessons.forEach(l => {
      if (!map.has(l.world)) map.set(l.world, l.book);
    });
    return map;
  }, [lessons]);

  // Global search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const allLessons = [...analectsLessons, ...shishuoProcessedLessons];
    return allLessons.filter(l => 
      l.originalText.includes(searchQuery) || 
      l.title.includes(searchQuery) ||
      l.translation.includes(searchQuery)
    );
  }, [searchQuery]);

  if (view === 'text-select') {
    return (
      <div className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Decorative Splats */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-splat-pink/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-splat-cyan/20 rounded-full blur-3xl -z-10" />

        <header className="mb-12 md:mb-16 text-center">
          <h1 className="text-4xl md:text-8xl font-display text-splat-yellow brutal-shadow-pink transform -skew-x-6 tracking-wider border-8 border-ink-black bg-ink-black p-4 md:p-6 inline-block">
            <PhoneticText text="經典大作戰" showPhonetic={zhuyinSettings.title} />
            <span className="block text-xl md:text-3xl mt-2 text-white opacity-80 tracking-widest">CLASSICS SPLAT OPERATION</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mb-12">
          <button
            onClick={() => {
              setCurrentText('analects');
              setViewState('world-select');
            }}
            className="group relative h-64 border-8 border-ink-black bg-splat-pink brutal-shadow transition-all transform hover:-translate-y-2 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-ink-black leading-tight drop-shadow-sm mb-4">
                <PhoneticText text="論語" rtClassName="text-ink-black/60" showPhonetic={zhuyinSettings.title} />
              </h2>
              <span className="font-display text-xl text-ink-black opacity-70">ANALECTS</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white border-4 border-ink-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Play className="w-8 h-8 text-ink-black fill-current" />
            </div>
          </button>

          <button
            onClick={() => {
              setCurrentText('shishuo');
              setViewState('world-select');
            }}
            className="group relative h-64 border-8 border-ink-black bg-splat-cyan brutal-shadow transition-all transform hover:-translate-y-2 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-ink-black leading-tight drop-shadow-sm mb-4">
                <PhoneticText text="世說新語" rtClassName="text-ink-black/60" showPhonetic={zhuyinSettings.title} />
              </h2>
              <span className="font-display text-xl text-ink-black opacity-70">SHI SHUO XIN YU</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white border-4 border-ink-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Play className="w-8 h-8 text-ink-black fill-current" />
            </div>
          </button>
        </div>

        {/* Global Search Bar */}
        <div className="max-w-4xl w-full mb-8">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="搜尋古文關鍵字..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-8 border-ink-black p-4 md:p-6 text-xl md:text-2xl font-bold brutal-shadow focus:outline-none focus:ring-4 focus:ring-splat-yellow text-ink-black"
            />
            <div className="absolute right-6 pointer-events-none flex items-center gap-2">
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="pointer-events-auto bg-splat-pink text-white px-2 py-1 text-sm font-bold border-2 border-ink-black"
                >
                  清除
                </button>
              )}
              <span className="bg-ink-black text-white px-3 py-1 font-display text-sm md:text-base transform -rotate-3">搜尋</span>
            </div>
          </div>
        </div>

        {/* Inline Search Results */}
        {searchQuery.trim() !== '' && (
          <div className="max-w-4xl w-full mb-12 bg-white border-8 border-ink-black p-6 brutal-shadow max-h-[60vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-display text-splat-yellow bg-ink-black px-4 py-2 border-4 border-white transform skew-x-3">
                SEARCH RESULTS: {searchResults.length}
              </h2>
            </div>
            
            <div className="space-y-4">
              {searchResults.map((lesson) => {
                const isShishuo = lesson.id.startsWith('shishuo');
                return (
                  <button
                    key={lesson.id}
                    onClick={() => {
                      setCurrentText(isShishuo ? 'shishuo' : 'analects');
                      setCurrentLesson(lesson);
                      setCurrentWorld(lesson.world);
                      setViewState('story');
                    }}
                    className="w-full border-4 border-ink-black p-4 text-left bg-gray-50 hover:bg-splat-yellow transition-colors brutal-shadow-sm text-ink-black"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className={`font-display text-xs px-2 py-1 text-white ${isShishuo ? 'bg-splat-cyan' : 'bg-splat-pink'}`}>
                        {isShishuo ? '世說新語' : '論語'}
                      </span>
                      <span className="text-xs font-mono opacity-50">WORLD {lesson.world} - STAGE {lesson.stage}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1">{lesson.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2 italic">「{lesson.originalText}」</p>
                    <div className="mt-2 text-xs font-bold text-ink-black/60 uppercase tracking-tighter">
                      {lesson.book}
                    </div>
                  </button>
                );
              })}
              {searchResults.length === 0 && (
                <div className="text-center py-10 opacity-50 font-display text-ink-black">
                  NO RESULTS FOUND
                </div>
              )}
            </div>
          </div>
        )}

        {/* Zhuyin Settings Panel */}
        <div className="max-w-4xl w-full">
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className="flex items-center gap-2 bg-ink-black text-white px-6 py-3 border-4 border-white brutal-shadow-yellow transform -skew-x-6 hover:scale-105 transition-transform mb-4"
          >
            <Settings className={`w-6 h-6 ${showSettings ? 'animate-spin' : ''}`} />
            <span className="font-display text-xl tracking-wider">注音顯示設定</span>
          </button>

          {showSettings && (
            <div className="bg-white border-8 border-ink-black p-6 brutal-shadow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 transform skew-x-1">
              {[
                { key: 'title', label: <PhoneticText text="標題" showPhonetic={zhuyinSettings.title} /> },
                { key: 'stage', label: <PhoneticText text="關卡/STAGE" showPhonetic={zhuyinSettings.stage} /> },
                { key: 'intro', label: <PhoneticText text="任務簡介" showPhonetic={zhuyinSettings.intro} /> },
                { key: 'interpretation', label: <PhoneticText text="解讀古文" showPhonetic={zhuyinSettings.interpretation} /> },
                { key: 'training', label: <PhoneticText text="開始訓練/挑戰" showPhonetic={zhuyinSettings.training} /> },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setZhuyinSettings(prev => ({ ...prev, [item.key]: !prev[item.key as keyof ZhuyinSettings] }))}
                  className={`flex items-center justify-between p-3 border-4 border-ink-black font-bold transition-colors ${
                    zhuyinSettings[item.key as keyof ZhuyinSettings] ? 'bg-splat-green text-ink-black' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  <span className="text-lg">{item.label}</span>
                  {zhuyinSettings[item.key as keyof ZhuyinSettings] ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              ))}
            </div>
          )}
        </div>

        <footer className="mt-16 text-center text-white/50 font-display">
          <p>2026 BERK STUDIO 經典大作戰 CLASSICS SPLAT OPERATION-Concept by Rex CHU <a href="mailto:glitch.remover_1i@icloud.com" className="underline hover:text-splat-pink transition-colors">聯絡信箱</a></p>
        </footer>
      </div>
    );
  }

  if (view === 'story' && currentLesson) {
    return <StoryReader lesson={currentLesson} settings={zhuyinSettings} onNext={() => setViewState('practice')} onBack={() => setViewState('map')} />;
  }

  if (view === 'practice' && currentLesson) {
    return <FlashcardGame lesson={currentLesson} settings={zhuyinSettings} onComplete={() => handleComplete(currentLesson.id)} onBack={() => setViewState('story')} />;
  }

  if (view === 'map' && currentWorld !== null) {
    const worldLessons = lessons.filter(l => l.world === currentWorld);
    const worldColors = ['bg-splat-pink', 'bg-splat-green', 'bg-splat-cyan', 'bg-splat-yellow', 'bg-splat-purple'];
    const colorClass = worldColors[(currentWorld - 1) % worldColors.length];

    return (
      <div className="min-h-screen p-4 md:p-8">
        <header className="max-w-4xl mx-auto mb-8 flex items-center justify-between">
          <button 
            onClick={() => setViewState(currentText === 'analects' ? 'world-select' : 'world-select')}
            className="bg-ink-black text-white px-4 py-2 font-display text-xl border-4 border-white brutal-shadow-pink transform -skew-x-6 hover:scale-105 transition-transform"
          >
            <PhoneticText text="返回選擇" showPhonetic={zhuyinSettings.title} />
          </button>
          <h1 className="hidden md:block text-2xl font-display text-splat-yellow bg-ink-black px-4 py-2 border-4 border-white transform skew-x-3">
            WORLD {currentWorld}: <PhoneticText text={worldBooks.get(currentWorld) || ""} rtClassName="text-white/60" showPhonetic={zhuyinSettings.stage} />
          </h1>
        </header>

        <main className="max-w-4xl mx-auto">
          <section className={`skew-container brutal-shadow border-4 border-ink-black p-4 md:p-8 ${colorClass}`}>
            <div className="unskew-content">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {worldLessons.map((lesson) => {
                  const globalIndex = lessons.findIndex(l => l.id === lesson.id);
                  const isFirstLevel = globalIndex === 0;
                  const previousLesson = lessons[globalIndex - 1];
                  // Open all worlds/stages
                  const isUnlocked = true;
                  const isCompleted = completedStages.includes(lesson.id);

                  return (
                    <button
                      key={lesson.id}
                      disabled={!isUnlocked}
                      onClick={() => {
                        setCurrentLesson(lesson);
                        setViewState('story');
                      }}
                      className={`relative border-4 border-ink-black p-4 text-left transition-transform ${
                        isUnlocked 
                          ? 'bg-white text-ink-black hover:-translate-y-2 hover:brutal-shadow cursor-pointer' 
                          : 'bg-gray-400 text-gray-600 cursor-not-allowed opacity-80'
                      }`}
                    >
                      {isCompleted && (
                        <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 border-4 border-splat-pink text-splat-pink font-display text-lg md:text-2xl transform rotate-12 px-2 py-1 bg-white z-10 brutal-shadow text-center">
                          <PhoneticText text="已完成!" showPhonetic={zhuyinSettings.stage} />
                        </div>
                      )}
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-display text-lg md:text-xl bg-ink-black text-white px-2 py-1">
                          STAGE {lesson.stage}
                        </span>
                        {!isUnlocked && <Lock className="w-5 h-5 md:w-6 md:h-6" />}
                        {isUnlocked && !isCompleted && <Play className="w-5 h-5 md:w-6 md:h-6 text-splat-pink" />}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mt-2">
                        <PhoneticText text={lesson.title} showPhonetic={zhuyinSettings.stage} />
                      </h3>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

        <footer className="max-w-4xl mx-auto mt-16 text-center text-white/50 font-display">
          <p>2026 BERK STUDIO 經典大作戰 CLASSICS SPLAT OPERATION-Concept by Rex CHU <a href="mailto:glitch.remover_1i@icloud.com" className="underline hover:text-splat-pink transition-colors">聯絡信箱</a></p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <header className="max-w-6xl mx-auto mb-12 md:mb-20 mt-8">
        <div className="flex justify-start mb-4">
          <button 
            onClick={() => setViewState('text-select')}
            className="bg-ink-black text-white px-4 py-2 font-display text-lg border-4 border-white brutal-shadow transform -skew-x-6 hover:scale-105 transition-transform"
          >
            <PhoneticText text="切換經典" showPhonetic={zhuyinSettings.title} />
          </button>
        </div>
        <div className="relative inline-block w-full text-center">
          <h1 className="text-4xl md:text-8xl font-display text-splat-yellow brutal-shadow-pink transform -skew-x-6 tracking-wider border-8 border-ink-black bg-ink-black p-4 md:p-6 inline-block">
            <PhoneticText text={appTitle} showPhonetic={zhuyinSettings.title} />
            <span className="block text-xl md:text-3xl mt-2 text-white opacity-80 tracking-widest uppercase">{appEnglishTitle}</span>
          </h1>
          <div className="absolute -bottom-6 right-0 md:right-10 bg-splat-cyan text-ink-black font-display text-xl md:text-3xl px-4 py-2 border-4 border-ink-black transform rotate-3 brutal-shadow">
            <PhoneticText text="關卡選擇" rtClassName="text-ink-black/60" showPhonetic={zhuyinSettings.stage} />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {worlds.map(worldNum => {
          const bookName = worldBooks.get(worldNum) || "未知篇章";
          const worldColors = ['bg-splat-pink', 'bg-splat-green', 'bg-splat-cyan', 'bg-splat-yellow', 'bg-splat-purple'];
          const colorClass = worldColors[(worldNum - 1) % worldColors.length];
          
          // Check if world is unlocked (at least one lesson in previous world completed)
          // Open all worlds
          const isUnlocked = true;

          return (
            <button
              key={worldNum}
              disabled={!isUnlocked}
              onClick={() => {
                setCurrentWorld(worldNum);
                setViewState('map');
              }}
              className={`group relative h-48 md:h-64 border-8 border-ink-black transition-all transform hover:-translate-y-2 ${
                isUnlocked ? `${colorClass} brutal-shadow cursor-pointer` : 'bg-gray-500 grayscale cursor-not-allowed'
              }`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <span className="font-display text-2xl md:text-4xl text-ink-black mb-2 opacity-50">WORLD {worldNum}</span>
                <h2 className="text-2xl md:text-4xl font-bold text-ink-black leading-tight drop-shadow-sm">
                  <PhoneticText text={bookName} rtClassName="text-ink-black/60" showPhonetic={zhuyinSettings.stage} />
                </h2>
                {!isUnlocked && (
                  <div className="mt-4 bg-ink-black/20 p-2 rounded-full">
                    <Lock className="w-8 h-8 text-ink-black" />
                  </div>
                )}
              </div>
              
              {/* Decorative splat effect on hover */}
              {isUnlocked && (
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white border-4 border-ink-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-6 h-6 text-ink-black fill-current" />
                </div>
              )}
            </button>
          );
        })}
      </main>
      
      <footer className="max-w-6xl mx-auto mt-20 text-center text-white/50 font-display">
        <p>2026 BERK STUDIO 經典大作戰 CLASSICS SPLAT OPERATION-Concept by Rex CHU <a href="mailto:glitch.remover_1i@icloud.com" className="underline hover:text-splat-pink transition-colors">聯絡信箱</a></p>
      </footer>
    </div>
  );
}

export default App;

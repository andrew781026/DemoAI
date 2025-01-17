'use client'

import feature from '@/assets/feature.png';
import heroSection from '@/assets/hero-section.png';
import hasGFarm from '@/assets/has-g-farm.png';
import { useEffect } from 'react';

// @ts-nocheck
export default function Home() {

  const info = [
    {
      title: 'Hero-section-marquee',
      codePenId: 'NPKMwmY',
      image: heroSection,
    },
    {
      title: 'horizontal-parallax',
      codePenId: 'qEWYVeO',
      image: hasGFarm,
    },
    {
      title: 'Feature C',
      codePenId: 'RNbJwVN',
      image: feature,
    },
    {
      title: 'Feature D - scroll',
      codePenId: 'dPbeZrG',
      image: feature,
    },
  ];

  useEffect(() => {

    const targetElement = document.getElementById(window.location.hash.substring(1));
    targetElement?.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling animation
      block: 'start', // Align to the top of the viewport
    });

  },[]);

  return (
    <div className="max-h-screen flex flex-col">
      <main
        className="snap-mandatory snap-y overflow-y-auto flex-1 w-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="snap-start flex justify-center items-center w-full min-h-screen">
          <span className="text-3xl">👋 Hi Welcome</span>
        </div>
        <div className="snap-start flex justify-center items-center w-full min-h-screen">
          <span className="text-3xl">🏀Here is First Animate Demo🏀</span>
        </div>
        {
          info.map((item, index) => (
            <>
              <div key={`img-${index}`}
                   className="snap-start w-full flex min-h-screen max-h-screen justify-center items-center">
                <img className="m-auto" style={{ maxHeight: '80vh' }} src={item.image.src} />
              </div>
              <div key={`codepen-${index}`}
                   className="w-[80vw] gap-2 snap-start min-h-screen flex flex-col justify-center mx-auto">
                <a href={`#${item.title}`}>
                  <h4 className="text-3xl font-bold" id={item.title}>{item.title}</h4>
                </a>
                <iframe height="500"
                        style={{ width: '100%' }}
                        scrolling="no"
                        title={item.title}
                        src={`https://codepen.io/andrew781026/embed/${item.codePenId}?default-tab=result&editable=true`}
                        frameBorder="no"
                        loading="lazy">
                  See the Pen <a href={`https://codepen.io/andrew781026/pen/${item.codePenId}`}>
                  {item.title}</a> by 王澍 (<a href="https://codepen.io/andrew781026">@andrew781026</a>)
                  on <a href="https://codepen.io">CodePen</a>.
                </iframe>
              </div>
            </>
          ))
        }
        <div className="snap-start flex justify-center items-center w-full min-h-screen">
          <div className="text-3xl flex flex-col gap-2 items-center">
            <span>特別感謝 </span>
            <span>🌲Jenet🌲</span>
          </div>
        </div>

        <div className="snap-start flex justify-center items-center w-full min-h-screen">
          <span className="text-3xl">❤️❤️ Thanks Your Listening ❤️❤️</span>
        </div>

        <div className="snap-start flex justify-center items-center w-full min-h-screen">
          <span className="text-3xl">額外提問...</span>
        </div>

        <div className="snap-start flex justify-center items-center w-full min-h-screen">
          <div className="flex flex-col gap-2 items-center">
            <span className="text-3xl font-bold mb-14">網站績效分析</span>
            <a target="_blank" className="text-blue-600 underline hover:text-blue-400 visited:text-purple-500"
               href="https://clarity.microsoft.com/google-analytics">
              MS Clarity
            </a>
            <a target="_blank" className="text-blue-600 underline hover:text-blue-400 visited:text-purple-500"
               href="https://developers.google.com/analytics?hl=zh-tw">
              Google Analytics
            </a>
          </div>
        </div>


      </main>
    </div>
  );
}

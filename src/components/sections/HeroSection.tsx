'use client'

import React from "react";
import Image from "next/image";

const dummyImages = [
  "/globe.svg",
  "/next.svg",
  "/vercel.svg",
  "/window.svg",
  "/file.svg",
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white rounded-3xl shadow-lg w-full max-w-md mx-auto overflow-hidden min-h-[600px] flex flex-col justify-between p-4 my-8">
      {/* 画像グリッド */}
      <div className="absolute inset-0 z-0 flex flex-col justify-between pointer-events-none">
        <div className="grid grid-cols-2 grid-rows-3 gap-2 h-full">
          {dummyImages.map((src, i) => (
            <div
              key={i}
              className="relative w-full h-32 overflow-hidden rounded-xl"
              style={{ clipPath: i === 0 ? 'polygon(0 0,100% 0,100% 100%,0 80%)' : undefined }}
            >
              <Image
                src={src}
                alt="dummy"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {/* テキスト */}
      <div className="relative z-10 flex flex-col items-end justify-center h-full pr-4 pt-8">
        <div className="bg-white/80 rounded-xl p-4 text-right">
          <div className="text-xs text-gray-500 mb-1">コールマン</div>
          <div className="font-bold text-lg leading-tight mb-2">2022年の新製品</div>
          <div className="text-sm">少人数キャンプに<br />最適なコンパクトギア</div>
        </div>
      </div>
      {/* 左下ボタン */}
      <button className="absolute left-4 bottom-4 z-20 bg-white rounded-2xl px-6 py-3 shadow flex items-center gap-2 text-lg font-semibold">
        <span className="text-xl">↗</span> サイトにアクセス
      </button>
      {/* 右下アイコンボタン2つ */}
      <div className="absolute right-4 bottom-4 z-20 flex flex-col gap-2">
        <button className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow text-xl">⤢</button>
        <button className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow text-xl">⟳</button>
      </div>
    </section>
  );
};

export default HeroSection;
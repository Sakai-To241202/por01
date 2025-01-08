"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // 4x4のグリッドを作成
  const pieces = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    row: Math.floor(i / 4),
    col: i % 4,
  }));

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-sky-900">
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
        <AnimatePresence>
          {isLoaded &&
            pieces.map((piece) => (
              <motion.div
                key={piece.id}
                className="relative overflow-hidden"
                initial={{
                  opacity: 0,
                  y: 100,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 1.2,
                  delay: piece.row * 0.1 + piece.col * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/sky01.svg')`,
                    backgroundPosition: `${-piece.col * 100}% ${-piece.row * 100}%`,
                    filter: isLoaded ? "none" : "blur(10px)",
                    transition: "filter 1.5s ease-out",
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    delay: piece.row * 0.1 + piece.col * 0.1 + 0.5,
                  }}
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* 上から下にボタンのアイコンが押されるアニメーション */}
      <motion.div
        className="absolute bottom-32 left-1/3 transform flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [10, 20, 10] }} // 上下に動くアニメーション
        transition={{
          duration: 2, // 点滅速度をゆっくりに調整
          delay: 2.5, // ロゴ表示タイミングに合わせる
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-12 h-12 flex justify-center items-center bg-white rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }} // ホバー時に少し大きくなる
        >
          <motion.div
            className="w-6 h-6 border-t-2 border-l-2 border-white rotate-45" // 上から下に矢印が動くように
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1, // 上下の動きをゆっくりに
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        {/* 「→」の矢印追加 */}
        <motion.div
          className="mt-2 text-white text-2xl"
          animate={{ x: [0, 10, 0] }} // 矢印を右左に動かす
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          →
        </motion.div>
      </motion.div>

      {/* ロゴ */}
      <a href="https://asase.sakura.ne.jp/" className="cursor-pointer">
        <motion.img
          src="/logo.svg"
          alt="Logo"
          className="absolute bottom-10 left-1/3 transform w-1/2 translate-x-[5vw]" // ロゴを右に5vw移動
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            delay: 2.5, // すべてのグリッドアニメーションが完了した後
            ease: [0.23, 1, 0.32, 1],
          }}
        />
      </a>
    </div>
  );
}

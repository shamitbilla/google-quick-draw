"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center py-16">
        <Image src={"/images/logo.png"} height={500} width={500} alt="hie" />
        <div className="text-4xl handwriting mb-4">
          Can a neural network learn to recognize doodling?
        </div>
        <div className="text-xl handwriting">
          Help teach it by adding your drawings to the world’s largest doodling data set, shared publicly to help with machine learning research.
        </div>

        <div className="py-16">
          <button type="button" className="text-white handwriting bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-2xl px-11 py-2.5">Let's Draw</button>
        </div>
      </div>
    </>
  );
}

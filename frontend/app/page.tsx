"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center py-16">
        <Image src={"/images/logo.png"} height={500} width={500} alt="hie" className="max-w-2/3 h-auto"/>
        
        <div className="text-center">
          <div className="text-2xl handwriting mb-4 md:text-4xl">
            Can a neural network learn to recognize doodling?
          </div>
        </div>
        <div className="text-xl handwriting">
          Inspired by Google, made by Shamit.
        </div>

        <div className="py-16">
          <button type="button" className="text-white handwriting bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-2xl px-11 py-2.5" onClick={()=>{router.push("/game");}}>Let&rsquo;s Draw</button>
        </div>
      </div>
    </>
  );
}

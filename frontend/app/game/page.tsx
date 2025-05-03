"use client";

import Image from "next/image";
// import { useState } from "react"; for future use

export default function Home() {

    // const [time, _setTime] = useState(18)
    return (
        <>
        <div>
            <div className="bg-yellow-300 py-5 text-gray-600 border border-black">
                <div className="px-4 flex justify-between items-center">
                    <div className="text-lg font-serif">
                    Draw: lion
                    </div>
                    <div className="flex justify-center items-center text-xl text-gray-900 font-bold pr-4">
                        00:{'00'}
                    </div>
                    <div className="flex gap-2 pt-3">
                        
                        <button className="px-2 py-0.5 mb-4 border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                            <Image src={"/images/eraser.png"} height={20} width={20} alt="Skip"/>
                        </button>
                        
                        <button className="px-2 py-0.5 mb-4 border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                            <Image src={"/images/skip.png"} height={20} width={20} alt="Erase"/>
                        </button>
                        
                        <button className="px-2 py-0.5 mb-4 border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                            X
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {

    const router = useRouter();

    const [animationDone, setAnimationDone] = useState(false);

    useEffect(() => {
        // After the page loads, the yellow screen will slide up
        const timer = setTimeout(() => {
        setAnimationDone(true);
        }, 1000); // delay the visibility change

        return () => clearTimeout(timer); // Clean up timeout
    }, []);

    return (
        <>
            <div>
                <div className={`fixed top-0 left-0 w-full h-full bg-yellow-300 border border-black transition-transform duration-1000 ${animationDone ? "translate-y-[-100%]" : "translate-y-0"}`}>
                    <div className="flex flex-col items-center justify-center h-screen text-white text-6xl font-bold handwriting gap-4">
                        <div>Can you draw</div>
                        <div className="text-7xl">a lion</div>
                        <div className="text-6xl">in 20 seconds??</div>
                    </div>
                </div>
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
                            
                                <button className="px-2 py-0.5 mb-4 border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
                                onClick={()=>{router.push('/')}}>
                                X
                            </button>
                        </div>
                    </div>
                </div>
        </div>
        </>
    );
}

"use client";
import { ReactElement, useEffect, useState } from "react";

interface PropsType {
  icon: ReactElement;
  title: string;
  programmer: string;
}

export default function TechCard(props: PropsType) {
  const [colors, setColors] = useState("#939393, #9D9D9D");
  const [deg, setDeg] = useState("135deg");

  useEffect(() => {
    let colorDeg = 135;
    setInterval(() => {
      colorDeg += 4.5;
      setDeg(`${colorDeg}deg`);
    }, 200);
  }, []);

  const mouseEntered = () => {
    setColors("#37373710 0%, #63636330 30%, #BCDEFF60 65%, #3298FB 100%");
  };

  const mouseLeaved = () => {
    setColors("#939393, #9D9D9D");
  };

  return (
    <div
      onMouseEnter={mouseEntered}
      onMouseLeave={mouseLeaved}
      className="relative"
    >
      <div
        className="absolute left-0 top-0 z-[1] h-full w-full rounded-xl !transition-all"
        style={{
          background: `linear-gradient(${deg}, ${colors})`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "2px",
        }}
      />
      <div className="flex flex-col items-center gap-16 rounded-xl bg-neutral-950 bg-opacity-50 p-10 pb-20 backdrop-blur">
        <div className="relative">
          <div className="rounded-xl border border-white bg-neutral-800 bg-opacity-40 p-4 backdrop-blur-3xl">
            {props.icon}
          </div>
          <span className="absolute -bottom-3 -left-3 -z-[1] block aspect-square h-3/4 w-3/4 rounded-lg bg-gradient-to-tr from-[#F3F3F3] to-[#F3F3F300]" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-xl font-semibold text-white">{props.title}</div>
          <div className="text-lg text-neutral-400">{props.programmer}</div>
        </div>
        <span className="absolute bottom-3 left-1/2 h-1.5 w-12 -translate-x-1/2 rounded-full bg-white" />
      </div>
    </div>
  );
}

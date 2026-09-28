import React from "react";
import Image from "next/image";
import { HOME } from "@/constants";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="relative w-[298px] xl:w-[420px]">
        {/* accent glow behind card */}
        <div className="absolute -inset-4 rounded-2xl bg-accent/10 blur-2xl pointer-events-none" />

        {/* card */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#232329] p-4 xl:p-5 shadow-[0_0_40px_rgba(0,255,153,0.08)]">
          {/* accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

          {/* image area */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
            <Image
              fill
              priority
              src="/assets/real_image.png"
              quality={100}
              alt={HOME.name}
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* corner accent */}
        <div className="absolute -bottom-2 -right-2 w-16 h-16 border-r-2 border-b-2 border-accent/50 rounded-br-2xl pointer-events-none" />
      </div>
    </div>
  );
};

export default Photo;

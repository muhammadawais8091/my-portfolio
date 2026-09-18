"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const ExperienceAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={`${item.company}-${item.duration}`}
            className={cn(
              "rounded-xl bg-[#232329] border border-transparent overflow-hidden transition-colors duration-300",
              isOpen && "border-accent/40"
            )}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggleItem(index)}
              className="w-full text-left py-6 px-6 sm:px-8 flex items-start justify-between gap-4 group"
            >
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-accent text-sm">{item.duration}</span>
                <h3 className="text-xl font-semibold leading-snug group-hover:text-accent transition-colors duration-300">
                  {item.position}
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="w-[6px] h-[6px] shrink-0 rounded-full bg-accent" />
                  <p className="text-white/60 text-sm sm:text-base">
                    {item.company}
                  </p>
                </div>
              </div>

              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "mt-1 shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-white/70 group-hover:text-accent group-hover:bg-accent/10 transition-colors duration-300",
                  isOpen && "text-accent bg-accent/10"
                )}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && item.responsibilities?.length > 0 && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.28, ease: "easeOut" },
                  }}
                  className="overflow-hidden"
                >
                  <ul className="px-6 sm:px-8 pb-7 flex flex-col gap-3 border-t border-white/5 pt-5">
                    {item.responsibilities.map((responsibility, rIndex) => (
                      <motion.li
                        key={rIndex}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.05 + rIndex * 0.04,
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                        className="flex gap-3 text-left text-white/70 text-sm leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceAccordion;

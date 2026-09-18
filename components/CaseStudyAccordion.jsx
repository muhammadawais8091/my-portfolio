"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const CaseStudySection = ({ section }) => {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-lg font-semibold text-accent">{section.heading}</h4>

      {section.paragraphs?.map((paragraph, index) => (
        <p key={`p-${index}`} className="text-white/70 text-sm leading-relaxed">
          {paragraph}
        </p>
      ))}

      {section.quote && (
        <blockquote className="border-l-2 border-accent pl-4 text-white/80 text-sm leading-relaxed italic">
          {section.quote}
        </blockquote>
      )}

      {section.highlight && (
        <p className="text-sm font-medium text-white bg-white/5 rounded-lg px-4 py-3 leading-relaxed">
          {section.highlight}
        </p>
      )}

      {section.diagrams?.map((diagram, index) => (
        <div key={`d-${index}`} className="flex flex-col gap-2">
          {diagram.label && (
            <span className="text-xs uppercase tracking-wider text-accent">
              {diagram.label}
            </span>
          )}
          <pre className="overflow-x-auto rounded-lg bg-black/30 border border-white/5 px-4 py-3 text-xs sm:text-sm text-white/70 leading-relaxed font-mono whitespace-pre">
            {diagram.content}
          </pre>
        </div>
      ))}

      {section.bullets?.length > 0 && (
        <ul className="flex flex-col gap-2.5 pl-1">
          {section.bullets.map((bullet, index) => (
            <li
              key={`b-${index}`}
              className="flex gap-3 text-white/70 text-sm leading-relaxed"
            >
              <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-accent" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {section.paragraphsAfter?.map((paragraph, index) => (
        <p
          key={`pa-${index}`}
          className="text-white/70 text-sm leading-relaxed"
        >
          {paragraph}
        </p>
      ))}

      {section.closing && (
        <p className="text-white/70 text-sm leading-relaxed">{section.closing}</p>
      )}
    </div>
  );
};

const CaseStudyAccordion = ({ items }) => {
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
            key={item.id}
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
              <div className="flex flex-col gap-2 min-w-0">
                <h3 className="text-xl font-semibold leading-snug group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/60">
                  <span>
                    <span className="text-white/40">Role:</span> {item.role}
                  </span>
                  <span>
                    <span className="text-white/40">Product:</span>{" "}
                    {item.product}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {item.stack.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs text-accent bg-accent/10 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
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
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.28, ease: "easeOut" },
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 sm:px-8 pb-8 flex flex-col gap-7 border-t border-white/5 pt-6">
                    {item.sections.map((section, sIndex) => (
                      <motion.div
                        key={section.heading}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.04 + sIndex * 0.03,
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                      >
                        <CaseStudySection section={section} />
                      </motion.div>
                    ))}

                    <div className="pt-2 border-t border-white/5">
                      <p className="text-xs uppercase tracking-wider text-white/40 mb-3">
                        Technologies
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {item.stack.map((tech) => (
                          <li
                            key={`tech-${tech}`}
                            className="text-sm text-accent"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default CaseStudyAccordion;

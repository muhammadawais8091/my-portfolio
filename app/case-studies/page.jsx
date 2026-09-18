"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import CaseStudyAccordion from "@/components/CaseStudyAccordion";
import { CASE_STUDIES } from "@/constants";

const CaseStudies = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] text-center xl:text-left max-w-4xl mx-auto xl:mx-0">
          <h2 className="text-4xl font-bold">{CASE_STUDIES.title}</h2>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
            {CASE_STUDIES.description}
          </p>

          <ScrollArea className="h-[65vh]">
            <CaseStudyAccordion items={CASE_STUDIES.items} />
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

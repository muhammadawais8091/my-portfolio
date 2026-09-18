"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import {
  CONTACT_FORM,
  CONTACT_INFO,
  CONTACT_SOCIALS,
} from "@/constants";
import { CONTACT_ICONS } from "@/constants/icons";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${CONTACT_FORM.emailTo}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] xl:gap-[50px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-8 md:p-10 bg-[#27272c] rounded-xl border border-white/5 shadow-[0_0_40px_rgba(0,255,153,0.06)]"
            >
              <div className="space-y-2">
                <h3 className="text-3xl md:text-4xl text-accent font-semibold">
                  {CONTACT_FORM.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {CONTACT_FORM.description}
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className={CONTACT_FORM.fieldStyles}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className={CONTACT_FORM.fieldStyles}
                />
                <Textarea
                  name="message"
                  placeholder="Type your message here..."
                  required
                  className={`${CONTACT_FORM.fieldStyles} min-h-[180px] py-4 resize-none`}
                />
              </div>

              <Button type="submit" className="max-w-[200px]">
                {CONTACT_FORM.submitLabel}
              </Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <div className="w-full max-w-[420px] space-y-8">
              <div>
                <p className="text-accent text-sm uppercase tracking-[3px] mb-2">
                  {CONTACT_FORM.rightEyebrow}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
                  {CONTACT_FORM.rightTitle}
                </h3>
                <p className="text-white/60 mt-3">
                  {CONTACT_FORM.rightDescription}
                </p>
              </div>

              <ul className="flex flex-col gap-6">
                {CONTACT_INFO.map((item, index) => {
                  const Icon = CONTACT_ICONS[item.icon];
                  const content = (
                    <div className="flex items-center gap-5 group">
                      <div className="w-[56px] h-[56px] rounded-md bg-[#27272c] text-accent flex items-center justify-center text-xl border border-white/5 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(0,255,153,0.15)] transition-all duration-300">
                        {Icon ? <Icon /> : null}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/50 text-sm">{item.title}</p>
                        <p className="text-base md:text-lg truncate group-hover:text-accent transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );

                  return (
                    <li key={index}>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="block"
                          {...(item.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {content}
                        </Link>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="pt-2 border-t border-white/10">
                <p className="text-white/50 text-sm mb-4">
                  {CONTACT_FORM.socialLabel}
                </p>
                <div className="flex gap-4">
                  {CONTACT_SOCIALS.map((social, index) => {
                    const Icon = CONTACT_ICONS[social.icon];

                    return (
                      <Link
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-11 h-11 rounded-full border border-accent/40 text-accent flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
                      >
                        {Icon ? <Icon /> : null}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

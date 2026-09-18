import Link from "next/link";
import React from "react";
import { SOCIAL_LINKS } from "@/constants";
import { SOCIAL_ICONS } from "@/constants/icons";

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {SOCIAL_LINKS.map((item, index) => {
        const Icon = SOCIAL_ICONS[item.name];

        return (
          <Link
            key={index}
            className={iconStyles}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            {Icon ? <Icon /> : null}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

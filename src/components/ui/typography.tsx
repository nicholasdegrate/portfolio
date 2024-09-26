import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";
import { cn } from "../../utils";

export const typography = cva("font-montserrat", {
  variants: {
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
    size: {
      h1: "text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-[72px] lg:leading-[78px] max-w-full",
      h2: "text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-[50px] lg:leading-[59px] max-w-full",
      h3: "text-2xl md:text-[35px] lg:text-[45px] leading-tight md:leading-[45px] lg:leading-[55px] max-w-full",
      h4: "text-xl md:text-[30px] lg:text-[40px] leading-tight md:leading-[40px] lg:leading-[49px] max-w-full",
      h5: "text-lg md:text-xl lg:text-2xl leading-tight md:leading-[32px] lg:leading-[39px] max-w-full",
      h6: "text-base md:text-lg lg:text-xl leading-tight md:leading-[24px] lg:leading-[29px] max-w-full",
      normal1:
        "text-base md:text-lg lg:text-xl leading-tight md:leading-[24px] lg:leading-[26px] max-w-full",
      normal2:
        "text-sm md:text-base lg:text-lg leading-tight md:leading-[22px] lg:leading-[24px] max-w-full",
      normal3:
        "text-xs md:text-sm lg:text-base leading-tight md:leading-[20px] lg:leading-[22px] max-w-full",
    },
  },
  defaultVariants: {
    weight: "regular",
  },
});

type TypographyElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

type RefType = HTMLHeadingElement | HTMLParagraphElement;
type TypographyProps = VariantProps<typeof typography> &
  React.HTMLAttributes<RefType> & {
    as?: TypographyElement;
    children: React.ReactNode;
    className?: string;
  };

const Typography = forwardRef<RefType, TypographyProps>(
  ({ as: Tag = "p", weight, size, children, className, ...props }, ref) => {
    return (
      <Tag
        {...props}
        ref={ref}
        className={cn(typography({ weight, size }), className)}
      >
        {children}
      </Tag>
    );
  },
);

Typography.displayName = "Typography";
export { Typography };

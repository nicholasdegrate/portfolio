import { Link } from "react-router-dom";
import ExternalLink from "~/assets/external-link.svg?react";
import LightBulb from "~/assets/light-bulb.svg?react";
import Lines2 from "~/assets/lines-2.svg?react";
import Lines from "~/assets/lines.svg?react";
import Linkedin from "~/assets/linkedin.svg?react";
import Mail from "~/assets/mail.svg?react";

import { Typography } from "~/components/ui/typography";
import { honorableMentionList, mainProjects, skillList } from "~/constant";
import { useMediaQuery } from "~/hooks/use-media-query";
import { cn } from "~/utils";

export function Component() {
  const isDesktop = useMediaQuery("min-width: 768px)");

  return (
    <>
      <section className="h-[100dvh] md:h-[100lvh] flex flex-col px-10 py-6">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <Lines className="absolute scale-150 h-full w-full -top-1/4 md:-top-12 md:-right-1/4 opacity-5" />
        </div>
        <div className="space-y-[15px] h-full mt-44">
          <Typography
            as="p"
            size="normal3"
            weight="regular"
            className="text-semi-white"
            role="text"
          >
            Hi! I am
          </Typography>
          <Typography
            as="h1"
            size="h1"
            weight="bold"
            className="text-white"
            role="heading"
            aria-level={1}
          >
            Nicholas Degrate
          </Typography>
          <Typography
            as="h5"
            size="h5"
            weight="bold"
            className="text-bubble-gum"
            role="heading"
            aria-level={2}
          >
            Software Engineer
          </Typography>
          <button
          className="py-4 px-[70px] rounded-full bg-sky-blue"
          type="button"
        >
          <Typography size="normal3" weight="medium" className="text-dark-blue">
            Contact me!
          </Typography>
        </button>
        </div>
      </section>
      {mainProjects.map((p, idx) => (
        <section
          key={idx}
          className={cn(
            "md:h-[640.06px] md:grid md:grid-cols-2 overflow-hidden",
            p.bgColor,
          )}
        >
          <aside
            className={cn(
              "w-full h-full relative",
              idx % 2 !== 0 && "md:order-last",
            )}
          >
            <img
              src={isDesktop ? p.img.desktop : p.img.mobile}
              className="h-full w-full md:object-cover"
              alt={`${p.title} Image`}
            />
          </aside>
          <aside className="px-6 py-10 flex flex-col gap-8 m-auto max-w-[485px] w-full">
            <Typography
              as="h1"
              size="h3"
              weight="bold"
              className="text-sky-blue"
            >
              {p.title}
            </Typography>
            <Typography
              as="p"
              size="normal3"
              weight="regular"
              className="text-white whitespace-pre-line"
            >
              {p.desc}
            </Typography>
            <div className="flex flex-wrap gap-3">
              {p.badges.map((title) => (
                <div
                  key={title}
                  className="py-2 px-[29px] border border-semi-white/10 rounded-full w-fit"
                >
                  <Typography
                    size="normal3"
                    weight="medium"
                    className="text-sky-blue"
                  >
                    {title}
                  </Typography>
                </div>
              ))}
            </div>
            <Link to={p.linkTo}
              className="py-4 px-[70px] rounded-full bg-mustard w-fit flex gap-4 items-center"
              type="button"
            >
              <ExternalLink />
              <Typography
                size="normal3"
                weight="medium"
                className="text-dark-blue"
              >
                View Project
              </Typography>
            </Link>
          </aside>
        </section>
      ))}
      <section className="relative py-[100px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <Lines2 className="absolute scale-150 h-full w-full top-0 left-0 opacity-5" />
        </div>
        <Typography
          as="h4"
          size="h4"
          weight="bold"
          className="text-bubble-gum pb-[100px] text-center"
        >
          Honorable Mention
        </Typography>
        <div className="flex gap-9 justify-evenly flex-wrap p-2">
          {honorableMentionList.map((h) => (
            <div
              key={h.heading}
              className="py-11 px-12 bg-black max-w-[434px] space-y-5"
              id="card"
            >
              <Typography
                as="h6"
                size="h6"
                weight="bold"
                className="text-bubble-gum"
              >
                {h.heading}
              </Typography>
              <Typography
                size="normal2"
                weight="regular"
                className="text-light-blue"
              >
                {h.body}
              </Typography>
            </div>
          ))}
        </div>
      </section>
      <section className="px-10 py-6">
        <div className="flex gap-6 items-center pb-10">
          <LightBulb />
          <Typography
            as="h4"
            size="h4"
            weight="bold"
            className="text-bubble-gum"
          >
            Skills
          </Typography>
        </div>
        <div className="space-y-4">
          {skillList.map((s) => (
            <div className="flex flex-col gap-2 pb-5">
              <Typography
                as="h5"
                size="h5"
                weight="bold"
                className="text-bubble-gum"
              >
                {s.title}
              </Typography>
              <div className="flex flex-wrap gap-5">
                {s.list.map((n) => (
                  <div
                    key={n}
                    className="py-2 px-[29px] border border-semi-white/10 rounded-full w-fit"
                  >
                    <Typography
                      size="normal3"
                      weight="medium"
                      className="text-sky-blue"
                    >
                      {n}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="h-56 flex flex-col justify-end pb-10 px-10">
        <Typography size="h6" weight="bold" className="text-bubble-gum pb-4">
          Let's connect!
        </Typography>
        <div className="space-x-2 space-y-2">
        <Link to="mailTo:nicholasdegratese@gmail.com" className="flex gap-2">
          <Mail />
        <Typography size="normal3" weight="medium" className="text-light-blue">
          nicholasdegratese@gmail.com
        </Typography>
        </Link>
        <Link to="https://www.linkedin.com/in/nicholas-d-64193614b/" className="flex gap-2">
          <Linkedin />
        <Typography size="normal3" weight="medium" className="text-light-blue">
          Nicholas Degrate
        </Typography>
        </Link>
        </div>
      </footer>
    </>
  );
}

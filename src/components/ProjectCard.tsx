import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Accordion } from "./Accordion";
import type { Project } from "../types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
    const hasLink = Boolean(project.link);
    const hasDetails = Boolean(project.details);
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="mb-28"
    >
      <div className="flex flex-col gap-8">
        {/* Top Meta */}
        <div className="flex items-center gap-3 text-neutral-400">
          <span className="text-xs uppercase tracking-[0.22em] md:text-[13px]">
            {project.number.toString().padStart(2, "0")} —{" "}
            {project.category}
          </span>
        </div>

        {/* Main Image */}
        <div className="w-full overflow-hidden rounded-[2rem]">
          <img
            src={project.imageId}
            alt={project.title}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Title */}
        <div className="max-w-4xl">
          <h4 className="text-[28px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#111]">
            {project.title}
          </h4>

          <p className="mt-5 text-[15px] leading-[1.9] text-neutral-600 md:text-[16px]">
            {project.description}
          </p>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full bg-[#f3f3f1] px-4 py-2 text-[13px] text-neutral-700"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Link */}
{(hasLink || hasDetails) && (
  <div className="flex flex-col items-start gap-3 pt-2">

    {hasLink && (
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-2 text-[15px] text-[#E85D2A] transition"
      >
        View Project

        <ExternalLink
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </a>
    )}

    {hasDetails && (
      <Accordion
        title="View Design Details +"
        summary=""
      >
        <div className="mt-8 flex flex-col gap-10">

          <div className="max-w-3xl">
            <h3 className="text-[16px] font-semibold text-[#111]">
              {project.details?.title}
            </h3>

            <p className="mt-4 text-[15px] leading-[1.9] text-neutral-500">
              {project.details?.description}
            </p>
          </div>

          {project.details?.imageId ? (
            <div className="overflow-hidden rounded-[1.8rem]">
              <img
                src={project.details.imageId}
                alt={project.details.title}
                className="w-full object-contain"
              />
            </div>
          ) : null}

          {project.details?.highlights?.length ? (
            <div className="grid gap-4 md:grid-cols-2">
              {project.details.highlights.map((item: string) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#f5f5f3] px-5 py-4 text-[14px] leading-7 text-neutral-600"
                >
                  {item}
                </div>
              ))}
            </div>
          ) : null}

        </div>
      </Accordion>
    )}

  </div>
)}

        </div>
    </motion.article>
  );
}

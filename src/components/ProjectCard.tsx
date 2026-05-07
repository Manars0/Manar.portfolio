import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Accordion } from './Accordion';
import type { Project } from '../types';

const imagePalettes: Record<string, string> = {
  tawafuq: 'radial-gradient(circle at top left, rgba(232,93,42,0.16), transparent 35%), linear-gradient(180deg, #FDF5F0 0%, #F7F7F5 100%)',
  post: 'radial-gradient(circle at top, rgba(232,93,42,0.12), transparent 30%), linear-gradient(180deg, #F5F1EC 0%, #EFEDE8 100%)',
  ms: 'radial-gradient(circle at center, rgba(220, 110, 65, 0.16), transparent 25%), linear-gradient(135deg, #F9F5F0 0%, #F3F1EE 100%)',
  ksu: 'radial-gradient(circle at top right, rgba(232,93,42,0.14), transparent 28%), linear-gradient(180deg, #FFF9F5 0%, #F5F3EF 100%)',
  skinCare: 'radial-gradient(circle at center, rgba(232,93,42,0.12), transparent 25%), linear-gradient(135deg, #FEFBF8 0%, #F7F3EE 100%)',
  SmartCommunity: 'radial-gradient(circle at top left, rgba(232,93,42,0.14), transparent 30%), linear-gradient(160deg, #F8F7F4 0%, #F2F0EC 100%)',
  download: 'radial-gradient(circle at top, rgba(232,93,42,0.12), transparent 28%), linear-gradient(180deg, #F9F7F3 0%, #EEECE9 100%)',
  ds: 'radial-gradient(circle at top right, rgba(232,93,42,0.12), transparent 30%), linear-gradient(135deg, #F9F5F0 0%, #EFEAE4 100%)',
  ksuds: 'radial-gradient(circle at top left, rgba(232,93,42,0.12), transparent 28%), linear-gradient(180deg, #FCF6F1 0%, #F4EFE9 100%)',
  sc: 'radial-gradient(circle at center, rgba(232,93,42,0.1), transparent 26%), linear-gradient(160deg, #FFF7F2 0%, #F6F2ED 100%)',
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const reducedMotion = useReducedMotion();
  const background = imagePalettes[project.imageId] ?? imagePalettes.tawafuq;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
      }}
      className="group mb-16 overflow-hidden rounded-[2.3rem] border border-border bg-white/90 shadow-soft"
    >
      <div className="flex flex-col gap-8 p-6 sm:p-8 xl:p-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="rounded-full border border-border bg-background/90 px-4 py-2 text-xs uppercase tracking-[0.26em] text-muted">
            {project.category}
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">
            {project.number.toString().padStart(2, '0')}
          </span>
        </div>

        <div className="rounded-[2rem] border border-border bg-background/90 overflow-hidden">
          <div
            style={{ backgroundImage: background }}
            className="relative aspect-[16/10] overflow-hidden bg-cover p-6 sm:p-8"
          >
            <div className="absolute inset-0 rounded-[1.8rem] bg-gradient-to-br from-white/20 via-white/10 to-transparent"></div>
            <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/60 bg-white/70 p-4 backdrop-blur-md">
              <p className="text-base font-semibold text-text">{project.title}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{project.description}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-border bg-background/95 px-4 py-2 text-sm text-muted transition group-hover:border-accent"
            >
              {tool}
            </span>
          ))}
        </div>

        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent transition hover:translate-x-1"
          >
            View Project <ExternalLink size={16} />
          </a>
        ) : (
          <button
            type="button"
            className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent transition hover:translate-x-1"
          >
            View Project <ArrowRight size={16} />
          </button>
        )}

        {project.details ? (
          <Accordion title="Design Details" summary={project.details.description}>
            <div className="space-y-5">
              <div className="space-y-3">
                <h3 className="text-base font-semibold text-text">{project.details.title}</h3>
                <p className="text-sm leading-7 text-muted">{project.details.description}</p>
              </div>

              {project.details.imageId ? (
                <div
                  className="rounded-[1.8rem] border border-border bg-background/90 p-5"
                  style={{
                    backgroundImage: imagePalettes[project.details.imageId] ?? imagePalettes.tawafuq,
                    backgroundSize: 'cover',
                  }}
                >
                  <div className="min-h-[180px] rounded-[1.4rem] border border-white/60 bg-white/70 shadow-soft backdrop-blur-md" />
                </div>
              ) : null}

              <div className="grid gap-3 sm:grid-cols-2">
                {project.details?.highlights?.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-border bg-white/85 p-4 text-sm text-muted shadow-sm"
                  >
                    • {item}
                  </div>
                ))}
              </div>
            </div>
          </Accordion>
        ) : null}
      </div>
    </motion.article>
  );
}

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { Header } from './components/Header';
import { ProjectCard } from './components/ProjectCard';
import { Sidebar } from './components/Sidebar';
import { projects } from './data/projects';
import { profileBio, profileName, profileRole, } from "./data/profile";

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-10 xl:px-8 xl:py-14">
        <div className="grid gap-12 lg:grid-cols-[420px_1fr] lg:gap-14">
          <Sidebar />

          <section className="space-y-12">

            <div id="projects" className="space-y-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

          </section>
        </div>
      </main>
    </div>
  );
}

export default App;

"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import ProjectModal from './ProjectModal';
import projects from '@/app/data/projects';

interface ProjectLinks {
  github?: string;
  live?: string;
  demo?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  alt: string;
  technologies: string[];
  category: string;
  challenges?: string[];
  results?: string[];
  links?: ProjectLinks;
}

interface FeaturedProjectsProps {
  className?: string;
}

const FeaturedProjects = ({ className = '' }: FeaturedProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const router = useRouter();

  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <span className="text-primary font-accent text-sm">Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
            Projects That Make an Impact
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real-world solutions that combine technical excellence with measurable business results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-brand-lg transition-smooth cursor-pointer text-left"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <AppImage
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />

                <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-medium text-foreground">{project.category}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-headline font-semibold text-card-foreground mb-3 group-hover:text-primary transition-fast">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-surface text-text-secondary text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-smooth">
                  View Details
                  <Icon name="ArrowRightIcon" size={16} className="ml-1" />
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => router.push('/projects')}
            className="inline-flex items-center px-8 py-4 bg-surface text-foreground font-cta font-semibold text-base rounded-lg border border-border hover:bg-muted transition-smooth"
          >
            View All Projects
            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
          </button>
        </div>
      </div>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject || undefined}
      />
    </section>
  );
};

export default FeaturedProjects;

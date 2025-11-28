'use client';

import Modal from '@/components/ui/Modal';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProjectLinks {
  github?: string;
  live?: string;
  demo?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project?: {
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
  };
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <div className="space-y-6">
        {/* Project Image */}
        <div className="relative h-80 rounded-lg overflow-hidden">
          <AppImage
            src={project.image}
            alt={project.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white rounded-full">
            <span className="text-xs font-semibold">{project.category}</span>
          </div>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            {project.title}
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            {project.fullDescription || project.description}
          </p>
        </div>

        {/* Project Links */}
        {project.links && (
          <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                <Icon name="CodeBracketIcon" size={20} className="mr-2" />
                View on GitHub
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Icon name="ArrowTopRightOnSquareIcon" size={20} className="mr-2" />
                View Live Project
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-slate-200 text-slate-900 font-semibold rounded-lg hover:bg-slate-300 transition-colors"
              >
                <Icon name="PlayIcon" size={20} className="mr-2" />
                Watch Demo
              </a>
            )}
          </div>
        )}

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="pt-4 border-t border-slate-200">
            <h4 className="text-xl font-bold text-slate-900 mb-4">
              Challenges
            </h4>
            <ul className="space-y-3">
              {project.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Icon
                    name="CheckIcon"
                    size={20}
                    className="text-green-600 flex-shrink-0 mt-1"
                  />
                  <span className="text-slate-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Results */}
        {project.results && project.results.length > 0 && (
          <div className="pt-4 border-t border-slate-200">
            <h4 className="text-xl font-bold text-slate-900 mb-4">
              Results & Impact
            </h4>
            <ul className="space-y-3">
              {project.results.map((result, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Icon
                    name="StarIcon"
                    size={20}
                    className="text-amber-500 flex-shrink-0 mt-1"
                  />
                  <span className="text-slate-700">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="pt-4 border-t border-slate-200">
          <h4 className="text-xl font-bold text-slate-900 mb-4">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-semibold rounded-lg border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}

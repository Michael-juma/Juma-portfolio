'use client';

import { useState, useEffect } from 'react';
import SkillCategory from './SkillCategory';
import SkillFilter from './SkillFilter';
import SkillStats from './SkillStats';
import SkillSearch from './SkillSearch';
import SkillTimeline from './SkillTimeline';

interface Skill {
  name: string;
  proficiency: number;
  yearsOfExperience: number;
  projects: string[];
  icon: string;
}

interface SkillCategoryData {
  id: string;
  title: string;
  skills: Skill[];
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  technologies: string[];
}

export default function SkillsInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['frontend']);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const skillCategories: SkillCategoryData[] = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      skills: [
        {
          name: 'React.js',
          proficiency: 95,
          yearsOfExperience: 5,
          projects: ['E-commerce Platform', 'SaaS Dashboard', 'Portfolio Sites'],
          icon: '⚛️'
        },
        {
          name: 'Next.js',
          proficiency: 92,
          yearsOfExperience: 4,
          projects: ['Corporate Website', 'Blog Platform', 'Admin Panel'],
          icon: '▲'
        },
        {
          name: 'TypeScript',
          proficiency: 90,
          yearsOfExperience: 4,
          projects: ['Enterprise Apps', 'Type-safe APIs', 'Component Libraries'],
          icon: '📘'
        },
        {
          name: 'Tailwind CSS',
          proficiency: 93,
          yearsOfExperience: 3,
          projects: ['Design Systems', 'Responsive Layouts', 'UI Components'],
          icon: '🎨'
        },
        {
          name: 'JavaScript (ES6+)',
          proficiency: 94,
          yearsOfExperience: 5,
          projects: ['Interactive UIs', 'Data Visualization', 'Animation Libraries'],
          icon: '🟨'
        }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      skills: [
        {
          name: 'Python',
          proficiency: 88,
          yearsOfExperience: 4,
          projects: ['REST APIs', 'Data Processing', 'Automation Scripts'],
          icon: '🐍'
        },
        {
          name: 'Node.js',
          proficiency: 85,
          yearsOfExperience: 4,
          projects: ['API Servers', 'Real-time Apps', 'Microservices'],
          icon: '🟢'
        },
        {
          name: 'Django',
          proficiency: 82,
          yearsOfExperience: 3,
          projects: ['Web Applications', 'Admin Dashboards', 'CMS Systems'],
          icon: '🎸'
        },
        {
          name: 'PostgreSQL',
          proficiency: 80,
          yearsOfExperience: 4,
          projects: ['Database Design', 'Query Optimization', 'Data Migration'],
          icon: '🐘'
        },
        {
          name: 'MongoDB',
          proficiency: 78,
          yearsOfExperience: 3,
          projects: ['NoSQL Solutions', 'Document Storage', 'Real-time Data'],
          icon: '🍃'
        }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & DevOps',
      skills: [
        {
          name: 'Git & GitHub',
          proficiency: 90,
          yearsOfExperience: 5,
          projects: ['Version Control', 'CI/CD Pipelines', 'Code Reviews'],
          icon: '🔧'
        },
        {
          name: 'Docker',
          proficiency: 75,
          yearsOfExperience: 2,
          projects: ['Containerization', 'Development Environments', 'Deployment'],
          icon: '🐳'
        },
        {
          name: 'AWS',
          proficiency: 70,
          yearsOfExperience: 2,
          projects: ['Cloud Hosting', 'S3 Storage', 'Lambda Functions'],
          icon: '☁️'
        },
        {
          name: 'Vercel',
          proficiency: 85,
          yearsOfExperience: 3,
          projects: ['Next.js Deployment', 'Serverless Functions', 'Edge Computing'],
          icon: '▲'
        },
        {
          name: 'VS Code',
          proficiency: 92,
          yearsOfExperience: 5,
          projects: ['Development Setup', 'Extensions', 'Debugging'],
          icon: '💻'
        }
      ]
    },
    {
      id: 'soft',
      title: 'Soft Skills & Methodologies',
      skills: [
        {
          name: 'Agile/Scrum',
          proficiency: 85,
          yearsOfExperience: 4,
          projects: ['Sprint Planning', 'Daily Standups', 'Retrospectives'],
          icon: '🔄'
        },
        {
          name: 'Technical Writing',
          proficiency: 88,
          yearsOfExperience: 5,
          projects: ['Documentation', 'API Guides', 'Tutorials'],
          icon: '📝'
        },
        {
          name: 'Code Review',
          proficiency: 87,
          yearsOfExperience: 4,
          projects: ['Pull Requests', 'Best Practices', 'Mentoring'],
          icon: '👀'
        },
        {
          name: 'Problem Solving',
          proficiency: 90,
          yearsOfExperience: 5,
          projects: ['Debugging', 'Architecture Design', 'Optimization'],
          icon: '🧩'
        },
        {
          name: 'Team Collaboration',
          proficiency: 89,
          yearsOfExperience: 5,
          projects: ['Cross-functional Teams', 'Client Communication', 'Pair Programming'],
          icon: '🤝'
        }
      ]
    }
  ];

  const timelineEvents: TimelineEvent[] = [
    {
      year: '2025',
      title: 'Advanced Full-Stack Mastery',
      description: 'Deepened expertise in Next.js 14, TypeScript, and modern React patterns. Built production-grade applications with focus on performance and user experience.',
      technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'React Server Components']
    },
    {
      year: '2024',
      title: 'Cloud & DevOps Integration',
      description: 'Expanded into cloud infrastructure and DevOps practices. Implemented CI/CD pipelines and containerized applications for scalable deployment.',
      technologies: ['Docker', 'AWS', 'Vercel', 'GitHub Actions']
    },
    {
      year: '2023',
      title: 'Backend Development Focus',
      description: 'Strengthened backend skills with Python and Node.js. Built RESTful APIs and implemented database solutions for complex applications.',
      technologies: ['Python', 'Django', 'Node.js', 'PostgreSQL', 'MongoDB']
    },
    {
      year: '2022',
      title: 'Modern Frontend Frameworks',
      description: 'Transitioned to React ecosystem and modern JavaScript frameworks. Mastered component-based architecture and state management.',
      technologies: ['React', 'Next.js', 'Redux', 'JavaScript ES6+']
    },
    {
      year: '2021',
      title: 'Web Development Foundation',
      description: 'Started professional journey in web development. Built solid foundation in HTML, CSS, JavaScript, and responsive design principles.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
    }
  ];

  const toggleCategory = (categoryId: string) => {
    if (!isHydrated) return;
    
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredCategories = skillCategories.filter(category => {
    if (activeFilter === 'all') return true;
    return category.id === activeFilter;
  }).map(category => ({
    ...category,
    skills: category.skills.filter(skill =>
      searchQuery === '' ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.projects.some(project => project.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(category => category.skills.length > 0);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="w-full px-4 py-16 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="h-12 bg-surface rounded-lg w-64 mx-auto animate-pulse" />
              <div className="h-6 bg-surface rounded-lg w-96 mx-auto animate-pulse" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-32 bg-surface rounded-lg animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <SkillStats />

      <div className="space-y-6">
        <SkillSearch searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <SkillFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      </div>

      <div className="space-y-4">
        {filteredCategories.length > 0 ? (
          filteredCategories.map(category => (
            <SkillCategory
              key={category.id}
              title={category.title}
              skills={category.skills}
              isExpanded={expandedCategories.includes(category.id)}
              onToggle={() => toggleCategory(category.id)}
            />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-text-secondary text-lg">No skills found matching your search.</p>
          </div>
        )}
      </div>

      <div className="bg-card border border-border rounded-lg p-8 shadow-brand">
        <h2 className="text-2xl font-headline font-bold text-foreground mb-8 text-center">
          Learning Journey Timeline
        </h2>
        <SkillTimeline events={timelineEvents} />
      </div>
    </div>
  );
}
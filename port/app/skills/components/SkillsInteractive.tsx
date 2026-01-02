'use client';

import { useState, useEffect } from 'react';
import SkillCategory from './SkillCategory';
import SkillFilter from './SkillFilter';
import SkillStats from './SkillStats';
import SkillSearch from './SkillSearch';
import SkillTimeline from './SkillTimeline';

/* =======================
   Types
======================= */

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

/* =======================
   Component
======================= */

export default function SkillsInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    'frontend'
  ]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  /* =======================
     Skill Categories
  ======================= */

  const skillCategories: SkillCategoryData[] = [
  /* Frontend Development */
  {
    id: 'frontend',
    title: 'Frontend Development',
    skills: [
      {
        name: 'React.js',
        proficiency: 90,
        yearsOfExperience: 1,
        projects: [
          'Food Court Web Application',
          'SalesPilot Dashboard',
          'Personal Portfolio'
        ],
        icon: '⚛️'
      },
      {
        name: 'JavaScript (ES6+)',
        proficiency: 90,
        yearsOfExperience: 1,
        projects: [
          'Interactive Dashboards',
          'Frontend Business Logic',
          'Form Handling'
        ],
        icon: '🟨'
      },
      {
        name: 'HTML5 & CSS3',
        proficiency: 90,
        yearsOfExperience: 1,
        projects: [
          'Responsive Layouts',
          'UI Components',
          'Landing Pages'
        ],
        icon: '🌐'
      },
      {
        name: 'Tailwind CSS',
        proficiency: 85,
        yearsOfExperience: 1,
        projects: [
          'Design Systems',
          'Responsive UI',
          'Component Styling'
        ],
        icon: '🎨'
      }
    ]
  },

  /* Backend Development */
  {
    id: 'backend',
    title: 'Backend Development',
    skills: [
      {
        name: 'Python',
        proficiency: 85,
        yearsOfExperience: 1,
        projects: ['Flask APIs', 'Business Logic', 'Data Processing'],
        icon: '🐍'
      },
      {
        name: 'Flask',
        proficiency: 85,
        yearsOfExperience: 1,
        projects: [
          'RESTful APIs',
          'Authentication Systems',
          'CRUD Applications'
        ],
        icon: '🌶️'
      },
      {
        name: 'SQLAlchemy',
        proficiency: 80,
        yearsOfExperience: 1,
        projects: ['Relational Models', 'ORM Relationships', 'Database Migrations'],
        icon: '🗄️'
      },
      {
        name: 'REST APIs',
        proficiency: 85,
        yearsOfExperience: 1,
        projects: ['JWT Authentication', 'CRUD Endpoints', 'Role-Based Access'],
        icon: '🔗'
      }
    ]
  },

  /* Databases & Data */
  {
    id: 'database',
    title: 'Databases & Data',
    skills: [
      {
        name: 'PostgreSQL',
        proficiency: 80,
        yearsOfExperience: 1,
        projects: [
          'Food Court Database',
          'SalesPilot Data Models',
          'Relational Queries'
        ],
        icon: '🐘'
      },
      {
        name: 'SQLite',
        proficiency: 80,
        yearsOfExperience: 1,
        projects: ['Development Databases', 'Testing Environments'],
        icon: '📦'
      },
      {
        name: 'MongoDB',
        proficiency: 78,
        yearsOfExperience: 1,
        projects: ['NoSQL Solutions', 'Document Storage', 'Real-time Data'],
        icon: '🍃'
      }
    ]
  },

  /* Tools & DevOps */
  {
    id: 'tools',
    title: 'Tools & DevOps',
    skills: [
      {
        name: 'Git & GitHub',
        proficiency: 90,
        yearsOfExperience: 1,
        projects: ['Team Collaboration', 'Version Control', 'Pull Requests'],
        icon: '🔧'
      },
      {
        name: 'Docker',
        proficiency: 75,
        yearsOfExperience: 1,
        projects: ['Containerization', 'Development Environments', 'Deployment'],
        icon: '🐳'
      },
      {
        name: 'AWS',
        proficiency: 70,
        yearsOfExperience: 1,
        projects: ['Cloud Hosting', 'S3 Storage', 'Lambda Functions'],
        icon: '☁️'
      },
      {
        name: 'Vercel',
        proficiency: 85,
        yearsOfExperience: 1,
        projects: ['Next.js Deployment', 'Serverless Functions', 'Edge Computing'],
        icon: '▲'
      },
      {
        name: 'Postman',
        proficiency: 88,
        yearsOfExperience: 1,
        projects: ['API Testing', 'Request Automation', 'Environment Management'],
        icon: '📬'
      },
      {
        name: 'VS Code',
        proficiency: 92,
        yearsOfExperience: 1,
        projects: ['Development Setup', 'Extensions', 'Debugging'],
        icon: '💻'
      }
    ]
  },

  /* LLMs & AI */
  {
    id: 'ai',
    title: 'LLMs & AI Engineering',
    skills: [
      {
        name: 'Large Language Models (LLMs)',
        proficiency: 85,
        yearsOfExperience: 2,
        projects: ['AI Chatbots', 'Code Assistants', 'Knowledge-based Systems'],
        icon: '🤖'
      },
      {
        name: 'Prompt Engineering',
        proficiency: 88,
        yearsOfExperience: 2,
        projects: ['System Prompt Design', 'Few-shot Learning', 'Chain-of-Thought Prompting'],
        icon: '🧠'
      },
      {
        name: 'Retrieval Augmented Generation (RAG)',
        proficiency: 80,
        yearsOfExperience: 1,
        projects: ['Document Search', 'Vector Databases', 'AI Knowledge Assistants'],
        icon: '📚'
      },
      {
        name: 'LangChain',
        proficiency: 78,
        yearsOfExperience: 1,
        projects: ['Agent Workflows', 'Tool Calling', 'LLM Pipelines'],
        icon: '🔗'
      },
      {
        name: 'OpenAI API',
        proficiency: 82,
        yearsOfExperience: 2,
        projects: ['Chat Completions', 'AI Automation', 'LLM-powered Apps'],
        icon: '✨'
      }
    ]
  },

  /* Soft Skills & Methodologies */
  {
    id: 'soft',
    title: 'Soft Skills & Methodologies',
    skills: [
      {
        name: 'Communication',
        proficiency: 92,
        yearsOfExperience: 5,
        projects: ['Client Discussions', 'Technical Presentations', 'Team Syncs'],
        icon: '💬'
      },
      {
        name: 'Problem Solving',
        proficiency: 90,
        yearsOfExperience: 5,
        projects: ['Debugging', 'System Design', 'Performance Optimization'],
        icon: '🧩'
      },
      {
        name: 'Team Collaboration',
        proficiency: 89,
        yearsOfExperience: 5,
        projects: ['Cross-functional Teams', 'Pair Programming', 'Mentorship'],
        icon: '🤝'
      },
      {
        name: 'Agile / Scrum',
        proficiency: 85,
        yearsOfExperience: 4,
        projects: ['Sprint Planning', 'Standups', 'Retrospectives'],
        icon: '🔄'
      },
      {
        name: 'Leadership',
        proficiency: 83,
        yearsOfExperience: 3,
        projects: ['Project Ownership', 'Junior Dev Guidance', 'Decision Making'],
        icon: '🧭'
      }
    ]
  }
];

  /* =======================
     Learning Timeline
  ======================= */

  const timelineEvents: TimelineEvent[] = [
    {
      year: '2026',
      title: 'Full-Stack Project Development',
      description:
        'Built multiple production-ready full-stack applications using React and Flask, focusing on authentication, REST APIs, and relational databases.',
      technologies: ['React', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'JWT']
    },
    {
      year: '2025',
      title: 'Software Engineering Training',
      description:
        'Completed intensive full-stack software engineering training at Moringa School with hands-on projects and team collaboration.',
      technologies: ['JavaScript', 'Python', 'React', 'Flask', 'Git']
    }
  ];

  /* =======================
     Helpers
  ======================= */

  const toggleCategory = (categoryId: string) => {
    if (!isHydrated) return;

    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredCategories = skillCategories
    .filter(category =>
      activeFilter === 'all' ? true : category.id === activeFilter
    )
    .map(category => ({
      ...category,
      skills: category.skills.filter(
        skill =>
          searchQuery === '' ||
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.projects.some(project =>
            project.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    }))
    .filter(category => category.skills.length > 0);

  /* =======================
     Loading State
  ======================= */

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading skills...</p>
      </div>
    );
  }

  /* =======================
     Render
  ======================= */

  return (
    <div className="space-y-12">
      <SkillStats />

      <div className="space-y-6">
        <SkillSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <SkillFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
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
            <p className="text-text-secondary text-lg">
              No skills found matching your search.
            </p>
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

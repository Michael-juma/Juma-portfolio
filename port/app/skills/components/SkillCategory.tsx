interface Skill {
  name: string;
  proficiency: number;
  yearsOfExperience: number;
  projects: string[];
  icon: string;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  isExpanded: boolean;
  onToggle: () => void;
}

export default function SkillCategory({ title, skills, isExpanded, onToggle }: SkillCategoryProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-brand transition-smooth hover:shadow-brand-lg">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-surface hover:bg-muted transition-fast"
      >
        <h3 className="text-lg font-headline font-semibold text-foreground">{title}</h3>
        <span className="text-text-secondary text-sm">
          {isExpanded ? '−' : '+'} {skills.length} skills
        </span>
      </button>
      
      {isExpanded && (
        <div className="p-6 space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <h4 className="font-medium text-foreground">{skill.name}</h4>
                    <p className="text-xs text-text-secondary">{skill.yearsOfExperience} years experience</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-primary">{skill.proficiency}%</span>
              </div>
              
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-500"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
              
              {skill.projects.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {skill.projects.map((project, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
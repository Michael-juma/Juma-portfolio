interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  technologies: string[];
}

interface SkillTimelineProps {
  events: TimelineEvent[];
}

export default function SkillTimeline({ events }: SkillTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
      
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="relative pl-20">
            <div className="absolute left-6 top-2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-brand" />
            
            <div className="bg-card border border-border rounded-lg p-6 shadow-brand hover:shadow-brand-lg transition-smooth">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-primary">{event.year}</span>
              </div>
              <h4 className="text-lg font-headline font-semibold text-foreground mb-2">
                {event.title}
              </h4>
              <p className="text-text-secondary text-sm mb-4">{event.description}</p>
              <div className="flex flex-wrap gap-2">
                {event.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-surface text-foreground text-xs rounded-md border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
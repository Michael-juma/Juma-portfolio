interface SkillFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function SkillFilter({ activeFilter, onFilterChange }: SkillFilterProps) {
  const filters = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools & DevOps' },
    { id: 'soft', label: 'Soft Skills' }
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-6 py-2 rounded-md font-medium text-sm transition-smooth ${
            activeFilter === filter.id
              ? 'bg-primary text-primary-foreground shadow-brand'
              : 'bg-surface text-text-secondary hover:bg-muted hover:text-foreground'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
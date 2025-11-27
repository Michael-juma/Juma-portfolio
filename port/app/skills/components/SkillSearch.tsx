import Icon from '@/components/ui/AppIcon';

interface SkillSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function SkillSearch({ searchQuery, onSearchChange }: SkillSearchProps) {
  return (
    <div className="relative max-w-md mx-auto">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Icon name="MagnifyingGlassIcon" size={20} className="text-text-secondary" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search skills, technologies, or projects..."
        className="w-full pl-12 pr-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
      />
      {searchQuery && (
        <button
          onClick={() => onSearchChange('')}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-secondary hover:text-foreground transition-fast"
        >
          <Icon name="XMarkIcon" size={20} />
        </button>
      )}
    </div>
  );
}
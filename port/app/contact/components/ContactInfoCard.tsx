import Icon from '@/components/ui/AppIcon';

interface ContactInfoCardProps {
  className?: string;
}

export default function ContactInfoCard({ className = '' }: ContactInfoCardProps) {
  return (
    <div className={`bg-card border border-border rounded-lg p-6 shadow-brand ${className}`}>
      <h3 className="text-lg font-headline font-semibold text-foreground mb-3">Contact Info</h3>

      <div className="space-y-4">
        <a href="mailto:obudho200@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
          <div className="w-10 h-10 rounded-md bg-surface flex items-center justify-center">
            <Icon name="EnvelopeIcon" size={18} />
          </div>
          <div>
            <p className="text-sm font-medium">Email</p>
            <p className="text-sm text-text-secondary">obudho200@gmail.com</p>
          </div>
        </a>

        <a href="https://wa.me/254725745754" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
          <div className="w-10 h-10 rounded-md bg-surface flex items-center justify-center">
            <Icon name="ChatBubbleLeftRightIcon" size={18} />
          </div>
          <div>
            <p className="text-sm font-medium">WhatsApp</p>
            <p className="text-sm text-text-secondary">+254 725 745 754</p>
          </div>
        </a>

        <a href="tel:+254725745754" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
          <div className="w-10 h-10 rounded-md bg-surface flex items-center justify-center">
            <Icon name="PhoneArrowUpRightIcon" size={18} />
          </div>
          <div>
            <p className="text-sm font-medium">Phone</p>
            <p className="text-sm text-text-secondary">+254 725 745 754</p>
          </div>
        </a>
      </div>
    </div>
  );
}

import { PricingFilter } from '../types/tool';
import { Badge } from './ui/badge';

interface PricingTagsProps {
  selectedPricing: PricingFilter;
  onPricingChange: (pricing: PricingFilter) => void;
}

const pricingOptions: PricingFilter[] = ['All', 'Free', 'Freemium', 'Paid'];

export function PricingTags({ selectedPricing, onPricingChange }: PricingTagsProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2">
        {pricingOptions.map((pricing) => (
          <Badge
            key={pricing}
            variant={selectedPricing === pricing ? 'default' : 'outline'}
            className={`cursor-pointer transition-all px-4 py-2 ${
              selectedPricing === pricing 
                ? 'bg-primary text-white hover:bg-primary/90 shadow-sm' 
                : 'bg-white border-gray-200/50 hover:bg-gray-50 hover:shadow-sm'
            }`}
            onClick={() => onPricingChange(pricing)}
          >
            {pricing}
          </Badge>
        ))}
      </div>
    </div>
  );
}

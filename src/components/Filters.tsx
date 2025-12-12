import { Category, PricingFilter } from '../types/tool';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface FiltersProps {
  selectedCategory: Category;
  selectedPricing: PricingFilter;
  onCategoryChange: (category: Category) => void;
  onPricingChange: (pricing: PricingFilter) => void;
}

const pricingOptions: PricingFilter[] = ['All', 'Free', 'Freemium', 'Paid'];

export function Filters({ selectedCategory, selectedPricing, onCategoryChange, onPricingChange }: FiltersProps) {
  return (
    <Card className="p-6 bg-white border-gray-200/50 shadow-sm">
      <div>
        <h3 className="mb-3">Pricing</h3>
        <div className="flex flex-col gap-2">
          {pricingOptions.map((pricing) => (
            <Button
              key={pricing}
              variant={selectedPricing === pricing ? 'default' : 'ghost'}
              className="justify-start"
              onClick={() => onPricingChange(pricing)}
            >
              {pricing}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}
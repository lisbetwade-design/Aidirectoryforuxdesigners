import { Category } from '../types/tool';
import { Badge } from './ui/badge';

interface CategoryTagsProps {
  categories: Category[];
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function CategoryTags({ categories, selectedCategory, onCategoryChange }: CategoryTagsProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            className={`cursor-pointer transition-all px-4 py-2 ${
              selectedCategory === category 
                ? 'bg-primary text-white hover:bg-primary/90 shadow-sm' 
                : 'bg-white border-gray-200/50 hover:bg-gray-50 hover:shadow-sm'
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
    </div>
  );
}
import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SearchBar } from './components/SearchBar';
import { ToolCard } from './components/ToolCard';
import { FeaturedTools } from './components/FeaturedTools';
import { CategoryTags } from './components/CategoryTags';
import { PricingTags } from './components/PricingTags';
import { DottedBackground } from './components/DottedBackground';
import { aiTools } from './data/tools';
import { Category, PricingFilter } from './types/tool';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedPricing, setSelectedPricing] = useState<PricingFilter>('All');

  const filteredTools = useMemo(() => {
    return aiTools.filter((tool) => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           tool.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      const matchesPricing = selectedPricing === 'All' || tool.pricing === selectedPricing;

      return matchesSearch && matchesCategory && matchesPricing;
    });
  }, [searchQuery, selectedCategory, selectedPricing]);

  // Show featured tools only when no filters are applied
  const showFeatured = searchQuery === '' && selectedCategory === 'All' && selectedPricing === 'All';

  // Get unique categories from tools
  const categories: Category[] = useMemo(() => {
    const uniqueCategories = new Set(aiTools.map(tool => tool.category));
    return ['All', ...Array.from(uniqueCategories).sort()] as Category[];
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <DottedBackground />
      <Header />
      <Hero />
      
      <div className="container mx-auto px-4 py-8">
        {showFeatured && (
          <div className="mb-12">
            <FeaturedTools tools={aiTools} />
          </div>
        )}

        <div className="mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Category Tags */}
        <CategoryTags 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Pricing Tags - 24px spacing below categories */}
        <div className="mt-6">
          <PricingTags 
            selectedPricing={selectedPricing}
            onPricingChange={setSelectedPricing}
          />
        </div>

        <main>
          <div className="mb-4">
            <p className="text-muted-foreground">
              Showing {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'}
            </p>
          </div>
          
          {filteredTools.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No tools found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
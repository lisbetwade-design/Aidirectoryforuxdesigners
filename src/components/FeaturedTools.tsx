import { Star, TrendingUp, Sparkles } from 'lucide-react';
import { Tool } from '../types/tool';
import { Badge } from './ui/badge';

interface FeaturedToolsProps {
  tools: Tool[];
}

export function FeaturedTools({ tools }: FeaturedToolsProps) {
  // Select featured tools - you can customize this logic
  const featuredTools = tools.slice(0, 3);

  if (featuredTools.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-primary" />
        <h2>Featured Tools</h2>
        <Badge variant="secondary" className="ml-2">Trending</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredTools.map((tool) => (
          <a
            key={tool.id}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg border border-gray-200/50 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* Featured Badge */}
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full flex items-center gap-1 text-sm shadow-md">
                <Star className="w-3 h-3 fill-current" />
                Featured
              </div>
            </div>

            {/* Image */}
            <div className="relative h-48 overflow-hidden bg-muted">
              <img
                src={tool.imageUrl}
                alt={tool.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="group-hover:text-primary transition-colors mb-1">
                    {tool.name}
                  </h3>
                  <Badge variant="outline" className="text-xs">
                    {tool.category}
                  </Badge>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {tool.description}
              </p>

              {/* Features highlight */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.features.slice(0, 2).map((feature, index) => (
                  <span
                    key={index}
                    className="text-xs bg-muted px-2 py-1 rounded"
                  >
                    {feature}
                  </span>
                ))}
                {tool.features.length > 2 && (
                  <span className="text-xs text-muted-foreground px-2 py-1">
                    +{tool.features.length - 2} more
                  </span>
                )}
              </div>

              {/* Pricing */}
              <div className="flex items-center justify-between pt-4 border-t">
                <span className="text-sm text-muted-foreground">
                  {tool.pricing}
                </span>
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
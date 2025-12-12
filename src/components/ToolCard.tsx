import { AITool } from '../types/tool';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';

interface ToolCardProps {
  tool: AITool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200/50 shadow-sm flex flex-col h-full">
      {/* Image Section */}
      <div className="aspect-[4/3] overflow-hidden bg-gray-50 relative">
        <ImageWithFallback
          src={tool.imageUrl}
          alt={tool.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Content Section */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="group-hover:text-primary transition-colors">
            {tool.name}
          </h3>
          <Badge 
            variant="secondary"
            className="shrink-0"
          >
            {tool.pricing}
          </Badge>
        </div>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {tool.description}
        </p>
        
        <div className="mb-4 flex-1">
          <ul className="space-y-1.5">
            {tool.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1.5 shrink-0">•</span>
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-gray-100">
          <Badge variant="outline" className="text-xs">
            {tool.category}
          </Badge>
          <a 
            href={tool.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors"
          >
            <span>View Tool</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
import { Sparkles } from 'lucide-react';
import { useState } from 'react';
import { SubmitToolDialog } from './SubmitToolDialog';
import { BlogComingSoon } from './BlogComingSoon';
import { TutorialsComingSoon } from './TutorialsComingSoon';
import { Button } from './ui/button';

export function Header() {
  const [submitDialogOpen, setSubmitDialogOpen] = useState(false);
  const [blogDialogOpen, setBlogDialogOpen] = useState(false);
  const [tutorialsDialogOpen, setTutorialsDialogOpen] = useState(false);

  return (
    <>
      <header className="border-b border-gray-200/50 bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <h1>AI Directory for UX Designers</h1>
          </div>
          <nav className="flex items-center gap-6">
            <button 
              onClick={() => setBlogDialogOpen(true)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </button>
            <button 
              onClick={() => setTutorialsDialogOpen(true)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Tutorials
            </button>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <Button 
              onClick={() => setSubmitDialogOpen(true)}
            >
              Submit Tool
            </Button>
          </nav>
        </div>
      </header>
      
      <SubmitToolDialog open={submitDialogOpen} onOpenChange={setSubmitDialogOpen} />
      <BlogComingSoon open={blogDialogOpen} onOpenChange={setBlogDialogOpen} />
      <TutorialsComingSoon open={tutorialsDialogOpen} onOpenChange={setTutorialsDialogOpen} />
    </>
  );
}
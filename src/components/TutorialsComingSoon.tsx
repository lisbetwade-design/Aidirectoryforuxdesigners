import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { BookOpen } from 'lucide-react';
import { useState } from 'react';

interface TutorialsComingSoonProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TutorialsComingSoon({ open, onOpenChange }: TutorialsComingSoonProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
      onOpenChange(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white border-gray-200/50 shadow-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Tutorials Coming Soon
          </DialogTitle>
          <DialogDescription>
            We're creating comprehensive tutorials on how to use AI tools effectively in your UX design workflow. Get notified when they're ready!
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {submitted ? (
            <div className="bg-green-50 text-green-800 p-4 rounded-lg text-center">
              Thanks for subscribing! We'll notify you when tutorials are available.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white border-gray-200/50"
              />
              <Button type="submit" className="w-full">
                Notify Me
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
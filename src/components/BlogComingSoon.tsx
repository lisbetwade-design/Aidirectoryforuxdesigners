import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { BookOpen, Mail, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface BlogComingSoonProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BlogComingSoon({ open, onOpenChange }: BlogComingSoonProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to a backend
    console.log('Newsletter subscription:', email);
    setSubscribed(true);
    
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
      onOpenChange(false);
    }, 2500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg bg-white border-gray-200/50 shadow-lg">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-6 h-6 text-primary" />
            <DialogTitle>UX AI Blog</DialogTitle>
          </div>
          <DialogDescription>
            Expert insights, tutorials, and latest trends in AI tools for UX designers
          </DialogDescription>
        </DialogHeader>

        {subscribed ? (
          <div className="flex flex-col items-center justify-center py-8 gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-center">Thanks for subscribing!</h3>
            <p className="text-center text-muted-foreground">
              We'll notify you when the blog launches.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Coming Soon Banner */}
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 text-center border">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-12 -mb-12" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary">Coming Soon</span>
                </div>
                <h3 className="mb-3">Our Blog is Launching!</h3>
                <p className="text-muted-foreground mb-6">
                  Get expert tips on AI-powered UX design, tool comparisons, workflows, and industry trends.
                </p>
              </div>
            </div>

            {/* What to Expect */}
            <div className="space-y-3">
              <p className="text-sm">What you can expect:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                  <span>In-depth tool reviews and comparisons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                  <span>AI-powered UX workflow tutorials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                  <span>Industry insights and best practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                  <span>Case studies from leading UX teams</span>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <form onSubmit={handleSubscribe} className="space-y-4 pt-4 border-t">
              <div className="space-y-2">
                <Label htmlFor="email">Get notified when we launch</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="flex gap-3">
                <Button type="submit" className="flex-1">
                  Notify Me
                </Button>
                <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                  Close
                </Button>
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
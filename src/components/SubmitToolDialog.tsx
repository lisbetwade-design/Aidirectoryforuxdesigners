import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { CheckCircle2 } from 'lucide-react';

interface SubmitToolDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SubmitToolDialog({ open, onOpenChange }: SubmitToolDialogProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    url: '',
    category: '',
    pricing: '',
    features: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Tool submission:', formData);
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        description: '',
        url: '',
        category: '',
        pricing: '',
        features: '',
        email: ''
      });
      onOpenChange(false);
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-gray-200/50 shadow-lg">
        <DialogHeader>
          <DialogTitle>Submit an AI Tool</DialogTitle>
          <DialogDescription>
            Help grow the directory by suggesting a new AI tool for UX designers. We'll review your submission and add it if it's a good fit.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
            <h3 className="text-center">Thank you for your submission!</h3>
            <p className="text-center text-muted-foreground">
              We'll review your tool suggestion and add it to the directory if approved.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Tool Name *</Label>
              <Input
                id="name"
                required
                placeholder="e.g., Figma AI"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="url">Website URL *</Label>
              <Input
                id="url"
                type="url"
                required
                placeholder="https://example.com"
                value={formData.url}
                onChange={(e) => handleChange('url', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                required
                placeholder="Brief description of what this tool does and how it helps UX designers..."
                className="min-h-[100px]"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select required value={formData.category} onValueChange={(value) => handleChange('category', value)}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Design">Design</SelectItem>
                    <SelectItem value="Prototyping">Prototyping</SelectItem>
                    <SelectItem value="Research">Research</SelectItem>
                    <SelectItem value="User Testing">User Testing</SelectItem>
                    <SelectItem value="Writing">Writing</SelectItem>
                    <SelectItem value="Analytics">Analytics</SelectItem>
                    <SelectItem value="Illustration">Illustration</SelectItem>
                    <SelectItem value="User Flows">User Flows</SelectItem>
                    <SelectItem value="Journey Mapping">Journey Mapping</SelectItem>
                    <SelectItem value="Accessibility">Accessibility</SelectItem>
                    <SelectItem value="Dev Handoff">Dev Handoff</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pricing">Pricing *</Label>
                <Select required value={formData.pricing} onValueChange={(value) => handleChange('pricing', value)}>
                  <SelectTrigger id="pricing">
                    <SelectValue placeholder="Select pricing" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Free">Free</SelectItem>
                    <SelectItem value="Freemium">Freemium</SelectItem>
                    <SelectItem value="Paid">Paid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="features">Key Features</Label>
              <Textarea
                id="features"
                placeholder="List the main features, separated by commas or line breaks..."
                className="min-h-[80px]"
                value={formData.features}
                onChange={(e) => handleChange('features', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Your Email (optional)</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                We'll only use this to follow up about your submission if needed.
              </p>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                Submit Tool
              </Button>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
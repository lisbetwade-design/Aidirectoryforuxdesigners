import { AITool } from '../types/tool';

export const aiTools: AITool[] = [
  {
    id: '00000000-0000-0000-0000-000000000001',
    name: 'Uizard',
    description: 'AI-powered design tool that converts sketches, screenshots, and text prompts into UI mockups.',
    category: 'Prototyping',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1567088577683-db233ab9aaab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90b3R5cGUlMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzY0NjE4MzIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Sketch-to-wireframe', 'Screenshot to editable UI', 'Text-to-UI generation', 'Templates and components', 'Collaboration tools'],
    url: 'https://uizard.io'
  },
  {
    id: '00000000-0000-0000-0000-000000000002',
    name: 'Galileo AI',
    description: 'AI that turns natural-language prompts into polished UI screens ready to edit in Figma.',
    category: 'Design',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1700887944225-f148dd124305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0b29scyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjQ1NDg2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Prompt-to-UI generation', 'Persona-aware layouts', 'Pre-styled components', 'Figma export'],
    url: 'https://galileo.ai'
  },
  {
    id: '00000000-0000-0000-0000-000000000003',
    name: 'Magician (Figma Plugin)',
    description: 'Figma plugin that generates icons, illustrations, and UX copy with AI.',
    category: 'Design',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQ1NzAzMDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI icon generator', 'AI illustration generator', 'UX microcopy generator', 'Magic Spells for layouts and ideas'],
    url: 'https://diagram.com/magician'
  },
  {
    id: '00000000-0000-0000-0000-000000000004',
    name: 'Colormind',
    description: 'AI color palette generator trained on real-world user interfaces and artwork.',
    category: 'Branding',
    pricing: 'Free',
    imageUrl: 'https://images.unsplash.com/photo-1640975972263-1f73398e943b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGxvZ28lMjBkZXNpZ258ZW58MXx8fHwxNzY0NTc0NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Automatic color palette generation', 'Image to palette extraction', 'UI-focused color suggestions', 'Palette locking and randomization'],
    url: 'http://colormind.io/'
  },
  {
    id: '00000000-0000-0000-0000-000000000005',
    name: 'Khroma',
    description: 'AI color tool that learns your favorite colors and generates personalized palettes.',
    category: 'Branding',
    pricing: 'Free',
    imageUrl: 'https://images.unsplash.com/photo-1640975972263-1f73398e943b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGxvZ28lMjBkZXNpZ258ZW58MXx8fHwxNzY0NTc0NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Color preference training', 'Infinite palette suggestions', 'Contrast checking', 'Gradients and typography suggestions'],
    url: 'https://khroma.co/'
  },
  {
    id: '00000000-0000-0000-0000-000000000006',
    name: 'Runway',
    description: 'AI-powered toolkit for image generation, video editing, and creative production.',
    category: 'Video',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1744686912094-5a25e7c329b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBlZGl0aW5nfGVufDF8fHx8MTc2NDY3ODE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Text-to-image', 'Text-to-video', 'Object removal and inpainting', 'Motion tracking'],
    url: 'https://runwayml.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000007',
    name: 'Midjourney',
    description: 'AI image generator known for high-quality concept art and illustrations.',
    category: 'Illustration',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1720293315574-911411515624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbGx1c3RyYXRpb24lMjBhcnQlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjQ2NzgxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['High-fidelity image generation', 'Fine-grained style controls', 'Community showcase and prompts', 'Upscaling and variations'],
    url: 'https://midjourney.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000008',
    name: 'FigJam AI',
    description: 'AI features in FigJam that speed up research synthesis, brainstorming, and diagramming.',
    category: 'Research',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBkYXRhfGVufDF8fHx8MTc2NDYxODMyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI sticky note clustering', 'Automatic summaries', 'Diagram generation', 'Facilitation helpers'],
    url: 'https://www.figma.com/figjam/'
  },
  {
    id: '00000000-0000-0000-0000-000000000009',
    name: 'Notably AI',
    description: 'User research repository with AI-powered insight extraction and clustering.',
    category: 'Research',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBkYXRhfGVufDF8fHx8MTc2NDYxODMyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI-generated insights', 'Auto affinity mapping', 'Transcript upload and tagging', 'Research project organization'],
    url: 'https://www.notably.ai/'
  },
  {
    id: '00000000-0000-0000-0000-00000000000a',
    name: 'Otter.ai',
    description: 'AI transcription tool for interviews, user research sessions, and meetings.',
    category: 'Research',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1660145177383-e6e2c22adb5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY0NjA5MzY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Live transcription', 'Speaker identification', 'Meeting summaries', 'Export to text and docs'],
    url: 'https://otter.ai/'
  },
  {
    id: '00000000-0000-0000-0000-00000000000b',
    name: 'DALL·E 3',
    description: 'AI image generator from OpenAI for detailed and editable illustrations and scenes.',
    category: 'Illustration',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1720293315574-911411515624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbGx1c3RyYXRpb24lMjBhcnQlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjQ2NzgxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['High-detail image generation', 'Inpainting and editing', 'Consistent characters', 'Flexible style control'],
    url: 'https://openai.com/dall-e-3'
  },
  {
    id: '00000000-0000-0000-0000-00000000000c',
    name: 'ChatGPT',
    description: 'General-purpose AI assistant that helps with UX writing, research planning, ideation, and documentation.',
    category: 'Productivity',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1660145177383-e6e2c22adb5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY0NjA5MzY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['UX copy generation', 'Research plans and questions', 'Brainstorming and ideation', 'Persona and scenario creation'],
    url: 'https://chat.openai.com/'
  },
  {
    id: '00000000-0000-0000-0000-00000000000d',
    name: 'Perplexity',
    description: 'AI research companion that combines web search with conversational answers and citations.',
    category: 'Research',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1660145177383-e6e2c22adb5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY0NjA5MzY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Web search with sources', 'Citation-based answers', 'Deep research mode', 'Follow-up question suggestions'],
    url: 'https://www.perplexity.ai/'
  },
  {
    id: '00000000-0000-0000-0000-00000000000e',
    name: 'Gamma',
    description: 'AI tool for creating beautiful, narrative presentations and documents.',
    category: 'Productivity',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1660145177383-e6e2c22adb5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY0NjA5MzY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI slide generation', 'Visual-first layouts', 'Image generation', 'Interactive document mode'],
    url: 'https://gamma.app/'
  },
  {
    id: '00000000-0000-0000-0000-000000000010',
    name: 'Vercel v0',
    description: 'AI tool that generates React components and full UI layouts from text prompts.',
    category: 'Design',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1700887944225-f148dd124305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0b29scyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjQ1NDg2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Prompt-to-React UI', 'Tailwind CSS support', 'Live preview', 'Editable generated code'],
    url: 'https://v0.dev/'
  },
  {
    id: '00000000-0000-0000-0000-000000000011',
    name: 'Framer AI',
    description: 'AI website builder that turns text prompts into responsive marketing or portfolio sites.',
    category: 'Design',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1700887944225-f148dd124305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0b29scyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjQ1NDg2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Prompt-to-website generation', 'Responsive layouts', 'Built-in hosting', 'Animation and interactions'],
    url: 'https://www.framer.com/ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000012',
    name: 'Relume AI',
    description: 'AI tool that generates sitemaps and wireframes for Webflow-based websites.',
    category: 'Prototyping',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1567088577683-db233ab9aaab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90b3R5cGUlMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzY0NjE4MzIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI sitemap generation', 'Wireframe builder', 'Webflow component library', 'Copy suggestions'],
    url: 'https://www.relume.io/'
  },
  {
    id: '00000000-0000-0000-0000-000000000013',
    name: 'Diagram AI',
    description: 'AI-powered design automation inside Figma, focusing on layout, patterns, and components.',
    category: 'Design',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQ1NzAzMDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Smart layout suggestions', 'Pattern detection', 'Automatic component creation', 'Design automation tools'],
    url: 'https://diagram.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000014',
    name: 'Adobe Firefly',
    description: 'Generative AI from Adobe for images, vector recoloring, and creative effects.',
    category: 'Illustration',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1720293315574-911411515624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbGx1c3RyYXRpb24lMjBhcnQlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjQ2NzgxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Text-to-image generation', 'Vector recoloring', 'Text effects', 'Adobe Stock integration'],
    url: 'https://www.adobe.com/sensei/generative-ai/firefly.html'
  },
  {
    id: '00000000-0000-0000-0000-000000000015',
    name: 'Adobe Sensei',
    description: "Adobe's AI engine powering smart, automated features across Creative Cloud.",
    category: 'Photo Editing',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1627897181132-735874e6251f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMGVkaXRpbmclMjBzb2Z0d2FyZXxlbnwxfHx8fDE3NjQ2NzgxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Content-aware fill', 'Auto-tagging and search', 'Smart cropping', 'Predictive insights'],
    url: 'https://www.adobe.com/sensei.html'
  },
  {
    id: '00000000-0000-0000-0000-000000000016',
    name: 'Stable Diffusion',
    description: 'Open-source text-to-image model for fully customizable AI image generation.',
    category: 'Illustration',
    pricing: 'Free',
    imageUrl: 'https://images.unsplash.com/photo-1720293315574-911411515624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbGx1c3RyYXRpb24lMjBhcnQlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjQ2NzgxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Text-to-image creation', 'Model fine-tuning', 'ControlNet and advanced controls', 'Local or cloud deployment'],
    url: 'https://stability.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000017',
    name: 'Fable',
    description: 'AI-powered video and animation tool for cinematic storytelling and motion design.',
    category: 'Animation',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1744686912094-5a25e7c329b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBlZGl0aW5nfGVufDF8fHx8MTc2NDY3ODE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Scene and shot creation', 'Character animation tools', 'AI-assisted editing', 'Story-based workflows'],
    url: 'https://www.fable.app/'
  },
  {
    id: '00000000-0000-0000-0000-000000000018',
    name: 'ElevenLabs',
    description: 'AI voice generator known for realistic, expressive speech in many languages.',
    category: 'Audio',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1650564416148-41a34875cc2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMG1pY3JvcGhvbmUlMjBwb2RjYXN0fGVufDF8fHx8MTc2NDY3ODE0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Natural text-to-speech', 'Voice cloning', 'Multilingual support', 'API integration'],
    url: 'https://elevenlabs.io/'
  },
  {
    id: '00000000-0000-0000-0000-000000000019',
    name: 'Krisp',
    description: 'AI noise-cancelling and audio cleanup tool for calls and research interviews.',
    category: 'Audio',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1650564416148-41a34875cc2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMG1pY3JvcGhvbmUlMjBwb2RjYXN0fGVufDF8fHx8MTc2NDY3ODE0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Real-time noise removal', 'Voice clarity enhancement', 'Echo cancellation', 'Meeting transcription (in some plans)'],
    url: 'https://krisp.ai/'
  },
  {
    id: '00000000-0000-0000-0000-00000000001a',
    name: 'Murf.ai',
    description: 'AI voiceover platform for UX prototypes, explainer videos, and training content.',
    category: 'Audio',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1650564416148-41a34875cc2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMG1pY3JvcGhvbmUlMjBwb2RjYXN0fGVufDF8fHx8MTc2NDY3ODE0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Realistic AI voices', 'Voice cloning', 'Timing and background music control', 'Script editor'],
    url: 'https://murf.ai/'
  },
  {
    id: '00000000-0000-0000-0000-00000000001b',
    name: 'LottieFlow AI',
    description: 'AI-powered generator for Lottie animations used in modern UI microinteractions.',
    category: 'Animation',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1744686912094-5a25e7c329b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBlZGl0aW5nfGVufDF8fHx8MTc2NDY3ODE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Text-to-motion', 'Lottie JSON export', 'Editable vector layers', 'Animation presets'],
    url: 'https://lottieflow.com/'
  },
  {
    id: '00000000-0000-0000-0000-00000000001c',
    name: 'Flair AI',
    description: 'Brand-focused AI image generator for product shots and marketing visuals.',
    category: 'Branding',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1640975972263-1f73398e943b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGxvZ28lMjBkZXNpZ258ZW58MXx8fHwxNzY0NTc0NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Product scene generation', 'Brand color matching', 'Lifestyle compositions', 'Human model integration'],
    url: 'https://flair.ai/'
  },
  {
    id: '00000000-0000-0000-0000-00000000001d',
    name: 'Looka',
    description: 'AI logo and brand identity generator for startups and small businesses.',
    category: 'Branding',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1640975972263-1f73398e943b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGxvZ28lMjBkZXNpZ258ZW58MXx8fHwxNzY0NTc0NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Logo generation', 'Brand kits', 'Social media assets', 'Color and font suggestions'],
    url: 'https://looka.com/'
  },
  {
    id: '00000000-0000-0000-0000-00000000001e',
    name: 'Brandmark',
    description: 'AI logo generator that produces modern, scalable vector identities.',
    category: 'Branding',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1640975972263-1f73398e943b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGxvZ28lMjBkZXNpZ258ZW58MXx8fHwxNzY0NTc0NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Logo presets and variations', 'AI color palette generation', 'Font pairing suggestions', 'Brand guideline exports'],
    url: 'https://brandmark.io/'
  },
  {
    id: '00000000-0000-0000-0000-00000000001f',
    name: 'Remove.bg',
    description: 'AI tool that removes backgrounds from images with one click.',
    category: 'Photo Editing',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1627897181132-735874e6251f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMGVkaXRpbmclMjBzb2Z0d2FyZXxlbnwxfHx8fDE3NjQ2NzgxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Automatic background removal', 'Batch processing', 'High-resolution exports', 'API for automation'],
    url: 'https://www.remove.bg/'
  },
  {
    id: '00000000-0000-0000-0000-000000000020',
    name: 'Clideo AI',
    description: 'Browser-based AI video editing toolkit for resizing, trimming, and adding subtitles.',
    category: 'Video',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1744686912094-5a25e7c329b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBlZGl0aW5nfGVufDF8fHx8MTc2NDY3ODE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Automatic subtitle generation', 'Video resizing and cropping', 'Basic editing tools', 'Supports many formats'],
    url: 'https://clideo.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000021',
    name: 'Illustroke',
    description: 'AI tool that generates vector-style illustrations from short text prompts.',
    category: 'Illustration',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1720293315574-911411515624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbGx1c3RyYXRpb24lMjBhcnQlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjQ2NzgxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Vector-like SVG output', 'Simple prompt interface', 'Multiple style presets', 'Editable downloads'],
    url: 'https://illustroke.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000022',
    name: 'Stockimg.ai',
    description: 'AI stock image generator for marketing, UI mockups, and concept visuals.',
    category: 'Illustration',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1720293315574-911411515624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbGx1c3RyYXRpb24lMjBhcnQlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjQ2NzgxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Stock-style image templates', 'Poster and banner generation', 'Book covers and mockups', 'Different subject categories'],
    url: 'https://stockimg.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000023',
    name: 'VisualEyes',
    description: 'Predictive eye-tracking tool that simulates where users will focus on a design.',
    category: 'User Testing',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBkYXRhfGVufDF8fHx8MTc2NDYxODMyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Attention heatmaps', 'Clarity and focus scores', 'Design comparison', 'Figma integration'],
    url: 'https://www.visualeyes.design/'
  },
  {
    id: '00000000-0000-0000-0000-000000000024',
    name: 'Attention Insight',
    description: 'AI-powered heatmap tool that predicts which elements will draw user attention first.',
    category: 'Analytics',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1700887944225-f148dd124305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0b29scyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjQ1NDg2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Predictive attention heatmaps', 'Clarity scoring', 'Benchmark comparisons', 'Design variants testing'],
    url: 'https://attentioninsight.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000025',
    name: 'Maze AI',
    description: 'AI-enhanced research platform for unmoderated tests, surveys, and insights.',
    category: 'User Testing',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBkYXRhfGVufDF8fHx8MTc2NDYxODMyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI-generated summaries', 'Survey and usability testing', 'Insight clustering', 'Prototype testing'],
    url: 'https://maze.co/'
  },
  {
    id: '00000000-0000-0000-0000-000000000026',
    name: 'Condens',
    description: 'Research repository with AI-powered tagging, clustering, and insight generation for UX teams.',
    category: 'Research',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBkYXRhfGVufDF8fHx8MTc2NDYxODMyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI tagging', 'Insight extraction', 'Repository for research files', 'Interview uploads', 'Team collaboration'],
    url: 'https://condens.io/'
  },
  {
    id: '00000000-0000-0000-0000-000000000027',
    name: 'Dovetail AI',
    description: 'Enterprise-grade research repository and AI insight engine for qualitative research.',
    category: 'Research',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBkYXRhfGVufDF8fHx8MTc2NDYxODMyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI insights', 'Transcript tagging', 'Highlight clustering', 'Video transcription', 'Research repository'],
    url: 'https://dovetailapp.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000028',
    name: 'Typeform AI',
    description: 'AI-assisted survey builder that generates questions, logic, and summaries.',
    category: 'Surveys',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1762340275877-32d64414d8aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2ZXklMjBmb3JtcyUyMHF1ZXN0aW9ubmFpcmV8ZW58MXx8fHwxNzY0Njc4OTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Auto question generation', 'Branching logic', 'Response summaries', 'Beautiful survey layouts'],
    url: 'https://typeform.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000029',
    name: 'Tally AI',
    description: 'Prompt-based form builder that generates surveys and forms instantly.',
    category: 'Surveys',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1762340275877-32d64414d8aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2ZXklMjBmb3JtcyUyMHF1ZXN0aW9ubmFpcmV8ZW58MXx8fHwxNzY0Njc4OTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Prompt-to-form creation', 'Logic jumps', 'Embeds and integrations', 'Response analytics'],
    url: 'https://tally.so/'
  },
  {
    id: '00000000-0000-0000-0000-00000000002a',
    name: 'Survicate AI',
    description: 'AI survey tool designed for product feedback, UX insights, and sentiment analysis.',
    category: 'Surveys',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1762340275877-32d64414d8aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2ZXklMjBmb3JtcyUyMHF1ZXN0aW9ubmFpcmV8ZW58MXx8fHwxNzY0Njc4OTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI-generated surveys', 'Feedback widgets', 'NPS tracking', 'Sentiment analysis'],
    url: 'https://survicate.com/'
  },
  {
    id: '00000000-0000-0000-0000-00000000002b',
    name: 'UserTesting AI',
    description: 'AI-powered analysis of user testing videos for enterprise UX research teams.',
    category: 'User Testing',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBkYXRhfGVufDF8fHx8MTc2NDYxODMyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI summaries', 'Sentiment detection', 'Behavioral tagging', 'Pattern recognition'],
    url: 'https://usertesting.com/'
  },
  {
    id: '00000000-0000-0000-0000-00000000002c',
    name: 'Useberry AI',
    description: 'UX testing tool with AI insights for prototypes, flows, and design concepts.',
    category: 'User Testing',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBkYXRhfGVufDF8fHx8MTc2NDYxODMyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI summaries', 'Heatmaps', 'Task path analysis', 'Prototype testing'],
    url: 'https://useberry.com/'
  },
  {
    id: '00000000-0000-0000-0000-00000000002d',
    name: 'Lookback AI',
    description: 'User interview and testing tool with AI summaries and collaborative analysis.',
    category: 'Research',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBkYXRhfGVufDF8fHx8MTc2NDYxODMyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Interview recording', 'AI-generated summaries', 'Real-time notes', 'Team collaboration'],
    url: 'https://lookback.io/'
  },
  {
    id: '00000000-0000-0000-0000-00000000002e',
    name: 'UserZoom AI',
    description: 'AI-driven UX analytics and usability insights for large product teams.',
    category: 'Analytics',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1700887944225-f148dd124305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0b29scyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjQ1NDg2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI-driven reports', 'Benchmarking', 'Task success analysis', 'UX metrics'],
    url: 'https://userzoom.com/'
  },
  {
    id: '00000000-0000-0000-0000-00000000002f',
    name: 'Optimal Workshop AI',
    description: 'AI-enhanced IA toolkit for card sorting and tree testing.',
    category: 'Information Architecture',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZvcm1hdGlvbiUyMGFyY2hpdGVjdHVyZSUyMGRpYWdyYW18ZW58MXx8fHwxNzY0Njc4OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI card sort clustering', 'Tree testing analysis', 'User flow insights', 'UX metrics'],
    url: 'https://optimalworkshop.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000030',
    name: 'Hotjar AI',
    description: 'AI summaries of heatmaps, session recordings, and surveys.',
    category: 'Analytics',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1700887944225-f148dd124305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0b29scyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjQ1NDg2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Behavioral summaries', 'Sentiment insights', 'Heatmap analysis', 'Session recordings'],
    url: 'https://hotjar.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000031',
    name: 'FullStory AI',
    description: 'Behavior analytics tool that identifies friction, rage clicks, and UX issues using AI.',
    category: 'Analytics',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1700887944225-f148dd124305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0b29scyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjQ1NDg2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Friction detection', 'Session insights', 'Error tagging', 'Funnel analysis'],
    url: 'https://fullstory.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000032',
    name: 'Mixpanel AI',
    description: 'AI-enhanced product analytics for tracking user behavior and funnels.',
    category: 'Analytics',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1700887944225-f148dd124305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0b29scyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjQ1NDg2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI insights', 'Cohort analysis', 'Funnels and retention tracking', 'Predictive analytics'],
    url: 'https://mixpanel.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000033',
    name: 'Kapwing AI',
    description: 'AI-powered video editor for quick content creation, subtitles, and resizing.',
    category: 'Video',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1744686912094-5a25e7c329b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBlZGl0aW5nfGVufDF8fHx8MTc2NDY3ODE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Auto subtitles', 'Smart trimming', 'Resize for social platforms', 'Templates'],
    url: 'https://kapwing.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000034',
    name: 'Descript',
    description: 'Text-based video and audio editor with AI voice cloning and transcription.',
    category: 'Video',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1744686912094-5a25e7c329b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBlZGl0aW5nfGVufDF8fHx8MTc2NDY3ODE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Overdub voice cloning', 'Text-based editing', 'Filler word removal', 'Transcription'],
    url: 'https://descript.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000035',
    name: 'Clipdrop',
    description: 'AI image cleanup toolkit for removing objects, upscaling, and relighting.',
    category: 'Photo Editing',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1627897181132-735874e6251f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMGVkaXRpbmclMjBzb2Z0d2FyZXxlbnwxfHx8fDE3NjQ2NzgxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Object removal', 'Background removal', 'Upscaling', 'Relighting'],
    url: 'https://clipdrop.co/'
  },
  {
    id: '00000000-0000-0000-0000-000000000036',
    name: 'Cleanup.pictures',
    description: 'AI tool that removes unwanted elements from images using inpainting.',
    category: 'Photo Editing',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1627897181132-735874e6251f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMGVkaXRpbmclMjBzb2Z0d2FyZXxlbnwxfHx8fDE3NjQ2NzgxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Object removal', 'High-res export', 'AI inpainting', 'Easy brush controls'],
    url: 'https://cleanup.pictures/'
  },
  {
    id: '00000000-0000-0000-0000-000000000037',
    name: 'Illusion Diffusion',
    description: 'AI generator that creates patterned and artistic images using diffusion.',
    category: 'Illustration',
    pricing: 'Free',
    imageUrl: 'https://images.unsplash.com/photo-1720293315574-911411515624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbGx1c3RyYXRpb24lMjBhcnQlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjQ2NzgxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Pattern generation', 'Style blending', 'High-res outputs', 'Prompt-based generation'],
    url: 'https://huggingface.co/spaces/AP123/IllusionDiffusion'
  },
  {
    id: '00000000-0000-0000-0000-000000000038',
    name: 'Spline AI',
    description: 'AI tool for generating 3D scenes, textures, and objects via text prompts.',
    category: '3D',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1676238560626-45d35b63b38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMG1vZGVsaW5nJTIwZGVzaWdufGVufDF8fHx8MTc2NDYwODcwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['3D object generation', 'Scene creation', 'Lighting presets', 'Browser-based editor'],
    url: 'https://spline.design/ai'
  },
  {
    id: '00000000-0000-0000-0000-000000000039',
    name: 'Luma AI',
    description: 'AI-powered 3D capture and text-to-3D generation with photorealistic results.',
    category: '3D',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1676238560626-45d35b63b38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMG1vZGVsaW5nJTIwZGVzaWdufGVufDF8fHx8MTc2NDYwODcwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['3D capture via phone', 'Text-to-3D', 'Neural rendering', 'High-quality textures'],
    url: 'https://lumalabs.ai/'
  },
  {
    id: '00000000-0000-0000-0000-00000000003a',
    name: 'Kaiber',
    description: 'AI video creation tool for generating music videos, animations, and stylized visuals.',
    category: 'Video',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1744686912094-5a25e7c329b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBlZGl0aW5nfGVufDF8fHx8MTc2NDY3ODE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Video generation', 'Style presets', 'Animation tools', 'Prompt-based scenes'],
    url: 'https://kaiber.ai/'
  },
  {
    id: '00000000-0000-0000-0000-00000000003b',
    name: 'InVideo AI',
    description: 'AI tool that turns scripts and prompts into complete videos.',
    category: 'Marketing',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBzdHJhdGVneSUyMGNvbnRlbnR8ZW58MXx8fHwxNzY0Njc4OTQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Script-to-video', 'Stock media integration', 'AI voiceover', 'Subtitles'],
    url: 'https://invideo.io/'
  },
  {
    id: '00000000-0000-0000-0000-00000000003c',
    name: 'Synthesia',
    description: 'AI avatar video generator for demos, tutorials, and training content.',
    category: 'Video',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1744686912094-5a25e7c329b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBlZGl0aW5nfGVufDF8fHx8MTc2NDY3ODE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Realistic avatars', 'AI voiceovers', 'Multi-language support', 'Script upload'],
    url: 'https://synthesia.io/'
  },
  {
    id: '00000000-0000-0000-0000-00000000003d',
    name: 'Genmo',
    description: 'AI tool for animated text-to-video and creative motion experiments.',
    category: 'Animation',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1744686912094-5a25e7c329b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBlZGl0aW5nfGVufDF8fHx8MTc2NDY3ODE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Animated video generation', 'Style control', 'Editable sequences', 'Prompt-to-motion'],
    url: 'https://genmo.ai/'
  },
  {
    id: '00000000-0000-0000-0000-00000000003e',
    name: 'Runway Gen-2',
    description: 'Advanced text-to-video model for generating realistic and cinematic videos.',
    category: 'Video',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1744686912094-5a25e7c329b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBlZGl0aW5nfGVufDF8fHx8MTc2NDY3ODE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Text-to-video', 'Camera motion control', 'Image-to-video', 'Scene generation'],
    url: 'https://runwayml.com/'
  },
  {
    id: '00000000-0000-0000-0000-00000000003f',
    name: 'Canva AI',
    description: 'AI design suite inside Canva that helps generate designs, images, and layouts with minimal effort.',
    category: 'Design',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQ1NzAzMDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Magic Design for auto layouts', 'AI image generation', 'Template suggestions', 'Magic Write integration'],
    url: 'https://www.canva.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000040',
    name: 'Canva Magic Write',
    description: 'AI-powered writing assistant inside Canva Docs and presentations for fast copy generation.',
    category: 'Writing',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQ1NDQxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI text generation', 'Rewriting and tone changes', 'Idea brainstorming', 'Integration with Canva designs'],
    url: 'https://www.canva.com/magic-write/'
  },
  {
    id: '00000000-0000-0000-0000-000000000041',
    name: 'Copy.ai',
    description: 'AI copywriting platform for marketing, product messaging, and creative content.',
    category: 'Writing',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQ1NDQxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Marketing copy templates', 'Blog and long-form content', 'Brainstorming tools', 'Brand voice options'],
    url: 'https://www.copy.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000042',
    name: 'Jasper',
    description: 'AI writing assistant for long-form content, SEO articles, and branded messaging.',
    category: 'Writing',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQ1NDQxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Long-form content editor', 'Brand voice control', 'SEO optimization tools', 'Templates for blogs and ads'],
    url: 'https://www.jasper.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000043',
    name: 'Writer.com',
    description: 'Team-focused AI writing assistant with style guides, terminology, and brand governance.',
    category: 'Writing',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQ1NDQxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Style guide enforcement', 'Team dictionaries', 'Tone and clarity suggestions', 'UX copy templates'],
    url: 'https://writer.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000044',
    name: 'Linguana AI',
    description: 'AI translation and localization platform for SEO-friendly website content.',
    category: 'Localization',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1719306625402-8d645ba2c6ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc2xhdGlvbiUyMGxhbmd1YWdlJTIwbG9jYWxpemF0aW9ufGVufDF8fHx8MTc2NDY4MDc2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Automatic translation', 'SEO optimization for multiple languages', 'Website content sync', 'Glossary support'],
    url: 'https://linguana.io/'
  },
  {
    id: '00000000-0000-0000-0000-000000000045',
    name: 'Lokalise AI',
    description: 'Localization platform with AI translation and quality checks for apps and websites.',
    category: 'Localization',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1719306625402-8d645ba2c6ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc2xhdGlvbiUyMGxhbmd1YWdlJTIwbG9jYWxpemF0aW9ufGVufDF8fHx8MTc2NDY4MDc2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI-driven translation', 'Glossary and style support', 'QA checks', 'Workflow management'],
    url: 'https://lokalise.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000046',
    name: 'GrammarlyGO',
    description: 'AI-powered writing assistant that improves clarity, tone, and correctness.',
    category: 'Editing',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQ1NDQxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Grammar and spelling checks', 'Tone and style adjustments', 'Rewrite suggestions', 'Idea generation'],
    url: 'https://www.grammarly.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000047',
    name: 'Hemingway AI',
    description: 'Writing assistant that simplifies complex text to improve readability.',
    category: 'Editing',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQ1NDQxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Readability scoring', 'Highlighting complex sentences', 'Passive voice detection', 'Style suggestions'],
    url: 'https://hemingwayapp.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000048',
    name: 'Slidebean AI',
    description: 'AI pitch deck generator that designs investor-ready presentations from your content.',
    category: 'Productivity',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1590098563734-bcea80ce34c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzZW50YXRpb24lMjBzbGlkZXMlMjBwaXRjaHxlbnwxfHx8fDE3NjQ2ODA3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI slide creation', 'Deck templates for startups', 'Storyline suggestions', 'Brand customization'],
    url: 'https://slidebean.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000049',
    name: 'Pitch AI',
    description: 'AI-powered slide design inside Pitch that suggests layouts and content improvements.',
    category: 'Productivity',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1590098563734-bcea80ce34c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzZW50YXRpb24lMjBzbGlkZXMlMjBwaXRjaHxlbnwxfHx8fDE3NjQ2ODA3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Smart slide layouts', 'Content rewrite suggestions', 'Template recommendations', 'Collaboration features'],
    url: 'https://pitch.com/'
  },
  {
    id: '00000000-0000-0000-0000-00000000004a',
    name: 'Notion AI',
    description: 'AI assistant inside Notion for generating, summarizing, and restructuring content.',
    category: 'Productivity',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1660145177383-e6e2c22adb5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY0NjA5MzY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Document generation', 'Summaries and action items', 'Brainstorming and outlining', 'Task and note enhancement'],
    url: 'https://www.notion.so/product/ai'
  },
  {
    id: '00000000-0000-0000-0000-00000000004b',
    name: 'ClickUp AI',
    description: 'AI assistant for tasks, docs, and project summaries inside ClickUp.',
    category: 'Project Management',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1758876202522-df2c0dbd0d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudCUyMHBsYW5uaW5nfGVufDF8fHx8MTc2NDY3MjQ0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Task and doc summaries', 'Brainstorming and idea generation', 'AI writing tools', 'Context-aware suggestions'],
    url: 'https://clickup.com/'
  },
  {
    id: '00000000-0000-0000-0000-00000000004c',
    name: 'Airtable AI',
    description: 'AI features inside Airtable that summarize, categorize, and generate content for your bases.',
    category: 'Productivity',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1758876202522-df2c0dbd0d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudCUyMHBsYW5uaW5nfGVufDF8fHx8MTY2NDY3MjQ0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Field summarization', 'Automatic classification', 'Text generation', 'Workflow automation'],
    url: 'https://airtable.com/'
  },
  {
    id: '00000000-0000-0000-0000-00000000004d',
    name: 'Motion',
    description: 'AI time and task planner that auto-schedules your day based on priorities and deadlines.',
    category: 'Project Management',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1758876202522-df2c0dbd0d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudCUyMHBsYW5uaW5nfGVufDF8fHx8MTc2NDY3MjQ0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Automatic task scheduling', 'Priority-based planning', 'Calendar integration', 'Team workload management'],
    url: 'https://www.usemotion.com/'
  },
  {
    id: '00000000-0000-0000-0000-00000000004e',
    name: 'Supernormal',
    description: 'AI note-taker that records and summarizes meetings for research and collaboration.',
    category: 'Research',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBkYXRhfGVufDF8fHx8MTc2NDYxODMyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Meeting recording', 'AI-generated notes', 'Action items extraction', 'Multi-platform support'],
    url: 'https://supernormal.com/'
  },
  {
    id: '00000000-0000-0000-0000-00000000004f',
    name: 'Fireflies.ai',
    description: 'AI meeting assistant that records, transcribes, and analyzes calls.',
    category: 'Productivity',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1660145177383-e6e2c22adb5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY0NjA5MzY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Call recording', 'Transcription', 'AI-generated summaries', 'Searchable meeting history'],
    url: 'https://fireflies.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000050',
    name: 'Whisper',
    description: "OpenAI's highly accurate speech-to-text model for interviews and audio transcription.",
    category: 'Audio',
    pricing: 'Free',
    imageUrl: 'https://images.unsplash.com/photo-1650564416148-41a34875cc2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMG1pY3JvcGhvbmUlMjBwb2RjYXN0fGVufDF8fHx8MTc2NDY3ODE0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['High-accuracy transcription', 'Multilingual support', 'Speaker-agnostic transcription', 'Local or API usage'],
    url: 'https://openai.com/research/whisper'
  },
  {
    id: '00000000-0000-0000-0000-000000000051',
    name: 'Sembly AI',
    description: 'AI assistant that extracts tasks, decisions, and summaries from your calls and meetings.',
    category: 'Productivity',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1660145177383-e6e2c22adb5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY0NjA5MzY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Meeting transcription', 'AI summaries', 'Action item detection', 'Speaker diarization'],
    url: 'https://www.sembly.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000052',
    name: 'AudioPen',
    description: 'Turns messy voice notes into clear, structured text that\'s ready to use.',
    category: 'Writing',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQ1NDQxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Voice-to-structured-text', 'Summaries and rewrites', 'Multiple output formats', 'Simple web UI'],
    url: 'https://audiopen.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000053',
    name: 'Bearly AI',
    description: 'AI reading and summarization assistant for articles, PDFs, and research documents.',
    category: 'Research',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBkYXRhfGVufDF8fHx8MTc2NDYxODMyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Article and PDF summarization', 'Question answering', 'Rewriting', 'Browser and desktop apps'],
    url: 'https://bearly.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000054',
    name: 'Summarize.tech',
    description: 'AI service that summarizes long YouTube videos into concise text overviews.',
    category: 'Research',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1660145177383-e6e2c22adb5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY0NjA5MzY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['YouTube URL input', 'Multi-length summaries', 'Timestamped sections', 'Good for talks and webinars'],
    url: 'https://summarize.tech/'
  },
  {
    id: '00000000-0000-0000-0000-000000000055',
    name: 'Ideogram',
    description: 'AI image generator specializing in accurate typography and text within images.',
    category: 'Typography',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1619616711924-01f3250bc597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwdGV4dCUyMGRlc2lnbnxlbnwxfHx8fDE3NjQ2ODA3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Accurate text rendering in images', 'Poster and graphic design presets', 'Creative typography', 'Photo + text compositions'],
    url: 'https://ideogram.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000056',
    name: 'Leonardo.ai',
    description: 'AI platform for generating high-quality illustrations, textures, and game assets.',
    category: 'Illustration',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1720293315574-911411515624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbGx1c3RyYXRpb24lMjBhcnQlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjQ2NzgxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Multiple style models', 'Illustration generation', 'Texture and asset packs', 'Fine-tuning options'],
    url: 'https://leonardo.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000057',
    name: 'Playground AI',
    description: 'Free-friendly AI image generator with editing, inpainting, and style controls.',
    category: 'Illustration',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1720293315574-911411515624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbGx1c3RyYXRpb24lMjBhcnQlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjQ2NzgxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Prompt-to-image generation', 'Style presets and filters', 'Inpainting and outpainting', 'Image variations'],
    url: 'https://playgroundai.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000058',
    name: 'Recraft',
    description: 'AI vector and illustration generator that creates flat, brand-friendly graphics and icons.',
    category: 'Illustration',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1720293315574-911411515624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbGx1c3RyYXRpb24lMjBhcnQlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjQ2NzgxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Vector-style illustration generation', 'Icon and logo-style outputs', 'Brand-focused colors', 'Editable SVG exports'],
    url: 'https://www.recraft.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000059',
    name: 'Scribble Diffusion',
    description: 'Simple web tool that turns rough sketches into refined images using an AI diffusion model.',
    category: 'Prototyping',
    pricing: 'Free',
    imageUrl: 'https://images.unsplash.com/photo-1567088577683-db233ab9aaab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90b3R5cGUlMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzY0NjE4MzIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Sketch-to-image generation', 'Prompt-based refinement', 'Browser-based interface', 'Multiple variations'],
    url: 'https://scribblediffusion.com/'
  },
  {
    id: '00000000-0000-0000-0000-00000000005a',
    name: 'Kaedim',
    description: 'AI tool that converts 2D concepts into 3D models for games, apps, and product visualization.',
    category: '3D',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1676238560626-45d35b63b38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMG1vZGVsaW5nJTIwZGVzaWdufGVufDF8fHx8MTc2NDYwODcwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['2D-to-3D model generation', 'Game-ready meshes', 'Texture support', 'Artist review pipeline'],
    url: 'https://www.kaedim3d.com/'
  },
  {
    id: '00000000-0000-0000-0000-00000000005b',
    name: 'Meshy',
    description: 'Text-to-3D and image-to-3D generator that creates stylized or realistic 3D assets.',
    category: '3D',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1676238560626-45d35b63b38f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMG1vZGVsaW5nJTIwZGVzaWdufGVufDF8fHx8MTc2NDYwODcwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Prompt-to-3D model creation', 'Texture generation', 'Rigging and animation presets', 'Common 3D export formats'],
    url: 'https://www.meshy.ai/'
  },
  {
    id: '00000000-0000-0000-0000-00000000005c',
    name: 'DeepMotion',
    description: 'AI motion capture and animation service that turns regular video into animated character motion.',
    category: 'Animation',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1744686912094-5a25e7c329b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBlZGl0aW5nfGVufDF8fHx8MTc2NDY3ODE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Video-to-motion capture', 'Auto-rigging of characters', '3D animation export', 'Real-time preview'],
    url: 'https://www.deepmotion.com/'
  },
  {
    id: '00000000-0000-0000-0000-00000000005d',
    name: 'OpusClip',
    description: 'AI video tool that finds highlights in long videos and cuts them into short, captioned clips.',
    category: 'Social Media',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnR8ZW58MXx8fHwxNzY0NjE5NTk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Automatic clip detection', 'Auto captions and layout', 'Social-optimized formats', 'Highlight scoring'],
    url: 'https://www.opus.pro/'
  },
  {
    id: '00000000-0000-0000-0000-00000000005e',
    name: 'ContentFries',
    description: 'Content repurposing platform that splits long content into multiple short-form pieces.',
    category: 'Social Media',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnR8ZW58MXx8fHwxNzY0NjE5NTk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Multi-clip generation', 'Subtitle creation', 'Audiograms and quote cards', 'Batch processing'],
    url: 'https://www.contentfries.com/'
  },
  {
    id: '00000000-0000-0000-0000-00000000005f',
    name: 'Vizard.ai',
    description: 'AI video repurposing tool that finds key moments and generates short, captioned clips.',
    category: 'Social Media',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnR8ZW58MXx8fHwxNzY0NjE5NTk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Highlight detection', 'Auto captioning', 'Social-friendly templates', 'Multi-platform export'],
    url: 'https://vizard.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000060',
    name: 'Play.ht',
    description: 'AI voice generator for podcasts, narration, and product or UX prototype voiceovers.',
    category: 'Audio',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1650564416148-41a34875cc2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMG1pY3JvcGhvbmUlMjBwb2RjYXN0fGVufDF8fHx8MTc2NDY3ODE0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Natural-sounding AI voices', 'Custom voice cloning', 'Podcast hosting options', 'Pronunciation and emphasis controls'],
    url: 'https://play.ht/'
  },
  {
    id: '00000000-0000-0000-0000-000000000061',
    name: 'TTSLabs',
    description: 'Customizable AI text-to-speech platform focused on character and creator voices.',
    category: 'Audio',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1650564416148-41a34875cc2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMG1pY3JvcGhvbmUlMjBwb2RjYXN0fGVufDF8fHx8MTc2NDY3ODE0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Character voice generation', 'Custom voice training', 'Discord and streaming integrations', 'Text-to-speech API'],
    url: 'https://ttslabs.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000062',
    name: 'Resemble.ai',
    description: 'AI voice cloning and synthetic speech platform with emotional control.',
    category: 'Audio',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1650564416148-41a34875cc2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMG1pY3JvcGhvbmUlMjBwb2RjYXN0fGVufDF8fHx8MTc2NDY3ODE0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['High-quality voice cloning', 'Multilingual support', 'Emotion and style controls', 'Real-time and batch synthesis'],
    url: 'https://www.resemble.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000063',
    name: 'Krea AI',
    description: 'Real-time AI image generator and editor that lets you refine visuals as you go.',
    category: 'Illustration',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1720293315574-911411515624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbGx1c3RyYXRpb24lMjBhcnQlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NjQ2NzgxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Real-time image generation', 'Fine-tuning sliders', 'Style and detail controls', 'Canvas-based editing'],
    url: 'https://www.krea.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000064',
    name: 'Genie for Figma',
    description: 'AI assistant inside Figma that generates mobile and web screens from text prompts.',
    category: 'Design',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQ1NzAzMDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Prompt-to-screen generation', 'Component-based layouts', 'Figma-native objects', 'Layout and hierarchy suggestions'],
    url: 'https://genie.design/'
  },
  {
    id: '00000000-0000-0000-0000-000000000065',
    name: 'Locofy',
    description: 'AI-assisted Figma-to-code tool that converts designs into production-ready front-end code.',
    category: 'Dev Handoff',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1556792189-55769c8dfbac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZGV2ZWxvcG1lbnQlMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NjQ1OTI4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Figma and XD plugins', 'React, Next.js, and HTML/CSS export', 'Responsive layout handling', 'Component and variant support'],
    url: 'https://www.locofy.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000066',
    name: 'Anima',
    description: 'Design-to-code platform that turns Figma designs into responsive code with smart mapping.',
    category: 'Dev Handoff',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1556792189-55769c8dfbac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZGV2ZWxvcG1lbnQlMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NjQ1OTI4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Figma plugin', 'React, Vue, and HTML export', 'Responsive layout translation', 'Design token support'],
    url: 'https://www.animaapp.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000067',
    name: 'Zeplin AI',
    description: 'AI-powered enhancements inside Zeplin that improve design documentation and developer handoff.',
    category: 'Dev Handoff',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1556792189-55769c8dfbac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZGV2ZWxvcG1lbnQlMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NjQ1OTI4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Smart spec generation', 'Auto-generated documentation', 'Component usage insights', 'Design system connection'],
    url: 'https://zeplin.io/'
  },
  {
    id: '00000000-0000-0000-0000-000000000068',
    name: 'Supernova',
    description: 'Design system management platform with AI assistance for documentation and token management.',
    category: 'Design Systems',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQ1NzAzMDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Design token synchronization', 'Multi-platform style guides', 'AI-assisted documentation', 'Component library integration'],
    url: 'https://supernova.io/'
  },
  {
    id: '00000000-0000-0000-0000-000000000069',
    name: 'Specify',
    description: 'Automation tool for synchronizing design tokens and assets across tools and codebases.',
    category: 'Design Systems',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQ1NzAzMDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Design token pipelines', 'Asset synchronization', 'Rules-based transformations', 'Multi-target exports'],
    url: 'https://specifyapp.com/'
  },
  {
    id: '00000000-0000-0000-0000-00000000006a',
    name: 'Contrast',
    description: 'Accessibility checker that helps designers test color contrast and accessibility compliance.',
    category: 'Accessibility',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1611926653670-e18689373857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwaW5jbHVzaXZlJTIwZGVzaWdufGVufDF8fHx8MTc2NDY3MzY3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['WCAG contrast checks', 'Color suggestions', 'Simulated vision deficiencies', 'Browser and design tool integrations'],
    url: 'https://usecontrast.com/'
  },
  {
    id: '00000000-0000-0000-0000-00000000006b',
    name: 'Stark AI',
    description: 'Accessibility toolkit for Figma and other tools with AI suggestions and compliance checks.',
    category: 'Accessibility',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1611926653670-e18689373857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwaW5jbHVzaXZlJTIwZGVzaWdufGVufDF8fHx8MTc2NDY3MzY3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Color contrast checking', 'Alt text guidance', 'Accessibility audits', 'Design system accessibility insights'],
    url: 'https://www.getstark.co/'
  },
  {
    id: '00000000-0000-0000-0000-00000000006c',
    name: 'Axure AI',
    description: 'AI-enhanced prototyping workflow in Axure that suggests flows, copy, and interactions.',
    category: 'Prototyping',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1567088577683-db233ab9aaab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90b3R5cGUlMjB3aXJlZnJhbWV8ZW58MXx8fHwxNzY0NjE4MzIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Flow and structure suggestions', 'AI-assisted copy for annotations', 'Prototype element recommendations', 'Integration with existing Axure projects'],
    url: 'https://www.axure.com/'
  },
  {
    id: '00000000-0000-0000-0000-00000000006d',
    name: 'Overflow AI',
    description: 'User flow diagram tool with AI to help generate and refine flowcharts from text.',
    category: 'User Flows',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93Y2hhcnQlMjBkaWFncmFtJTIwc2tldGNofGVufDF8fHx8MTc2NDY4MTU3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Text-to-flowchart generation', 'Auto-layout for user flows', 'Design tool integrations', 'Export and sharing options'],
    url: 'https://overflow.io/'
  },
  {
    id: '00000000-0000-0000-0000-00000000006e',
    name: 'Whimsical AI',
    description: 'Diagramming and ideation tool with AI that generates flowcharts, mind maps, and text content.',
    category: 'Diagramming',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93Y2hhcnQlMjBkaWFncmFtJTIwc2tldGNofGVufDF8fHx8MTc2NDY4MTU3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI-generated flowcharts and mind maps', 'Wireframing and diagramming tools', 'Docs and sticky notes', 'Real-time collaboration'],
    url: 'https://whimsical.com/'
  },
  {
    id: '00000000-0000-0000-0000-00000000006f',
    name: 'Taskade AI',
    description: 'AI-powered workspace for mind maps, docs, and project planning with real-time collaboration.',
    category: 'Productivity',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1660145177383-e6e2c22adb5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY0NjA5MzY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI mind map and outline generation', 'Project planning and tasks', 'Document editor with AI', 'Real-time collaboration'],
    url: 'https://www.taskade.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000070',
    name: 'Penpot AI',
    description: 'Open-source design tool exploring AI features for UI design and collaboration.',
    category: 'Design',
    pricing: 'Free',
    imageUrl: 'https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQ1NzAzMDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Vector-based UI design', 'Design collaboration in the browser', 'AI-assisted features (in development / experimental)', 'Open-source and self-hostable'],
    url: 'https://penpot.app/'
  },
  {
    id: '00000000-0000-0000-0000-000000000071',
    name: 'UX Pilot',
    description: 'AI assistant for UX designers that generates tasks, wireframes, research plans, user flows, and UX documentation based on product briefs or prompts.',
    category: 'Research',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBkYXRhfGVufDF8fHx8MTc2NDYxODMyMHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI user flows', 'Research plan generation', 'Wireframe suggestions', 'UX documentation templates', 'Requirement extraction from prompts', 'Persona and scenario generation'],
    url: 'https://uxpilot.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000072',
    name: 'Magic PathAI',
    description: 'AI-powered UX flow generator that creates multi-step user journeys and product flows from natural language prompts.',
    category: 'User Flows',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93Y2hhcnQlMjBkaWFncmFtJTIwc2tldGNofGVufDF8fHx8MTc2NDY4MTU3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Prompt-to-flow generation', 'Multi-path scenario suggestions', 'Automatic branching', 'Export to FigJam / Whiteboards', 'Persona-aware flow variations'],
    url: 'https://magicpath.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000073',
    name: 'JourneyAI',
    description: 'AI tool that generates customer journey maps, pain points, emotional curves, and opportunity insights from short prompts or personas.',
    category: 'Journey Mapping',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1758613171233-f4e9a58a558a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwam91cm5leSUyMG1hcHBpbmd8ZW58MXx8fHwxNzY0NTc0NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Journey map generation', 'AI pain point detection', 'Persona-driven flows', 'Opportunity and solution insights', 'Export to Miro and FigJam'],
    url: 'https://journeyai.app/'
  },
  {
    id: '00000000-0000-0000-0000-000000000074',
    name: 'FlowWise AI',
    description: 'Prompt-based user flow generator that outputs clean flowcharts and decision trees for product teams.',
    category: 'User Flows',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93Y2hhcnQlMjBkaWFncmFtJTIwc2tldGNofGVufDF8fHx8MTc2NDY4MTU3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI-generated user flows', 'Decision-tree mapping', 'Multiple flow variations', 'Export to PNG, SVG, and whiteboards'],
    url: 'https://flowwise.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000075',
    name: 'UX Brain',
    description: 'AI copilot for UX research that turns transcripts, notes, and recordings into structured insights and themes.',
    category: 'Analysis',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGFuYWx5c2lzJTIwZGF0YXxlbnwxfHx8fDE3NjQ2MjcyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Interview insight extraction', 'Theme clustering', 'Sentiment tagging', 'Research summary templates'],
    url: 'https://uxbrain.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000076',
    name: 'Maze Generator',
    description: 'AI-powered test generator inside Maze that creates usability tasks, screening questions, and surveys automatically.',
    category: 'User Testing',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-b06985bceb24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwdGVzdGluZyUyMGZlZWRiYWNrfGVufDF8fHx8MTc2NDU0MDA5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Task scenario generation', 'AI screening questions', 'Survey question generator', 'Prototype test setup assistant'],
    url: 'https://maze.co/'
  },
  {
    id: '00000000-0000-0000-0000-000000000077',
    name: 'FigFlow AI',
    description: 'Figma plugin that generates user flows directly from selected frames or text prompts.',
    category: 'User Flows',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93Y2hhcnQlMjBkaWFncmFtJTIwc2tldGNofGVufDF8fHx8MTc2NDY4MTU3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Flow generation from frames', 'Text-to-flow prompts', 'Connector and shape styling', 'Auto-layout optimization'],
    url: 'https://figflow.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000078',
    name: 'ResearchRabbit AI',
    description: 'AI research aggregator that builds literature maps and relationships between topics, articles, and insights.',
    category: 'Research',
    pricing: 'Free',
    imageUrl: 'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGFuYWx5c2lzJTIwZGF0YXxlbnwxfHx8fDE3NjQ2MjcyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['AI literature clustering', 'Insight graph visualization', 'Topic discovery', 'Smart recommendations'],
    url: 'https://researchrabbitapp.com/'
  },
  {
    id: '00000000-0000-0000-0000-000000000079',
    name: 'FlowJourney',
    description: 'AI that generates multistep task flows and system diagrams for onboarding, checkout, and core product experiences.',
    category: 'User Flows',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93Y2hhcnQlMjBkaWFncmFtJTIwc2tldGNofGVufDF8fHx8MTc2NDY4MTU3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Task breakdown generation', 'System diagram creation', 'Multiple scenario branches', 'Export to whiteboards'],
    url: 'https://flowjourney.ai/'
  },
  {
    id: '00000000-0000-0000-0000-00000000007a',
    name: 'PlanFlow AI',
    description: 'AI tool that converts product briefs into feature plans, acceptance criteria, and UX scenarios.',
    category: 'Planning',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1762341102506-8060fc9e825a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFubmluZyUyMHN0cmF0ZWd5JTIwZG9jdW1lbnRzfGVufDF8fHx8MTc2NDY4NzI2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Feature breakdown', 'Acceptance criteria generator', 'Scenario mapping', 'Requirement extraction'],
    url: 'https://planflow.ai/'
  },
  {
    id: '00000000-0000-0000-0000-00000000007b',
    name: 'UserPersona AI',
    description: 'AI persona generator that produces data-backed personas, behaviors, motivations, and journey insights.',
    category: 'Personas',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1672843164650-b39a24c549a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hJTIwdXNlciUyMHByb2ZpbGV8ZW58MXx8fHwxNzY0Njg3MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Persona generation', 'Behavior patterns', 'Motivations and frustrations', 'Journey touchpoints'],
    url: 'https://userpersona.ai/'
  },
  {
    id: '00000000-0000-0000-0000-00000000007c',
    name: 'InsightForge AI',
    description: 'Insight synthesis tool that turns raw research notes, survey responses, and interviews into themes and UX insights.',
    category: 'Analysis',
    pricing: 'Paid',
    imageUrl: 'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGFuYWx5c2lzJTIwZGF0YXxlbnwxfHx8fDE3NjQ2MjcyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: ['Theme clustering', 'Insight generation', 'Sentiment tagging', 'Stakeholder-ready summaries'],
    url: 'https://insightforge.ai/'
  },
  {
    id: '00000000-0000-0000-0000-000000000083',
    name: 'Tempo',
    description: 'Tempo is an AI-powered visual IDE and app builder, enabling designers, product managers and developers to generate production-ready React/React Native apps from prompts — combining design, code and collaboration in one tool.',
    category: 'Dev Handoff',
    pricing: 'Freemium',
    imageUrl: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZGV2ZWxvcG1lbnQlMjBJREV8ZW58MXx8fHwxNzY1MjgwNzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Prompt-to-code generation (React / React Native)', 'Visual design + live editing UI (drag & drop, pixel-perfect control)', 'Prebuilt SaaS templates (auth, payments, backend integrations)', 'GitHub / GitLab integration & local mode support', 'One-click deploy & export to production code', 'Support for mobile (Expo / React Native)'],
    url: 'https://tempo.new'
  }
];

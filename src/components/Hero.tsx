export function Hero() {
  return (
    <div className="bg-gradient-to-b from-muted/50 to-background py-16 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <h1 className="mb-4">
          Discover AI Tools Built for UX Designers
        </h1>
        <p className="text-muted-foreground mb-8">
          A curated collection of artificial intelligence tools to supercharge your UX design workflow — 
          from research and prototyping to testing and analytics.
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
            Research
          </span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
            Prototyping
          </span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
            Testing
          </span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
            Analytics
          </span>
        </div>
      </div>
    </div>
  );
}

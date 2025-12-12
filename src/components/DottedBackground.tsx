export function DottedBackground() {
  return (
    <div 
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(circle, #CCCCCC 1px, transparent 1px)`,
        backgroundSize: '17px 17px',
        backgroundPosition: '0 0',
      }}
    />
  );
}
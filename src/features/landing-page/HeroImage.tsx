export function HeroImage() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-medium animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 z-10"></div>
      <img
        src="/placeholder.svg?height=400&width=600"
        alt="People sharing iftar meal"
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}

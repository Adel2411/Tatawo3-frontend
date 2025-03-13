export function HeroImage() {
  return (
    <div className="flex justify-center items-center relative h-[400px] w-full overflow-hidden rounded-xl shadow-medium animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 z-10"></div>
      <img
        src="/Logo.svg"
        alt="People sharing iftar meal"
        className="w-96 h-28 object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}

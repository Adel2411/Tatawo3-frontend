import Image from "next/image";

export function HeroImage() {
  return (
    <div className="flex justify-center items-center relative h-[400px] w-full overflow-hidden rounded-xl shadow-medium animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/20 z-10"></div>
      <Image
        src="/Logo.svg"
        alt="People sharing iftar meal"
        width={300}
        height={300}
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}

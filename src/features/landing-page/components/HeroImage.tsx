import Image from "next/image";

export function HeroImage() {
  return (
    <div className="flex justify-center items-center h-[400px] w-full overflow-hidden rounded-xl shadow-medium animate-fade-in">
      <Image
        src="/iftar.jpg"
        alt="People sharing iftar meal"
        width={700}
        height={700}
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}

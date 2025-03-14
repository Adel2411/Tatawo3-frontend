import Image from "next/image";

export function HeroImage() {
  return (
    <div className="flex justify-center items-center h-[500px] w-full overflow-hidden rounded-xl shadow-medium animate-fade-in">
      <Image
        src="/iftar.png"
        alt="People sharing iftar meal"
        width={500}
        height={500}
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}

import TopSection from "@/components/Landing/TopSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative pt-40">
      <Image
        src="/landing/star.png"
        alt="stars"
        width={1000}
        height={1000}
        className="absolute left-0 top-0 h-auto w-full"
      />
      <TopSection />
    </div>
  );
}

import Image from "next/image";
import TechCard from "../TechCard";
import { LiaRulerVerticalSolid } from "react-icons/lia";

export default function TopSection() {
  return (
    <div className="relative">
      <Image
        src="/landing/leftBanner.png"
        alt="leftBanner"
        width={1000}
        height={1000}
        className="absolute left-0 top-0 -z-10 h-auto w-1/3"
      />
      <Image
        src="/landing/rightBanner.png"
        alt="rightBanner"
        width={1000}
        height={1000}
        className="absolute right-0 top-0 -z-10 h-auto w-1/3"
      />
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center gap-2">
          <Image
            src="/landing/starIcon.png"
            alt="star icon"
            width={70}
            height={70}
          />
          <h1 className="linear-text linear-primary-1 text-6xl font-semibold">
            Sevin Team
          </h1>
        </div>
        <h2 className="linear-text linear-gray-1 text-6xl font-semibold">
          Steps To Lunch A Website!
        </h2>
      </div>
      <div className="mt-48 grid grid-cols-5 gap-8 px-8">
        <TechCard
          icon={<LiaRulerVerticalSolid color="white" size={32} />}
          title="UI/UX Designer"
          programmer="Programmer Dev"
        />
        <TechCard
          icon={<LiaRulerVerticalSolid color="white" size={32} />}
          title="UI/UX Designer"
          programmer="Programmer Dev"
        />
        <TechCard
          icon={<LiaRulerVerticalSolid color="white" size={32} />}
          title="UI/UX Designer"
          programmer="Programmer Dev"
        />
        <TechCard
          icon={<LiaRulerVerticalSolid color="white" size={32} />}
          title="UI/UX Designer"
          programmer="Programmer Dev"
        />
        <TechCard
          icon={<LiaRulerVerticalSolid color="white" size={32} />}
          title="UI/UX Designer"
          programmer="Programmer Dev"
        />
      </div>
    </div>
  );
}

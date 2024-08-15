"use client";
import Image from "next/image";
import TechCard from "../TechCard";
import { LiaRulerVerticalSolid } from "react-icons/lia";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/homePagination.scss";
import { Pagination } from "swiper/modules";

export default function TopSection() {
  const techs = [
    {
      icon: <LiaRulerVerticalSolid color="white" size={32} />,
      title: "UI/UX Designer",
      programmer: "Programmer Dev",
    },
    {
      icon: <LiaRulerVerticalSolid color="white" size={32} />,
      title: "UI/UX Designer",
      programmer: "Programmer Dev",
    },
    {
      icon: <LiaRulerVerticalSolid color="white" size={32} />,
      title: "UI/UX Designer",
      programmer: "Programmer Dev",
    },
    {
      icon: <LiaRulerVerticalSolid color="white" size={32} />,
      title: "UI/UX Designer",
      programmer: "Programmer Dev",
    },
    {
      icon: <LiaRulerVerticalSolid color="white" size={32} />,
      title: "UI/UX Designer",
      programmer: "Programmer Dev",
    },
    {
      icon: <LiaRulerVerticalSolid color="white" size={32} />,
      title: "UI/UX Designer",
      programmer: "Programmer Dev",
    },
    {
      icon: <LiaRulerVerticalSolid color="white" size={32} />,
      title: "UI/UX Designer",
      programmer: "Programmer Dev",
    },

    {
      icon: <LiaRulerVerticalSolid color="white" size={32} />,
      title: "UI/UX Designer",
      programmer: "Programmer Dev",
    },
  ];
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: any) {
      return `
      <div class="${className}">
        <span class="pagination-number">${index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
        <span class="pagination-bullet"/>
      </div>
      `;
    },
  };
  return (
    <div className="relative overflow-hidden pb-80">
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
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        className="mt-48 w-full !overflow-visible !px-8"
        modules={[Pagination]}
        pagination={pagination}
      >
        {techs.map((tech) => {
          return (
            <SwiperSlide>
              <TechCard
                key={tech.title}
                icon={tech.icon}
                title={tech.title}
                programmer={tech.programmer}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

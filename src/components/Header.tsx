import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";

export default function Header() {
  return (
    <div className="fixed left-0 top-0 flex w-screen items-center justify-between p-12 pb-0">
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="logo" width={60} height={60} />
        <div className="flex flex-col gap-1 text-white">
          <div className="text-xl font-bold">Group Sevin Team</div>
          <div className="linear-text linear-gray-1 text-lg font-semibold">
            Digital Marketing | Software Dev
          </div>
        </div>
      </div>
      <button>
        <CgMenuRightAlt color="white" size={50} />
      </button>
    </div>
  );
}

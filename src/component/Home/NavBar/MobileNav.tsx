// import { navLinks } from "@/constants/constants";
// import Link from "next/link";
// import React from "react";
// import { CircleX } from "lucide-react";

// type Props = {
//   showNav: boolean;
//   closeNav: () => void;
// };
// const MobileNav = ({ showNav, closeNav }: Props) => {
//   const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

//   return (
//     // overlay
//     <div
//       className={`fixed ${navOpen} insert-0 transform translate-all duration-500 z-[100] bg-black opacity-45 w-full h-screen`}
//     >
//       {/* Navlinks */}

//       <div
//         className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform translate-all duration-500 delay-500 w-[80%] sm:w-[60%] bg-green-400 space-y-2 z-[101]`}
//       >
//         {navLinks.map((link) => (
//           <Link href={link.url} key={link.id} className="relative group">
//             <p className="text-white w-fit text-2xl ml-12 border-b-2 pb-1 border-white sm:text-2xl">
//               {link.label}
//             </p>
//           </Link>
//         ))}
//         {/* close icon */}
//         <CircleX
//           onClick={closeNav}
//           className="absolute top-3 right-6 sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
//         />
//       </div>
//     </div>
//   );
// };

// export default MobileNav;

import { navLinks } from "@/constants/constants";
import Link from "next/link";
import React from "react";
import { CircleX } from "lucide-react";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  return (
    <>
      {/* Overlay */}
      {showNav && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[100] transition-opacity duration-300"
          onClick={closeNav}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[80%] sm:w-[60%] bg-green-400 text-white z-[101] flex flex-col space-y-6 p-8 transform transition-transform duration-300 ${
          showNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <button
          onClick={closeNav}
          className="absolute top-4 right-4 text-white focus:outline-none"
          aria-label="Close Menu"
        >
          <CircleX className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4 mt-12">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={closeNav}
              className="text-2xl sm:text-3xl font-medium border-b-2 border-transparent hover:border-white transition-all duration-200 ml-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileNav;

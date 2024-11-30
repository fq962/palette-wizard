import { getRandomAnimation } from "@/utils/animations/RandomAnimateTittle";
import { motion } from "motion/react";
import { useRouter } from "next/router";

export const Title = () => {
  const mesActual = new Date().getMonth() + 1;
  const router = useRouter();

  const handleClickOnLogo = () => router.push("/");

  return (
    <div
      className="flex items-center justify-center cursor-pointer"
      onClick={handleClickOnLogo}
    >
      <span className="flex flex-col relative group">
        <h4 className="text-4xl font-sf-display-bold opacity-85 absolute group-hover:scale-105 group-hover:-translate-x-1.5 transition-transform duration-150 ease-in">
          <span className={`${mesActual === 11 ? "text-[#cc0c39]" : ""}`}>
            pale
          </span>
          {/* Esta T, no se muestra, solo es por un error mierda raro de TW */}
          <span className={` ml-2 -translate-y-32 rotate-[12deg] hidden`}>
            t
          </span>
          <span
            className={`${
              mesActual === 11 ? "text-[#795548]" : ""
            } ml-2 -translate-y-1.5 rotate-[12deg] inline-block`}
          >
            t
          </span>
          <span
            className={`${
              mesActual === 11 ? "text-[#795548]" : ""
            } ml-2 -translate-y-1.5 rotate-[-12deg] inline-block`}
          >
            t
          </span>
          <span className={`${mesActual === 11 ? "text-[#cc0c39]" : ""} ml-2`}>
            e
          </span>
        </h4>
        <h2
          className={`${
            mesActual === 11 ? "text-[#085749]" : ""
          } text-8xl font-sf-display-bold mt-3 ml-2 group-hover:scale-105 transition-transform duration-150 ease-in`}
        >
          {"wizard".split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block"
              whileHover={getRandomAnimation()}
            >
              {char}
            </motion.span>
          ))}
        </h2>
      </span>
    </div>
  );
};

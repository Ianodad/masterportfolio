import { TypeAnimation } from "react-type-animation";

export const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Artist",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Web Builder",
        1500,
        "Fullstack Developer",
        1500,
        "Devops",
        1500,
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] text-[#e65a55] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

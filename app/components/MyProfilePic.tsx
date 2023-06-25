import Image from "next/image";
import React from "react";

export default function MyProfilePic() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-16 items-center ">
    <section className="w-auto ">
      <Image
        src="/images/profile.png"
        width={200}
        height={200}
        alt="Akshay Varma"
        priority={true}
        className="border-4 border-black dark:border-white drop-shadow-xl shadow-black rounded-full  mt-8"
        />
    </section>
      <picture className="border-4 border-black dark:border-white drop-shadow-xl shadow-black rounded-xl  m-8"
      >
      <img
        src="https://leetcard.jacoblin.cool/butcanudothis?ext=heatmap&theme=nord"
        alt="Akshay Varma"

      />
      </picture>
    </div>
  );
}

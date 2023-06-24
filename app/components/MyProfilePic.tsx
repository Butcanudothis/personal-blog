import Image from "next/image";
import React from "react";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        src="/images/profile.png"
        width={200}
        height={200}
        alt="Akshay Varma"
        priority={true}
        className="border-4 border-black dark:border-white drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
      />
    </section>
  );
}

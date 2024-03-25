"use client";

import { watchImg } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import VideoCarousel from "./VideoCarousel";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const scrollRef = useRef();

  useGSAP(() => {
    // const boxes = gsap.utils.toArray(scrollRef.current.children);
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  });
  return (
    <section
      className="w-screen overflow-hidden bg-zinc h-full common-padding"
      id="#highlights"
    >
      <div className="screen-max-width">
        <div className="md:flex mb-12 w-full items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap gap-5 items-end">
            <p className="link">
              Watch the film{" "}
              <Image
                src={watchImg}
                height={18}
                width={18}
                alt="play icon"
                className="ml-2"
              />
            </p>
            <p className="link">
              Watch the film{" "}
              <Image
                src={watchImg}
                height={18}
                width={18}
                alt="play icon"
                className="ml-2"
              />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;

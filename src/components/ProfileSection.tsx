"use client";
import React, { useEffect, useState } from "react";
import { SparklesPreview } from "./SparklesPreview";
import Image from "next/image";
import boxArray from "../data/planets.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

function ProfileSection() {
  const radius = 240;
  const angleStep = (2 * Math.PI) / 12;

  useGSAP(() => {
    gsap.to("#rotator", {
      transform: "rotate(120deg)",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#sec",
        scroller: "body",
        scrub: 4,
      },
    });
  });

  return (
    <div id="sec" className="flex flex-col h-full w-full max-w-full">
      <SparklesPreview /> 
    </div>
  );
}

export default ProfileSection;

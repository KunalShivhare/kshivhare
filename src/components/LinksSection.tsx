"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Github, Linkedin, Mail } from "lucide-react";

const people = [
  {
    id: 1,
    name: "Kunal Shivhare",
    designation: "LinkedIn",
    link: "https://www.linkedin.com/in/kunalshivhare/",
    image: "/linkedin.png",
  },
  {
    id: 2,
    name: "Kunal Shivhare",
    designation: "Github",
    link: "https://github.com/KunalShivhare",
    image: "/github.png",
  },
  {
    id: 3,
    name: "Kunal Shivhare",
    designation: "Leetcode",
    link: "https://leetcode.com/u/kunalshivhare58/",
    image: "/leetcode.png",
  },
  {
    id: 4,
    name: "Kunal Shivhare",
    designation: "G Mail",
    link: "mailto:kunalshivhare58@gmail.com",
    image: "/gmail.png",
  },
];

export function LinksSection() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import {
  SiReact,
  SiNextdotjs,
  SiVite,
  SiAngular,
  SiHtml5,
  SiCss,
  SiVuedotjs,
  SiTypescript,
} from "react-icons/si";

const frameworks = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "Vue", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
];

export function FrameworksSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Build in any stack</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Generate production-ready code in the framework your team already uses.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {frameworks.map((fw, i) => {
            const Icon = fw.icon;
            return (
              <motion.div
                key={fw.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
              >
                <Card className="border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="flex flex-col items-center justify-center gap-3 py-8">
                    <Icon
                      className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: fw.color }}
                    />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {fw.name}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
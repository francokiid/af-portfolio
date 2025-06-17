import { BsBootstrap, BsFiletypeScss } from "react-icons/bs";
import { IconCard } from "../cards/IconCard";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiPhp,
  SiDjango,
  SiPostgresql,
  SiWordpress,
  SiElementor,
  SiFigma,
  SiCanva,
} from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

export const Skills = () => {
  const cards = [
    { icon: <SiHtml5 />, label: "HTML5" },
    { icon: <SiCss3 />, label: "CSS3" },
    { icon: <BsBootstrap />, label: "Bootstrap" },
    { icon: <SiTailwindcss />, label: "Tailwind" },
    { icon: <BsFiletypeScss />, label: "SCSS" },
    { icon: <SiJavascript />, label: "JavaScript" },
    { icon: <SiReact />, label: "React" },
    { icon: <SiPhp />, label: "PHP" },
    { icon: <SiDjango />, label: "Django" },
    { icon: <SiPostgresql />, label: "PostgreSQL" },
    { icon: <TbBrandMysql />, label: "MySQL" },
    { icon: <SiWordpress />, label: "Wordpress" },
    { icon: <SiElementor />, label: "Elementor" },
    { icon: <SiFigma />, label: "Figma" },
    { icon: <SiCanva />, label: "Canva" },
  ];

  const skills = [
    "Prototyping",
    "Responsive Design",
    "Usability Testing",
    "Git Versioning",
    "Basic SEO Concepts",
  ];

  return (
    <section id="skills" className="bg-neutral-200 dark:bg-neutral-900">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="mx-auto w-full max-w-5xl px-8"
      >
        {/* Top Paragraph */}
        <p className="mb-10">
          <span className="text-md font-bold md:text-lg">
            MY DIGITAL TOOLSET.
          </span>{" "}
          The tech and tools I use to build my web projects.
        </p>

        {/* Flex Row with Grid and Description */}
        <div className="relative flex flex-col items-center gap-8 md:flex-row md:items-stretch md:gap-10">
          {/* Icon Grid */}
          <div className="grid flex-1 grid-cols-4 gap-2 md:grid-cols-5 md:gap-4">
            {cards.map((card, index) => (
              <IconCard key={index} icon={card.icon} label={card.label} />
            ))}
          </div>

          {/* Description Box */}
          <div className="custom-inset h-full rounded-lg border p-6 dark:border-neutral-800 md:w-1/3 md:p-10">
            <p className="mb-4">Skills I’ve worked with:</p>
            <ul className="mb-4 list-inside list-disc space-y-1">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <p>
              Primarily frontend, with backend experience and a drive to grow
              further.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

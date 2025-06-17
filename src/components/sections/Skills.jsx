import { BsBootstrap, BsFiletypeScss } from "react-icons/bs";
import { IconCard } from "../cards/IconCard";
import { SiHtml5, SiCss3, SiTailwindcss, SiReact, SiJavascript, SiPhp, SiDjango, SiPostgresql, SiWordpress, SiElementor, SiFigma, SiCanva } from 'react-icons/si';
import { TbBrandMysql } from "react-icons/tb";


export const Skills = () => {
  const cards = [
    { icon: <SiHtml5/>, label: 'HTML5' },
    { icon: <SiCss3/>, label: 'CSS3' },
    { icon: <BsBootstrap/>, label: 'Bootstrap' },
    { icon: <SiTailwindcss/>, label: 'Tailwind' },
    { icon: <BsFiletypeScss/>, label: 'SCSS' },
    { icon: <SiJavascript/>, label: 'JavaScript' },
    { icon: <SiReact/>, label: 'React' },
    { icon: <SiPhp/>, label: 'PHP'},
    { icon: <SiDjango/>, label: 'Django'},
    { icon: <SiPostgresql/>, label: 'PostgreSQL'},
    { icon: <TbBrandMysql/>, label: 'MySQL'},
    { icon: <SiWordpress/>, label: 'Wordpress'},
    { icon: <SiElementor/>, label: 'Elementor'},
    { icon: <SiFigma/>, label: 'Figma'},
    { icon: <SiCanva/>, label: 'Canva'},
  ];

  const skills = [
    'Prototyping', 'Responsive Design', 'Usability Testing', 'Git Versioning', 'Basic SEO Concepts'
  ];

  return (
    <section id='skills' className='bg-neutral-200'>
      <div className='mx-auto max-w-5xl w-full px-8'>

        {/* Top Paragraph */}
        <p className="mb-10">
          <span className="font-bold">MY DIGITAL TOOLSET.</span> The tech and tools I use to build my web projects.
        </p>

        {/* Flex Row with Grid and Description */}
        <div className='flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-10 relative'>

          {/* Icon Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 gap-4 flex-1">
            {cards.map((card, index) => (
              <IconCard key={index} icon={card.icon} label={card.label} />
            ))}
          </div>

          {/* Description Box */}
          <div className="md:w-1/3 h-full border-2 rounded-lg custom-inset p-6 md:p-10">
            <p className="mb-4">
              Skills I’ve worked with:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <p className="mb-0">
              Primarily frontend, with backend experience and a drive to grow further.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

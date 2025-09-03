import { FeatureCard } from "../cards/FeatureCard";

export const Projects = () => {
  const images = {
    csd: new URL("../assets/csd.jpg", import.meta.url).href,
    topDrive: new URL("../assets/top-drive.jpg", import.meta.url).href,
    vaxCare: new URL("../assets/vax-care.jpg", import.meta.url).href,
    gotika: new URL("../assets/gotika.jpg", import.meta.url).href,
    fablink: new URL("../assets/fablink.jpg", import.meta.url).href,
    hangman: new URL("../assets/hangman.jpg", import.meta.url).href,
  };

  const projects = [
    {
      media: "top-drive.png",
      title: "Top Drive MIS | 2025",
      live: "",
      demo: "https://drive.google.com/file/d/1hFtkOYwe01FDbh-yQIhciJ4ZD8ovcdS_/view?usp=drivesdk",
      repo: "https://github.com/francokiid/top_drive_frontend",
      description:
        "A management information system with a resource recommendation feature through dynamic dropdowns.",
    },
    {
      media: "csd.png",
      title: "Revamped CSD Website | 2025",
      live: "https://dev-sustainability.batstate-u.edu.ph/events/",
      repo: "",
      demo: "",
      description:
        "A WordPress site with content management features showcasing sustainable solutions, resources, and articles.",
    },
    {
      media: "gotika.png",
      title: "GoTika App | 2024",
      live: "",
      demo: "https://www.figma.com/design/Eidy3vGo5jbOYUTMrlWg38/GoTika-Mockup?node-id=0-1&t=qJoznmhrhrDQL8lU-1",
      repo: "",
      description:
        "A mockup design and presentation of an all-in-one pharmacy app.",
    },
    {
      media: "fablink.png",
      title: "FabLink App | 2025",
      live: "",
      demo: "https://www.figma.com/proto/oWEaAhnPulKZSj4G6umzcw/FabLink?page-id=0%3A1&node-id=11-79&p=f&viewport=639%2C561%2C0.15&t=xMXfh0xct89Heg7P-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=11%3A79",
      repo: "",
      description: "A mockup design of a booking app for fabrication needs.",
    },
    {
      media: "vax-care.png",
      title: "Vax-Care | 2023",
      live: "https://vax-care.kesug.com/",
      demo: "https://youtu.be/4Yq0G_3GDUA?si=VxbYXrrzjXeYkXJH",
      repo: "https://github.com/francokiid/vax-care",
      description:
        "A vaccination record management system for health workers and pregnant women.",
    },
    {
      media: "hangman.png",
      title: "Hangman: Countries | 2022",
      live: "",
      demo: "",
      repo: "https://github.com/francokiid/hangman_countries",
      description:
        "A classic word game in which a player has to guess a random country one letter at a time.",
    },
    {
      media: "homicare.png",
      title: "Homicare | WORK IN PROGRESS",
      live: "",
      demo: "https://www.figma.com/design/DRAfAdcPvdhSXhpLsPBH3n/homicare?node-id=3-2&t=hGgoJtSyrV4nEZ7C-1",
      repo: "",
      description:
        "A web app that connects patients with licensed physical therapists for in-home therapy sessions.",
    },
  ];

  return (
    <section
      id="projects"
      className="border-y-1 custom-inset min-h-screen flex-col bg-neutral-100 dark:bg-neutral-900"
    >
      <div data-aos="fade-up" data-aos-delay="200" className="max-w-5xl px-8">
        <p className="mb-10">
          <span className="text-md font-bold md:text-lg">
            MY FEATURED WORKS.
          </span>{" "}
          A selection of web apps and designs I’ve built with creativity and
          code.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <FeatureCard
              key={index}
              media={project.media}
              title={project.title}
              live={project.live}
              demo={project.demo}
              repo={project.repo}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

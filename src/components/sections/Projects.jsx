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
      media: "csd.png",
      title: "Revamped CSD Website",
      demo: "https://dev-sustainability.batstate-u.edu.ph/",
      repo: "",
      description:
        "A WordPress site with content management features showcasing sustainable solutions, resources, and articles.",
    },
    {
      media: "top-drive.png",
      title: "Top Drive MIS",
      demo: "https://www.topdrivedrivinginstitute.com/",
      repo: "https://github.com/francokiid/top_drive_frontend",
      description:
        "A management information system with a resource recommendation feature through dynamic dropdowns.",
    },
    {
      media: "vax-care.png",
      title: "Vax-Care",
      demo: "https://vax-care.kesug.com/",
      repo: "https://github.com/francokiid/vax-care",
      description:
        "A vaccination record management system for health workers and pregnant women.",
    },
    {
      media: "gotika.png",
      title: "GoTika App",
      demo: "https://www.figma.com/proto/Eidy3vGo5jbOYUTMrlWg38/GoTika-Mockup?page-id=0%3A1&node-id=1-1715&p=f&viewport=942%2C373%2C0.24&t=r5tfZBo9aLsVVqCo-1&scaling=min-zoom&content-scaling=fixed",
      repo: "",
      description: "A mockup design of an all-in-one pharmacy app.",
    },
    {
      media: "fablink.png",
      title: "FabLink App",
      demo: "https://www.figma.com/proto/oWEaAhnPulKZSj4G6umzcw/FabLink?page-id=0%3A1&node-id=11-79&p=f&viewport=639%2C561%2C0.15&t=xMXfh0xct89Heg7P-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=11%3A79",
      repo: "",
      description: "A mockup design of a booking app for fabrication needs.",
    },
    {
      media: "hangman.png",
      title: "Hangman: Countries",
      demo: "",
      repo: "https://github.com/francokiid/hangman_countries",
      description:
        "A classic word game in which a player has to guess a random country one letter at a time.",
    },
  ];

  return (
    <section
      id="projects"
      className="border-y-1 custom-inset min-h-screen flex-col bg-neutral-100 dark:bg-neutral-900"
    >
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1500"
        className="max-w-5xl px-8"
      >
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

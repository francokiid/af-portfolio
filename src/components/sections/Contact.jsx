import { LuGithub, LuMail, LuLinkedin } from "react-icons/lu";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="custom-inset bg-gradient-to-b from-neutral-100 to-neutral-400 text-center dark:from-neutral-900 dark:to-neutral-600"
    >
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="mx-auto flex max-w-5xl flex-col gap-5 px-8 md:gap-10"
      >
        <h2 className="mb-4 text-4xl font-bold md:text-6xl">GET IN TOUCH</h2>
        <p>
          Interested in working together? Reach out via any of my social links
          below.
        </p>
        <div className="flex flex-row items-center justify-center gap-4 text-2xl md:text-4xl">
          <a
            href="https://www.linkedin.com/in/angelendayafranco/"
            target="_blank"
          >
            <LuLinkedin />
          </a>
          <a href="https://github.com/francokiid" target="_blank">
            <LuGithub />
          </a>
          <a
            href="mailto:angelendayafranco@gmail.com?subject=Let's%20Connect&body=Hi%20Angel%2C"
            target="_blank"
          >
            <LuMail />
          </a>
        </div>
      </div>
    </section>
  );
};

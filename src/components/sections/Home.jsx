import { FaCaretRight } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

export const Home = () => {
  return (
    <section
      id="home"
      className="bg-grid min-h-screen justify-center bg-neutral-100 dark:bg-neutral-900"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-8 text-center font-bold">
        {/* Text Section */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="text-6xl leading-none md:text-9xl">
            <span
              data-aos="fade-right"
              data-aos-delay="500"
              className="inline-block"
            >
              ANGEL
            </span>
            <br />
            <span
              data-aos="fade-left"
              data-aos-delay="500"
              className="outline-text inline-block"
            >
              FRANCO
            </span>
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-delay="1000"
            className="text-md md:text-3xl"
          >
            UI/UX Designer & Frontend Developer
          </h2>
        </div>

        {/* Button Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="1000"
          className="flex flex-col justify-center gap-3 text-sm font-bold md:flex-row md:gap-6 md:text-lg"
        >
          <a
            href="#projects"
            className="dark:bg-neutral-5 0 flex items-center justify-center rounded-md border border-neutral-900 bg-neutral-900 px-4 py-2 text-neutral-100 hover:bg-neutral-950 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 md:border-2 md:px-8"
          >
            View Projects
            <FaCaretRight className="ml-2" />
          </a>
          <button className="hover:bg-neutral'-200 flex items-center justify-center rounded-md border border-neutral-900 bg-neutral-100 px-4 py-2 text-neutral-900 hover:bg-neutral-200 dark:border-neutral-200 dark:bg-neutral-900 dark:bg-transparent dark:text-neutral-100 dark:hover:bg-neutral-950 md:border-2 md:px-8">
            Download Resume
            <MdDownload className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

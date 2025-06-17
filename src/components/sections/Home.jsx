import { FaCaretRight } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

export const Home = () => {
  return (
    <section id='home' className='min-h-screen justify-center bg-grid'>
      <div className='text-center mx-auto max-w-5xl flex flex-col items-center gap-8 px-8 font-bold'>
        {/* Text Section */}
        <div className='flex flex-col gap-4 md:gap-6'>
          <h1 className='text-6xl md:text-9xl leading-none'>
            <span data-aos="fade-right" data-aos-delay="500" className="inline-block">ANGEL</span><br />
            <span data-aos="fade-left" data-aos-delay="500" className='inline-block outline-text'>FRANCO</span>
          </h1>
          <h2 data-aos="fade-up" data-aos-delay="1000" className='text-md md:text-3xl'>
            UI/UX Designer & Frontend Developer
          </h2>
        </div>

        {/* Button Section */}
        <div data-aos="fade-up" data-aos-delay="1000" className='flex flex-col md:flex-row justify-center gap-3 md:gap-6  text-sm md:text-lg font-bold'>
          <a href="#projects" className="flex items-center justify-center px-4 md:px-8 py-2 border md:border-2 border-neutral-800 bg-neutral-800 hover:bg-neutral-900 text-neutral-100 rounded-md transition">
            View Projects
            <FaCaretRight className="ml-2" />
          </a>
          <button className="flex items-center justify-center px-4 md:px-8 py-2 border md:border-2 border-neutral-800 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 dark:bg-transparent dark:text-neutral-100 dark:border-neutral-300 rounded-md hover:bg-neutral'-200 dark:hover:bg-neutral-800 transition">
            Download Resume
            <MdDownload className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

import { FaCaretRight } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

export const Home = () => {
  return (
    <section id='home' className='min-h-screen justify-center bg-grid'>
      <div className='text-center mx-auto max-w-5xl flex flex-col items-center gap-8 px-8'>
        {/* Text Section */}
        <div className='flex flex-col gap-4 md:gap-6'>
          <h1 className='text-7xl md:text-9xl font-bold leading-none'>
            ANGEL<br />
            <span className='outline-text'>FRANCO</span>
          </h1>
          <h2 className='text-lg md:text-3xl font-medium'>
            UI/UX Designer & Frontend Developer
          </h2>
        </div>

        {/* Button Section */}
        <div className='flex flex-row justify-center gap-3 md:gap-6'>
          <a href="#projects" className="flex items-center justify-center text-sm md:text-lg px-4 md:px-8 py-2 border-2 border-neutral-800 bg-neutral-800 hover:bg-neutral-900 text-neutral-100 rounded-md md:rounded-lg transition font-semibold">
            View Projects
            <FaCaretRight className="ml-2" />
          </a>
          <button className="flex items-center justify-center text-sm md:text-lg px-4 md:px-8 py-2 border-2 border-neutral-800 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 dark:bg-transparent dark:text-neutral-100 dark:border-neutral-300 rounded-md md:rounded-lg hover:bg-neutral'-200 dark:hover:bg-neutral-800 transition font-semibold">
            Download Resume
            <MdDownload className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

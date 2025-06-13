import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center bg-grid px-4'
    >
      <div className='text-center mx-auto max-w-4xl flex flex-col items-center gap-8'>
        {/* Text Section */}
        <div className='flex flex-col gap-4 md:gap-6'>
          <h1 className='text-6xl md:text-9xl font-bold leading-none'>
            ANGEL<br />
            <span className='outline-text'>FRANCO</span>
          </h1>
          <h2 className='text-base md:text-3xl font-medium'>
            UI/UX Designer & Frontend Developer
          </h2>
        </div>

        {/* Button Section */}
        <div className='flex flex-col md:flex-row justify-center gap-3 md:gap-6'>
          <button className="flex items-center justify-center text-sm md:text-lg px-6 py-3 border-2 border-gray-900 bg-gray-900 text-gray-100 rounded-lg hover:bg-gray-950 transition font-semibold">
            View Projects
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
          <button className="flex items-center justify-center text-sm md:text-lg px-6 py-3 border-2 border-gray-900 bg-gray-100 text-gray-900 dark:bg-transparent dark:text-gray-100 dark:border-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition font-semibold">
            Download Resume
            <FontAwesomeIcon icon={faDownload} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

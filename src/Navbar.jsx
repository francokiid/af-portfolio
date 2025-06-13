import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-1000">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-bold">AF</a>
          <div className="hidden md:flex items-center space-x-4 font-semibold">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <button aria-label="Toggle dark mode" className="text-xl">
            <FontAwesomeIcon icon={faMoon} />
          </button>
        </div>
      </div>
    </nav>
  );
};

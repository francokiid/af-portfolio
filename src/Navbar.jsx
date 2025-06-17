import { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { RiFolder6Fill } from "react-icons/ri";

export const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("HOME");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "contact"];
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(entry => entry.isIntersecting);
        if (visible) {
          setCurrentSection(visible.target.id.toUpperCase());
        }
      },
      { threshold: 0.2 }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClasses = `fixed top-0 w-full z-[1000] transition-all duration-300 ${
    scrolled ? "bg-neutral-50 custom-inset" : "bg-transparent"
  }`;

  const linkClasses = "flex items-center ml-8 gap-2 hover:underline";

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center text-xl font-bold gap-2">
              <button onClick={() => setIsPopupOpen(true)} className="flex items-center gap-2">
                <RiFolder6Fill /> AF
              </button>
              <span>/</span>
              <span>{currentSection}</span>
            </div>

            <button aria-label="Toggle dark mode" className="text-xl">
              <BsFillMoonStarsFill />
            </button>
          </div>
        </div>
      </nav>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-neutral-950 bg-opacity-70 flex justify-center items-center z-[1001]">
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-lg p-8 space-y-4 text-justify w-60">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 font-bold">
                <RiFolder6Fill /> AF
              </span>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="text-neutral-800 hover:text-neutral-800 dark:hover:text-white"
              >
                <IoCloseCircle className="text-xl" />
              </button>
            </div>

            {[
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <a key={label} href={href} className={linkClasses} onClick={() => setIsPopupOpen(false)}>
                <FaCaretDown /> {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

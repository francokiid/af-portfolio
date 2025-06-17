import { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { RiFolder6Fill } from "react-icons/ri";

export const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("HOME");
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof localStorage !== "undefined") {
      return (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setCurrentSection(visible.target.id.toUpperCase());
        }
      },
      { threshold: 0.2 },
    );

    sectionIds.forEach((id) => {
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
    scrolled
      ? "bg-neutral-100 dark:bg-neutral-900 bg-opacity-95 backdrop-blur-2xl custom-inset"
      : "bg-transparent"
  }`;

  const linkClasses = "flex items-center ml-8 gap-2 hover:underline";

  return (
    <>
      <nav className={navClasses}>
        <div className="mx-auto max-w-5xl px-8">
          <div className="flex h-16 items-center justify-between text-neutral-900 dark:text-neutral-100">
            <div className="flex items-center gap-2 text-lg font-bold md:text-xl">
              <button
                onClick={() => setIsPopupOpen(true)}
                className="flex items-center gap-2"
              >
                <RiFolder6Fill /> AF
              </button>
              <span>/</span>
              <span>{currentSection}</span>
            </div>

            <button
              aria-label="Toggle dark mode"
              className="text-lg md:text-xl"
              onClick={() => setIsDark((prev) => !prev)}
            >
              {isDark ? (
                <BsFillSunFill className="transform transition-transform duration-300 hover:rotate-12" />
              ) : (
                <BsFillMoonStarsFill className="transform transition-transform duration-300 hover:rotate-12" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isPopupOpen && (
        <div className="fixed inset-0 z-[1001] flex items-center justify-center bg-neutral-900 bg-opacity-50">
          <div className="w-60 space-y-4 rounded-lg bg-neutral-100 p-8 text-justify text-neutral-100 shadow-lg dark:bg-neutral-800">
            <div className="flex items-center justify-between">
              <a
                href="#home"
                className="flex items-center gap-2 font-bold"
                onClick={() => setIsPopupOpen(false)}
              >
                <RiFolder6Fill /> AF
              </a>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="text-neutral-800 hover:text-neutral-900 dark:text-neutral-100 dark:hover:text-neutral-100"
              >
                <IoCloseCircle className="text-xl" />
              </button>
            </div>

            {[
              { href: "#about", label: "ABOUT" },
              { href: "#skills", label: "SKILLS" },
              { href: "#projects", label: "PROJECTS" },
              { href: "#contact", label: "CONTACT" },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className={linkClasses}
                onClick={() => setIsPopupOpen(false)}
              >
                <FaCaretDown /> {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

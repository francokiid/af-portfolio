export const About = () => {
  return (
    <section
      id="about"
      className="custom-inset border-y-1 border-neutral-200 bg-neutral-100 dark:bg-neutral-900"
    >
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1500"
        className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-8 px-8 md:flex-row md:gap-16"
      >
        <div className="text-justify md:w-3/5">
          <p>
            Detail-oriented, resourceful, and always learning — I’m driven to
            bring ideas to life and turn concepts into impactful digital
            solutions.
          </p>
          <br />
          <p>
            RECENTLY ★ I completed a three-month{" "}
            <b>Web Development internship</b> at the{" "}
            <b>Center for Sustainable Development</b>, where I gained hands-on
            experience working on real-world projects and modern development
            workflows.
          </p>
          <br />
          <p>
            NOW ★ I'm pursuing a <b>BS in Information Technology</b>, and I’m
            set to graduate in August 2025. I’m actively seeking a{" "}
            <b>full-time role</b> as a <b>frontend developer</b>.
          </p>
        </div>
        <div className="w-1/2 md:w-2/5">
          <img
            src="../src/assets/media/sample-img.jpg"
            alt="Portrait of Angel Franco"
            className="w-full rounded-md object-cover shadow-inner md:rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

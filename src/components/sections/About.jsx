import myGradPic from "../../assets/media/my-grad-pic.jpg";

export const About = () => {
  return (
    <section
      id="about"
      className="custom-inset border-y-1 border-neutral-200 bg-neutral-100 dark:bg-neutral-900"
    >
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-8 px-8 md:flex-row md:gap-16"
      >
        <div className="text-justify md:w-3/5">
          <p>
            Creative, resourceful, and always learning — I’m driven to bring
            ideas to life and turn concepts into impactful digital solutions.
          </p>
          <br />
          <p>
            RECENTLY ★ I completed a three-month{" "}
            <b>Web Design & Development internship</b> at the{" "}
            <b>Center for Sustainable Development</b>, where I gained hands-on
            experience working on real-world projects and modern development
            workflows.
          </p>
          <br />
          <p>
            NOW ★ I am based in the <b>Philippines</b> and have earned my BS in{" "}
            <b>Information Technology</b> with a specialization in{" "}
            <b>Business Analytics</b>. I’m actively seeking a{" "}
            <b>full-time role</b> where I can apply my skills in UI design, web
            development, and quality assurance.
          </p>
          <br />
          <p>
            ON THE SIDE ★ I enjoy designing children’s books and event
            stationery that tell a story through design.
          </p>
        </div>
        <div className="w-1/2 md:w-2/5">
          <img
            src={myGradPic}
            alt="Portrait of Angel Franco"
            className="w-full rounded-md object-cover shadow-inner md:rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

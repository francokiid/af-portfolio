export const About = () => {
  return (
    <section id='about' className='bg-neutral-100 border-y-2 border-neutral-200 custom-inset'>
      <div className='mx-auto max-w-5xl flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 px-8'>
        <div className="md:w-3/5 text-justify">
          <p>Detail-oriented, resourceful, and always learning — I’m driven to bring ideas to life and turn concepts into impactful digital solutions.</p>
          <p><span>RECENTLY</span> ★ I completed a <b>three-month Web Development internship</b> at the <b>Center for Sustainable Development</b>, where I gained hands-on experience working on real-world projects and modern development workflows.</p>
          <p><span>NOW</span> ★ I'm pursuing a <b>BS in Information Technology</b>, and I’m set to graduate in August 2025. I’m actively seeking a <b>full-time role</b> as a <b>frontend developer</b>.</p>
        </div>
        <div className="w-1/2 md:w-2/5">
          <img
            src="../src/assets/sample-img.jpg"
            alt="Portrait of Angel Franco"
            className="object-cover w-full rounded-xl shadow-inner"
          />
        </div>
      </div>
    </section>
  );
};

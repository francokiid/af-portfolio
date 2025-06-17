import { LuGithub, LuMail, LuLinkedin } from "react-icons/lu";

export const Contact = () => {
  return (
    <section id='contact' className='bg-gradient-to-b from-neutral-50 to-neutral-300 text-center'>
      <div className='flex flex-col mx-auto max-w-5xl px-8 gap-5 md:gap-10'>
        <h2 className='text-4xl md:text-6xl font-bold mb-4'>
            GET IN TOUCH
        </h2>
        <p>Interested in working together? Reach out via any of my social links below.</p>
        <div className="flex flex-row items-center justify-center text-2xl md:text-4xl gap-4">
          <a href=""><LuLinkedin/></a>
          <a href=""><LuGithub/></a>
          <a href=""><LuMail/></a>
        </div>
      </div>
    </section>
  );
};

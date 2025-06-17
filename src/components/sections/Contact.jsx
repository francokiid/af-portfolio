import { LuGithub, LuMail, LuLinkedin } from "react-icons/lu";

export const Contact = () => {
  return (
    <section id='contact' className='bg-neutral-200 bg-grid text-center'>
      <div className='flex flex-col mx-auto max-w-5xl w-full px-8 gap-10'>
        <h2 className='text-2xl md:text-6xl font-bold'>
            GET IN TOUCH
        </h2>
        <p>
          Have a question, or want to work together?<br/>Feel free to reach out directly via any of my socials below.
        </p>
        <div className="flex flex-row items-center justify-center text-4xl gap-4">
          <a href=""><LuLinkedin/></a>
          <a href=""><LuGithub/></a>
          <a href=""><LuMail/></a>
        </div>
      </div>
    </section>
  );
};

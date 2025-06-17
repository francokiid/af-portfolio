import { FaCode } from "react-icons/fa6";
import { TbExternalLink } from "react-icons/tb";

export const FeatureCard = ({media, title, description, demo, repo}) => {
  const imgSrc = new URL(`../../assets/${media}`, import.meta.url).href;
  
  return (
    <div className="flex flex-col justify-between bg-neutral-50 rounded-xl custom-inset p-6 gap-4">
      <div className="flex flex-col gap-2">
        <img src={imgSrc} alt={title} className="border-2 border-neutral-200 rounded-t-xl custom-inset mb-4"/>
        <span className="text-sm md:text-base font-bold uppercase">{title}</span>
        <span className="text-xs md:text-sm text-neutral-500 justify-normal">{description}</span>
      </div>
      <div className="flex flex-row justify-end gap-2 text-neutral-700">
        {demo !== '' && (
          <a href={demo} target="_blank" className="flex items-center justify-center text-sm px-4 py-2 gap-2 border-1 custom-inset hover:bg-neutral-100 rounded-md transition font-semibold">
            <span>Demo</span><TbExternalLink/>
          </a>
        )}
        {repo !== '' && (
          <a href={repo} target="_blank" className="flex items-center justify-center text-sm px-4 py-2 gap-2 border-1 custom-inset hover:bg-neutral-100 rounded-md dark:bg-transparent dark:text-neutral-100 dark:border-neutral-300 hover:bg-neutral'-200 dark:hover:bg-neutral-800 transition font-semibold">
            <span>Code</span><FaCode/>
          </a>
        )}
      </div>
    </div>
  );
}
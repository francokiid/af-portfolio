import { FaCode } from "react-icons/fa6";
import { TbExternalLink } from "react-icons/tb";

export const FeatureCard = ({
  media,
  title,
  description,
  live,
  demo,
  repo,
}) => {
  const imgSrc = new URL(`../../assets/media/${media}`, import.meta.url).href;

  return (
    <div className="custom-inset flex flex-col justify-between gap-4 rounded-md bg-neutral-50 p-4 dark:bg-neutral-800 md:rounded-lg md:p-6">
      <div className="flex flex-col gap-2">
        <img
          src={imgSrc}
          alt={title}
          className="custom-inset dark: mb-4 rounded-t-md border-2 border-neutral-200 dark:border dark:border-neutral-600 md:rounded-t-lg"
        />
        <span className="text-sm font-bold uppercase md:text-base">
          {title}
        </span>
        <span className="justify-normal text-xs text-neutral-500 md:text-sm">
          {description}
        </span>
      </div>
      <div className="flex flex-row justify-end gap-2 text-neutral-600 dark:text-neutral-400">
        {live !== "" && (
          <a
            href={live}
            target="_blank"
            className="custom-inset flex items-center justify-center gap-2 rounded-md px-4 py-2 text-xs font-semibold transition hover:bg-neutral-100 hover:text-neutral-900 dark:border dark:border-neutral-600 hover:dark:bg-neutral-900 hover:dark:text-neutral-100 md:text-sm"
          >
            <span>Live</span>
            <TbExternalLink />
          </a>
        )}
        {demo !== "" && (
          <a
            href={demo}
            target="_blank"
            className="custom-inset flex items-center justify-center gap-2 rounded-md px-4 py-2 text-xs font-semibold transition hover:bg-neutral-100 hover:text-neutral-900 dark:border dark:border-neutral-600 hover:dark:bg-neutral-900 hover:dark:text-neutral-100 md:text-sm"
          >
            <span>Demo</span>
            <TbExternalLink />
          </a>
        )}
        {repo !== "" && (
          <a
            href={repo}
            target="_blank"
            className="border-1 custom-inset hover:bg-neutral'-200 flex items-center justify-center gap-2 rounded-md px-4 py-2 text-xs font-semibold transition hover:bg-neutral-100 hover:text-neutral-900 dark:border dark:border-neutral-600 hover:dark:bg-neutral-900 hover:dark:text-neutral-100 md:text-sm"
          >
            <span>Code</span>
            <FaCode />
          </a>
        )}
      </div>
    </div>
  );
};

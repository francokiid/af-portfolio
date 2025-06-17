export const IconCard = ({ icon, label }) => {
  return (
    <div className="custom-inset flex h-[4.5rem] w-[4.5rem] flex-col items-center justify-center gap-2 rounded-md bg-neutral-100 p-2 dark:bg-neutral-800 md:h-28 md:w-28 md:gap-4 md:rounded-lg">
      <div className="text-2xl text-neutral-900 dark:text-neutral-200 md:text-4xl">
        {icon}
      </div>
      <span className="text-[10px] text-neutral-900 dark:text-neutral-200 md:text-sm">
        {label}
      </span>
    </div>
  );
};

export const IconCard = ({icon, label}) => {
  return (
    <div className="w-[4.5rem] h-[4.5rem] md:w-28 md:h-28 flex flex-col items-center justify-center bg-neutral-800 rounded-md md:rounded-lg p-2 gap-2 md:gap-4">
      <div className="text-neutral-200 text-2xl md:text-4xl">{icon}</div>
      <span className="text-neutral-200 text-[10px] md:text-sm">{label}</span>
    </div>
  );
}
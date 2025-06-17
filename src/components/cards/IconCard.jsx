export const IconCard = ({icon, label}) => {
  return (
    <div className="w-28 h-28 flex flex-col items-center justify-center bg-neutral-800 rounded-lg p-2 gap-4">
      <div className="text-neutral-200 text-4xl">{icon}</div>
      <span className="text-neutral-200 text-sm">{label}</span>
    </div>
  );
}
export default function CardDivider({ className = "my-8" }) {
  return (
    <div className={`w-full ${className}`} aria-hidden="true">
      <div className="tapered-gold-line" />
    </div>
  );
}

export function HeadingDivider({ children, className = "mb-10" }) {
  return (
    <div className={`text-center w-full mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
}

export function VerticalDivider({ className = "my-2" }) {
  return (
    <div className={`flex flex-col items-center self-stretch ${className}`}>
      <div className="w-px flex-1 bg-gradient-to-b from-transparent to-gray-300"></div>
      <div className="my-2 h-2 w-2 rounded-full bg-gold flex-shrink-0 shadow-xs"></div>
      <div className="w-px flex-1 bg-gradient-to-t from-transparent to-gray-300"></div>
    </div>
  );
}

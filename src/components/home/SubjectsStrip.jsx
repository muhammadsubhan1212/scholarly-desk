import { subjects } from '../../data/home';

export default function SubjectsStrip({ items = subjects }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {items.map((subject) => (
        <span
          key={subject}
          className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-[13px] font-medium text-slate-600 shadow-xs transition-colors hover:border-primary/25 hover:text-primary"
        >
          {subject}
        </span>
      ))}
    </div>
  );
}

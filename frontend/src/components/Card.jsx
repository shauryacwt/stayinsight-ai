export const Card = ({ icon: Icon, title, description, testId }) => {
  return (
    <article
      data-testid={testId || "feature-card"}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/60 bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_rgba(79,70,229,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-100 hover:shadow-[0_2px_4px_rgba(15,23,42,0.04),0_18px_42px_rgba(79,70,229,0.16)]"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 transition-transform duration-500 group-hover:scale-x-100"
      />

      {Icon && (
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 text-indigo-600 ring-1 ring-inset ring-indigo-100 transition-transform duration-300 group-hover:scale-105 group-hover:from-indigo-100 group-hover:to-blue-100">
          <Icon className="h-5 w-5" />
        </span>
      )}

      <h3 className="font-display text-lg font-semibold tracking-tight text-slate-900">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </article>
  );
};

export default Card;
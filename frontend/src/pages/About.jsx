import { Leaf, Building2, BarChart3 } from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "Built for hospitality",
    text: "Designed specifically for homestay and eco-tourism businesses.",
  },
  {
    icon: BarChart3,
    title: "Actionable insights",
    text: "Turn unstructured reviews into clear improvement areas.",
  },
  {
    icon: Building2,
    title: "Scales with you",
    text: "From a single property to a growing portfolio of stays.",
  },
];

export default function About() {
  return (
    <div
      data-testid="about-page"
      className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-24"
    >
      <h1
        data-testid="about-title"
        className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl"
      >
        About StayInsight{" "}
        <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
          AI
        </span>
      </h1>

      <p
        data-testid="about-description"
        className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg"
      >
        StayInsight AI helps homestay and eco-tourism businesses understand
        customer feedback using AI-powered sentiment analysis and review
        insights.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {highlights.map((h, i) => (
          <div
            key={h.title}
            data-testid={`about-highlight-${h.title
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            className="anim-rise rounded-2xl border border-white/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            style={{ animationDelay: `${0.2 + i * 0.1}s` }}
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-100">
              <h.icon className="h-5 w-5" />
            </span>

            <h3 className="mt-4 text-base font-semibold text-slate-900">
              {h.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {h.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
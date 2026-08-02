import { Hero } from "../components/Hero";
import { Card } from "../components/Card";
import { Heart, Tags, MessageSquareText } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Sentiment Analysis",
    description:
      "Classify guest reviews as Positive, Neutral, or Negative.",
    testId: "card-sentiment",
  },
  {
    icon: Tags,
    title: "Theme Detection",
    description:
      "Identify key themes like cleanliness, food, staff, and location.",
    testId: "card-theme",
  },
  {
    icon: MessageSquareText,
    title: "AI Response Generator",
    description:
      "Generate professional and helpful responses to guest reviews.",
    testId: "card-response",
  },
];

export default function Home() {
  return (
    <div data-testid="home-page">
      <Hero />

      <section
        data-testid="features-section"
        className="mx-auto max-w-6xl px-5 pb-10 sm:px-8"
      >
        <div className="anim-rise mb-10 max-w-2xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Everything you need to listen to your guests
          </h2>

          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            A focused toolkit for hospitality teams who want to turn raw
            feedback into clear, actionable insight.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="anim-rise"
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <Card {...f} />
            </div>
          ))}
        </div>
      </section>

      {/* Stats Strip */}
      <section
        data-testid="stats-strip"
        className="mx-auto mt-8 max-w-6xl px-5 sm:px-8"
      >
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/60 bg-slate-100/70 sm:grid-cols-4">
          {[
            { label: "Reviews analyzed", value: "1.2k+" },
            { label: "Avg. sentiment", value: "92%" },
            { label: "Themes detected", value: "24" },
            { label: "Response time", value: "< 2s" },
          ].map((s) => (
            <div
              key={s.label}
              data-testid={`stat-strip-${s.label
                .toLowerCase()
                .replace(/[^a-z]+/g, "-")}`}
              className="bg-white/90 px-5 py-6 text-center backdrop-blur"
            >
              <p className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {s.value}
              </p>

              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
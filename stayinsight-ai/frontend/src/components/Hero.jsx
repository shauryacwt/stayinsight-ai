import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section
      data-testid="hero-section"
      className="relative mx-auto max-w-6xl px-5 pb-16 pt-20 sm:px-8 sm:pt-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span
          data-testid="hero-badge"
          className="anim-rise inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/70 px-4 py-1.5 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5" />
          AI-powered review intelligence
        </span>

        <h1
          data-testid="hero-title"
          className="anim-rise delay-100 mt-6 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
        >
          StayInsight{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
            AI
          </span>
        </h1>

        <p
          data-testid="hero-subtitle"
          className="anim-rise delay-200 mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
        >
          Analyze guest reviews, identify trends, and improve customer
          satisfaction using artificial intelligence.
        </p>

        <div className="anim-rise delay-300 mt-8 flex items-center justify-center gap-3">
          <Link
            to="/dashboard"
            data-testid="hero-cta-explore"
            className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-600/20 transition-all hover:bg-indigo-700 hover:shadow-lg"
          >
            Explore Insights
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            to="/about"
            data-testid="hero-cta-learn"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 backdrop-blur transition-colors hover:bg-white"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
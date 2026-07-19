import { useEffect, useState } from "react";
import api from "../api/api";
import {
  MessagesSquare,
  ThumbsUp,
  AlertCircle,
  TrendingUp,
  Bot,
  Sparkles,
} from "lucide-react";

export default function Dashboard() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [aiReview, setAiReview] = useState("");
  const [aiResult, setAiResult] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  // NEW STATES
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    guestName: "",
    rating: 5,
    sentiment: "Positive",
    review: "",
  });

  const fetchReviews = async () => {
    try {
      const response = await api.get("/reviews");
      setReviews(response.data);
    } catch (err) {
      setError("Failed to load reviews.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // FORM INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "rating"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  // CREATE / UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await api.put(`/reviews/${editingId}`, formData);
      } else {
        await api.post("/reviews", formData);
      }

      setFormData({
        guestName: "",
        rating: 5,
        sentiment: "Positive",
        review: "",
      });

      setEditingId(null);

      fetchReviews();
    } catch (err) {
      alert("Operation failed");
    }
  };

  // EDIT
  const handleEdit = (review) => {
    setEditingId(review.id);

    setFormData({
      guestName: review.guestName,
      rating: review.rating,
      sentiment: review.sentiment,
      review: review.review,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this review?")) return;

    try {
      await api.delete(`/reviews/${id}`);
      fetchReviews();
    } catch (err) {
      alert("Delete failed");
    }
  };

  // DASHBOARD STATS
  const totalReviews = reviews.length;

  const positiveReviews = reviews.filter(
    (r) => r.sentiment === "Positive"
  ).length;

  const neutralReviews = reviews.filter(
    (r) => r.sentiment === "Neutral"
  ).length;

  const negativeReviews = reviews.filter(
    (r) => r.sentiment === "Negative"
  ).length;

  const stats = [
    {
      icon: MessagesSquare,
      label: "Total Reviews",
      value: totalReviews,
      accent: "from-indigo-500 to-blue-500",
      testId: "stat-total-reviews",
    },
    {
      icon: ThumbsUp,
      label: "Positive Reviews",
      value: positiveReviews,
      accent: "from-emerald-500 to-teal-500",
      testId: "stat-positive-reviews",
    },
    {
      icon: AlertCircle,
      label: "Improvement Areas",
      value: negativeReviews,
      accent: "from-amber-500 to-orange-500",
      testId: "stat-improvement-areas",
    },
  ];

  const sentimentData = [
    {
      label: "Positive",
      value:
        totalReviews > 0
          ? Math.round((positiveReviews / totalReviews) * 100)
          : 0,
      color: "from-emerald-500 to-teal-500",
      testId: "sentiment-positive",
    },
    {
      label: "Neutral",
      value:
        totalReviews > 0
          ? Math.round((neutralReviews / totalReviews) * 100)
          : 0,
      color: "from-indigo-500 to-blue-500",
      testId: "sentiment-neutral",
    },
    {
      label: "Negative",
      value:
        totalReviews > 0
          ? Math.round((negativeReviews / totalReviews) * 100)
          : 0,
      color: "from-rose-500 to-orange-500",
      testId: "sentiment-negative",
    },
  ];
  const analyzeAI = async () => {
  if (!aiReview.trim()) {
    alert("Please enter a review.");
    return;
  }

  try {
    setAiLoading(true);

    const response = await api.post("/ai/analyze", {
      review: aiReview,
    });

    setAiResult(response.data.result);

  } catch (err) {
    console.error(err);
    alert("AI analysis failed.");
  } finally {
    setAiLoading(false);
  }
};
  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-lg text-slate-600">Loading reviews...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  // KEEP YOUR EXISTING RETURN BELOW
  return (
    <div
      data-testid="dashboard-page"
      className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20"
    >
      {/* ADD / UPDATE REVIEW FORM */}
<div className="anim-rise mb-10 rounded-2xl border border-white/60 bg-white p-6 shadow-sm">
  <h2 className="font-display mb-6 text-2xl font-semibold text-slate-900">
    {editingId ? "Update Review" : "Add New Review"}
  </h2>

  <form
    onSubmit={handleSubmit}
    className="grid grid-cols-1 gap-4 md:grid-cols-2"
  >
    <input
      type="text"
      name="guestName"
      placeholder="Guest Name"
      value={formData.guestName}
      onChange={handleChange}
      required
      className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500"
    />

    <input
      type="number"
      name="rating"
      min="1"
      max="5"
      value={formData.rating}
      onChange={handleChange}
      required
      className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500"
    />

    <select
      name="sentiment"
      value={formData.sentiment}
      onChange={handleChange}
      className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500"
    >
      <option>Positive</option>
      <option>Neutral</option>
      <option>Negative</option>
    </select>

    <textarea
      rows="4"
      name="review"
      placeholder="Write review..."
      value={formData.review}
      onChange={handleChange}
      required
      className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 md:col-span-2"
    />

    <button
      type="submit"
      className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 md:w-fit"
    >
      {editingId ? "Update Review" : "Add Review"}
    </button>

    {editingId && (
      <button
        type="button"
        onClick={() => {
          setEditingId(null);
          setFormData({
            guestName: "",
            rating: 5,
            sentiment: "Positive",
            review: "",
          });
        }}
        className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 md:w-fit"
      >
        Cancel
      </button>
    )}
  </form>
</div>
      <div className="anim-rise flex flex-col gap-2">
        <h1
          data-testid="dashboard-title"
          className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl"
        >
          Analytics Dashboard
        </h1>

        <p
          data-testid="dashboard-description"
          className="max-w-2xl text-sm text-slate-600 sm:text-base"
        >
          Monitor customer feedback trends and insights in one place.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s, i) => (
          <div
            key={s.label}
            data-testid={s.testId}
            className="anim-rise group relative overflow-hidden rounded-2xl border border-white/60 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ animationDelay: `${0.1 + i * 0.1}s` }}
          >
            <div className="flex items-start justify-between">
              <span
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} text-white shadow-sm transition-transform duration-300 group-hover:scale-105`}
              >
                <s.icon className="h-5 w-5" />
              </span>

              <TrendingUp className="h-4 w-4 text-slate-300" />
            </div>

            <p className="mt-6 text-sm font-medium text-slate-500">
              {s.label}
            </p>

            <p className="mt-1 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {s.value}
            </p>
          </div>
        ))}
      </div>

      {/* Sentiment Breakdown */}
      <div
        data-testid="sentiment-breakdown"
        className="anim-rise delay-400 mt-8 rounded-2xl border border-white/60 bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-display text-base font-semibold text-slate-900 sm:text-lg">
            Sentiment Breakdown
          </h3>

          <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
            Live Data
          </span>
        </div>

        <div className="mt-6 space-y-5">
          {sentimentData.map((s) => (
            <div key={s.label} data-testid={s.testId}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">
                  {s.label}
                </span>

                <span className="font-display font-semibold text-slate-900">
                  {s.value}%
                </span>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${s.color} transition-all duration-700`}
                  style={{ width: `${s.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        data-testid="dashboard-note"
        className="anim-rise delay-500 mt-6 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/70 to-blue-50/70 p-6 sm:p-8"
      >
        {/* REVIEWS LIST */}
<div className="anim-rise mt-10">
  <div className="mb-6 flex items-center justify-between">
    <h2 className="font-display text-2xl font-semibold text-slate-900">
      Guest Reviews
    </h2>

    <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
      {reviews.length} Reviews
    </span>
  </div>

  <div className="grid gap-6">
    {reviews.map((review) => (
      <div
        key={review.id}
        className="rounded-2xl border border-white/60 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display text-xl font-semibold text-slate-900">
              {review.guestName}
            </h3>

            <p className="mt-1 text-yellow-500">
              {"⭐".repeat(review.rating)}
            </p>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-sm font-medium
            ${
              review.sentiment === "Positive"
                ? "bg-green-100 text-green-700"
                : review.sentiment === "Neutral"
                ? "bg-blue-100 text-blue-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {review.sentiment}
          </span>
        </div>

        <p className="mt-5 text-slate-600">
          {review.review}
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => handleEdit(review)}
            className="rounded-xl bg-indigo-600 px-5 py-2 font-medium text-white transition hover:bg-indigo-700"
          >
            Edit
          </button>

          <button
            onClick={() => handleDelete(review.id)}
            className="rounded-xl bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
        <h3 className="font-display text-base font-semibold text-slate-900 sm:text-lg">
          Stay Ahead of Every Guest Experience
        </h3>

        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
          Drill into themes, sentiment shifts, and recurring concerns.
          Use the insights to refine your operations and respond
          proactively.
        </p>
      </div>
      {/* AI REVIEW ASSISTANT */}

<div className="mt-10 rounded-2xl border border-white/60 bg-white p-8 shadow-sm">

  <div className="flex items-center gap-3 mb-6">

    <Bot className="text-indigo-600" size={28} />

    <h2 className="text-2xl font-bold">
      AI Review Assistant
    </h2>

  </div>

  <textarea
    rows={6}
    value={aiReview}
    onChange={(e) => setAiReview(e.target.value)}
    placeholder="Paste a hotel review here..."
    className="w-full rounded-xl border border-slate-300 p-4 focus:border-indigo-500 outline-none"
  />

  <button
    onClick={analyzeAI}
    disabled={aiLoading}
    className="mt-5 rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 disabled:bg-indigo-400"
  >
    {aiLoading ? "Analyzing..." : "Analyze with AI"}
  </button>

  {aiResult && (

    <div className="mt-8 rounded-xl bg-slate-50 p-6">

      <div className="flex items-center gap-2 mb-4">

        <Sparkles className="text-yellow-500" />

        <h3 className="text-xl font-semibold">
          AI Analysis
        </h3>

      </div>

      <pre className="whitespace-pre-wrap text-slate-700">
        {aiResult}
      </pre>

    </div>

  )}

</div>
    </div>
  );
}
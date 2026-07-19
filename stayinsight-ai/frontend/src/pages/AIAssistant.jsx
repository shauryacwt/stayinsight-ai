import { useState } from "react";
import api from "../api/api";

export default function AIAssistant() {
  const [review, setReview] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeReview = async () => {
    if (!review.trim()) {
      alert("Please enter a review.");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/ai/analyze", {
        review,
      });

      setResult(response.data.result);
    } catch (error) {
      console.error(error);
      alert("AI analysis failed.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-6">

      <h1 className="text-3xl font-bold mb-6">
        🤖 AI Review Assistant
      </h1>

      <textarea
        rows={8}
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Paste hotel review here..."
        className="w-full border rounded-lg p-4 shadow-sm"
      />

      <button
        onClick={analyzeReview}
        className="mt-5 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
      >
        {loading ? "Analyzing..." : "Analyze Review"}
      </button>

      {result && (
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">

          <h2 className="text-xl font-semibold mb-4">
            AI Result
          </h2>

          <pre className="whitespace-pre-wrap">
            {result}
          </pre>

        </div>
      )}

    </div>
  );
}
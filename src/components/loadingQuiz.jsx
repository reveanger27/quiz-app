import { useEffect } from "react";

function LoadingQuiz({ setPhase, data, loading, error }) {
  useEffect(() => {
    if (data) setPhase("quiz");
  }, [data]);

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-amber-400 via-orange-400 to-fuchsia-500 flex items-center justify-center animate-fade-in">
        <div className="bg-white rounded-3xl border-4 border-amber-500 shadow-xl px-10 py-8 text-center">
          <div className="w-12 h-12 border-4 border-amber-300 border-t-amber-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-display text-xl font-semibold text-amber-700">Sedang memuat soal...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-linear-to-br from-rose-500 to-orange-400 flex items-center justify-center">
        <div className="bg-white rounded-3xl border-4 border-rose-500 shadow-xl px-10 py-8 text-center">
          <p className="font-display text-xl font-semibold text-rose-600">{error}</p>
        </div>
      </div>
    );
  }

  return null;
}

export default LoadingQuiz;
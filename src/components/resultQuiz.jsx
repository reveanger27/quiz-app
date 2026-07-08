import decodeHTML from "../utils/decodeHTML";

function ResultQuiz({ answers, score, resetQuiz, setPhase, setSettings, highScore }) {
  const handleReset = () => {
    resetQuiz();
    setPhase("setup");
    setSettings({ category: "", difficulty: "easy", type: "multiple" });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-500 via-rose-500 to-orange-400 p-6 animate-fade-in">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-3xl border-4 border-pink-600 shadow-xl p-8 text-center mb-6">
          <h1 className="font-display text-3xl font-bold text-pink-700 mb-2">Hasil Quiz 🎉</h1>
          <p className="font-display text-4xl font-bold text-gray-800">
            {score()} <span className="text-xl text-gray-400">/ {answers.length}</span>
          </p>
          <p className="font-display text-lg text-pink-900">Score Tertinggi: {highScore}</p>
        </div>

        <div className="space-y-3 mb-6 overflow-y-auto max-h-80 px-4 py-2">
          {answers.map((a, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border-2 p-4 ${a.isCorrect ? "border-teal-300" : "border-rose-300"}`}
            >
              <p className="font-semibold text-gray-800 mb-2">{decodeHTML(a.question)}</p>
              <p className={`text-sm ${a.isCorrect ? "text-teal-600" : "text-rose-600"}`}>
                Jawabanmu: {decodeHTML(a.userAnswer ?? "(tidak dijawab)")}
              </p>
              {!a.isCorrect && (
                <p className="text-sm text-teal-600">Jawaban benar: {decodeHTML(a.correctAnswer)}</p>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={handleReset}
          className="w-full bg-pink-600 hover:bg-pink-700 active:scale-95 transition text-white font-bold text-lg py-3 rounded-xl shadow-md"
        >
          Main Lagi 🔄
        </button>
      </div>
    </div>
  );
}

export default ResultQuiz;
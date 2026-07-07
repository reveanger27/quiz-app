import { useEffect, useMemo } from "react";
import useTimer from "../hooks/useTimer";
import decodeHTML from "../utils/decodeHTML";

function CardQuiz({ setPhase, data, currentIndex, answers, submitAnswer, score, isFinished }) {
    const timer = useTimer(30);

    useEffect(() => {
      if(timer === 0) {
        submitAnswer(null);
      }
    }, [timer]);

    useEffect(() => {
        if(isFinished()) {
          setPhase("result");
        }
    }, [answers]);

    const currentQuestion = (data || [])[currentIndex];

    const shuffledAnswers = useMemo(() => {    
      if (!currentQuestion) return [];    
      const allAnswers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
      return [...allAnswers].sort(() => Math.random() - 0.5);
    }, [currentQuestion]);

    if((data || []).length === 0) {
      return <p>Memuat soal...</p>;
    }

    const totalQuestions = (data || []).length;
    const timerColor = timer <= 10 ? "text-rose-600" : "text-indigo-600";

    return (
      <div className="min-h-screen bg-linear-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center p-6 animate-fade-in">
        <div className="bg-white rounded-3xl border-4 border-indigo-600 shadow-xl p-8 w-full max-w-lg">

          <div className="flex gap-1.5 justify-center mb-4">
            {Array.from({ length: totalQuestions }).map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full ${i <= currentIndex ? "bg-indigo-500" : "bg-gray-200"}`}
              />
            ))}
          </div>

          <p className={`text-center font-display font-bold text-2xl mb-4 ${timerColor}`}>
            ⏱ {timer} detik
          </p>

          <h2 className="font-display text-xl font-semibold text-gray-800 text-center mb-6">
            {decodeHTML(currentQuestion.question)}
          </h2>

          <div className="grid gap-3">
            {shuffledAnswers.map((answer) => (
              <button
                key={answer}
                onClick={() => submitAnswer(answer)}
                className="bg-indigo-50 hover:bg-indigo-100 active:scale-95 transition border-2 border-indigo-200 hover:border-indigo-400 rounded-xl py-3 px-4 font-medium text-gray-700 text-left"
              >
                {decodeHTML(answer)}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
}

export default CardQuiz;
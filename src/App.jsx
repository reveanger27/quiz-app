import { useState } from "react";
import SetupQuiz from "./components/setupQuiz.jsx";
import LoadingQuiz from "./components/loadingQuiz";
import CardQuiz from "./components/cardQuiz";
import ResultQuiz from "./components/resultQuiz";
import useFetch from "./hooks/useFetch.js";
import useQuiz from "./hooks/useQuiz.js"

function App() {
  const [phase, setPhase] = useState("setup");
  const [settings, setSettings] = useState({
    category: "",
    difficulty: "easy",
    type: "multiple"
  });

  const updateSetting = (field, value) => {
    setSettings({ ...settings, [field]: value });
  };

  const url = (settings.category && settings.difficulty && settings.type)
    ? `https://opentdb.com/api.php?amount=10&category=${settings.category}&difficulty=${settings.difficulty}&type=${settings.type}`
    : null;

  const { data, loading, error } = useFetch(url);
  const { currentIndex, answers, submitAnswer, score, isFinished, resetQuiz, highScore } = useQuiz(data || []);

  if (phase === "setup") return <SetupQuiz setPhase={setPhase} settings={settings} updateSetting={updateSetting} />;
  if (phase === "loading") return <LoadingQuiz setPhase={setPhase} data={data} loading={loading} error={error} />;
  if (phase === "quiz") return <CardQuiz key={currentIndex} setPhase={setPhase} data={data} currentIndex={currentIndex} answers={answers} submitAnswer={submitAnswer} score={score} isFinished={isFinished}/>;
  if (phase === "result") return <ResultQuiz answers={answers} score={score} resetQuiz={resetQuiz} setSettings={setSettings} setPhase={setPhase} highScore={highScore}/>;

}

export default App;
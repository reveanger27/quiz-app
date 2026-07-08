import { useState, useEffect } from "react";

function useQuiz (questions) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [highScore, setHighScore] = useState(
        Number(localStorage.getItem("quizHighScore")) || 0
    );

    const submitAnswer = (answer) => {
        const currentQuestion = questions[currentIndex];
        const newAnswer = {
            question : currentQuestion.question,
            userAnswer : answer,
            correctAnswer : currentQuestion.correct_answer,
            isCorrect : answer === currentQuestion.correct_answer
        }
        setAnswers([...answers, newAnswer]);
        if (currentIndex < questions.length -1) {
            setCurrentIndex(currentIndex + 1);
        };
    };

    const score = () => {
        return answers.filter((a) => a.isCorrect).length;
    };

    const isFinished = () => {
        return answers.length === questions.length;
    };

    const resetQuiz = () => {
        setCurrentIndex(0);
        setAnswers([]);
    }

    useEffect(() => {
    const currentScore = score();
        if (currentScore > highScore) {
            localStorage.setItem("quizHighScore", currentScore)
            setHighScore(currentScore)
        }
    }, [answers]);

    return {
        currentIndex,
        answers,
        score,
        submitAnswer,
        isFinished,
        resetQuiz,
        highScore
    }

}

export default useQuiz;
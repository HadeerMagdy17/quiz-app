import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestionsWithoutAnswers } from "../../../../Redux/Features/Learner/QuestionsWithoutAnswerSlice";
import joinQuiz from "../../../../Redux/Features/Learner/joinQuiz";
import { useNavigate, useParams } from "react-router-dom";

const QuizWithoutAnswer = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { quizId } = useParams();

  // const { data, loading, error } = useSelector((state) => state.joinQuizData) || {};

  const {
    questions: quiz,
    loading,
    error,
  } = useSelector((state) => state.questionWithoutAnswers);
  console.log(quiz);
  console.log(quiz?.questions);
  console.log(quiz?.title);


  // useEffect(() => {
  //   dispatch(fetchQuestionsWithoutAnswers(quizId));
  // }, [dispatch, quizId]);

  useEffect(() => {
    dispatch(fetchQuestionsWithoutAnswers());
  }, [dispatch]);

  //   const handleAnswerSelect = (questionId, selectedAnswer) => {
  //     setAnswers(prevState => ({
  //       ...prevState,
  //       [questionId]: selectedAnswer
  //     }));
  //   };

  //   const checkAnswer = (questionId) => {
  //     return answers[questionId] === questions.find(question => question.id === questionId).correctAnswer;
  //   };

  //   const nextQuestion = () => {
  //     setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  //   };

  //   const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="pl-5" style={{ backgroundColor: "#fbfbfb", justifyItems: "center" }}>
      {quiz?.questions && quiz?.questions.map((question, index) => (
        <div key={question._id}>
          <p>
            {index + 1}.{question?.title}
          </p>

          <form>
            {Object.entries(question?.options).map(
              ([optionKey, optionValue]) => (
                <div key={optionKey}>
                  <input
                    type="radio"
                    id={optionKey}
                    name={`question_${index}`}
                    value={optionKey}
                  />
                  <label htmlFor={optionKey}>{optionValue}</label>
                </div>
              )
            )}
          </form>
        </div>
      ))}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded">
        Next
      </button>
    </div>
  );
};

export default QuizWithoutAnswer;

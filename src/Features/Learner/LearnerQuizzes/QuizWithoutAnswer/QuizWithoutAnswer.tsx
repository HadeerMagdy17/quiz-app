import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestionsWithoutAnswers } from '../../../../Redux/Features/Learner/QuestionsWithoutAnswerSlice';

const QuizWithoutAnswer = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});


  const dispatch = useDispatch();

  const { questions, loading, error } = useSelector(state => state.questionWithoutAnswers);
  console.log(questions);

  useEffect(() => {
    dispatch(fetchQuestionsWithoutAnswers("65cf3f748f25f1b30030c90b"));
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
    <div style={{backgroundColor:"red"}}>
      {Array.isArray(questions) && questions.map((question, index) => (
        <div key={question._id}>
          <p>{index + 1}. {question?.questions}</p>
          <p>rawan</p>
          <form>
            {Object.entries(question?.options).map(([optionKey, optionValue]) => (
              <div key={optionKey}>
                <input type="radio" id={optionKey} name={`question_${index}`} value={optionKey} />
                <label htmlFor={optionKey}>{optionValue}</label>
              </div>
            ))}
          </form>
        </div>
      ))}
    </div>
  );
};

export default QuizWithoutAnswer;

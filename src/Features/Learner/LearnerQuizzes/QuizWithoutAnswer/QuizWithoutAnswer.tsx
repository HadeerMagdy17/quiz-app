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
  const { quizId } = useParams();


  // const { data, loading, error } = useSelector((state) => state.joinQuizData) || {};

  const {
    questions: quiz,
    loading,
    error,
  } = useSelector((state) => state.questionWithoutAnswers);
  console.log(quiz);
  console.log(quiz?.questions);
  console.log(quiz?.title);


  useEffect(() => {

    dispatch(fetchQuestionsWithoutAnswers(quizId));
  }, [dispatch, quizId]);




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
    // <div className="pl-5" style={{ backgroundColor: "#fbfbfb", justifyItems: "center" }}>
    //   {quiz?.questions && quiz?.questions.map((question, index) => (
    //     <div key={question._id}>
    //       <p>
    //         {index + 1}.{question?.title}
    //       </p>

    //       <form>
    //         {Object.entries(question?.options).map(
    //           ([optionKey, optionValue]) => (
    //             <div key={optionKey}>
    //               <input
    //                 type="radio"
    //                 id={optionKey}
    //                 name={`question_${index}`}
    //                 value={optionKey}
    //               />
    //               <label htmlFor={optionKey}>{optionValue}</label>
    //             </div>
    //           )
    //         )}
    //       </form>
    //     </div>
    //   ))}
    //   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded">
    //     Next
    //   </button>
    // </div>
    // <div className="pl-5" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px", backgroundColor: "#fbfbfb", justifyContent: "center" }}>
    // {/* // <div className="p-5" style={{width: "100%", justifyContent: "center", display: "flex", flexDirection: "column" ,alignItems:'center'}}> */}
    //   {quiz?.questions && quiz?.questions.map((question, index) => (
    //     <div key={question._id}  >

    //       <p style={{ border: "1px solid #ddd", borderRadius: "8px", marginBottom: "10px", padding: "5px" , backgroundColor: "#ffeddf"}}>
    //         {index + 1}.{question?.title}
    //       </p>

    //       <form style={{ border: "1px solid #ddd", borderRadius: "8px", marginBottom: "10px", padding: "5px", backgroundColor: "#fbfbfb" }}>
    //         {Object.entries(question?.options).map(([optionKey, optionValue]) => (
    //           <div key={optionKey} style={{ marginBottom: "5px" }}>
    //             <input
    //               type="radio"
    //               id={optionKey}
    //               name={`question_${index}`}
    //               value={optionKey}
    //               style={{ marginRight: "5px" }} // Add some spacing between the radio button and label
    //             />
    //             <label htmlFor={optionKey} style={{ marginLeft: "3px" }}>{optionValue}</label>
    //           </div>
    //         ))}
    //       </form>
    //     </div>
    //   ))}
    //   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded">
    //     Next
    //   </button>
    // </div>
    <div className="p-5 flex justify-center items-center">
      <div className="w-3/4 grid gap-5" style={{ backgroundColor: "#fbfbfb" }}>
        {quiz?.questions && quiz?.questions.map((question, index) => (
          <div key={question._id} className="bg-[#FFEDDF] p-3 rounded">
            <p className="border-b border-gray-300 mb-2 pb-2">
              {index + 1}.{question?.title}
            </p>

            <form className="bg-white p-3 rounded">
              {Object.entries(question?.options).map(([optionKey, optionValue]) => (
                <div key={optionKey} className="mb-2">
                  <input
                    type="radio"
                    id={optionKey}
                    name={`question_${index}`}
                    value={optionKey}
                    className="mr-2"
                  />
                  <label htmlFor={optionKey}>{optionValue}</label>
                </div>
              ))}
            </form>
          </div>
        ))}
        <button className="bg-black hover:bg-orange-500 text-white font-bold py-2 rounded w-44">
          Submit
        </button>
      </div>
    </div>


  );
};

export default QuizWithoutAnswer;

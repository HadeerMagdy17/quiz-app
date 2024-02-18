// ******** Base Url **********
export const baseUrl = "https://upskilling-egypt.com:3005/api";

// export const requestHeaders = `${localStorage.getItem("accessToken")}`;
export const requestHeaders = {
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,

  };

// ******** Login ********
export const loginUrl = `${baseUrl}/auth/login`;
// ******** Register ********
export const registerUrl = `${baseUrl}/auth/register`;
// ******** Reset-Password ********
export const resetPassUrl = `${baseUrl}/auth/reset-password`;
// ******** forget-Password ********
export const forgetPassUrl = `${baseUrl}/auth/forgot-password`;
// ******** Change-Password ********
export const changePassUrl = `${baseUrl}/auth/change-password`;
// ******** Logout ********
export const logoutUrl = `${baseUrl}/auth/logout`;
//***authToken */
// ******** Students APIs ********
export const  getAllStudentsUrl = `${baseUrl}/student`;
export const  deleteStudentUrl = `${baseUrl}/student`;
// ******** Results APIs ********
export const  getResultsUrl = `${baseUrl}/quiz/result`;























// ******** Questions API ********
export const  getAllQuestionsUrl = `${baseUrl}/question`;
// ******** Update Questions API ********
export const updateQuestionUrl =`${baseUrl}/question`; //with id
export const QuestionUrl =`${baseUrl}/question`; //with id










// ******** Group Url ********
export const allGroupUrl = `${baseUrl}/group`;
// ******** deleteGroupUrl  ********
export const deleteGroupUrl = `${baseUrl}/group`; //with Id


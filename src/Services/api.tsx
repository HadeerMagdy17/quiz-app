// ******** Base Url **********
export const baseUrl = "https://upskilling-egypt.com:3005/api";
export const requestHeaders = {
    Authorization: `Bearer ${localStorage.getItem("authToken")}`
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











// ******** Group Url ********
export const allGroupUrl = `${baseUrl}/group`;



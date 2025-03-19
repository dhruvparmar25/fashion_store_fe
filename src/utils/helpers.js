/**
 * Utility function to get the authorization header with a stored token from local storage.
 * This function is used to add the authorization header when sending requests that require authentication.
 * Headers object containing the authorization token.
 */
export const getHeader = () => {
  const token = localStorage.getItem("token") || "";
  return { authorization: `Bearer ${token}` };
};

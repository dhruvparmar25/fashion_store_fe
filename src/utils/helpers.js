export const getHeader = () => {
  const token = localStorage.getItem("token") || "";
  return { authorization: `Bearer ${token}` };
};

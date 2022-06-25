export const getProjects = async () => {
  const res = await fetch("https://backendportfolio.onrender.com/");
  return res.json();
};

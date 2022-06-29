export const getProjects = async () => {
  const res = await fetch("http://backendportfolio.onrender.com", {
    method: 'GET',
    headers: [
      ["Content-Type", "application/json"],
      ["Content-Type", "text/plain"]
    ],
  }).catch((err) => console.log(err));
  return res.json();
};

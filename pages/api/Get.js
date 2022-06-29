export const getProjects = async () => {
  const res = await fetch("https://portfolio-api-icrust.herokuapp.com", {
    method: 'GET',
    headers: [
      ["Content-Type", "application/json"],
      ["Content-Type", "text/plain"]
    ],
  }).catch((err) => console.log(err));
  return res.json();
};

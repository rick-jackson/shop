export const sendEmail = async (props) => {
  // console.log(props);
  const apiEndpoint = "/api/email";

  await fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(props),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

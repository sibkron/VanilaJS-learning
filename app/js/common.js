const fetchDescrText = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("This is a feature of", 2000));
  });

const fetchEsText = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("ES8", 2000));
  });

const showText = async () => {
  const [fetchedDescrText, fetchedEsText] = await Promise.all([
    fetchDescrText(),
    fetchEsText(),
  ]);
  return `${fetchedDescrText} ${fetchedEsText}`;
};

showText().then((data) => console.log(data));

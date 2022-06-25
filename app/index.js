"use strict";

const getConferences = () => {
  let onDone = null;
  const deffered = {
    data: (callback) => (onDone = callback),
  };
  setTimeout(() => {
    if (onDone) onDone(["Tehran", "Yalta", "Postdam"]);
  }, 5000);
  return deffered;
};

//Usage
const conferences = getConferences();

console.log(conferences);

conferences.data((list) => {
  console.log(list);
});

console.log("--------------------------");

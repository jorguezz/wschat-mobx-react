export function getRandomMessages() {

  return new Promise((resolve) => {
    setTimeout(() => {
      let messages = [];
      resolve(messages);
    }, Math.max(Math.random() * 2000, 500));
  });

}

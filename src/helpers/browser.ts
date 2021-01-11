export const pageIsLoaded = () => {
  const state = browser.execute(function () {
    return document.readyState;
  });
  return state === "complete";
};

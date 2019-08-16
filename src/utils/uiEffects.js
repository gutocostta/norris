export const scrollIntoView = selector => {
  const target = document.querySelector(selector);
  if (target) {
    target.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start"
    });
  }
};

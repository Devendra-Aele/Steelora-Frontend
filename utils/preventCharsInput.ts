export const preventCharsInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (
    !/^\d$/.test(e.key) &&
    e.key !== "Backspace" &&
    e.key !== "Delete" &&
    e.key !== "ArrowLeft" &&
    e.key !== "ArrowRight" &&
    e.key !== "ArrowUp" &&
    e.key !== "ArrowDown" &&
    e.key !== "Tab"
  ) {
    e.preventDefault();
  }
};

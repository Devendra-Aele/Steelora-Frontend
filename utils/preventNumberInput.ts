export const preventNumberInputs = (
  e: React.KeyboardEvent<HTMLInputElement>
) => {
  const specialCharsRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
  // Prevent input if key pressed is a number
  if (/\d/.test(e.key) || specialCharsRegex.test(e.key)) {
    e.preventDefault();
  }
};

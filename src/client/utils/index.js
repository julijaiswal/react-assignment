export const validateEmail = (email) => {
  // regex pattern for email validation
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePassword = (password) => {
  // regex pattern for password validation
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  return !!password && regex.test(password);
};

export const validatePrice = (price) => {
  // check if price is a valid number and greater than 0
  return !isNaN(parseFloat(price)) && parseFloat(price) > 0;
};
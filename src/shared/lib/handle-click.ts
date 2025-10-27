export const handleClick = (elementById: string) => {
  const nameElement = document.getElementById(elementById);
  if (nameElement) {
    nameElement.scrollIntoView();
  }
};

export const formatDate = (originalDate) => {
  const d = new Date(originalDate);
  const year = d.getFullYear();
  const month = `0${d.getMonth() + 1}`.slice(-2); //to return last 2 digits
  const date = d.getDate();
  return `${year}-${month}-${date}`;
}

export const dateBefore = (originalDate, daysBefore = 7) => {
  return formatDate(originalDate.setDate(originalDate.getDate() - daysBefore))
}
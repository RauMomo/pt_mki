export function getDaysDifference(date1, date2) {
  // Convert both dates to milliseconds
  const date1Time = new Date(date1).getTime();
  const date2Time = new Date(date2).getTime();

  // Calculate the difference in milliseconds
  const timeDifference = Math.abs(date2Time - date1Time);

  // Convert milliseconds to days
  const dayDifference = timeDifference / (1000 * 60 * 60 * 24);

  return dayDifference;
}

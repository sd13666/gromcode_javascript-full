const getDiff = (startDate, endDate) => {
  const diffInMs = Math.abs(startDate - endDate);
  console.log(diffInMs);
  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  console.log(days);
  const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  console.log(hours);
  const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
  console.log(minutes);
  const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

// Example usage:
const startDateTime = new Date("2024-03-14T09:00:00");
const endDateTime = new Date("2024-03-20T18:30:45");
const timeDifference = getDiff(startDateTime, endDateTime);
console.log(timeDifference); // Sample output: '6d 9h 30m 45s'

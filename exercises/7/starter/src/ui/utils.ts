export function createCalculationTimeText() : string{
    const currentTime = new Date();

  // Format the time as a string
  const formattedTime = currentTime.toLocaleTimeString();

  return `Calculation time : ${formattedTime}`;
}
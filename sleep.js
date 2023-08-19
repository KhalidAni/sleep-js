const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 7;
  } else if (day === "wednesday") {
    return 9;
  } else if (day === "thursday") {
    return 8;
  } else if (day === "friday") {
    return 10;
  } else if (day === "saturday") {
    return 9;
  } else if (day === "sunday") {
    return 11;
  }
};

console.log(getSleepHours("monday"));
console.log(getSleepHours("tuesday"));
console.log(getSleepHours("wednesday"));
console.log(getSleepHours("thursday"));
console.log(getSleepHours("friday"));
console.log(getSleepHours("saturday"));
console.log(getSleepHours("sunday"));

const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

console.log(getActualSleepHours());
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got ${
        actualSleepHours - idealSleepHours
      } hour(s) more sleep than needed.`
    );
  } else {
    console.log(
      `You should get some rest. You got ${
        idealSleepHours - actualSleepHours
      } hour(s) less sleep than you needed this week.`
    );
  }
};

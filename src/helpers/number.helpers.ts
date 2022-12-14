export const addCommaToNumber = (num: number): string => {
  if (num == null) {
    return "";
  }
  const numString = num.toString();
  let result = "";
  let i = 0;
  for (; i < numString.length - 1; i++) {
    result += numString[i];
    if ((numString.length - i - 1) % 3 == 0) result += ",";
  }
  result += numString[i];
  return result;
};

export const addWonToNumber = (num: number) => {
  return "₩" + addCommaToNumber(num);
};

export const add$ToNumber = (num: number) => {
  return "$" + addCommaToNumber(num);
};

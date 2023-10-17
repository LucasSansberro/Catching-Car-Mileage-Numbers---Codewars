function isInteresting(number: number, awesomePhrases: number[]): number | undefined {
  if (number > 100) {
    const interestingByZeros = followedByAllZeros(number);
    if (interestingByZeros != 0) {
      return interestingByZeros;
    } else {
      const interestingBySameNumber = allDigitsSameNumber(number);
      if (interestingBySameNumber != 0) {
        return interestingBySameNumber;
      } else {
        const interestingBySequentialIncremental = sequentialNumbersIncremental(number);
        if (interestingBySequentialIncremental != 0) {
          return interestingBySequentialIncremental;
        } else {
          const interestingBySequentialDecremental = sequentialNumbersDecremental(number);
          if (interestingBySequentialDecremental != 0) {
            return interestingBySequentialDecremental;
          } else return 0;
        }
      }
    }
  } else return 0;
}

function followedByAllZeros(number: number): number {
  const arrayOfDigits: string[] = number.toString().split("");
  arrayOfDigits.shift();
  if (arrayOfDigits.every((number) => number === "0")) {
    return 2;
  } else {
    const lastDigit = arrayOfDigits.pop();
    const booleanAdd: boolean = arrayOfDigits.every((number) => number === "9") && (lastDigit === "8" || lastDigit === "9");
    const booleanMinus: boolean = arrayOfDigits.every((number) => number === "0") && (lastDigit === "1" || lastDigit === "2");
    console.log(arrayOfDigits.every((number) => number === "0"));
    if (booleanAdd || booleanMinus) {
      return 1;
    }
    return 0;
  }
}

function allDigitsSameNumber(number: number): number {
  const arrayOfDigits: string[] = number.toString().split("");
  const baseNumber = arrayOfDigits[0];
  if (arrayOfDigits.every((number) => number == baseNumber)) {
    return 2;
  } else {
    const addAndMinusToInterestingNumber: number[] = [1, 2, -1, -2];
    for (const n of addAndMinusToInterestingNumber) {
      let copyOfNumber: number = number;
      copyOfNumber += n;
      const arrayOfDigitsInIterator: string[] = copyOfNumber.toString().split("");
      const baseNumberInIterator = arrayOfDigitsInIterator[0];
      if (arrayOfDigitsInIterator.every((number) => number == baseNumberInIterator)) {
        return 1;
      }
    }
    return 0;
  }
}

function sequentialNumbersIncremental(number: number): number {
  const arrayOfDigits: number[] = number.toString().split("").map(Number);
  const areAllSequential: boolean[] = [];
  for (let index = 0; index < arrayOfDigits.length; index++) {
    if (index != 0) {
      areAllSequential.push(arrayOfDigits[index - 1] + 1 === arrayOfDigits[index]);
    }
  }
  if (areAllSequential.every((boolean) => boolean)) {
    return 2;
  } else {
    const addAndMinusToInterestingNumber: number[] = [1, 2, -1, -2];
    for (const n of addAndMinusToInterestingNumber) {
      let copyOfNumber: number = number;
      copyOfNumber += n;
      const arrayOfDigitsInIterator: number[] = copyOfNumber.toString().split("").map(Number);
      const areAllSequentialInIterator: boolean[] = [];
      for (let index = 0; index < arrayOfDigitsInIterator.length; index++) {
        if (index != 0) {
          areAllSequentialInIterator.push(arrayOfDigitsInIterator[index - 1] + 1 === arrayOfDigitsInIterator[index]);
        }
      }
      if (areAllSequentialInIterator.every((boolean) => boolean)) {
        return 1;
      }
    }
  }
  return 0;
}

function sequentialNumbersDecremental(number: number): number {
  const arrayOfDigits: number[] = number.toString().split("").map(Number);
  const areAllSequential: boolean[] = [];
  for (let index = 0; index < arrayOfDigits.length; index++) {
    if (index != 0) {
      areAllSequential.push(arrayOfDigits[index - 1] - 1 === arrayOfDigits[index]);
    }
  }
  if (areAllSequential.every((boolean) => boolean)) {
    return 2;
  } else {
    const addAndMinusToInterestingNumber: number[] = [1, 2, -1, -2];
    for (const n of addAndMinusToInterestingNumber) {
      let copyOfNumber: number = number;
      copyOfNumber += n;
      const arrayOfDigitsInIterator: number[] = copyOfNumber.toString().split("").map(Number);
      const areAllSequentialInIterator: boolean[] = [];
      for (let index = 0; index < arrayOfDigitsInIterator.length; index++) {
        if (index != 0) {
          areAllSequentialInIterator.push(arrayOfDigitsInIterator[index - 1] - 1 === arrayOfDigitsInIterator[index]);
        }
      }
      if (areAllSequentialInIterator.every((boolean) => boolean)) {
        return 1;
      }
    }
  }
  return 0;
}

function isPalindrome(number: number): number {
  return 0;
}

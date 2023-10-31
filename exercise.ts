function isInteresting(number: number, awesomePhrases: number[]): number | undefined {
  if (number >= 100) {
    const numberComprobation: number[] = [];
    const interestingByZeros = followedByAllZeros(number);
    if (interestingByZeros != 0) {
      numberComprobation.push(interestingByZeros);
    }
    const interestingBySameNumber = allDigitsSameNumber(number);
    if (interestingBySameNumber != 0) {
      numberComprobation.push(interestingBySameNumber);
    }
    const interestingBySequentialIncremental = sequentialNumbersIncremental(number);
    if (interestingBySequentialIncremental != 0) {
      numberComprobation.push(interestingBySequentialIncremental);
    }
    const interestingBySequentialDecremental = sequentialNumbersDecremental(number);
    if (interestingBySequentialDecremental != 0) {
      numberComprobation.push(interestingBySequentialDecremental);
    }
    const interestingByPalindrome = isPalindrome(number);
    if (interestingByPalindrome != 0) {
      numberComprobation.push(interestingByPalindrome);
    }
    const interestingByAwesomePhrases = sameToAwesomePhrases(number, awesomePhrases);
    if (interestingByAwesomePhrases != 0) {
      numberComprobation.push(interestingByAwesomePhrases);
    }
    if (numberComprobation.length == 0) {
      return 0;
    } else if (numberComprobation.some((el) => el == 2)) {
      return 2;
    } else return 1;
  } else if (number == 98 || number == 99) {
    return 1;
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
    if (index != 0 && arrayOfDigits[index] != 0) {
      areAllSequential.push(arrayOfDigits[index - 1] + 1 === arrayOfDigits[index]);
    } else if (index != 0 && arrayOfDigits[index] == 0) {
      areAllSequential.push(arrayOfDigits[index - 1] === 9);
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
        if (index != 0 && arrayOfDigits[index] != 0) {
          areAllSequentialInIterator.push(arrayOfDigitsInIterator[index - 1] + 1 === arrayOfDigitsInIterator[index]);
        } else if (index != 0 && arrayOfDigits[index] == 0) {
          areAllSequential.push(arrayOfDigits[index - 1] === 9);
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
      const copyOfNumber: number = number + n;
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
  const arrayOfDigits: number[] = number.toString().split("").map(Number);

  const firstHalf =
    arrayOfDigits.length % 2 == 0 ? arrayOfDigits.slice(0, arrayOfDigits.length / 2) : arrayOfDigits.slice(0, arrayOfDigits.length / 2 + 1);
  const secondHalf = arrayOfDigits.slice(arrayOfDigits.length / 2);

  if (firstHalf.reverse().toString() == secondHalf.toString()) {
    return 2;
  } else {
    const addAndMinusToInterestingNumber: number[] = [1, 2, -1, -2];
    for (const n of addAndMinusToInterestingNumber) {
      const copyOfNumber = number + n;
      const arrayOfDigits: number[] = copyOfNumber.toString().split("").map(Number);
      const firstHalf =
        arrayOfDigits.length % 2 == 0 ? arrayOfDigits.slice(0, arrayOfDigits.length / 2) : arrayOfDigits.slice(0, arrayOfDigits.length / 2 + 1);
      const secondHalf = arrayOfDigits.slice(arrayOfDigits.length / 2);
      if (firstHalf.reverse().toString() == secondHalf.toString()) {
        return 1;
      }
    }
  }
  return 0;
}

function sameToAwesomePhrases(number: number, awesomePhrases: number[]): number {
  if (awesomePhrases.some((awesomePhrase) => awesomePhrase == number)) {
    return 2;
  } else {
    const addAndMinusToInterestingNumber: number[] = [1, 2, -1, -2];
    for (const n of addAndMinusToInterestingNumber) {
      const copyOfNumber = number + n;
      if (awesomePhrases.some((awesomePhrase) => awesomePhrase == copyOfNumber)) {
        return 1;
      }
    }
  }
  return 0;
}

console.log(sequentialNumbersIncremental(67890));

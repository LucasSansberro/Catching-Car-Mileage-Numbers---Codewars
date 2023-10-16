function isInteresting(number: number, awesomePhrases: number[]): number {
  if (number > 100) {
    return followedByAllZeros(number);
  } else {
    return 0;
  }
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
    console.log(arrayOfDigits.every((number) => number === "0"))
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

function sequentialNumbers(){
  
}
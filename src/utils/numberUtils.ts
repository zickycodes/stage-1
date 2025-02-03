export const isPrime = (num: number): boolean => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  export const isPerfect = (num: number): boolean => {
    if (num < 2) return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        sum += i;
        if (i !== num / i) sum += num / i;
      }
    }
    return sum === num;
  };
  
  export const isArmstrong = (num: number): boolean => {
    const digits = String(num).split("");
    const length = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), length), 0);
    return sum === num;
  };
  
  export const getDigitSum = (num: number): number => {
    return String(num)
      .split("")
      .reduce((acc, digit) => acc + Number(digit), 0);
  };
  
  export const getParity = (num: number): string => (num % 2 === 0 ? "even" : "odd");
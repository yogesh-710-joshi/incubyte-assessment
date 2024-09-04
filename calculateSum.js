export const add = (numbers) => {
    if (numbers === '') return 0;
    if (!numbers.includes(',') && !numbers.includes('\n')) return parseInt(numbers, 10);
  
    const numArray = numbers.split(/[,\n]/).map(num => parseInt(num, 10));
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  
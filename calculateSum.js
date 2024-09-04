export const add = (numbers) => {
    if (numbers === '') return 0;
  
    let delimiter = /[,\n]/;
    if (numbers.startsWith('//')) {
      const delimiterLineEnd = numbers.indexOf('\n');
      delimiter = new RegExp(numbers.substring(2, delimiterLineEnd));
      numbers = numbers.substring(delimiterLineEnd + 1);
    }
  
    const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));
  
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error('negative numbers not allowed: ' + negatives.join(', '));
    }
  
    return numArray.reduce((sum, num) => sum + num, 0);
  };
  
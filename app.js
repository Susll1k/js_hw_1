function getArrayStats(arr) {
    const min = Math.min(arr); 
    const max = Math.max(arr);
    const sum = arr.reduce((acc, num) => acc + num, 0); 
    const avg = sum / arr.length; 
  
    return {
      min,
      max,
      avg
    };
  }
  
  const arr1 = [1, 3, -5, 7, 9];
  const stats = getArrayStats(arr1);
  console.log(stats); 
  
  function toAbsolute(arr) {
    return arr.map(num => Math.abs(num));
  }
  
  const arr2 = [1, -3, 4, -5];
  const absArr = toAbsolute(arr2);
  console.log(absArr); 
  
  
  
  function fibonacci(n) {
    if (n <= 1) return n; 
    return fibonacci(n - 1) + fibonacci(n - 2); 
  }
  
  console.log(fibonacci(6));
  
  
  
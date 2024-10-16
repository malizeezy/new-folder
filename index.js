function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  const year = 2024;
  if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }


  function getTicketPrice(age) {
    if (age <= 12) {
      return 10;
    } else if (age <= 17) {
      return 15;
    } else {
      return 20;
    }
  }
  
  const age = 25;
  const ticketPrice = getTicketPrice(age);
  console.log(`Ticket price for age ${age}: $${ticketPrice}`);

  function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  const n = 7;
  const result = fibonacci(n);
  console.log(`The ${n}th Fibonacci number is: ${result}`);


  function isPalindrome(str) {
    if (str.length <= 1) {
      return true;
    } else {
      const firstChar = str.charAt(0).toLowerCase();
      const lastChar = str.charAt(str.length - 1).toLowerCase();
      if (firstChar === lastChar) {
        return isPalindrome(str.substring(1, str.length - 1));
      } else {
        return false;
      }
    }
  }
  
  const str = "racecar";
  if (isPalindrome(str)) {
    console.log(`${str} is a palindrome.`);
  } else {
    console.log(`${str} is not a palindrome.`);
  }
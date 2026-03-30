import { useState, useRef } from 'react';

const Palindrome = () => {
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  function checkPal() {
    let value = inputRef.current.value.trim();

    if (value === '') {
      setResult("Please Enter A Number");
      return;
    }

    let temp = Number(value);
    let Original = temp;

    if (isNaN(Original)) {
      setResult("Please Enter A Number");
      return;
    }

    let rev = 0;
    while (temp !== 0) {
      let digit = temp % 10;
      rev = rev * 10 + digit;
      temp = Math.floor(temp / 10);
    }

    if (Original === rev) {
      setResult("Palindrome Number");
    } else {
      setResult("Not Palindrome Number");
    }
  }

  return (
    <div>
      <input 
        ref={inputRef}
        type='number' 
        min='0'
        placeholder="Enter The Number"
      />
      <br />
      <button type='button' onClick={checkPal}>
        Check
      </button>
      <p>{result}</p>
    </div>
  );
};

export default Palindrome;

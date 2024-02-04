import { useEffect, useState } from 'react';

const Typewriter = ({ text, delay }:{text:string , delay:number}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing logic goes here
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
    setCurrentText('');
    setCurrentIndex(0);
  }, [currentIndex, delay, text]);

  return <span className='text-[20px] text-red-500 font-cute'>{currentText}</span>;
};

export default Typewriter;
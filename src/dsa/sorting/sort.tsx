import React, { useState } from 'react';
import Bar from './Barchart';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [sortedIndices, setSortedIndices] = useState(new Set());

  const generateArray = () => {
    const newArr = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 1);
    setArray(newArr);
    setSortedIndices(new Set());
  };

  const bubbleSort = async () => {
    let arr = [...array];
    let len = arr.length;
    let swapped;

    setSorting(true);

    for (let i = 0; i < len; i++) {
      swapped = false;
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap and update state to reflect the change
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }
      if (!swapped) break;
      setSortedIndices(new Set([...sortedIndices, len - i - 1]));
    }
    setSorting(false);
  };

  return (
    <div>
      <button onClick={generateArray}>Generate New Array</button>
      <button onClick={bubbleSort} disabled={sorting}>Start Sorting</button>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {array.map((value, idx) => (
          <Bar key={idx} value={value} highlighted={sortedIndices.has(idx)} />
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;

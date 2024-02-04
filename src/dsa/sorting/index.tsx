import React, { useState } from "react";
import BarChart from "./Barchart";

const generateUniqueRandomArray = (
  min: number,
  max: number,
  length: number
): number[] => {
  const numbers = new Set<number>();
  while (numbers.size < length) {
    const randomNum = Math.floor(Math.random() * (max - min) + min); // Adjust 100 to your desired range
    numbers.add(randomNum);
  }
  return Array.from(numbers);
};

export type selectedNumber = {
  current: number;
  next: number;
};

const Sorting = () => {
  const [data, setData] = React.useState<number[]>(
    generateUniqueRandomArray(8, 200, 40)
  );
  //   const [selectedNumber, setSelectedNumber] = React.useState<selectedNumber>();
  const [sorting, setSorting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<selectedNumber>();
  //   const [sortedIndices, setSortedIndices] = useState(new Set());
  // const data = generateUniqueRandomArray(40);
  const startSorting = async () => {
    console.log("sorting started");
    const tempArray = [...data];
    const n = tempArray.length;
    let swapped: boolean;
    setSorting(true);
    for (let i = 0; i < n; i++) {
      swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        setCurrentIndex({ current: tempArray[j], next: tempArray[j + 1] });
        if (tempArray[j] > tempArray[j + 1]) {
          // Swap the elements
          const temp = tempArray[j];
          // setData([...data,data[i]=data[i+1]]);
          tempArray[j] = tempArray[j + 1];
          // setData([...data,data[i+1]=temp]);
          tempArray[j + 1] = temp;
          swapped = true;
          setData([...tempArray]);
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      }
      if (!swapped) break;
      //   console.log(new Set([...sortedIndices, n - i - 1]));
      //   setSortedIndices(new Set([...sortedIndices, n - i - 1]));
    }
    setSorting(false);
  };

  //   const bubbleSort = async () => {
  //     const arr = [...data];
  //     const len = arr.length;
  //     let swapped;

  //     setSorting(true);

  //     for (let i = 0; i < len; i++) {
  //       swapped = false;
  //       for (let j = 0; j < len - i - 1; j++) {
  //         if (arr[j] > arr[j + 1]) {
  //           // Swap and update state to reflect the change
  //           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  //           swapped = true;
  //           setData([...arr]);
  //           await new Promise((resolve) => setTimeout(resolve, 100));
  //         }
  //       }
  //       if (!swapped) break;
  //       setSortedIndices(new Set([...sortedIndices, len - i - 1]));
  //     }
  //     setSorting(false);
  //   };
  return (
    <div>
      <h1>sorting visualization</h1>
      <div className="flex justify-center items-end space-x-2 bg-gray-100 p-4 h-[50vh] ">
        {data.map((value, index) => {
          return (
            <BarChart
              key={index}
              value={value}
              highlighted={{
                current: currentIndex?.current === value,
                next: currentIndex?.next === data[index-2],
              }}
            />
          );
        })}
      </div>
      <div className="flex justify-center w-full mt-20">
        <div className="flex gap-5">
          <button
            onClick={startSorting}
            disabled={sorting}
            className="px-6 py-3 rounded-lg bg-green-500 font-semibold text-white"
          >
            Start Bubble Sorting
          </button>
          <button
            onClick={() => setData(generateUniqueRandomArray(8, 200, 40))}
            className="px-6 py-3 rounded-lg bg-blue-500 font-semibold text-white"
          >
            Generate new array
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sorting;

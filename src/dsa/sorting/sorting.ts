export function bubbleSort(arr: number[]): number[] {
    let n = arr.length;
    let swapped: boolean;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        // Reduce n since the largest element is now on the right
    //delay
        // for(let i = 0; i <10000; i++) {
        //     for(let j = 0; j < 10000; j++) {
        //         console.log(i, j);
        //     }
        // }
        n--;
    } while (swapped);
    return arr;
}
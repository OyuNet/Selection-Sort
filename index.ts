export default function selectionSort(array: number[]) {
    let n: number = array.length
    for (let i: number = 0; i < n - 1; i++) {
        let minIndex: number = i;
        for (let j: number = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
            if (minIndex !== i) {
                let temp: number = array[i];
                array[i] = array[minIndex];
                array[minIndex] = temp;
            }
        }
    }
    return array;
}
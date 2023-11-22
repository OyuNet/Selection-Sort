class Main:
    def SelectionSort(self, Array):
        n = len(Array)
        i = 0
        while (i < n-1):
            minIndex = i
            j = i + 1
            while (j < n):
                if (Array[j] < Array[minIndex]):
                    minIndex = j
                j += 1
            if (minIndex != i):
                temp = Array[i]
                Array[i] = Array[minIndex]
                Array[minIndex] = temp
            i += 1
        return Array
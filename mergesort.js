const mersort = (arr) => {
    const ArrayDivider = (aray) => {
        let arr1 = [];
        let arr2 = [];
        aray.forEach((element, i) => {
            if (i < aray.length / 2) {
                arr1.push(element)
            }
            else {
                arr2.push(element)
            }
        });
        return ({ arr1, arr2 })
    }
    const ArrayMerger = ({ ar1, ar2 }) => {
       
        let i=0
        let j=0
        let mergedArray=[]
        while (i < ar1.length && j < ar2.length) {
            if (ar1[i] <= ar2[j]) {
                mergedArray.push(ar1[i]);
                i++;
            } else {
                mergedArray.push(ar2[j]);
                j++;
            }
        }
    
        // Add remaining elements from arr1 (if any)
        while (i < ar1.length) {
            mergedArray.push(ar1[i]);
            i++;
        }
    
        // Add remaining elements from arr2 (if any)
        while (j < ar2.length) {
            mergedArray.push(ar2[j]);
            j++;
        }
    
     
        console.log("3=["+mergedArray+"]")
        return mergedArray
    }
    if (arr.length > 1) {
        const divided = ArrayDivider(arr)
        let arsorted=mersort(divided.arr1)
        let ar2sorted =mersort(divided.arr2)
        return ArrayMerger({ar1:arsorted, ar2:ar2sorted})
    }
    return arr
}

console.log(mersort([1,4,5,3]))
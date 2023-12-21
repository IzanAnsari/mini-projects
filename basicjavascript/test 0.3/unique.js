function countUniqueItems(arr) {
    let uniqueItems = 0;

    for (let i = 0; i < arr.length; i++) {
        let isUnique = true;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            uniqueItems++;
        }
    }

    return uniqueItems;
}

// Example usage
const input1 = [1, 2, 3, 4, 5, 5, 4, 2];
const output1 = countUniqueItems(input1);
console.log(output1);

const input2 = ['ab', 'bb', 'aba', 'ba', 'bb'];
const output2 = countUniqueItems(input2);
console.log(output2);

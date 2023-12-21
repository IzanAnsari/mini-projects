// 4- make a function which acts like lastIndexOf

// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

// console.log(animals.lastIndexOf('Dodo'));
// // Expected output: 3

// console.log(animals.lastIndexOf('Tiger'));
// // Expected output: 1

function customLastIndexOf(array, searchElement) {
    
    if (array.length === 0) {
      return -1;
    }
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] === searchElement) {
        return i;
      }
    }
    return -1;
  }
  
  const array = [1, 2, 3, 4, 2, 5, 4];
  const searchElement = 4;
  const lastIndex = customLastIndexOf(array, searchElement);
  
  console.log(`Last index of ${searchElement}: ${lastIndex}`);

  
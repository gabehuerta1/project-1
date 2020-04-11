// jshint esversion: 7
let array = [2, 4, 6];

let arrAvg = (arr) => {
  let sum = 0;

  for (var  i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  let av = sum / arr.length;
  return av;
};
console.log("average =" + arrAvg(array));

numbers = [-1, -900, -90, -91, -96, -70, -90, -700,0]

let arrMax = (numbers) => {
  let max = numbers[0];
  numbers.forEach((num) =>{
    if(num > max){
      max = num;
    };
  });
  return max;
}
console.log(arrMax(numbers));


let array = [2, 4, 6, 9];
let sumEvens = (arr) =>{
  let sum = 0;
  for (let numbers of arr) {
    if(numbers % 2 == 0){
      sum += numbers;
    }
  }
  return sum;
}
console.log(sumEvens(array));

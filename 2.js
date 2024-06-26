//give an array give me back an array in which every value is multiplied by 2
const input= [1,2,3,4,5];
//function transform(i){
  //  return i*2;
//}
//const output=input.map(transform);

//const output2=input.map((i)=>{
  //  return i*2;
//})
//console.log(output2);
const output3=input.filter((number)=>{
    return number%2==0;
})
console.log(output3);
function myMap(arr,fn){
    const newArr=[];
    for(let i=0;i<arr.length;++i){
        newArr.push(fn(arr[i]));
    }
    return newArr;
}
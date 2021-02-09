const deepCopy = (obj)=> {
  const newObj = {};
  
  for(const i in obj){
    if(typeof obj[i] === "object" && obj[i] !== null && obj[i] !== undefined){
        newObj[i] = deepCopy(obj[i]);
    }else{
      newObj[i] = obj[i];
    }
  }
  return newObj
}


const a = {a:{c:1,d:1},b:2,c:"hello"};
const b= deepCopy(a);
b.b ="mutate";
a.b="hello a"
console.log("b:- ",b)
console.log("a:- ",a)


const newArray = [];

const flatArray = (arr) => {	
  for(const i of arr){
    if(Array.isArray(i)){
       flatArray(i);
    }else{
      newArray.push(i)
    }
  }
  return newArray;
}

console.log(flatArray([1,2,[3,4,5],[6,[7,8]]]))

let i=0;
const printArray = (arr) =>{
	if(arr[i]){
  	console.log(i+":"+arr[i])    
    i++;
    printArray(arr);
  }else{
  	return;
  }
}

printArray([10,20,30,40,50,60,70])

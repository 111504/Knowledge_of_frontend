//今有兩unique陣列，請說明你要如何找出兩陣列中重複的元素

function find (arr,arr2){
   const result = [] 
   const flex=[]
   for(let i=0;i<arr.length;i++){
     flex[arr[i]]=1;
   }

   for(let i=0;i<arr2.length;i++){
    if(flex[arr2[i]]){
        result.push(arr2[i])
    }
 
}
}

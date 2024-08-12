function  removeDuplivate(arr){
    return Array.from(new Set(arr))
}

function removeDuplivate_v2(arr){
    return [...new Set(arr)]
}

let arr=[1,2,3,3,5,6]
let arrAfter=removeDuplivate_v2(arr);

console.log(arrAfter)


function removeDuplivate_v3(arr){
    return arr.filter((item,index,array)=>array.indexOf(item)===index)
}

console.log(removeDuplivate_v3(arr))


function removeDuplivate_v4(arr){
    for(let i=0;len=arr.length;i<len,i++){
        for(let j=i+1;j<len;j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1);
                len--;
                j--;
            }
        }
    }
    return arr;
}

function removeDuplivate_v5(arr){
    let seen={};
    let newArray=[];

    for(let item of arr){
        if(seen[item]!=true){
            newArray.push(item);
            seen[item]=true;
        }
    }
    return newArray;
}


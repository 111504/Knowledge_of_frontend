function useState(initialState){
    let state=initiakState;
    
    function getState(){
       return state;
    }

    function setState(updateState){
        state=updatedState;
    }
    return [getState,setState];
}

const [count,setCount]=useState(0)
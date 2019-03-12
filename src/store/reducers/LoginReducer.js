let data = {
    number:20
}


function loginReduce(state=data,action){
    switch (action.type) {
        case "ADD":
            state.number++
            return state
        default:
            return state
    }
    
}

export default loginReduce
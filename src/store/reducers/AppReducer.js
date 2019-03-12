let data = {
    number:0
}


function appReduce(state=data,action){
    switch (action.type) {
        case "ADD":
            state.number++
            return state
        default:
            return state
    }
    
}

export default appReduce
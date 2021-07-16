const usersReducer = (state, action) => {
    switch(action.type){
        case 'CREATE_USER':
            return [...state, {name: action.name, location: action.location}]
        case 'UPDATE_LIST':
            return action.users
        case 'REMOVE_USER':
            return state.filter((user) => user.name !== action.name)
    }
}

export default usersReducer
import React, { useReducer, useEffect} from 'react'
import UsersContext from '../contexts/users-context'
import AppRouter from '../routes/AppRouter'
import usersReducer from '../reducers/users'

const UserMng = () => {
    const [users, dispatch] = useReducer(usersReducer, [])

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users'))
        if(users){
            dispatch({type: "UPDATE_LIST", users})
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users])

    return(
        <UsersContext.Provider value={{users, dispatch}}>
            <AppRouter className="router"/>
        </UsersContext.Provider>
    )
}

export default UserMng
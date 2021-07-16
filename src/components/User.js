import React, { useContext } from 'react'
import UsersContext from '../contexts/users-context'
import {useHistory} from 'react-router-dom'

const User = ({user}) => {
    const {dispatch} = useContext(UsersContext)
    const history = useHistory()
    const removeUser = (name) => {
        dispatch({type: "REMOVE_USER", name})
    }
    const viewUser = (name) => {
        history.push(`/users/view/${name}`)
    }
    return(
        <div>
            <hr />
            <p>{user.name}, {user.location}
                <span>
                    <button onClick={() => removeUser(user.name)}>delete</button>
                    <button onClick={() => viewUser(user.name,user.location)}>view</button> 
                </span>
            </p>
        </div>
    )
}

export default User
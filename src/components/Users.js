import React, { useContext } from 'react'
import UsersContext from '../contexts/users-context'
import User from './User'

const Users = () => {
    const {users} = useContext(UsersContext)
    
    return users.map((user) => (
        <User key={user.name} user={user} />
    ))
}

export default Users
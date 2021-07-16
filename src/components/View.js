import React, {useContext} from 'react'
import UsersContext from '../contexts/users-context'
import {useHistory} from 'react-router-dom'

const View = (props) => {
    const {users} = useContext(UsersContext)
    const history = useHistory()
    const x = users.find((user) => user.name === props.match.params.id)
    return(
        <>
        <div>name: {x.name}, location: {x.location}</div>
        <button onClick={() => history.push('/Users')}>go back</button>
        </>
    )
       
}

export default View
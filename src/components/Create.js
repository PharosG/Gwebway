import React,{useState, useContext} from 'react'
import UsersContext from '../contexts/users-context'
import {useHistory} from 'react-router-dom'


const Create = () => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const {dispatch} = useContext(UsersContext)
    const history = useHistory()

    const createUser = (e) => {
        e.preventDefault()
        dispatch({type: "CREATE_USER", name, location})
        setName('')
        setLocation('')
        history.push('/users')
    }

    return(
        <>
            <form onSubmit={createUser}>
                <label>Username</label>
                <br />
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <label>location</label>
                <br />
                <input value={location} onChange={(e) => setLocation(e.target.value)} />
                <br />
                <button>Create</button> 
            </form>
        </>
    )
}

export default Create
import React from 'react'
import { FaUserSecret } from 'react-icons/fa'

const Title = () => {
    return (
        <div className='header'>
            <FaUserSecret className='icon'></FaUserSecret>
            <h2 className='title'>ENCRYPT YOUR WORDS</h2>
        </div>
    )
}

export default Title
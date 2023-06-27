import React, { useState } from 'react';

function Cipher() {

    const [cipher, setCipher] = useState('')
    const [ecnrypt, setEncrypt] = useState('')

    const inputCipher = () => {
        setEncrypt(caeserCipher(cipher))
    }

    function caeserCipher(cipher) {
        const codePlain = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

        const codeCipher = ["X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W"]
        let encrypt = ""
        let index
        for(let i = 0; i < cipher.length; i ++) {
            index = codePlain.indexOf(cipher.charAt(i).toUpperCase())
            if(index != -1) {
                encrypt += codeCipher[index]
            } else {
                encrypt += " "
            }
        }
        return "CIPHER: " + encrypt
    }

    return (
        <div className='container'>
            <input 
            className='cipher-text'
            type="text" 
            onChange={(e) => setCipher(e.target.value)}
            />
            <button className='btn' onClick={inputCipher}>
                Convert text as cipher
            </button>
            <h4 className='cipher'>{ecnrypt}</h4>
        </div>
    )
}

export default Cipher
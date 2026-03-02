'use client'
import React from 'react'
import { useState } from 'react'

const PlayerCard = ({number, startLife, invert}) => {
    const [life, setLife] = useState(startLife)

    const handleChangeLife = (ammount) => {
        let currentLife = life + ammount
        setLife(currentLife)
        return
    }

    return (
        <div style={{height: "100%", width: "100%", display: "flex", flexDirection: "column", padding: "32px", alignItems: "center", rotate: invert ? "180deg" : "0"}}>
            <h2 style={{color: "black", fontSize: 64, marginTop: '32px'}}>Player {number}</h2>
            <div style={{backgroundColor: "white", width: "100%", display: "flex", gap: "96px", alignItems: "center", justifyContent: "center"}}>
                <button onClick={() => handleChangeLife(-1)} style={{backgroundColor: 'transparent', height: "80%", width: "200px", fontSize: 124, color: "black", fontWeight: "bold", border: "none"}}>-</button>
                <p style={{color: "black", fontSize: 350, fontWeight: "bold"}}>{life}</p>
                <button onClick={() => handleChangeLife(1)} style={{backgroundColor: 'transparent', height: "80%", width: "200px", fontSize: 124, color: "black", fontWeight: "bold", border: "none"}}>+</button>
            </div>
            <div style={{display: "flex", gap: "16px", width: "100%", justifyContent: "center", marginTop: "-32px"}}>
                <button onClick={() => handleChangeLife(-10)} style={{backgroundColor: 'transparent', fontSize: 48, color: "black", border: "3px solid black", padding: "8px", borderRadius: "8px", width: "120px"}}>-10</button>
                <button onClick={() => handleChangeLife(-5)} style={{backgroundColor: 'transparent', fontSize: 48, color: "black", border: "3px solid black", padding: "8px", borderRadius: "8px", width: "120px"}}>-5</button>
                <button onClick={() => handleChangeLife(5)} style={{backgroundColor: 'transparent', fontSize: 48, color: "black", border: "3px solid black", padding: "8px", borderRadius: "8px", width: "120px"}}>+5</button>
                <button onClick={() => handleChangeLife(10)} style={{backgroundColor: 'transparent', fontSize: 48, color: "black", border: "3px solid black", padding: "8px", borderRadius: "8px", width: "120px"}}>+10</button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default PlayerCard
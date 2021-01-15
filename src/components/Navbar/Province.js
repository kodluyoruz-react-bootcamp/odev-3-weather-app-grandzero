import React from 'react'

function Province({handleProvince,name}) {
    
    return (
        <li   onClick={(e) => handleProvince(name)} style={{paddingLeft:"6%",color:"black",fontSize:"2vw"}}>{name}</li>
    )
}

export default Province

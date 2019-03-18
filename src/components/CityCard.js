import React from 'react';


const CityCard=({name, temp, onSelect})=>{

    
    const temperature = (Math.round((temp-273)*9/5+32))

    return(
        <div className="ui card" onClick={()=>onSelect(name)} style={{cursor:'pointer'}}>
            <div className="image">
            </div>
            <div className="content">
                <p className="header">{name}</p>
                <p>{temperature}°F</p>
            </div>
        </div>
    )

}
export default CityCard
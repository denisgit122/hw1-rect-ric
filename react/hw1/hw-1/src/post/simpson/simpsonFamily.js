import React from 'react';
import "./simpson.css"
export const SimpsonFamily=({name,img,body})=>{
    return(
        <div>
            <h2 className={'name'}>{name}</h2>
            <div className={'box'}>
            <img src={img} alt={'12'}/>
            <p>{body}</p>
            </div>
        </div>
    )
}

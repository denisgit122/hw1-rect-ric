import React from 'react';
import "./Morty.css";

export const Morty=({id,name,img,im,img3,img4,img5,status,species,gender})=>{


    return(
        <div>
            <h2 className={'name'}>{id} {name}</h2>
            <div className={'container'}>
                    <img className={'slide'} src={img} alt={'12'}/>
                    <img className={'slide'} src={im} alt={'12'}/>
                    <img className={'slide slide2'}  src={img3} alt={'12'}/>
                    <img className={'slide'} src={img4} alt={'12'}/>
                    <img className={'slide'} src={img5} alt={'12'}/>
            </div>

<div className={'boxLi'}>
    <ul className={'li'}>
        <li>{status}</li>
    </ul>
    <ul className={'li'}>
        <li>{species}</li>
    </ul>
    <ul className={'li'}>
        <li>{gender}</li>
    </ul>
</div>
<hr/>

        </div>
    )
}
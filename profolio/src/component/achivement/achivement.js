import React from 'react';
import {useState} from "react";
import {useSelector} from "react-redux";
import './achivement.scss'
import Title from '../title_header';
const img = require('../../image/html.png');
const Achivement = (props) =>{
    var data = useSelector(state => state.getInforReducer);
    const [fliped,setFliped] = useState(false);
    var items = [];
    var style = {
        backgroundImage:`url(${img})`
    }
    var classN = `achivement-img ${fliped ? 'achivement-img--fliped' : ''}`;
    var classM = `achivement-item ${fliped? 'achivement-img--fliped' : ''}`;
    if(data.achivement){
        data.achivement.forEach(element => {
            items.push(
                <div>
                    <section className={classM}>
                            <div className='achivement-item__info'>    
                                <article>
                                    <p>Achivement</p>
                                    <p>{element.name}</p>
                                    <a href={element.link} target='_blank'>How to make the websites</a>
                                </article>
                                <article>
                                    <span style={{color:'5fcf80'}} className='icon-checkmark-circle'></span>
                                    <aside>
                                        <p>Achieved</p>
                                        <span>{element.date}</span>
                                    </aside>
                                </article>
    
                            </div>
                            <div className='achivement-item__img'>
                                <figure>
                                    <img src={img}></img>
                                </figure>
                            </div>
                    </section>
                    <div className={classN} style={style}>
                        
                    </div>
                </div>
            )
        })
    }

    return(
        <div className='main-page'>
            <Title title='Achivement'></Title>
            <div className='achivement-grid'>
                {items}
                
            </div>
        </div>
    )
}
export default Achivement;
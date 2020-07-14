import React from 'react';
import {useState} from "react";
import {useSelector} from "react-redux";
import './achivement.scss'
import Title from '../title_header';
const img = require('../../image/html.png');
const Achivement = (props) =>{
    var data = useSelector(state => state.getInforReducer);
    const [fliped,setFliped] = useState(false);
    const [opacity,setOpacity] = useState(0);
    var items = [];
    var style = {
        opacity:opacity
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
                                    <p>{element.title}</p>
                                    <p>{element.name}</p>
                                    <a href='#' target='_blank'>..more...</a>
                                    <p style={style}> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
                                </article>
                                <article>
                                    <div>
                                        <span style={{color:'5fcf80'}} className='icon-checkmark-circle'></span>
                                        <aside>
                                            <p>Achieved</p>
                                            <span>{element.date}</span>
                                        </aside>
                                    </div>
                                    <div>
                                        <a href={element.link} target='_blank'>Check more</a>
                                    </div>
                                </article>
                        
    
                            </div>
                            <div className='achivement-item__img'>
                                <figure>
                                    <img src={element.img}></img>
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
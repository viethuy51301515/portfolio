import React from 'react';
import {useState} from "react";
import './achivement.scss'
import Title from '../title_header';
const img = require('../../image/html.png');
const Achivement = (props) =>{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         fliped : false
    //     }
    // }
    const [fliped,setFliped] = useState(false);
    var items = [];
    var style = {
        backgroundImage:`url(${img})`
    }
    var classN = `achivement-img ${fliped ? 'achivement-img--fliped' : ''}`;
    var classM = `achivement-item ${fliped? 'achivement-img--fliped' : ''}`;
    for (let index = 0; index < 4; index++) {
        items.push(
            <div>
                <section className={classM}>
                        <div className='achivement-item__info'>    
                            <article>
                                <p>Achivement</p>
                                <p>Customizing Colors and Fonts</p>
                                <a href='https://www.freecodecamp.org/certification/viethuy/front-end-libraries' target='_blank'>How to make the websites</a>
                            </article>
                            <article>
                                <span style={{color:'5fcf80'}} className='icon-checkmark-circle'></span>
                                <aside>
                                    <p>Achieved</p>
                                    <span>Nov 18, 2014</span>
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
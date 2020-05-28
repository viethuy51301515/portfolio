import React from 'react';
import './achivement.scss'
import Title from '../title_header';
const img = require('../../image/html.png')
class Achivement extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        var items = [];
        for (let index = 0; index < 4; index++) {
            items.push(
                <div>
                <section className='achivement-item'>
                        <div className='achivement-item__info'>    
                            <article>
                                <p>Achivement</p>
                                <p>Customizing Colors and Fonts</p>
                                <p>How to make the websites</p>
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
}
export default Achivement;
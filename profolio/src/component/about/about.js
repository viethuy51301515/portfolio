import React from 'react';
import Title from '../title_header';
import './about.scss';
class About extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='about main-page'>
                <Title title='ABOUT ME'></Title>
                <section>
                    <figure>
                        <img>
                        </img>
                    </figure>
                    <article>
                        <h1>

                        </h1>
                        <p>

                        </p>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </article>
                </section>
            </div>
        )
    }
}
export default About;
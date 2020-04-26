import React from 'react';
import Title from '../title_header';
import './about.scss';
class About extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='about'>
                <Title title='ABOUT ME'></Title>
            </div>
        )
    }
}
export default About;
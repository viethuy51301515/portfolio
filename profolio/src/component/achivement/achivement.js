import React from 'react';
import './achivement.scss'
import Title from '../title_header';
class Achivement extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='main-page'>
                <Title title='Achivement'></Title>
            </div>
        )
    }
}
export default Achivement;
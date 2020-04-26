import React from 'react';
import './title.scss'
class Title extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='title'>
                <h1 className='title__header'>
                    {this.props.title}
                </h1>
                <span className='title__line'>
                    
                </span>
            </div>
        )
    }
}
export default Title;
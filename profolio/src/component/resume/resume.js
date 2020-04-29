import React from 'react';
import Title from '../title_header';
class Resume extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='main-page'>
                <Title title='Resume'></Title>
            </div>
        )
    }
}
export default Resume;
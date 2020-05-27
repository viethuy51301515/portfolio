import React from 'react';
import Title from '../title_header';
import './portfolios.scss';
var img = require('../../image/cloth.jpg')
let portfolios = [
    {
        img:"",
        title:"T-shirt Mockup",
        description:"A beautiful t-shirt mockup"
    },
    {
        img:"",
        title:"T-shirt Mockup",
        description:"A beautiful t-shirt mockup"
    },
    {
        img:"",
        title:"T-shirt Mockup",
        description:"A beautiful t-shirt mockup"
    },
    {
        img:"",
        title:"T-shirt Mockup",
        description:"A beautiful t-shirt mockup"
    },
    {
        img:"",
        title:"T-shirt Mockup",
        description:"A beautiful t-shirt mockup"
    },
    {
        img:"",
        title:"T-shirt Mockup",
        description:"A beautiful t-shirt mockup"
    },
    {
        img:"",
        title:"T-shirt Mockup",
        description:"A beautiful t-shirt mockup"
    },
    {
        img:"",
        title:"T-shirt Mockup",
        description:"A beautiful t-shirt mockup"
    },
    {
        img:"",
        title:"T-shirt Mockup",
        description:"A beautiful t-shirt mockup"
    },
    {
        img:"",
        title:"T-shirt Mockup",
        description:"A beautiful t-shirt mockup"
    },
    {
        img:"",
        title:"T-shirt Mockup",
        description:"A beautiful t-shirt mockup"
    },
    {
        img:"",
        title:"T-shirt Mockup",
        description:"A beautiful t-shirt mockup"
    },
    {
        img:"",
        title:"T-shirt Mockup",
        description:"A beautiful t-shirt mockup"
    },
    {
        img:"",
        title:"T-shirt Mockup",
        description:"A beautiful t-shirt mockup"
    },
]
const PortForlioItem = function(props) {
    return(
        <div className='portfolio-item'>
            <div className='portfolio-item__image'>
                <img src={img} alt=""/>
                <a href='#'><span class="action icon-inspector-arrow"></span></a>
            </div>
                <h5 className='portfolio-item__title'>
                    {props.title}
                </h5>
                <h5 className='portfolio-item__description'>
                    {props.description}
                </h5>
        </div>
    )
}
class Portfolios extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var items = portfolios.map(item => {
            return (<PortForlioItem title={item.title} description={item.description} />)
        })
        console.log(items);
        return(
            <div className='main-page'>
                <Title title='Portfolios'></Title>
                <h1 className='port__title'>Free Code Came</h1>
                <div className='grid'>
                    {items}
                </div>
                <h1 className='port__title'>Free Code Came</h1>
                <div className='grid'>
                    {items}
                </div>
            </div>
        )
    }
}
export default Portfolios;
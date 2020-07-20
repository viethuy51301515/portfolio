import React, { Fragment } from 'react';
import Title from '../title_header';
import {useSelector} from "react-redux";
import {Suspense} from 'react';
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
        // <Suspense fallback={<div>loader</div>}>
            <div className='portfolio-item'>
                <div className='portfolio-item__image'>
                    <img src={props.img} alt=""/>
                    <a href={props.link}><span className="action icon-inspector-arrow"></span></a>
                </div>
                <h5 className='portfolio-item__title'>
                    {props.title}
                </h5>
                <h5 className='portfolio-item__description'>
                    {props.description}
                </h5>
            </div>
        // </Suspense>
    )
}
const Portfolios = (props)=>{
    const data = useSelector(state => state.getInforReducer);
    let listItem = [];
    let listUI = [];
    if(data.portfolio){
      
        data.portfolio.forEach(element => {
            if(listItem.findIndex(item => item == element.type) == -1){
                listItem = [element.type,...listItem];
            }
        });
        
        listItem.forEach(port => {
            var items = [];
            data.portfolio.forEach(item => {
                if(item.type == port){
                    items.push(
                        <PortForlioItem title={item.title} description={item.description} link={item.link} img={item.img} />
                    )    
                }
            });
            listUI.push(
                <Fragment>
                    <h1 className='port__title'>{port}</h1>
                    <div className='grid'>
                        {items}
                    </div>
                </Fragment>            

            )
        })
        console.log(listUI);
    }
    return(
        <div className='main-page'>
            <Title title='Portfolios'></Title>
            {listUI}
        </div>
    )
}
export default Portfolios;
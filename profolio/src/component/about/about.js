import React from 'react';
import Title from '../title_header';
import './about.scss';
import {useSelector,useDispatch} from 'react-redux' ;
// import {useEffect} from 'react';
// import {getInfor} from  '../../action'
var profileImage = require('../../image/hinhnen.jpg')

function About (props){
    const infor = useSelector(state => state.getInforReducer)
    const dispatch = useDispatch();
    console.log('123');
    // useEffect( ()=>{
    //     dispatch(getInfor());
    // },[]);
    return(
        <div className='about main-page'>
            <Title title='ABOUT ME'></Title>
            <section className='about-content'>
                <figure className='about-content__image'>
                    <img src={profileImage} />
                </figure>
                <article className='about-content__info'>
                    <h1>
                    I am <span>{infor.user && infor.user.name}</span>
                    </h1>
                    <p>
                        I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
                    </p>
                    <ul>
                        <li><b>Full Name</b>{infor.user && infor.user.name}</li>
                        <li><b>DOB</b>{infor.user && infor.user.dob}</li>
                        <li><b>Home Town</b>{infor.user && infor.user.hometown}</li>
                        <li><b>University</b>{infor.user && infor.user.university}</li>
                        <li><b>Location</b>{infor.user && infor.user.location}</li>
                    </ul>
                </article>
            </section>
        </div>
    )
}
export default About;
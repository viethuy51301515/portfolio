import React from 'react';
import Title from '../title_header';
import './about.scss';
import {useSelector,useDispatch} from 'react-redux' ;
import {useEffect} from 'react';
import {getInfor} from  '../../action'
var profileImage = require('../../image/hinhnen.jpg')

function About (props){
    const infor = useSelector(state => state.getInforReducer)
    const dispatch = useDispatch();
    useEffect( ()=>{
        dispatch(getInfor());
    },[]);
    return(
        <div className='about main-page'>
            <Title title='ABOUT ME'></Title>
            <section className='about-content'>
                <figure className='about-content__image'>
                    <img src={profileImage} />
                </figure>
                <article className='about-content__info'>
                    <h1>
                    I am <span>{infor.name}</span>
                    </h1>
                    <p>
                        I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
                    </p>
                    <ul>
                        <li><b>Full Name</b>Huy Phan</li>
                        <li><b>Age</b>25</li>
                        <li><b>Nationality</b>Viet Nam</li>
                        <li><b>Languages</b>English</li>
                        <li><b>Address</b>140/20</li>
                        <li><b>School</b>Bach Khoa University</li>
                    </ul>
                </article>
            </section>
        </div>
    )
}
export default About;
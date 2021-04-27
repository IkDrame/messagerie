import React from 'react';
import { gsap } from 'gsap'
import reactl from './img/logo.jpg';
import face from './img/face.png';
import teams from './img/micro.png';
import insta from './img/insta.png';
import what from './img/what.png';
import {Link} from 'react-router-dom';




class Accueil extends React.Component{
    componentDidMount(){
        const titreSpans = document.querySelectorAll('h1 span');
        const btns = document.querySelectorAll('.btn-first');
        const logo = document.querySelector('.logo');
        const medias = document.querySelectorAll('.bulle');
        const l1 = document.querySelector('.l1');
        const l2 = document.querySelector('.l2');

        window.addEventListener('load', () => {

        const TL = gsap.timeline({paused: true});

        TL
        .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
        .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
        .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
        .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
        .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
        .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');
        TL.play();
})


    }
    render(){
        return(
            <div className="accueil">
                <div className="lignes">
                    <div className="l1"></div>
                    <div className="l2"></div>
                </div>

                <div className="container-first">
                    <h1><span>Partager </span><span>vous </span><span>vos </span><span>Connaissances</span></h1>
                    <div className="container-btns">
                        
                        <Link to="/message">
                            <button className="btn-first b1">
                                 COMMENCER 
                            </button>
                            </Link>
                        
                    </div>
                </div>

                <img src={reactl} className="logo"alt="introuvable"/>


                <ul className="medias">
                    <li className="bulle"><img src={face} className="logo-medias" alt="introuvable"/></li>
                    <li className="bulle"><img src={teams} className="logo-medias" alt="introuvable"/></li>
                    <li className="bulle"><img src={insta} className="logo-medias" alt="introuvable"/></li>
                    <li className="bulle"><img src={what} className="logo-medias" alt="introuvable"/></li>
                </ul>
        </div>
        );
    }
}
export default Accueil;
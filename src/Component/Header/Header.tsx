import React from 'react';
import s from './Header.module.scss'

function Header() {
    return (
        <>
            <div className={s.header}>
                <div className={s.container}>
                    <div className={s.logo}>
                        <img src='' alt=''/>
                    </div>
                </div>

                <div className={s.navlink}>
                    <ul className={s.link}>
                        <li><a className={s.a} href="#home">home</a></li>
                        <li><a className={s.a} href="#portfolio">portfolio</a></li>
                        <li><a className={s.a} href="#skills">skills</a></li>
                        <li><a className={s.a} href="#resume">resume</a></li>
                        <li><a className={s.a} href="#contact">contact</a></li>
                        <li>
                            <button className={s.cv}>CV</button>
                        </li>
                    </ul>

                    <button className={s.toggle}>
                        <i className={s.fas}>X</i>
                    </button>

                </div>
            </div>
        </>
    );
}

export default Header;

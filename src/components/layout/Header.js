import { Link } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import {menuData} from '../../data/menuData.js';
import MenuButtons from '../buttons/MenuButtons'
import MenuTooltip from '../tooltips/MenuTooltip.js';

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef()
    const tooltipRef = useRef()

    function handleClick(event) {
        setIsOpen(!isOpen);
        event.preventDefault();
    }

    function handleClickOutside(event) {
        //Ayuda a que solo se cambie el valor cuando se de click solo afuera del menu y no dentro de sus elementos
        if (ref.current && !ref.current.contains(event.target) && !tooltipRef.current.contains(event.target)) {
            
            setIsOpen(false);
        }
    }

    useEffect(()=> {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    return(
        <Wrapper >

            <Link to="/">
                 <img src="images/logos/logo.svg" alt="Logo"/>
            
            </Link>

            <MenuWrapper count={menuData.length} ref={ref}>

                {menuData.map( (item, index) =>  item.link === '/account'? (<MenuButtons item={item} key={index} onClick={ (event) => handleClick(event) } />) : ( <MenuButtons item={item} key={index} /> ) )}

                <HamburgerWrapper>
                    <MenuButtons item={{title: "", icon: "/images/icons/hamburger.svg", link: "/"}} onClick={ (event) => handleClick(event) } />
                </HamburgerWrapper>
            </MenuWrapper>
            <div ref={tooltipRef}>

                <MenuTooltip isOpen={isOpen}   />
            </div>
        </ Wrapper>
    );
}

const Wrapper = styled.div`
    position: absolute;
    top: 60px;
    display: grid;
    grid-template-columns: 44px auto;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;

    @media (max-width: 768px) {
        top: 30px;
    }
    @media (max-width: 450px) {
        top: 20px;
        padding: 0 20px;
    }
`;
const MenuWrapper = styled.div`

    display: grid;
    gap: 30px;
    grid-template-columns: repeat(${props => props.count },auto);

    @media (max-width: 768px) {
        
        > a {
            display: none;
        }

        grid-template-columns: auto;
    }

`;

const HamburgerWrapper = styled.div`

    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`;

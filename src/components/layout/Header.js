import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components';
import {menuData} from '../../data/menuData.js';
import MenuButtons from '../buttons/MenuButtons'
import MenuTooltip from '../tooltips/MenuTooltip.js';

export default function Header() {
    return(
        <Wrapper>

            <Link to="/">
                 <img src="images/logos/logo.svg" alt="Logo"/>
            
            </Link>

            <MenuWrapper count={menuData.length}>

                {menuData.map((item, index) => (
                  
                  <MenuButtons item={item} key={index} />
                
                ))}

            </MenuWrapper>

            <MenuTooltip />
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
`;
const MenuWrapper = styled.div`

    display: grid;
    gap: 30px;
    grid-template-columns: repeat(${props => props.count },auto);
`;

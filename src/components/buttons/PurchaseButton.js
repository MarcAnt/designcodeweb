import React from 'react';
import styled from 'styled-components';
import { Caption2, SmallText } from '../styles/TextStyles';
import { Link } from 'gatsby'; 

export default function PurchaseButton (props) {
    let {title, subtitle} = props; 
    return (
        <Link to="/page-2">
            <Wrapper>
                <IconWrapper>
                    <Icon src="/images/icons/credit.svg" className="icon"/>
                    <Ring src="/images/icons/icon-ring.svg"/>
                </IconWrapper>
                <TextWrapper>
                    <Title>{title || "Get Pro Access"}</Title>
                    <Subtitle>{subtitle || ""}</Subtitle>
                </TextWrapper>
            </Wrapper>
        </Link>
    )
}
//*, & le aplica el efecto a todos los hijos y al elemento en si con &
const Wrapper = styled.div`  
    max-width: 280px;
    height: 77px;
    padding: 12px;
    background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    border: 0px;
    display: grid; 
    grid-template-columns: 53px auto; 
    align-items: center; 
    gap: 20px; 

    *, & {

        transition: .5s  ease-in-out;
    }

    :hover {
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 30px 60px rgba(23, 0, 102, 0.2),
        inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);

        transform: translateY(-3px);

        .icon {
            transform: scale(1.2);
        }
    }
`; 

const TextWrapper  = styled.div`
    display: grid; 
    gap: 4px; 
`; 

const Title = styled(Caption2)`
    color: black; 
`;

const Subtitle = styled(SmallText)`
    color: black; 
    opacity: 0.7; 
`; 

const Icon = styled.img`
    width: 29px; 
    height: 29px; 
`; 

const Ring = styled.img`
    position: absolute; 
    left: -16px;
    top: -15px;  

    ${Wrapper}:hover & {
        transform: rotate(30deg) scale(1.2) translate(1px, 1px);
    }
`; 

//${Wrapper}:hover & hace referencia al padre que es wrapper y el elemento en si con & 

const IconWrapper = styled.div`
    width: 45px;
    height: 45px;
    background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
    border-radius: 50%;
    display: grid;
    justify-content: center;
    align-content: center;
    justify-self: center; 
    position: relative; 

    ${Wrapper}:hover & {
        filter: hue-rotate(10deg) brightness(150%) saturate(120%);
    }

`; 



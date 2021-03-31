import React from 'react'
import styled from 'styled-components'
import PurchaseButton from '../buttons/PurchaseButton';
import { themes } from '../styles/ColorStyles';
import { H1, MediumText } from '../styles/TextStyles';
function HeroSection() {
    return (
        <Wrapper>
            <ContentWrapper>
                <TextWrapper> 
                   
                    <Title>
                    Design <br />
                    and code React apps
                    </Title>
                    <Description>Don’t skip design. Learn design and code, by building real apps with
                    React and Swift. Complete courses about the best tools.</Description>
                    <PurchaseButton title="Start Learning" subtitle="120+ hours of video"/>
                </TextWrapper> 
            </ContentWrapper>
        </Wrapper>
    )
}

export default HeroSection

// Recordar primero instalar styled components 
// Luego : npm install gatsby-plugin-styled-components styled-components babel-plugin-styled-components 
// Para resolver problemas con la carga de styled components en gatsby agregando `gatsby-plugin-styled-components`, en gatsby-config

// Usando los styles components 
const Wrapper = styled.div`
    background: linear-gradient(180deg, #4316DB 0%, #9076E7 100%);
`; 

const ContentWrapper = styled.div`
	max-width: 1234px;
	padding: 200px 30px;
	margin: 0 auto;
`; 

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid; 
  gap:30px; 
`;
// recordar que cuando esté entre () es que ese estilo viene por import 
//${themes.dark.text1}; viene del import de ColorStyles como un objeto 
const Title = styled(H1)`
	color: ${themes.dark.text1}; 
`;

const Description = styled(MediumText)``; 
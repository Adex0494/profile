import React from 'react'
import { Container,StyledDiv, StyledTypography, TextContainer, StyledAvatar } from './header.styled'
import FaceImage from '../../Assets/Ariangel.jpg'


const Header = () => {
    return <Container>
        <StyledDiv>
            <StyledAvatar alt='Ariangel Díaz Espaillat' src={FaceImage}/>
            <TextContainer>
                <StyledTypography variant='h3' gutterBottom> Ariangel Díaz Espaillat</StyledTypography>
                <StyledTypography variant='h6' gutterBottom> React.js Developer</StyledTypography>
            </TextContainer>
        </StyledDiv>
    </Container>
}

export default Header
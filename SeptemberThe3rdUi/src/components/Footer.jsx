import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    widthL 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
const Title = styled.h3``

const ListItem = styled.li``
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})}
`;



const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>September The 3rd</Logo>
                <SocialContainer>
                    <SocialIcon color="black">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="black">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="black">
                        <Twitter/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center></Center>
            <Right></Right>
        </Container>
    )
}

export default Footer

import {Facebook, Instagram, MailOutline, Pinterest, Room, Twitter , Phone} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`;

const Left= styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo= styled.h1``;

const Desc= styled.p`
    margin: 20px 0px;
`;

const SocialContainer= styled.div`
    display:flex;
`;


const SocialIcon= styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content:center;
    margin-right:20px;
`;



const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({width: "none"})}
`;

const Title= styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin:0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
        width:50%;
        margin-bottom: 10px;
`;


const Right = styled.div`
    flex:1;
    padding: 20px;
`;

const ContactItem = styled.div`
        margin-bottom: 20px;
        display:flex;
        align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Agro Farms</Logo>
            <Desc>
            Slotted Delivery: Pick the most convenient delivery slot to have your grocery delivered. From early morning delivery for early birds, to late-night delivery for people who work the late shift, bigbasket caters to every schedule.
Express Delivery: This super useful service can be availed by customers in cities like Bangalore, Mumbai, Pune, Chennai, Kolkata, Hyderabad and Delhi-NCR in which we deliver your orders to your doorstep in 90 Minutes.
BB Specialty stores: Missed out on buying that essential item from your favorite neighborhood store for tonight’s party? We’ll deliver it for you! From bakery, sweets and meat to flowers and chocolates, we deliver your order in 90 minutes, through a special arrangement with a nearby specialty store, verified by us.
            </Desc>
        <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
        </SocialContainer>
        </Left>
        <Center>
            
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Organic Fruits</ListItem>
                <ListItem>Organic Vegetable</ListItem>
                <ListItem>Fresh Fruits</ListItem>
                <ListItem>Fresh Vegetable</ListItem>
                <ListItem>Fresh Cuts</ListItem>
                <ListItem>Fresh Sprouts</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
                
                
            </List>
        </Center>
        <Right>

            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight: "10px"}}/> 867 Dixie Path, Bangaluru
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: "10px"}}/> +91 768 6720 799
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight: "10px"}}/> contact@agrofarm.dev
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer;

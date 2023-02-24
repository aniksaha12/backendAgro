import  Announcement  from "../components/Announcement"
import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"

const Container = styled.div``;
const Wrapper = styled.div`
    padding:50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
    flex:1;
`;

const Image = styled.img`
   object-fit:cover;
   ${mobile({height: "40vh"})}
`;

const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px;
    ${mobile({padding: "10px"})}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight:100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display:flex;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`;

const Filter = styled.div`
    display:flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding:5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display:flex;
    align-items: center;
    justify-content:space-between;
    ${mobile({weight: "100%"})}
`;

const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items:center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding:15px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 400;

    &:hover{
        background-color: #f8f4f4;
    }
`;



const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://www.bigbasket.com/media/uploads/p/l/10000069_20-fresho-capsicum-green.jpg"/>
                </ImgContainer>
                    <InfoContainer>
                    <Title>Fresho Capsicum - Green (Loose), 500 g</Title>
                    <Desc><h4>About the Product</h4>Leaving a moderately pungent taste on the tongue, Green capsicums, also known as green peppers are bell shaped, medium-sized fruit pods.
They have thick and shiny skin with a fleshy texture inside.
                        <h4>Benefits</h4>
                        Green capsicums have powerful antioxidants and anti-inflammatory properties.
Rich in Vitamin A, B complex, C and phytonutrients. Relieves pain of bone disorders and has the capacity to relax the repirartory passage.
                        <h4>Storage and Uses</h4>
                        Store them in a cool, dry place away from direct sunlight. Keep capsicums dry as moisture makes them rot faster. Refrigerate the peppers unwashed, in a plastic bag and consume within a week. Resort to refrigeration only when they cannot be consumed immediately.
Green bell peppers can be used for a wide variety of dishes due to its distinct flavour and scent. Can be grilled,roasted, baked and sauteed. Widely used in salads, pastas, pizzas, pepper sauce and even for flavouring curries.
                        
                    </Desc>
                    <Price>₹40</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Quantity</FilterTitle>
                                <FilterSize>
                            <FilterSizeOption>100g</FilterSizeOption>
                            <FilterSizeOption>250g</FilterSizeOption>
                            <FilterSizeOption>500g</FilterSizeOption>
                            <FilterSizeOption>750g</FilterSizeOption>
                            <FilterSizeOption>1000g</FilterSizeOption>
                            </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                            <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
                    </InfoContainer>
            </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product


import  styled  from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    flex:1;
    margin:3px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img`
      display: flex;
      ${mobile({height: "20vh"})}
`;

const Info = styled.div`
    ${'' /* position: absolute; */}
`;

const Title = styled.h2`
  ${'' /* margin-bottom: 10px; */}
`;

const Button = styled.button`
    
`;


const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
       
  
      </Info>
    </Container>
  );
};

export default CategoryItem;


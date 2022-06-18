import { Link } from "react-router-dom";
import { Container, Info, Image, Title, Button } from "./CategoryItem.styles";

interface Props {
  img: string;
  title: string;
  cat: string;
}

const CategoryItem: React.FC<Props> = ({ img, title, cat }) => {
  const getCategoryLink = () => {
    switch(cat) {
      case "women":
        return "/women";
      case "men":
        return "/men";
      case "accessories":
        return "/accessories";
      default:
        return `/products/${cat}`;
    }
  };

  return (
    <Container>
      <Link to={getCategoryLink()}>
        <Image src={img} />
        <Info>
          <Title>{title}</Title>
          <Button>SHOP NOW!</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;

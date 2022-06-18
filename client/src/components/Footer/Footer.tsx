import {
  Center,
  Container,
  Left,
  Right,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Title,
  List,
  ListItem,
  ContactItem,
} from "./Footer.styles";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <Container>
      <Left>
        <Logo>✨ Niki's Fashion Store</Logo>
        <Desc>
          Your ultimate destination for premium fashion, trendy styles, and timeless classics. We bring you the best collections from around the world with quality you can trust.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Quick Links</Title>
        <List>
          <Link to="/" style={{textDecoration: 'none'}}><ListItem>🏠 Home</ListItem></Link>
          <Link to="/cart" style={{textDecoration: 'none'}}><ListItem>🛒 Shopping Cart</ListItem></Link>
          <Link to="/articles" style={{textDecoration: 'none'}}><ListItem>📰 Blog & Articles</ListItem></Link>
          <Link to="/about" style={{textDecoration: 'none'}}><ListItem>ℹ️ About Us</ListItem></Link>
          <Link to="/contact" style={{textDecoration: 'none'}}><ListItem>📧 Contact Us</ListItem></Link>
          <Link to="/faq" style={{textDecoration: 'none'}}><ListItem>❓ FAQ</ListItem></Link>
          <Link to="/wishlist" style={{textDecoration: 'none'}}><ListItem>❤️ Wishlist</ListItem></Link>
          <ListItem>📋 Terms & Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Get In Touch</Title>
        <ContactItem>
          <PlaceIcon style={{ marginRight: "10px" }} />
          123 Fashion Street, NYC, USA
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{ marginRight: "10px" }} />
          +1 (555) 123-4567
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: "10px" }} />
          support@nikisfashion.com
        </ContactItem>
        <div style={{marginTop: '15px', fontSize: '12px', color: '#999'}}>
          <p style={{margin: '5px 0'}}>© 2024 Niki's Fashion Store. All rights reserved.</p>
          <p style={{margin: '5px 0'}}>Secure Checkout | Fast Shipping | Easy Returns</p>
        </div>
      </Right>
    </Container>
  );
};

export default Footer;

import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  Language,
  SearchContainer,
  Input,
  Logo,
  MenuItem,
} from "./Navbar.styles";

import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar: React.FC = () => {
  const quantity = useSelector((state: any) => state.cart.quantity);
  //@ts-ignore
  const wishlistCount = useSelector((state: any) => state.wishlist?.products?.length || 0);
  const user = useSelector((state: any) => state.user.currentUser);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer onSubmit={handleSearch} style={{ display: "flex" }}>
            <Input 
              placeholder="Search fashion items..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchIcon 
              style={{ color: "gray", fontSize: 16, cursor: "pointer" }} 
              onClick={handleSearch}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Link to={"/"} style={{textDecoration : 'none'}}>
            <Logo>Niki's</Logo>
          </Link>
        </Center>
        <Right>
        {!user ? (
          <>
            <Link to={'/login'} style={{textDecoration : 'none'}}>
              <MenuItem>REGISTER</MenuItem>
            </Link>
            <Link to={'/register'} style={{textDecoration : 'none'}}>
              <MenuItem>SIGN IN</MenuItem>
            </Link>
          </>
        ) : (
          <>
            <Link to={'/profile'} style={{textDecoration : 'none'}}>
              <MenuItem>
                <AccountCircleIcon style={{marginRight: 5}} />
                PROFILE
              </MenuItem>
            </Link>
            <Link to={'/wishlist'} style={{textDecoration : 'none'}}>
              <MenuItem>
                <Badge badgeContent={wishlistCount} color="primary">
                  <FavoriteBorderIcon color="action" />
                </Badge>
              </MenuItem>
            </Link>
          </>
        )}
          <Link to={"/cart"}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

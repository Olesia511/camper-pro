import { NavLink } from "react-router-dom";
import { Container, HeaderContainer, NavWrapper, StyledLink } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <NavWrapper>
          <StyledLink exact="true" to="/">
            Home
          </StyledLink>

          <StyledLink to="/catalog">Catalog</StyledLink>

          <StyledLink to="/favorites">Favorites</StyledLink>
        </NavWrapper>
      </Container>
    </HeaderContainer>
  );
};

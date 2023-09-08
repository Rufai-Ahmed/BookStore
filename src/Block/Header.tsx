import { styled } from "styled-components";
import { BsSearch } from "react-icons/bs";
import logo from "../Assets/logo.jpg";
import { NavLink } from "react-router-dom";
import Upload from "../Pages/Upload";

const Header = () => {
  return (
    <div>
      <Container>
        <Image>
          <Logo src={logo} />
          <Text>Bookstore</Text>
        </Image>

        <End>
          <Search>
            <BsSearch />
          </Search>
          <NavLink to="/uploads" style={{ textDecoration: "none" }}>
            <Button>Upload</Button>
          </NavLink>
        </End>
      </Container>
    </div>
  );
};

export default Header;

const Button = styled.div``;

const Search = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;

const End = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
`;

const Text = styled.div``;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`;

const Image = styled.div`
  margin-left: 50px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-color: plum;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 20px 0px 20px 0px;
`;

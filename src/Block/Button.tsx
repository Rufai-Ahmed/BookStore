import { styled } from "styled-components";

interface iButton {
  text: string;
}

const Button: React.FC<iButton> = ({ text }) => {
  return (
    <div>
      <Container>{text}</Container>
    </div>
  );
};
export default Button;
const Container = styled.div`
  padding: 15px 19px;
  border-radius: 40px;
  color: white;
  font-size: 20px;
  margin-right: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 350ms;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`;

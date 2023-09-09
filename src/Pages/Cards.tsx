import { styled } from "styled-components";
import back from "../Assets/2292797.jpg";
import back1 from "../Assets/1800879.jpg";
import back2 from "../Assets/1105251.jpg";
import InnerCards from "./InnerCards";
import image from "../Assets/775118.jpg";

const Cards = () => {
  return (
    <div>
      <Container>
        <Row>
          <InnerCards
            DP="N"
            hoverText="Think and Grow Rich"
            DPName="Napolean Hill"
            View={12}
            buttonText="Motivational"
            Img={back}
            bcc="orange"
          />
          <InnerCards
            DP="J"
            hoverText="Atomic Habits"
            DPName="James Clear"
            View={5}
            buttonText="Motivational"
            Img={image}
            bcc="blue"
          />
          <InnerCards
            DP="N"
            hoverText="I Can't Make This Up"
            DPName="Kevin Hart"
            View={2}
            buttonText="Comedy"
            Img={back2}
            bcc="blue"
          />

          <InnerCards
            DP="N"
            hoverText="Grow and Improve"
            DPName="Sean Etang"
            View={12}
            buttonText="Comedy"
            Img={image}
            bcc="plum"
          />
          <InnerCards
            DP="J"
            hoverText="Atomic Habits"
            DPName="James Clear"
            View={5}
            buttonText="Motivational"
            Img={back1}
            bcc="blue"
          />
          <InnerCards
            DP="N"
            hoverText="I Can't Make This Up"
            DPName="Kevin Hart"
            View={2}
            buttonText="Comedy"
            Img={back2}
            bcc="blue"
          />

          <InnerCards
            DP="N"
            hoverText="Think and Grow Rich"
            DPName="Napolean Hill"
            View={12}
            buttonText="Motivational"
            Img={back}
            bcc="orange"
          />
          <InnerCards
            DP="J"
            hoverText="Atomic Habits"
            DPName="James Clear"
            View={5}
            buttonText="Motivational"
            Img={image}
            bcc="blue"
          />
          <InnerCards
            DP="N"
            hoverText="I Can't Make This Up"
            DPName="Steve Hart"
            View={2}
            buttonText="Comedy"
            Img={back2}
            bcc="blue"
          />
          <InnerCards
            DP="N"
            hoverText="Start WIth Why"
            DPName="Sinak Sinek"
            View={12}
            buttonText="Romantic"
            Img={back}
            bcc="orange"
          />
          <InnerCards
            DP="J"
            hoverText="Steal Like an Artist"
            DPName="Austin Kleon"
            View={5}
            buttonText="Motivational"
            Img={image}
            bcc="blue"
          />
          <InnerCards
            DP="N"
            hoverText="I Can't Make This Up"
            DPName="Steve Hart"
            View={2}
            buttonText="Comedy"
            Img={back2}
            bcc="blue"
          />

          <InnerCards
            DP="N"
            hoverText="Think and Grow Rich"
            DPName="Napolean Finn"
            View={12}
            buttonText="Motivational"
            Img={back}
            bcc="orange"
          />
          <InnerCards
            DP="J"
            hoverText="Atomic Habits"
            DPName="James Boom"
            View={5}
            buttonText="Motivational"
            Img={back1}
            bcc="blue"
          />
          <InnerCards
            DP="N"
            hoverText="I Can't Make This Up"
            DPName="Kevin Hart"
            View={2}
            buttonText="Comedy"
            Img={back}
            bcc="blue"
          />
        </Row>
      </Container>
    </div>
  );
};

export default Cards;

const Row = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
`;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
`;

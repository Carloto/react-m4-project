import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
`;

const TextWrapper = styled.p`
  text-align: center;
  padding: 10px;
  font-size: 16px;
`;

const Product = ({ text }: { text: any }) => {
  return (
    <Container>
      <TextWrapper>
        {text.this} for {text.that}
      </TextWrapper>
    </Container>
  );
};

export async function getStaticProps() {
  const text = (await axios.get('https://itsthisforthat.com/api.php?json'))
    .data;

  return { props: { text } };
}

export default Product;

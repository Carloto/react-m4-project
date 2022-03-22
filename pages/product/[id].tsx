import Image from 'next/image';
import styled from 'styled-components';
import { getProduct, getProducts } from '../../api';

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
`;

const ProductContainer = styled.div`
  text-align: center;
  border-radius: 8px;
  padding: 10px;

  & .image {
    position: relative;
    width: 500px;
    height: 500px;
    margin: 0 auto 10px;
  }
`;

const Product = ({ product }: { product: any }) => {
  return (
    <Container>
      {product && (
        <ProductContainer key={product.id}>
          <div className='image'>
            <Image
              priority
              src={product.image}
              alt={product.title}
              layout='fill'
              objectFit='contain'
            />
          </div>
          <p className='title'>{product.title}</p>
          <p className='price'>
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </ProductContainer>
      )}
    </Container>
  );
};

export async function getStaticPaths() {
  const products: any = (await getProducts(10)).data;

  const paths = products.map((product: any) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }: { params: any }) {
  const product = (await getProduct(params.id)).data;

  return { props: { product }, revalidate: 10 };
}

export default Product;

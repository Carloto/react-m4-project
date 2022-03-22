import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { useHomeProducts } from '../hooks';

const Main = styled.main`
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
`;

const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ProductThumb = styled.div`
  min-width: 250px;
  max-width: 400px;
  flex: 1;
  border: 2px solid gainsboro;
  border-radius: 8px;
  padding: 10px;

  &:hover {
    border-color: black;
  }

  & .image {
    position: relative;
    width: 240px;
    height: 240px;
    margin: 0 auto 10px;
  }
`;

const Footer = styled.footer`
  text-align: center;
`;

const Home: NextPage = () => {
  const {
    homeProducts,
    isLoading: _isLoading,
    isError: _isError,
  } = useHomeProducts();

  return (
    <div>
      <Head>
        <title>Computer Shop</title>
        <meta name='description' content='IGTI React Course Unit 4 Project' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main>
        {homeProducts && (
          <ProductsList>
            {homeProducts.map((product: any) => (
              <ProductThumb key={product.id}>
                <div className='image'>
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
                <p className='title'>
                  <Link href={`product/${product.id}`}>
                    <a>{product.title}</a>
                  </Link>
                </p>
                <p className='price'>
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </p>
              </ProductThumb>
            ))}
          </ProductsList>
        )}
      </Main>

      <Footer>
        <Link href='/sobre'>
          <a>Sobre nós</a>
        </Link>
      </Footer>
    </div>
  );
};

export default Home;

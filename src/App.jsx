import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import theme from './constants/theme';
import { Row, Col } from './components/layout';
import Product from './components/Product';
import Footer from './components/Footer';
import { products } from './mockData';
import WishListModal from './components/Modal/WishListModal';

const StyledContainer = styled.div`
  margin-bottom: 48px;
`;

const App = () => {
  const [fav, setFav] = useState(() => new Map());
  const [showModal, setShowModal] = useState(false);
  const showFooter = fav.size > 0;
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <Row>
          {products.map((product) => (
            <Col col="1/4">
              <Product
                id={product.id}
                key={product.id}
                name={product.name}
                price={product.price}
                imgs={product.imgs}
                rating={product.rating}
                isFavoriate={!!fav.get(product.id)}
                handleFav={(id, title) => {
                  if (fav.has(id)) {
                    fav.delete(id);
                  } else {
                    fav.set(id, title);
                  }
                  setFav(new Map(fav));
                }}
              />
            </Col>
          ))}
        </Row>
        {showFooter && <Footer value={fav.size} onClick={() => setShowModal(true)} />}
        <WishListModal opened={showModal} onClose={() => { setShowModal(false); }} products={fav} />
      </StyledContainer>
    </ThemeProvider>
  );
};

export default App;

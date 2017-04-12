import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../constants';
import { FlexContainer } from '../style/flexbox';
import { Div, H5 } from '../style/util'

import { HeroText, HeroTextLeft } from './hero-text';
import { CenterNav, CenterNavList, CenterNavPlaceholder } from './center-nav';
import { Footer } from './footer'
import { StoreItem } from './store-item';

const ImagesLeft = styled(HeroTextLeft)`
  flex-wrap: nowrap;
  flex-direction: column;
`;
const ImagesRight = styled(HeroText)`
  flex-wrap: nowrap;
  flex-direction: column;
`;

const StoreItemContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: nowrap;
  max-width: 1300px;
  margin-bottom: 60px;
`;

const Shop = (props, { localContext }) => {
  const content = key => localContext.content('shop', key);

  return (
    <Div background={COLORS.gold} paddingTop="20px">

      <CenterNav>
        <CenterNavList />
      </CenterNav>

      <FlexContainer>
        <HeroTextLeft align="flex-start">
          <h2>
            { content('title') }
          </h2>
        </HeroTextLeft>
        <CenterNavPlaceholder />
        <HeroText color={ COLORS.gold }>
          <H5 color={ COLORS.black }>
            { content('subtitle') }
          </H5>
        </HeroText>
      </FlexContainer>

      <FlexContainer>
        <StoreItemContainer>
          <ImagesLeft align="flex-start" width="500px">
            <StoreItem data={ content('items')[0] } />
            <StoreItem data={ content('items')[2] } />
          </ImagesLeft>
          <CenterNavPlaceholder />
          <ImagesRight color={ COLORS.gold } align="flex-start" width="500px">
            <StoreItem data={ content('items')[1] } />
            <StoreItem data={ content('items')[3] } />
            <StoreItem data={ content('items')[4] } />
          </ImagesRight>
        </StoreItemContainer>
      </FlexContainer>

      <Footer />

    </Div>
  );
}

Shop.contextTypes = {
  localContext: React.PropTypes.object
};

export default Shop;
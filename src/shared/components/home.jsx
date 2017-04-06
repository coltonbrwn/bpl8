import React from 'react';
import {Link} from 'react-router';
import styled from 'styled-components';

import { COLORS } from '../constants';
import { FlexContainer, FlexItem } from '../style/flexbox';
import { Px, PxTitle, PxSection, PxLayer } from '../style/parallax';
import { Button } from '../style/util';

import { CenterNav, CenterNavInner, CenterNavList, CenterNavPlaceholder } from './center-nav';
import { HeroText, HeroTextLeft } from './hero-text';

const HeroBgImage = styled(PxLayer)`
  background-image: url(${ props => props.imageUrl });
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 50%;
  height: 100%;
  width: 100%;
`;

const BgColor = styled(PxLayer)`
  background-color: ${props => props.color}
`;

const Image = styled.img`
  height: ${ props => props.height }
`;

const Input = styled.input`
  background: ${ COLORS.black };
  border: 1px solid ${ COLORS.gold };
  color: ${ COLORS.white };
  font-size: 1.5em;
  padding: 6px 12px;
`;

const Home = (props, { localContext }) => {

  const content = key => localContext.content('home', key);

  return (
    <div>

      <CenterNav>
        <CenterNavList />
      </CenterNav>

      <Px>

        <PxSection zIndex={5}>
          <CenterNav>
            <CenterNavInner />
          </CenterNav>
          <PxLayer depth={1}>
            <FlexContainer>
              <HeroTextLeft>
                <h1>
                  { content('hero_text_left') }
                </h1>
              </HeroTextLeft>
              <CenterNavPlaceholder fullHeight />
              <HeroText>
                <h1>
                  { content('hero_text_right') }
                </h1>
              </HeroText>
            </FlexContainer>
          </PxLayer>
          <PxLayer depth={-2} style={{ background: COLORS.black }}/>
        </PxSection>

        <PxSection zIndex={5}>
          <CenterNav>
            <CenterNavInner background={ COLORS.black } style={{ zIndex: 1 }}/>
          </CenterNav>
          <PxLayer depth={0} style={{ background: COLORS.gold }}>
            <FlexContainer>
              <HeroTextLeft>
                <h2 style={{ color: COLORS.black }}>
                  { content('hero_2_title') }
                </h2>
                <h2>
                  { content('hero_2_subtitle') }
                </h2>
              </HeroTextLeft>
              <CenterNavPlaceholder fullHeight />
              <HeroText>
                <div>
                  <Image src={ localContext.assetUrl('/images/hero_2.png') } height="26vh" />
                </div>
                <h4>
                  { content('hero_2_caption') }
                </h4>
                <p>
                  { content('hero_2_text') }
                </p>
              </HeroText>
            </FlexContainer>
          </PxLayer>
        </PxSection>

        <PxSection zIndex={5} height="72vh">
          <PxLayer depth={0} background={COLORS.white} style={{paddingTop: '24px'}}>
            <FlexContainer>
              <HeroTextLeft align="flex-start">
                <h2 style={{ color: COLORS.black }}>
                  { content('video_title') }
                </h2>
              </HeroTextLeft>
              <CenterNavPlaceholder />
              <HeroText align="flex-start">
                <h5 style={{ color: COLORS.gold }}>
                  { content('video_subtitle') }
                </h5>
              </HeroText>
            </FlexContainer>

            <FlexContainer flexDirection="column">
              <Image src={ localContext.assetUrl('/images/video_preview.png') } height="50vh" />
            </FlexContainer>

          </PxLayer>
        </PxSection>

        <PxSection zIndex={5} height="60vh">
          <PxLayer depth={0} background={COLORS.white}>
            <FlexContainer>
              <HeroTextLeft align="flex-start">
                <h2 style={{ color: COLORS.black }}>
                  { content('insta_title') }
                </h2>
              </HeroTextLeft>
              <CenterNavPlaceholder />
              <HeroText align="flex-start">
                <h5 style={{ color: COLORS.gold }}>
                  { content('insta_subtitle') }
                </h5>
              </HeroText>
            </FlexContainer>

            <FlexContainer flexDirection="column">
              <Image src={ localContext.assetUrl('/images/insta_shim.png') } height="30vh" />
              <Button style={{ marginTop: '40px' }}>
                { content('see_more_btn') }
              </Button>
            </FlexContainer>
          </PxLayer>
        </PxSection>

        <PxSection height="50vh">
          <PxLayer depth={0} background={COLORS.gray} style={{paddingTop: '24px'}}>
            <FlexContainer>
              <HeroTextLeft align="flex-start">
                <h2 style={{ color: COLORS.black }}>
                  { content('press_title') }
                </h2>
              </HeroTextLeft>
              <CenterNavPlaceholder />
              <HeroText align="flex-start">
                <h5 style={{ color: COLORS.black }}>
                  { content('press_subtitle') }
                </h5>
              </HeroText>
            </FlexContainer>
            <FlexContainer flexDirection="column">
              <Image src={ localContext.assetUrl('/images/press.png') } height="30vh" />
            </FlexContainer>
          </PxLayer>
        </PxSection>

        <PxSection height="40vh">
          <PxLayer depth={0} background={COLORS.black} style={{paddingTop: '24px'}}>
            <FlexContainer>
              <HeroTextLeft align="flex-start">
                <div>
                  <h2 style={{ color: COLORS.gold, marginBottom: '15px' }}>
                    { localContext.content('footer', 'contact') }
                  </h2>
                  <Image src={ localContext.assetUrl('/images/social_shim.png') } height="36px" />
                  <div style={{ marginTop: '92px' }}>
                    { localContext.content('footer', 'brand') }
                  </div>
                </div>
              </HeroTextLeft>
              <CenterNavPlaceholder />
              <HeroText align="flex-start">
                <div>
                  <Input placeholder={ localContext.content('footer', 'subscribe_prompt') } />
                  <div style={{marginTop: '30px'}}>
                    { localContext.content('footer', 'tom_contact') }
                  </div>
                  <div style={{marginTop: '30px'}}>
                    { localContext.content('footer', 'rad_contact') }
                  </div>
                </div>
              </HeroText>
            </FlexContainer>

          </PxLayer>
        </PxSection>

      </Px>
    </div>
  );
}

Home.contextTypes = {
  localContext: React.PropTypes.object
}

export default Home;

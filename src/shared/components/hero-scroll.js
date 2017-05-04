import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinUp = keyframes`
  0% { transform: translateY(1000px); opacity: 0; }
  5%, 95% { transform: translateY(0px); opacity: 1; }
  100% { transform: translateY(-1000px); opacity: 0; }
`;
const spinDown = keyframes`
  0% { transform: translateY(-1000px); opacity: 0; }
  5%, 95% { transform: translateY(0px); opacity: 1; }
  100% { transform: translateY(1000px); opacity: 0; }
`;

const HeroScrollStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  img {
    height: 100%;
    margin: 0 20px;

    transform: translateY( ${ p => p.direction === 'up' ? '-' : ''}1000px );
    animation-name: ${ p => p.direction === 'up' ? spinUp : spinDown };
    animation-duration: 6s;
    animation-timing-function: ease;
    animation-delay: 0;
    animation-iteration-count: infinite;

  }
`;

export const HeroScroll = React.createClass({

  contextTypes: {
    localContext: React.PropTypes.object
  },

  animationDelay: 6,

  getInitialState() {
    const index = this.props.left ? 2 : 3;
    return {
      imgUrl: this.getImage(index)
    }
  },

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.setState({
        imageUrl: this.getImage()
      });
    }, this.animationDelay * 1000);
  },

  // componentWillUnmount() {
  //   this.interval && window.clearInterval(this.interval);
  // },

  getImage(defaultIndex) {
    const side = this.props.left ? 'left' : 'right';
    const base = '/images/machines';
    const images = ['01', '02', '03', '04'];
    const index = defaultIndex || Math.floor(Math.random() * 4);
    return `${base}/${images[index]}_${side}.png`
  },

  render() {
    const localContext = this.context.localContext;
    return (
      <HeroScrollStyle direction={ this.props.left ? 'up' : 'down' }>
        <img src={ localContext.assetUrl(this.state.imageUrl) } />
      </HeroScrollStyle>
    );
  }

});

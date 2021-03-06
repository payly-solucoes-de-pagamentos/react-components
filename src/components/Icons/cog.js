import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const rotating = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Svg = styled.svg`
  animation: ${rotating} 6s infinite linear;
  -webkit-font-smoothing: subpixel-antialiased;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
`;

const G = styled.g`
  fill: ${props => props.fill ? props.fill : props.theme.global.icons.mainColor};
  transition: all 0.2s ease;

`;

const Cog = ({ color, size }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 12 12">
        <G fill={color} fillRule="nonzero">
          <path d="M7 6a1.001 1.001 0 0 0-2 0 1 1 0 1 0 2 0zm1 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 8 6z"/>
          <path d="M10.808 6.726l.938.529a.5.5 0 0 1 .185.69l-1.251 2.117a.5.5 0 0 1-.676.18l-.95-.534c-.394.311-.833.56-1.304.738V11.5a.5.5 0 0 1-.5.5H4.748a.5.5 0 0 1-.5-.5v-1.051a4.837 4.837 0 0 1-1.299-.743l-.952.537a.5.5 0 0 1-.676-.181L.07 7.945a.5.5 0 0 1 .184-.69l.941-.532a4.613 4.613 0 0 1-.005-1.452l-.936-.528a.5.5 0 0 1-.184-.69l1.25-2.117a.5.5 0 0 1 .677-.181l.95.536c.393-.311.832-.56 1.301-.738V.5a.5.5 0 0 1 .5-.5H7.25a.5.5 0 0 1 .5.5v1.052c.47.179.906.429 1.299.742l.954-.54a.5.5 0 0 1 .677.182l1.25 2.117a.5.5 0 0 1-.184.69l-.944.532c.078.481.081.968.006 1.45zm-.806.693a.5.5 0 0 1-.24-.552 3.64 3.64 0 0 0-.007-1.73.5.5 0 0 1 .24-.554l.815-.46-.742-1.256-.833.47a.5.5 0 0 1-.585-.068 3.84 3.84 0 0 0-1.54-.877.5.5 0 0 1-.36-.48V1H5.248v.913a.5.5 0 0 1-.36.48 3.887 3.887 0 0 0-1.545.873.5.5 0 0 1-.584.067l-.827-.466-.742 1.256.807.455a.5.5 0 0 1 .24.554 3.629 3.629 0 0 0 .006 1.73.5.5 0 0 1-.24.554l-.813.459.742 1.256.83-.468a.5.5 0 0 1 .585.068c.447.412.965.71 1.541.879a.5.5 0 0 1 .36.48V11H6.75v-.913a.5.5 0 0 1 .36-.48 3.9 3.9 0 0 0 1.547-.874.5.5 0 0 1 .584-.068l.827.466.742-1.256-.808-.456z"/>
        </G>
    </Svg>
  );
};

Cog.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

Cog.defaultProps = {
  size: '21px',
}

export default Cog;

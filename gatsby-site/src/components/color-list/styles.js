import styled from 'styled-components';
import { rem as createRem, getLuminance, rgba as createRgba } from 'polished'
import {createColor, spacing} from '../../styles';

const itemSize = createRem('100px');

const style = {

  Slist: styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
  `,

  Sitem: styled.li`
    background: ${({hex}) => hex};
    border: ${({hex}) => getLuminance(hex) > 0.9 && `1px solid ${createColor('gray', 'lightest')}`};
    color: ${({hex}) => getLuminance(hex) < 0.5 ? createColor('misc', 'white') : createColor('misc', 'black', 0.5)};
    height: ${itemSize};
    margin: 0;
    padding-top: ${createRem('40px')};
    text-align: center;
    width: ${itemSize};
  `,

}

export default style;

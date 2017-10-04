import styled from 'styled-components';
import { rem } from 'polished'
import {colors, spacing} from '../../styles';

const itemSize = rem('100px');

const style = {

  Slist: styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
  `,

  Sitem: styled.li`
    background: ${({hex}) => hex};
    color: white;
    height: ${itemSize};
    margin: 0;
    padding-top: ${rem('40px')};
    text-align: center;
    width: ${itemSize};
  `,

}

export default style;

import { rem as createRem } from 'polished';

const radius = createRem('4px');
const borderWidth = createRem('3px');
const buttonReset = `
    background: transparent;
    border: 0;
    cursor: pointer;
    outline: 0;
    padding: 0;
`;

const misc = { radius, borderWidth, buttonReset };

export default misc;

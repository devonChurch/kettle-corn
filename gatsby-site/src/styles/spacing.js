import { rem } from 'polished';

const creativeNegativeSpacing = (positiveSpacing) => {

	const negativeSpacing = Object.keys(positiveSpacing).reduce((accumulator, current) => {
		const key = `-${current}`;
		const value = `-${positiveSpacing[current]}`
		return { ...accumulator, [key]: value};
	}, {});

	return {
		...positiveSpacing,
		...negativeSpacing
	};
}

const minimum = creativeNegativeSpacing({
  smallest: rem('3.75px'),
  small: rem('7.5px'),
  medium: rem('15px'),
  large: rem('30px'),
  largest: rem('60px'),
});

const maximum = creativeNegativeSpacing({
  smallest: rem('7.5px'),
  small: rem('15px'),
  medium: rem('30px'),
  large: rem('60px'),
  largest: rem('120px'),
});

const dynamic = creativeNegativeSpacing({
  smallest: '0.625vw',
  small: '1.25vw',
  medium: '2.5vw',
  large: '5vw',
  largest: '10vw',
});

const spacing = {minimum, maximum, dynamic};

export {spacing as default, minimum, maximum, dynamic};

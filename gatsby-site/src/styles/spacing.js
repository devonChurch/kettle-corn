const creativeNegativeSpacing = (positiveSpacing) => {

	const negativeSpacing = Object.keys(positiveSpacing).reduce((accumulator, current) => {
		const key = `-${current}`;
    const {min, max} = positiveSpacing[current];
		const value = {min: `-${min}`, max: `-${max}`};
		return { ...accumulator, [key]: value};
	}, {});

	return {
		...positiveSpacing,
		...negativeSpacing
	};
}

const spacing = creativeNegativeSpacing({
  smallest: {min: '3.75px', max: '7.5px'},
  small: {min: '7.5px', max: '15px'},
  medium: {min: '15px', max: '30px'},
  large: {min: '30px', max: '60px'},
  largest: {min: '60px', max: '120px'},
});

export default spacing;

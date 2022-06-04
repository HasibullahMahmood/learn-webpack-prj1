import Orange from './assets/images/orange.jpg';
import altText from './altText.txt';

const addImage = () => {
	const img = document.createElement('img');
	img.alt = altText;
	img.width = 300;
	img.src = Orange;

	document.body.appendChild(img);
};

export default addImage;

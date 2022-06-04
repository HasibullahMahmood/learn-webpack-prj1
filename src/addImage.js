import Orange from './assets/images/orange.jpg';

const addImage = () => {
	const img = document.createElement('img');
	img.alt = 'Orange';
	img.width = 300;
	img.src = Orange;

	document.body.appendChild(img);
};

export default addImage;

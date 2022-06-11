import orange from '../assets/images/orange.jpg';
import './orangeImage.scss';

class OrangeImage {
	render() {
		const img = document.createElement('img');
		img.src = orange;
		img.alt = 'orange';
		img.classList.add('orange-image');
		document.body.appendChild(img);
	}
}

export default OrangeImage;

import './heading.scss';
class Heading {
	render(pageName) {
		const h1 = document.createElement('h1');
		h1.innerText = `Webpack is awesome. This is "${pageName}" page.`;
		h1.classList.add('heading');
		document.body.appendChild(h1);
	}
}

export default Heading;

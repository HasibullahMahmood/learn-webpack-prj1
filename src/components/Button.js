import './button.scss';

class Button {
	render(title) {
		const button = document.createElement('button');
		button.innerHTML = title;
		button.classList.add('custom-button');
		document.body.appendChild(button);
		button.onclick = () => {
			const p = document.createElement('p');
			p.innerText = 'Hello World';
			p.classList.add('custom-p');
			document.body.appendChild(p);
		};
	}
}

export default Button;

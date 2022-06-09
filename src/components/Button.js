import './button.scss';

class Button {
	buttonClassName = 'custom-button';
	render(title) {
		const button = document.createElement('button');
		button.innerHTML = title;
		button.classList.add(this.buttonClassName);
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

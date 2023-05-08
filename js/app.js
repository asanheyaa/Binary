const buttonDown = document.querySelector('.main__button-down');
const menu = document.querySelector('.menu');
let menuTop = menu.getBoundingClientRect();
buttonDown.addEventListener('click', (e) => {
	e.preventDefault();
	menuTop = menu.offsetTop;
	window.scrollTo({
		top: menuTop,
		behavior: 'smooth'
	})
})
const callback = entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {

			document.querySelectorAll('.menu__link').forEach(link => {
				const linkId = link.getAttribute('href').replace('#', '');
				link.classList.toggle('_active', entry.target.id === linkId)
			});

		}
	});
}


const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', (e) => {

	const sections = document.querySelectorAll('.section');
	let itemsless = []
	sections.forEach(section => {
		if (section.getBoundingClientRect().top - (window.innerHeight / 1.5) < 0) {
			itemsless.push(section);
		}

		const id = section.id;
		if (id) {
			const currentLink = menu.querySelector(`[href='#${id}']`);
			currentLink.classList.remove('_active')
		}
	});

	let lastElem = itemsless.slice(-1)[0];
	const id = lastElem.id;
	if (id) {
		const currentLink = menu.querySelector(`[href='#${id}']`);
		currentLink.classList.add('_active')
	}
})


// let lastElem = itemsless.slice(-1)[0];

// itemsless.forEach(item => {
// 	let check = item === lastElem ? true : false
// 	if (!check) {
// 		const id = item.id;
// 		if (id) {
// 			const currentLink = menu.querySelector(`[href='#${id}']`);
// 			currentLink.classList.remove('_active')
// 		}
// 	} else if (check) {
// 		const id = item.id;
// 		if (id) {
// 			const currentLink = menu.querySelector(`[href='#${id}']`);
// 			currentLink.classList.add('_active')
// 		}
// 	}
// })

const observerResize = new ResizeObserver((entries) => {
	const menuHeight = entries[0].target.offsetHeight;
	document.documentElement.style.setProperty('--menuHeight', `${menuHeight}px`)
})

observerResize.observe(menu)

const menuHeight = menu.offsetHeight;

const menuPortfolio = document.querySelector('.portfolio__menu');

menuPortfolio.addEventListener('click', (e) => {
	console.log('kiss');
	e.preventDefault();
	if (e.target.closest('.portfolio__link')) {
		const currentActive = e.target.closest('.portfolio__link');
		const lastActive = menuPortfolio.querySelector('.portfolio__link._active');
		lastActive.classList.remove('_active');
		currentActive.classList.add('_active');
		const category = currentActive.getAttribute('href').replace('#', '');
		const itemsAll = document.querySelectorAll('.portfolio__image');
		if (category === 'all') {
			itemsAll.forEach(item => {
				item.classList.add('_active');
			});
		} else {
			const items = document.querySelectorAll(`[data-category= '${category}']`)
			itemsAll.forEach(item => {
				item.classList.remove('_active');
			});
			items.forEach(item => {
				item.classList.add('_active');

			});
		}

	}
})
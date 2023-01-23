const right1 = document.querySelector('.right1');

right1.addEventlistener('mousemove', (e) => {
	console.log(e.pageX);
});
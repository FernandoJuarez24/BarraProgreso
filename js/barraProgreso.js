window.addEventListener('load', () => {
	const barra = document.getElementById('barra');
	requestAnimationFrame(progreso);
})

function progreso(){
	barra.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
	requestAnimationFrame(progreso);
}
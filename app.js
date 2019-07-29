if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator
			.serviceWorker
			.register('sw.js')
			.then(() => console.log("Service Worker registered successfully."))
			.catch(() => console.log("Service worker registration failed."));
	});
}
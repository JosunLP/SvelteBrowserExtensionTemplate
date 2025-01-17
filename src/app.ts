import Popup from "./ui/Popup.svelte";

// Beispiel, wie man eine Svelte-App an ein DOM-Element bindet
const app = new Popup({
	target: document.getElementById("app")!,
});

export default app;

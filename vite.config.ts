import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		allowedHosts: ["mariann-bounden-uneclectically.ngrok-free.dev", "real-bananas-tell.loca.lt", "https://mariann-bounden-uneclectically.ngrok-free.dev"]
	}
});


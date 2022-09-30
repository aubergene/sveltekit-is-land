import { resolve } from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte';

/** @type {import('vite').UserConfig} */
const config = {
	build: {
		lib: {
			entry: resolve(__dirname, 'src/islands.js'),
			name: 'islands',
			fileName: 'islands',
			formats: ['es']
		},
		rollupOptions: {
			output: {
				dir: 'static/islands'
			}
		}
	},
	plugins: [
		svelte({
			compilerOptions: {
				hydratable: true
			}
		})
	] // TODO: can we hook into SvelteKit somehow?
};

export default config;

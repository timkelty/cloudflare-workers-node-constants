import { defineWorkersConfig } from '@cloudflare/vitest-pool-workers/config';

export default defineWorkersConfig({
	test: {
		poolOptions: {
			workers: {
				main: 'dist/index.js',
				wrangler: { configPath: './wrangler.jsonc' },
			},
		},
	},
});

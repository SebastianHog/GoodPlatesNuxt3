// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	runtimeConfig: {
		public: {
			BASE_URL: process.env.NUXT_BASE_URL,
		},
	},
	modules: [
		[
			'@pinia/nuxt',
			{
				autoImports: ['defineStore'],
			},
		],
	],
	imports: {
		dirs: ['stores'],
	},
});

import wordpressPrettierConfig from '@wordpress/prettier-config';

export default {
	...wordpressPrettierConfig,
	semi: false,
	singleQuote: true,
	bracketSameLine: false,
	trailingComma: 'es5',
	useTabs: true,
	tabWidth: 4,
	printWidth: 80,
	overrides: [
		{
			files: '*.{css,scss,sass}',
			options: {
				singleQuote: false,
			},
		},
	],
	plugins: ['prettier-plugin-tailwindcss'],
};

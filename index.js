module.exports = {
	extends: [
		'eslint-config-nti-codestyle-js',
		'plugin:react/recommended'
	],

	settings: {
		'import/extensions': ['.js', '.jsx'],
		'import/resolver': {
			'node': {
				'extensions': ['.js', '.jsx'],
				'moduleDirectory': [
					'node_modules',
					'src/main/js'
				]
			}
		}
		'react': {
			pragma: 'React',
			version: require('react/package.json').version
		}
	},

	rules: {
		'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
		
		//We standarize on using double quotes on JSX props since they look like HTML attributes.
		//See: http://eslint.org/docs/rules/jsx-quotes
		'jsx-quotes': ['warn', 'prefer-double'],

		//Standarize on unary/valueless attributes for constant boolean props.
		//See: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
		'react/jsx-boolean-value': 'warn',

		//Using bind() or arrow functions on props always trigger a prop-change.
		//See: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
		'react/jsx-no-bind': 'error',
		
		// 'react/no-children-prop': 'warn',

		//See: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
		'react/jsx-pascal-case': ['warn', { 'allowAllCaps': true }],

		//React has said in a blog post the string ref is legacy. (which we interpret to mean don't use anymore)
		//See: http://facebook.github.io/react/docs/more-about-refs.html#the-ref-string-attribute
		"react/no-string-refs": 'warn',

		//React has several ways to define a React Component. The simplest and lightest weight form is
		//the stateless-function. If the component you are writing can be a stateless-function, it should be.
		//See: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
		"react/prefer-stateless-function": ['warn', { "ignorePureComponents": true }],

		//All child-less elements should self close. ex:  <div></div> should be <div/>
		//See: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
		"react/self-closing-comp": 'error',

		//JSX should always be wrapped in parentheses... especically when multiline.
		//See: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md
		"react/jsx-wrap-multilines": ['error', {declaration: true, assignment: true, return: true}]

		//"react/jsx-handler-names": 'warn'
	}
};

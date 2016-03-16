module.exports = {
	"extends": [
		"eslint-config-nti-codestyle-js",
		"plugin:react/recommended"
	],

	"plugins": [
		"react"
	],

	"settings": {
		"react": {
			"pragma": "React",
			"version": "0.14.7"
		}
	},

	"rules": {
		//We standarize on using double quotes on JSX props since they look like HTML attributes.
		//See: http://eslint.org/docs/rules/jsx-quotes
		"jsx-quotes": [1, "prefer-double"],

		//Standarize on unary/valueless attributes for constant boolean props.
		//See: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
		"react/jsx-boolean-value": 1,

		//Show an error when you need to supply a key for react to identify array elements.
		//See: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
		"react/jsx-key": 2,

		//Using bind() or arrow functions on props always trigger a prop-change.
		//See: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
		"react/jsx-no-bind": [1, {"ignoreRefs": true}],

		//See: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
		"react/jsx-no-duplicate-props": 1,

		//See: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
		"react/jsx-pascal-case": 1,

		//React has said in a blog post the string ref is legacy. (which we interpret to mean don't use anymore)
		//See: http://facebook.github.io/react/docs/more-about-refs.html#the-ref-string-attribute
		"react/no-string-refs": 1,

		//React has several ways to define a React Component. The simplest and lightest weight form is
		//the stateless-function. If the component you are righting can be a stateless-function, it should be.
		//See: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
		"react/prefer-stateless-function": 1,

		//All child-less elements should self close. ex:  <div></div> should be <div/>
		//See: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
		"react/self-closing-comp": 2,

		//JSX should always be wrapped in parentheses... especically when multiline.
		//See: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md
		"react/wrap-multilines": [2, {declaration: true, assignment: true, return: true}]

		//"react/jsx-handler-names": 1
	}
};

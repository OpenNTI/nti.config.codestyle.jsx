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
		"jsx-quotes": [1, "prefer-double"],

		"react/jsx-no-bind": [1, {"ignoreRefs": true}],
		"react/jsx-boolean-value": 1,
		"react/jsx-sort-props": 0,
		"react/no-danger": 0,
		"react/no-multi-comp": 0,
		"react/no-string-refs": 1,
		"react/prefer-stateless-function": 1,
		"react/self-closing-comp": 2,
		"react/wrap-multilines": 2
	}
};

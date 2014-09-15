var reactTools = require('react-tools'),
	HTMLtoJSX = require('htmltojsx');
	
var Html2React = function(options) {
	
	options = options || {};
	options.createClass = options.createClass || false;
	options.indent = options.indent || '\t';
	
	var htmlToJsx = new HTMLtoJSX(options);
	
	this.convert = function(html) {
		var jsxCode = htmlToJsx.convert(html);
		jsxCode = '/** @jsx React.DOM */' + jsxCode;
		
		var reactCode = reactTools.transform(jsxCode).replace('/** @jsx React.DOM */', '');
		
		return reactCode;
	};
};

module.exports = Html2React;

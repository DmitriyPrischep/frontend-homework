'use strict';

function plain() {
	return simpleArray(arguments);
};

function simpleArray(array)
{
	var result = [];
	for (var i=0; i < array.length; i++)
	if (!Array.isArray(array[i]))
	   result.push(array[i]);
	else
	   result = result.concat(simpleArray(array[i]));
	return result;
}
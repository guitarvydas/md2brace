'use strict';
// empty
function reset () {
    scopeAdd ('depth' , 0);
    scopeAdd ('openbrackets', 0);
}

function emitbrackets (indentstring) {
    var depth = indentstring.length;
    var prevdepth = scopeGet ('depth');
    scopeModify ('depth', depth);
    if (prevdepth === depth) {
	return "}\n{";
    } else if (depth > prevdepth) {
	var openp = scopeGet ('openbrackets');
	scopeModify ('openbrackets', openp + 1);
	return "{";
    } else {
	throw "NIY";
    }
}

function closebrackets () {
    var openb = scopeGet ('openbrackets');
    var result = "";
    while (openb > 0) {
	result += "}";
	openb -= 1;
    }
    return result;
}

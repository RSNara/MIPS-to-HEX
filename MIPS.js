var MIPS = (function(){ 'use strict';

	function fill(number, digits, character) {

		if (number.length > digits) {
			return number.slice(-digits);
		} else {
			while (number.length != digits) {
				number = (character || '0') + number;
			}
			return number;
		}
	}

	function verifyArgs() {

		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] !== 'number' || Math.ceil(arguments[i]) !== Math.floor(arguments[i])) {
				return false;
			}
		}
		return true;
	}

	var object = {

		slt: function slt(d, s, t) {
			return verifyArgs.apply(null, arguments) 
				? '0x' + fill(parseInt('000000' + fill(s.toString(2), 5) + fill(t.toString(2), 5) + fill(d.toString(2), 5) + '00000101010', 2).toString(16), 8)
				: false;
		},

		beq: function beq(s, t, i) {
			return verifyArgs.apply(null, arguments)
				? '0x' + fill(parseInt('000100' + fill(s.toString(2), 5) + fill(t.toString(2), 5) + fill(i.toString(2), 16), 2).toString(16), 8)
				: false;
		},

		add: function add(d, s, t) {
			return verifyArgs.apply(null, arguments)
				? '0x' + fill(parseInt('000000' + fill(s.toString(2), 5) + fill(t.toString(2), 5) + fill(d.toString(2), 5) + '00000100000', 2).toString(16), 8)
				: false;
		},

		jr: function jr(s) {
			return verifyArgs.apply(null, arguments)
				? '0x' + fill(parseInt('000000' + fill(s.toString(2), 5) + '000000000000000001000', 2).toString(16), 8)
				: false;
		},
		
		sw : function sw(t, i, s) {
			return verifyArgs.apply(null, arguments)
				? '0x' + fill(parseInt('101011' + fill(s.toString(2), 5) + fill(t.toString(2), 5)  + fill(i.toString(2), 16), 2).toString(16), 8)
				: false;
		},
		
		lw : function lw(t, i, s) {
			return verifyArgs.apply(null, arguments)
				? '0x' + fill(parseInt('100011' + fill(s.toString(2), 5) + fill(t.toString(2), 5)  + fill(i.toString(2), 16), 2).toString(16), 8)
				: false;
		},

		lis : function lis(d) {
			return verifyArgs.apply(null, arguments)
				? '0x' + fill(parseInt('0000000000000000' + fill(d.toString(2), 5) + '00000010100', 2).toString(16), 8)
				: false;
		}
	};

	return object;

}());

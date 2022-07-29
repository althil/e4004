/*
   Intel 4004 microprocessor JavaScript assembler
   by Maciej Szyc 2006, e4004'at'szyc.org
   ISO-8859-2 lub ANSI(ISO-8859-15 ucina ogony w polskich literach)
   
   based on 6502 JavaScript assembler by N.Landsteiner
   
   This program is free software; you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation; either version 2 of the License, or
   (at your option) any later version.

   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.
*/


// lookup tables

var hextab= ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

/*
	Structure of instrtab:
	
	MNEMONIC:[mod0,mod1,mod2,mod3,mod4,mod5,mod6,mod7]
	
	mods		modifiers
	----		---------
	mod0		none
	mod1		data
	mod2		register
	mod3		register pair
	mod4		register, address
	mod5		register pair, data
	mod6		condition, address
	mod7		address
*/

var instrtab = {
	ADD:[  -1,  -1,0x80,  -1,  -1,  -1,  -1,  -1],
	ADM:[0xEB,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	AN6:[0x06,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	AN7:[0x07,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	BBL:[  -1,0xC0,  -1,  -1,  -1,  -1,  -1,  -1],
	BBS:[0x02,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	CLB:[0xF0,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	CLC:[0xF1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	CMC:[0xF3,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	CMA:[0xF4,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	DAA:[0xFB,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	DAC:[0xF8,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	DB0:[0x08,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	DB1:[0x09,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	DCL:[0xFD,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	DIN:[0x0D,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	EIN:[0x0C,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	FIM:[  -1,  -1,  -1,  -1,  -1,0x20,  -1,  -1],
	FIN:[  -1,  -1,  -1,0x30,  -1,  -1,  -1,  -1],
	HLT:[0x01,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	IAC:[0xF2,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	INC:[  -1,  -1,0x60,  -1,  -1,  -1,  -1,  -1],
	ISZ:[  -1,  -1,  -1,  -1,0x70,  -1,  -1,  -1],
	JCN:[  -1,  -1,  -1,  -1,  -1,  -1,0x10,  -1],
	JIN:[  -1,  -1,  -1,0x31,  -1,  -1,  -1,  -1],
	JMS:[  -1,  -1,  -1,  -1,  -1,  -1,  -1,0x50],
	JUN:[  -1,  -1,  -1,  -1,  -1,  -1,  -1,0x40],
	KBP:[0xFC,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	LCR:[0x03,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	 LD:[  -1,  -1,0xA0,  -1,  -1,  -1,  -1,  -1],
	LDM:[  -1,0xD0,  -1,  -1,  -1,  -1,  -1,  -1],
	NOP:[0x00,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	OR4:[0x04,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	OR5:[0x05,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	RAL:[0xF5,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	RAR:[0xF6,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	RD0:[0xEC,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	RD1:[0xED,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	RD2:[0xEE,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	RD3:[0xEF,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	RDM:[0xE9,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	RDR:[0xEA,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	RPM:[0x0E,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	SB0:[0x0A,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	SB1:[0x0B,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	SBM:[0xE8,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	SRC:[  -1,  -1,  -1,0x21,  -1,  -1,  -1,  -1],
	STC:[0xFA,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	SUB:[  -1,  -1,0x90,  -1,  -1,  -1,  -1,  -1],
	TCC:[0xF7,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	TCS:[0xF9,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	WMP:[0xE1,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	WPM:[0xE3,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	WR0:[0xE4,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	WR1:[0xE5,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	WR2:[0xE6,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	WR3:[0xE7,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	WRM:[0xE0,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	WRR:[0xE2,  -1,  -1,  -1,  -1,  -1,  -1,  -1],
	XCH:[  -1,  -1,0xB0,  -1,  -1,  -1,  -1,  -1]
};

var modstab = {
	R0:0,
	R1:1,
	R2:2,
	R3:3,
	R4:4,
	R5:5,
	R6:6,
	R7:7,
	R8:8,
	R9:9,
	R10:10,
	R11:11,
	R12:12,
	R13:13,
	R14:14,
	R15:15,
	R0R1:0,
	R2R3:1,
	R4R5:2,
	R6R7:3,
	R8R9:4,
	RARB:5,
	RCRD:6,
	RERF:7,
	P0:0,
	P1:1,
	P2:2,
	P3:3,
	P4:4,
	P5:5,
	P6:6,
	P7:7,
	P000:0,
	P001:1,
	P010:2,
	P011:3,
	P100:4,
	P101:5,
	P110:6,
	P111:7,
	NC:0,
	TZ:1,
	T0:1,
	TN:9,
	T1:9,
	CN:2,
	C1:2,
	CZ:10,
	C0:10,
	AZ:4,
	A0:4,
	AN:12,
	NZA:12
};

// globals

var codesrc, code, srcl, srcc, pc, symtab, listing;
var listing_code = '';
// functions

function assemble() {
	symtab={};
	listing=document.forms.ass.listing;
	// listing ^
	var codefield=document.forms.ass.codefield;
	// dodane alternatywnie
	//var codefield=document.forms.ase.codefield;
	var hexfield=document.forms.ass.hexfield;
	// hexfield ^
	getSrc(document.forms.ass.srcfield);
	codefield.value=' \n';
	// hexfield.value=' \n';
	hexfield.value=' \n';
	//listing_code='starting assembly\npass 1\n';
	listing_code='starting assembly\npodanie 1\n';
	var pass1=false;
	var pass2=false;
	code=[];
	pass1=doPass(1);
	if (pass1) {
		listing_code='podanie 1: zrobione\npodanie 2\n'
		pass2=doPass(2);
		if (pass2) {
			var c='', hcode='', haddr=0x0000;
			var n=1;
			hexfield.value='';
			for (var i=0; i<code.length; i++) {
				if (code[i]==-1) {
					hexfield.value += intelHex(hcode,haddr);
					hcode=''; i++; haddr=code[i]*256; i++; haddr+=code[i];
					c+='\n*=$'+getHexWord(haddr)+'\n';
					n=1;
				}
				else {
					c+=getHexByte(code[i]); hcode+=getHexByte(code[i]);
					if (((n>0) && (n%8==0)) || (i==code.length-1)) {c+='\n'; hcode+=' ';}
					else {c+=' '; hcode+=' ';}
					n++;
				}
			};
			codefield.value=c;
			hexfield.value += intelHex(hcode,haddr);
			hexfield.value += ':00000001FF';
			//listing_code+='\ndone.'
			listing_code+='\nzrobione.'
		}
	};
	if ((pass1) && (pass2)) {
		listing.value = listing_code;
		alert('4004 Assembler:\ngotowe.');
	}
	else {
		//listing_code+='\nfailed.\n';
		listing_code+='\nniepowodzenie.\n';
		listing.value = listing_code;
		alert('4004 Assembler:\nnie powiodło się (patrz lista).')
	}
}

function writeDisplay(n,v) {
	var obj;
	if (document.getElementById) obj=document.getElementById(n)
	else if (document.all) obj=document.all[n];
	if (obj) obj.innerHTML=v;
}

function displayError(er) {
	listing_code+='\n'+er+'\n';
}

function getSrc(formfield) {
	if (formfield.value.indexOf('\r\n')>=0) codesrc=formfield.value.split('\r\n')
	else if (formfield.value.indexOf('\r')>=0) codesrc=formfield.value.split('\r')
	else codesrc=formfield.value.split('\n');
}

function getChar() {
	if (srcl>=codesrc.length) return 'EOF';
	if (srcc>=codesrc[srcl].length) {
		srcc=0;
		srcl++;
		return '\n';
	}
	else {
		var c=codesrc[srcl].charAt(srcc);
		srcc++;
		return c.toUpperCase()
	}
}

function getSym() {
	var c=getChar();
	if (c=='EOF') return null;
	var sym=[''];
	var s=0;
	var m=0;
	while ((c!='\n') && (c!='EOF')) {
		if ((c=='/') || (c==';')) {
			while ((c!='\n') && (c!='EOF')) c=getChar();
			continue;
		}
		if ((c==' ') || (c==',') || (c=='\t')) {
			if (m>0) {
				m=0;
				s++;
				sym[s]=''
			}
		}
		else if (c=='=') {
			if (m>0) s++;
			sym[s]=c;
			m=0;
			s++;
			sym[s]=''
		}
		else {
			m=1;
			sym[s]+=c
		};
		c=getChar();
	};
	while ((sym.length) && (sym[sym.length-1]=='')) sym.length--;
	return (c=='EOF')? null: sym;
}

function getNumber(n) {
	var r;
	if (n==null) r=0;
	if (n.charAt(0)=='$') {
		for (var i=1; i<n.length; i++) {
			var c=n.charAt(i);
			if ((c<'A') && (c>'F') && (c<'0') && (c>'9')) return 'NaN';
		};
		r=parseInt(n.substring(1),16)
	}
	else if (n.charAt(0)=='%') {
		for (var i=1; i<n.length; i++) {
			var c=n.charAt(i);
			if ((c!='1') && (c!='0')) return 'NaN';
		};
		r=parseInt(n.substring(1),2)
	}
	else if (n.charAt(0)=='0') {
		for (var i=1; i<n.length; i++) {
			var c=n.charAt(i);
			if ((c<'0') && (c>'7')) return 'NaN';
		};
		r=parseInt(n,8)
	}
	else {
		for (var i=1; i<n.length; i++) {
			var c=n.charAt(i);
			if ((c<'0') && (c>'9')) return 'NaN';
		};
		r=parseInt(n,10)
	};
	return (isNaN(r))? 'NaN' : r;
}

function getIdentifier(n) {
	for (var i=0; i<n.length; i++) {
		var c=n.charAt(i);
		if ((c<'A') && (c>'Z') && (c<'0') && (c>'9') && (c!='_')) return '';
	};
	if (n.length>6) {
		n=n.substring(0,6);
	};
	return n
}

function paddRight(s,l) {
	if (typeof s == 'undefined') s='';
	while (s.length<l) s+=' ';
	return s
}

function doPass(pass) {
	srcl=srcc=pc=0;
	var sym=getSym();
	while (sym) {
		if ((sym.length==0) || (sym[0]=='\n')) {
			sym=getSym();
			continue
		};
		listing_code+='\n';
		pc&=0xfff;
		var ofs=0;
		var c1=sym[0].charAt(0);
		var padd=0;
		if (sym[0]=='*') {
			// set pc
			listing_code+='*';
			if ((sym.length>2) && (sym[1]=='=')) {
				listing_code+=' = ';
				var a=getNumber(sym[2]);
				if (a=='NaN') {
					//displayError('syntax error:\nnumber expected');
					displayError('syntax error:\nnumber expected');
					return false
				}
				else if (sym.length>3) {
					//displayError('syntax error:\ntoo many arguments');
					displayError('syntax error:\ntoo many arguments');
					return false
				};
				listing_code+='$'+getHexWord(a);
				pc=a
			}
			else {
				//displayError('syntax error:\nassignment expected');
				displayError('syntax error:\nassignment expected');
				return false
			};
			if (pass==2) {code[code.length]=-1; code[code.length]=(pc&0xFF00)/256; code[code.length]=pc&0xFF;}
			sym=getSym();
			continue
		};

		listing_code+=getHexWord(pc)+': ';
                writeDisplay('dispNo', 'listing: $'+getHexWord(pc));

		if (c1=='$') {
			// end
			listing_code+='$';
			return true;
		}

		if (c1=='.') {
			// pragma
			var pragma=sym[0];
			listing_code+=pragma;
			if (pragma=='.END') {
				return true
			}
			else if (pragma!='.BYTE') {
				//displayError('syntax error:\ninvalid pragma');
				displayError('syntax error:\ninvalid pragma');
				return false
			};
			if (sym.length==2) {
				if (pass==2) {
					var v;
					if (sym[1]=='*') v=pc
					else {
						v=sym[1];
						var v1=v.charAt(0);

						if ((v1=='$') || (v1=='%') || ((v1>='0') && (v1<='9'))) {
							// number
							v=getNumber(v);
							if (v=='NaN') {
								//displayError('syntax error:\ninvalid value');
								displayError('syntax error:\ninvalid value');
								return false
							}
						}
						else {
							// identifier
							v=getIdentifier(v);
							if (v=='') {
								//displayError('syntax error:\ninvalid identifier');
								displayError('syntax error:\ninvalid identifier');
								return false
							}
							else if (typeof symtab[v] == 'undefined') {
								//displayError('compiler error:\nundefined identifier: '+v);
								displayError('compiler error:\nundefined identifier: '+v);
								return false
							};
							v=symtab[v];
						};

					};

					var lo=v&0xff;
					code[code.length]=lo;
					listing_code += ' $'+getHexByte(lo)+'              '+getHexByte(lo);
				}
				else listing_code+=' '+sym[1];
				pc++;
				sym=getSym();
				continue
			}
			else if (sym.length==1) {
				//displayError('syntax error:\nvalue expected');
				displayError('syntax error:\nvalue expected');
				return false
			}
			else {
				//displayError('syntax error:\ntoo many arguments');
				displayError('syntax error:\ntoo many arguments');
				return false
			}
		}
		else if ((c1<'A') || (c1>'Z')) {
			listing_code+=sym[0];
			//displayError('syntax error:\ncharacter expected');
			displayError('syntax error:\ncharacter expected');
			return false
		};

		if (instrtab[sym[0]]==null) {
			// identifier
			var l=getIdentifier(sym[0]);
			if (l=='') {
				//displayError('syntax error:\ninvalid identifier: '+sym[0]);
				displayError('syntax error:\ninvalid identifier: '+sym[0]);
				return false
			};
			listing_code+=paddRight(l,6)+' ';
			ofs++;
			if ((sym.length>1) && (sym[ofs]=='=')) {
				ofs++;
				listing_code+='=$';
				if (sym.length<3) {
					//displayError('syntax error:\nunexpected end of line');
					displayError('błąd składni:\nnieoczekiwany koniec linii'); // UTF-8 
					return false
				}
				else if (sym.length>3) {
					//displayError('syntax error:\ntoo many arguments');
					displayError('syntax error:\ntoo many arguments');
					return false
				};
				var v;
				if (sym[2]=='*') v=pc
				else v=getNumber(sym[2]);
				if (v=='NaN') {
					//displayError('syntax error:\nnumber expected');
					displayError('syntax error:\nnumber expected');
					return false
				};
				if (pass==1) symtab[l]=v;
				listing_code+=getHexWord(v);
				sym=getSym();
				continue
			}
			else {
				if (pass==1) symtab[l]=pc;
				if (sym.length>=ofs+1) c1=sym[ofs].charAt(0)
				else {
					sym=getSym();
					continue
				};
				padd=7;
			}
		};
		if (sym.length<ofs) {
			// end of line
			sym=getSym();
			continue
		};
		if (padd==0) listing_code+='       ';
		padd=0;
		if ((c1<'A') || (c1>'Z')) {
			listing_code+=sym[0];
			//displayError('syntax error:\ncharacter expected');
			displayError('syntax error:\ncharacter expected');
			return false
		}
		else {
			// opcode
			var opc=sym[ofs];
			listing_code+=opc+' ';
			if (opc=="LD") listing_code+=' ';
			var opctab=instrtab[opc];
			if (opctab==null) {
				//displayError('syntax error:\nopcode expected');
				displayError('syntax error:\nopcode expected');
				return false
			};
			var par1=sym[ofs+1];
			var mode=0;
			while (opctab[mode]<0) mode++;
			if ((mode>3) && (mode<7)) {
				var par2=sym[ofs+2];
				if (typeof par2=='undefined') {
					//displayError('syntax error:\nunexpected end of line');
					displayError('błąd składni:\nnieoczekiwany koniec linii'); // np. jcn
					return false
				}
				if (sym.length>ofs+3) {
					//displayError('syntax error:\ntoo many operands');
					displayError('syntax error:\ntoo many operands');
					return false
				}
			}
			else if (sym.length>ofs+2) {
				//displayError('syntax error:\ntoo many operands');
				displayError('syntax error:\ntoo many operands');
				return false
			}
			var opcv=opctab[mode];
			if (typeof par1=='undefined') {
				// mode 0
				if (opctab[0]<0) {
					//displayError('syntax error:\nunexpected end of line');
					displayError('bąd składni:\nnieoczekiwany koniec linii'); // UTF-8
					return false
				}
				else if (pass==2) {
					// compile
					listing_code+='            '+getHexByte(opcv);
					code[code.length]=opcv;
				}
			}
			else {
				if(pass==1) {
					listing_code+=par1;
					if ((mode>3) && (mode<7)) listing_code+=' '+par2;
				}
				if(pass==2) {
					var instr=opctab[mode];
					if (instr<0) {
						//displayError('compiler error:\ninvalid modifier for '+opc);
						displayError('compiler error:\ninvalid modifier for '+opc);
						return false
					}

					// operand
					var adp=par1.charAt(0);
					var oper=0;
					if ((adp=='$') || (adp=='%') || ((adp>='0') && (adp<='9'))) {
						// number
						oper=getNumber(par1);
						if (oper=='NaN') {
							//displayError('syntax error:\nnumber expected');
							displayError('syntax error:\nnumber expected');
							return false
						};
						oper&=0xfff;
						var s=(mode==7)? '$'+getHexWord(oper):'$'+getHexByte(oper);
						listing_code+=s;
						padd+=s.length;
					}

					else {
						// identifier
						par1=getIdentifier(par1);
						var modtab=modstab[par1];
						if (par1=='') {
							//displayError('syntax error:\ninvalid identifier');
							displayError('syntax error:\ninvalid identifier');
							return false
						}
						else if ((typeof symtab[par1] == 'undefined') && (modtab==null)) {
							//displayError('compiler error:\nundefined identifier '+par1);
							displayError('compiler error:\nundefined identifier '+par1);
							return false
						};

						if (typeof symtab[par1] != 'undefined') oper=symtab[par1];
						else oper=modtab;

						listing_code+=par1;
						padd+=par1.length;
					}

					if (mode<3) instr |= (oper & 0xf);
					else if (mode==3) instr |= ((oper<<1) & 0xf);
					else if (mode==7) {
						instr |= ((oper>>8) & 0xf);
						oper &= 0xff;
					}
					else if ((mode==4) || (mode==5) || (mode==6)){
						if (mode==5) instr |= ((oper<<1) & 0xf);
						else instr |= (oper & 0xf);

						// operand
						var adp=par2.charAt(0);
						oper=0;
						if ((adp=='$') || (adp=='%') || ((adp>='0') && (adp<='9'))) {
							// number
							oper=getNumber(par2);
							if (oper=='NaN') {
								//displayError('syntax error:\nnumber expected');
								displayError('syntax error:\nnumber expected');
								return false
							};
							oper&=0xff;
							par2=' $'+getHexByte(oper);
							listing_code+=par2;
							padd+=par2.length;
						}
						else {

 							// identifier
							par2=getIdentifier(par2);
							if (par2=='') {
								//displayError('syntax error:\ninvalid identifier');
								displayError('syntax error:\ninvalid identifier');
								return false
							}
							else if (typeof symtab[par2] == 'undefined') {
								//displayError('compiler error:\nundefined identifier '+par2);
								displayError('compiler error:\nundefined identifier '+par2);
								return false
							};

							oper=symtab[par2];
							par2=' '+par2;
							listing_code+=par2;
							padd+=par2.length;

						}
					}


					// compile
					for (var i=padd; i<12; i++) listing_code+=' ';
					listing_code+=getHexByte(instr);
					code[code.length]=instr
					if (mode>3) {
						var op=oper&0xff;
						code[code.length]=op;
						listing_code+=' '+getHexByte(op);
					}
				}
				if (mode>3) pc++;
			}
			pc++;
		};
		sym=getSym();
	};
	return true
}

function getHexByte(v) {
	return ''+hextab[Math.floor(v/16)]+hextab[v&0x0f]
}

function getHexWord(v) {
	return ''+hextab[Math.floor(v/0x01000)]+hextab[Math.floor((v&0xf00)/0x0100)]+hextab[Math.floor((v&0xf0)/0x10)]+hextab[v&0x0f]
}

function intelHex(x,y){
	var z,q,w,c,i,j,w,a;
	z='';
	x = x.match(/.{24}|.*/g);
	for(i=0; q=x[i++];){
		a = ''; c=0;
		q = q.match(/[^ ]{2}/g);
		for(j=0; w=q[j++];){ c+= parseInt(w.toString(16),16); a+=w;}
		c+= (j-1); c+= (y/0xFF); c+= (y&0xFF);
		c &= 0xFF;
		if (c!=0) c=0x0100-c;
		z+=':0'+(j-1)+getHexWord(y)+'00'+a+getHexByte(c)+'\n';
		y+=j-1;
	}
	return z;
}
// eof

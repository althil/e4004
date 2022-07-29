/*
   4004 Intel microprocessor JavaScript disassembler
   by Maciej Szyc 2006, e4004'at'szyc.org
   
   based on 6502 JavaScript disassembler by N.Landsteiner
   
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

var opctab= [
	'NOP',   'HLT',   'BBS',   'LCR',   'OR4',   'OR5',   'AN6',   'AN7',    // 00
	'DB0',   'DB1',   'SB0',   'SB1',   'EIN',   'DIN',   'RPM',   '???',    // 08
	'???',   'JCN TZ','JCN CZ','???',   'JCN AZ','???',   '???',   '???',    // 10
	'???',   'JCN TN','JCN CN','???',   'JCN AN','???',   '???',   '???',    // 18
	'FIM P0','SRC P0','FIM P1','SRC P1','FIM P2','SRC P2','FIM P3','SRC P3', // 20
	'FIM P4','SRC P4','FIM P5','SRC P5','FIM P6','SRC P6','FIM P7','SRC P7', // 28
	'FIN P0','JIN P0','FIN P1','JIN P1','FIN P2','JIN P2','FIN P3','JIN P3', // 30
	'FIN P4','JIN P4','FIN P5','JIN P5','FIN P6','JIN P6','FIN P7','JIN P7', // 38
	'JUN',   'JUN',   'JUN',   'JUN',   'JUN',   'JUN',   'JUN',   'JUN',    // 40
	'JUN',   'JUN',   'JUN',   'JUN',   'JUN',   'JUN',   'JUN',   'JUN',    // 48
	'JMS',   'JMS',   'JMS',   'JMS',   'JMS',   'JMS',   'JMS',   'JMS',    // 50
	'JMS',   'JMS',   'JMS',   'JMS',   'JMS',   'JMS',   'JMS',   'JMS',    // 58
	'INC R0','INC R1','INC R2','INC R3','INC R4','INC R5','INC R6','INC R7', // 60
	'INC R8','INC R9','INC R10','INC R11','INC R12','INC R13','INC R14','INC R15',
	'ISZ R0','ISZ R1','ISZ R2','ISZ R3','ISZ R4','ISZ R5','ISZ R6','ISZ R7', // 70
	'ISZ R8','ISZ R9','ISZ R10','ISZ R11','ISZ R12','ISZ R13','ISZ R14','ISZ R15',
	'ADD R0','ADD R1','ADD R2','ADD R3','ADD R4','ADD R5','ADD R6','ADD R7', // 80
	'ADD R8','ADD R9','ADD R10','ADD R11','ADD R12','ADD R13','ADD R14','ADD R15',
	'SUB R0','SUB R1','SUB R2','SUB R3','SUB R4','SUB R5','SUB R6','SUB R7', // 90
	'SUB R8','SUB R9','SUB R10','SUB R11','SUB R12','SUB R13','SUB R14','SUB R15',
	'LD R0', 'LD R1', 'LD R2', 'LD R3', 'LD R4', 'LD R5', 'LD R6', 'LD R7',  // A0
	'LD R8', 'LD R9', 'LD R10','LD R11','LD R12','LD R13','LD R14','LD R15', // A8
	'XCH R0','XCH R1','XCH R2','XCH R3','XCH R4','XCH R5','XCH R6','XCH R7', // B0
	'XCH R8','XCH R9','XCH R10','XCH R11','XCH R12','XCH R13','XCH R14','XCH R15',
	'BBL 0', 'BBL 1', 'BBL 2', 'BBL 3', 'BBL 4', 'BBL 5', 'BBL 6', 'BBL 7',  // C0
	'BBL 8', 'BBL 9', 'BBL 10','BBL 11','BBL 12','BBL 13','BBL 14','BBL 15', // C8
	'LDM 0', 'LDM 1', 'LDM 2', 'LDM 3', 'LDM 4', 'LDM 5', 'LDM 6', 'LDM 7',  // C0
	'LDM 8', 'LDM 9', 'LDM 10','LDM 11','LDM 12','LDM 13','LDM 14','LDM 15', // C8
	'WRM',   'WMP',   'WRR',   'WPM',   'WR0',   'WR1',   'WR2',   'WR3',    // E0
	'SBM',   'RDM',   'RDR',   'ADM',   'RD0',   'RD1',   'RD2',   'RD3',    // E8
	'CLB',   'CLC',   'IAC',   'CMC',   'CMA',   'RAL',   'RAR',   'TCC',    // F0
	'DAC',   'TCS',   'STC',   'DAA',   'KBP',   'DCL',   '???',   '???',    // F8

];

var steptab = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  // 00
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,  // 10
  2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,  // 20
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  // 30
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,  // 40
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,  // 50
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  // 60
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,  // 70
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  // 80
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  // 90
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  // A0
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  // B0
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  // C0
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  // D0
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  // E0
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  // F0
];

// globals

var RAM, pc, startAddr, stopAddr, codeAddr;

// functions

function disassemble() {
	// get addresses
		// alert('test - ąęóżźćńś');
	codeAddr=parseInt(document.disass.codeAddr.value,16);
		codeAddr=0;
		//alert('test1 - nie ma standardowo');
	startAddr=parseInt(document.disass.startAddr.value,16);
		//startAddr=parseInt(document.forms.disass.startAddr.value,16);
		//startAddr=document.forms.disass.startAddr.value;
		//startAddr=0;
	stopAddr=parseInt(document.disass.stopAddr.value,16);
		//stopAddr=document.forms.disass.stopAddr.value;
		//stopAddr=0;
		//alert(stopAddr);
		// nie ma jako forms ^
	if (isNaN(codeAddr)) {
		alert('Nieprawidlowy adres dla kodu:\n"'+document.disass.codeAddr.value+'" nie jest prawidłowa liczba szesnastkowa! \ nDemontaz zatrzymany z powodu bledu.');
		return;
	};
	if (isNaN(startAddr)) {
		alert('Nieprawidlowy adres poczatkowy:\n"'+document.disass.startAddr.value+'" nie jest prawidłowa liczba szesnastkowa! \ nDemontaż zatrzymany z powodu błędu.');
		return;
	};
	if (isNaN(stopAddr) ){
		alert('Nieprawidłowy adres stopu:\n"'+document.disass.stopAddr.value+'" nie jest prawidłowa liczba szesnastkowa! \ nDemontaz zatrzymany z powodu bledu.');
		return;
	};
	codeAddr=Math.floor(Math.abs(codeAddr))&0xfff;
	startAddress=Math.floor(Math.abs(startAddr))&0xfff;
	stopAddr=Math.floor(Math.abs(stopAddr))&0xfff;
	if (startAddr<codeAddr) {
		if (confirm('Start address is smaller than code address\nStart disassembly at code addresss ('+getHexWord(codeAddr)+')?')) {
			startAddr=codeAddr
		}
		else {
			alert('Demontaz zatrzymany.\nUstaw adresy na prawidlowe wartosci.');
			return
		}
	};
	// load data and set effective stopp address
	window.status='loading data to '+getHexWord(startAddr)+' ...';
		//alert('test4');
	var ad=loadData();
		//alert('test5 - nie ma standardowo');
	if ((stopAddr==0) || (stopAddr<=startAddr)) stopAddr=ad;
	window.status='starting disassembly '+getHexWord(startAddr)+'_'+getHexWord(stopAddr)+' ...';
	// disassemble
	pc=startAddress;
		//alert('test6');
	document.disass.listing.value='';
		//document.forms.disass.listing.value='';
		//alert('test7 - nie ma standardowo');
	document.disass.listing.value+=' * = $'+getHexWord(startAddr)+'\n';
	pc=startAddr;
		//alert('test8 - niema standardowo');
	while (pc<stopAddr) disassembleStep();
	document.disass.listing.value+=getDecWord(pc,' ')+' $'+getHexWord(pc)+': $'+'\n';
	window.status='done.';
	alert('Deasemblacja zakonczona.');
}

function disassembleStep() {
	var instr, addr, ops, disas, step;
	// get instruction and ops, inc pc
	instr=ByteAt(pc);
	addr=getDecWord(pc,' ')+' $'+getHexWord(pc);
	ops=getHexByte(instr);
	disas=opctab[instr];
      if (instr>0 && instr<15) disas+=' /i4040';
	step=steptab[instr];
	if (step>1) {
		var tmp=ByteAt(pc+1);
		ops+=' '+getHexByte(tmp);
		if ((instr>0x3f) && (instr<0x60)) disas+=' '+getDecWord((((instr*256) & 0xf00) | tmp),'');
		else disas+=' '+getDecWord(tmp,'');
	}
	else ops+='   ';
	pc=(pc+step)&0xfff;
	document.disass.listing.value+=addr+': '+ops+'  '+disas+'\n'
}

function loadData() {
	RAM=[];
	var addr=codeAddr&0xfff;
		//alert('test6');
	data=document.disass.codefield.value;
		//data=document.forms.disass.codefield.value;
		//alert(data);
	var lc='';
	var ofs=0;
	var mode=1;
	data=data.toUpperCase();
	for (var i=0; i<data.length; i++) {
		var c=data.charAt(i);
		if (mode==2) {
			if ((c=='\r') || (c=='\n')) mode=1;
		}
		else if (((c>='0') && (c<='9')) || ((c>='A') && (c<='F'))) {
			if (mode==1) {
				if (lc) {
					RAM[addr++]=parseInt(lc+c,16);
					if (addr>0xffff) break;
					lc=''
				}
				else {
					lc=c
				}
			}
		}
		else if (c==':') mode=0
		else if (c=='/') mode=2
		else mode=1;
	};
		//alert('test');
	return addr;
		//alert('test - mie ma');
}

function ByteAt(addr) {
	return RAM[addr] || 0
}

function getHexByte(v) {
	return ''+hextab[Math.floor(v/16)]+hextab[v&0x0f]
}

function getHexWord(v) {
	return ''+hextab[Math.floor(v/0x100)]+hextab[Math.floor((v&0xf0)/16)]+hextab[v&0x00f]
}

function getDecWord(v,n) {
  var dectxt='';
  var tmp;
  
  v&=0x0fff;
  tmp=Math.floor(v/1000);
  if (tmp>0) dectxt+=hextab[tmp];
  else dectxt+=n;
  
  v-=tmp*1000;  
  tmp=Math.floor(v/100);
  if ((tmp>0) || (dectxt!=n)) dectxt+=hextab[tmp];
  else dectxt+=n;

  v-=tmp*100;  
  tmp=Math.floor(v/10);
  if ((tmp>0) || (dectxt!=n+n)) dectxt+=hextab[tmp];
  else dectxt+=n;
  
  v-=tmp*10;
  dectxt+=hextab[v];
    
	return ''+dectxt
}

// eof

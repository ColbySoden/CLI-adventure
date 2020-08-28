function doUse(what, door){
	var ret = "";
	if(['coins', 'coin', 'lint', 'pencil', 'keycard', 'card', 'king', 'scrap', 'die', 'dice', 'key'].includes(what)){
		switch(what){
			case 'coins':
			case 'coin':
	    		ret += "[[;green;]You need to hold onto your lunch money.]";
	    		break;
	    	case 'lint':
	    		ret += "[[;green;]It's just some pocket ][[;red;]lint][[;green;] ...what could you possibly do with it?]";
	    		break;
	    	case 'pencil':
	    		if(room == 5){
	    			ret += "[[;green;]You grab a sheet of ][[;red;]paper][[;green;] and write 'I waz here' before placing it back on the ground.]";
	    		}else if(room == 14){
	    			ret += "[[;green;]Is it weird to use a pencil on a piece of ][[;red;]paper][[;green;] that's currently fed into a ][[;red;]typewriter][[;green;]? It doesn't feel natural to you.]";
	    		}else{
	    			ret += "[[;green;]You have no paper you can write on...]";
	    		}
	    		break;
	    	case 'keycard':
	    		if(room == 2){
	    			if(panicOuterDoorOpened){
	    				if(inventory.card == 3){
	    					ret += "[[;green;]You've already scanned the keycard.]";
	    				}else{
	    					inventory.card = 3;
	    					lights += 1;
	    					if(lights == 3){
	    						panicRoomLocked = false;
	    						ret += "[[;green;]You place the [[;red;]keycard][[;green;] against the [[;red;]panel][[;green;] and the last light turns green. There's a faint click as the [[;red;]steel door][[;green;] unlocks.]";
	    					}else if(lights == 2){
	    						ret += "[[;green;]You place the [[;red;]keycard][[;green;] against the [[;red;]panel][[;green;] and one of the 2 red lights turns green. One more to go!]";
	    					}else if(lights == 1){
	    						ret += "[[;green;]You place the [[;red;]keycard][[;green;] against the [[;red;]panel][[;green;] and the first red light turns green.]";
	    					}
	    				}
	    			}else{
	    				ret += "[[;red;]INVALID COMMAND]";
	    				//console.log("80");
	    			}
	    		}else{
	    			if(inventory.card == 2){
	    				ret += "[[;green;]There isn't anywhere to use it in this room.]";
	    			}else{
	    				ret += "[[;red;]INVALID COMMAND]";
	    				//console.log("81");
	    			}
	    		}
	    		break;
	    	case 'card':
	    		if(inventory.card == 2){
    				ret += "[[;green;]It's a baseball ][[;red;]card][[;green;]...what would you do with it?.]";
    			}else{
    				ret += "[[;red;]INVALID COMMAND]";
    				//console.log("82");
    			}
    			break;
	    	case 'king':
	    		if(room == 3){
		    		if(inventory.king == 2){
	    				ret += "[[;green;]You place the ][[;red;]king][[;green;] back on the ][[;red;]board][[;green;] and hear a beep from back in the entryway.]";
	    				lights += 1;
	    				if(lights == 3){
	    					panicRoomLocked = false;
	    				}
	    				inventory.king = 3;
	    				$('#obj').html(gameroom2);
	    			}else{
	    				ret += "[[;red;]INVALID COMMAND]";
	    				//console.log("83");
	    			}
	    		}else{
	    			if(inventory.king == 2){
	    				ret += "[[;green;]There isn't anywhere to use it in this room.]";
	    			}else{
	    				ret += "[[;red;]INVALID COMMAND]";
	    				//console.log("84");
	    			}
	    		}
    			break;
	    	case 'scrap':
	    		if(inventory.scrap == 2){
    				ret += "[[;green;]It's a ][[;red;]scrap][[;green;] of paper...what would you do with it?.]";
    			}else{
    				ret += "[[;red;]INVALID COMMAND]";
    				//console.log("85");
    			}
    			break;
	    	case 'die':
	    		if(inventory.die1 == 2 && inventory.die2 == 2){
	    			var d1 = Math.floor(Math.random() * 6) + 1;
	    			var d2 = Math.floor(Math.random() * 6) + 1;
	    			ret += "[[;green;]You bend down and roll the ][[;red;]dice][[;green;] on the floor. You get a " + d1 + " and a " + d2 + ".]";
	    			if(room == 9 && d1 == 1 && d2 == 1){
	    				ret += "\n[[;green;]Both ][[;red;]dice][[;green;] suddenly start to rattle and sink into the metal floor. As they dissapear the etchings on the ][[;red;]panel][[;green;] begin to glow and you feel the elevator descend.]";
	    				inventory.die1 = 3;
	    				inventory.die2 = 3;
	    				runEnd = true;
	    			}else if(room == 9 && d1 == 1){
	    				ret += "\n[[;green;]The first ][[;red;]die][[;green;] suddenly starts to rattle and sink into the metal floor. As it dissapears, one of the etchings on the ][[;red;]panel][[;green;] begins to glow.]";
	    				inventory.die1 = 3;
	    			}else if(room == 9 && d2 == 1){
	    				ret += "\n[[;green;]The second ][[;red;]die][[;green;] suddenly starts to rattle and sink into the metal floor. As it dissapears, one of the etchings on the ][[;red;]panel][[;green;] begins to glow.]";
	    				inventory.die2 = 3;
	    			}else{
	    				ret += "\n[[;green;]Not sure what you expected to happen...you pick up the ][[;red;]dice][[;green;] and put them back in your pocket.]";
	    			}
	    		}else if(room == 9 && inventory.die1 == 2){
	    			var d1 = Math.floor(Math.random() * 6) + 1;
	    			ret += "[[;green;]You bend down and roll the ][[;red;]die][[;green;] on the floor. You get a " + d1 + ".]";
	    			if(d1 == 1 && inventory.die2 == 3){
	    				ret += "\n[[;green;]The ][[;red;]die][[;green;] suddenly starts to rattle and sink into the metal floor. As it dissapears, the final etchings on the ][[;red;]panel][[;green;] begin to glow and you feel the elevator descend.]";
	    				inventory.die1 = 3;
	    				runEnd = true;
	    			}else if(d1 == 1){
	    				ret += "\n[[;green;]The ][[;red;]die][[;green;] suddenly starts to rattle and sink into the metal floor. As it dissapears, one of the etchings on the ][[;red;]panel][[;green;] begins to glow.]";
	    				inventory.die1 = 3;
	    			}else{
	    				ret += "\n[[;green;]Not sure what you expected to happen...you pick up the ][[;red;]die][[;green;] and put them back in your pocket.]";
	    			}
	    		}else if(room == 9 && inventory.die2 == 2){
	    			var d1 = Math.floor(Math.random() * 6) + 1;
	    			ret += "[[;green;]You bend down and roll the ][[;red;]die][[;green;] on the floor. You get a " + d1 + ".]";
	    			if(d1 == 1 && inventory.die1 == 3){
	    				ret += "\n[[;green;]The ][[;red;]die][[;green;] suddenly starts to rattle and sink into the metal floor. As it dissapears, the final etchings on the ][[;red;]panel][[;green;] begin to glow and you feel the elevator descend.]";
	    				inventory.die2 = 3;
	    				runEnd = true;
	    			}else if(d1 == 1){
	    				ret += "\n[[;green;]The ][[;red;]die][[;green;] suddenly starts to rattle and sink into the metal floor. As it dissapears, one of the etchings on the ][[;red;]panel][[;green;] begins to glow.]";
	    				inventory.die2 = 3;
	    			}else{
	    				ret += "\n[[;green;]Not sure what you expected to happen...you pick up the ][[;red;]die][[;green;] and put them back in your pocket.]";
	    			}
	    		}else if(inventory.die1 == 2 || inventory.die2 == 2){
	    			var d1 = Math.floor(Math.random() * 6) + 1;
	    			ret += "[[;green;]You bend down and roll the ][[;red;]die][[;green;] on the floor. You get a " + d1 + ".]";
	    			ret += "\n[[;green;] Not sure what you expected to happen...you pick up the ][[;red;]die][[;green;] and put it back in your pocket.]";
	    		}else{
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("86");
	    		} 
	    		break;
	    	case 'dice':
	    		if(inventory.die1 == 2 && inventory.die2 == 2){
	    			var d1 = Math.floor(Math.random() * 6) + 1;
	    			var d2 = Math.floor(Math.random() * 6) + 1;
	    			ret += "[[;green;]You bend down and roll the ][[;red;]dice][[;green;] on the floor. You get a " + d1 + " and a " + d2 + ".]";
	    			if(room == 9 && d1 == 1 && d2 == 1){
	    				ret += "\n[[;green;]Both ][[;red;]dice][[;green;] suddenly start to rattle and sink into the metal floor. As they dissapear the etchings on the ][[;red;]panel][[;green;] begin to glow and you feel the elevator descend.]";
	    				inventory.die1 = 3;
	    				inventory.die2 = 3;
	    				runEnd = true;
	    			}else if(room == 9 && d1 == 1){
	    				ret += "\n[[;green;]The first ][[;red;]die][[;green;] suddenly starts to rattle and sink into the metal floor. As it dissapears, one of the etchings on the ][[;red;]panel][[;green;] begins to glow.]";
	    				inventory.die1 = 3;
	    			}else if(room == 9 && d2 == 1){
	    				ret += "\n[[;green;]The second ][[;red;]die][[;green;] suddenly starts to rattle and sink into the metal floor. As it dissapears, one of the etchings on the ][[;red;]panel][[;green;] begins to glow.]";
	    				inventory.die2 = 3;
	    			}else{
	    				ret += "\n[[;green;]Not sure what you expected to happen...you pick up the ][[;red;]dice][[;green;] and put them back in your pocket.]";
	    			}
	    		}else{
	    			if(inventory.die1 == 2 || inventory.die2 == 2){
	    				ret += "[[;green;]You only have one ][[;red;]die][[;green;]. How could you ][[;red;]Use dice][[;green;] plural?]";
	    			}else{
	    				ret += "[[;red;]INVALID COMMAND]";
	    			}
	    			//console.log("87");
	    		} 
	    		break;
	    	case 'key':
	    		if(inventory.key == 2){
	    			if(room == 12){
	    				ret += "[[;green;]You place the ][[;red;]key][[;green;] into the keyhole in the ][[;red;]chest][[;green;] and slowly turn it. You can hear the latch click inside.]";
	    				chestLocked = false;
	    				inventory.key = 3;
	    			}else{
	    				ret += "[[;green;]You can't find any keyhole's it will fit into.]";
	    			}
	    		}else{
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("88");
	    		}
	    		break;
	    	default:
		    	ret += "[[;red;]INVALID COMMAND]";
		    	//console.log("89");
		}
	}else{
		if(door == '' || door == null){
			if(room == 1){
		    	switch (what){
		    		case 'windows':
		    		case 'window':
		    			ret += "[[;green;]The windows won't budge.]";
		    			break;
		    		case 'door':
		    			enterRoom(2);
		    			ret += "[[;green;]The ][[;red;]door ][[;green;]slams shut behind you. In front of you is a ][[;red;]stairway ][[;green;]and four ][[;red;]doors]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]What would you like to use? Please use the syntax 'Use <object>']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("90");
		    	}
		    }else if(room == 2){
		    	switch (what){
		    		case 'stairwell':
		    		case 'staircase':
		    		case 'stairs':
		    			enterRoom(11);
		    			ret += "[[;green;]You emerge onto an upper landing with 4 ][[;red;]doors][[;green;].]";
		    			break;
		    		case 'door':
		    		case 'doors':
		    			if(panicRoomLocked){
		    				ret += "[[;green;]Which one should you ][[;red;]Use][[;green;]? There's a ][[;red;]front-right door][[;green;], a][[;red;] back-right door][[;green;], a][[;red;] front-left door][[;green;], and a][[;red;] back-left door.]";
		    			}else{
		    				ret += "[[;green;]Which one should you ][[;red;]Use][[;green;]? There's a ][[;red;] back-right door][[;green;], a][[;red;] front-left door][[;green;], a][[;red;] back-left door][[;green;], and the ][[;red;]steel door.]";
		    			}
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]What would you like to ][[;red;]use][[;green;]? Please use the syntax 'Use <object>']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("91");
		    	}
		    }else if(room == 3){
		    	switch (what){
		    		case 'door':
		    		case 'doors':
		    			ret += "[[;green;]Which one should you ][[;red;]Use][[;green;]? There's a ][[;red;]north door][[;green;] and an][[;red;] east door.]";
		    			break;	    			
		    		case '':
		    		case null:
		    			ret += "[[;white;]What would you like to ][[;red;]use][[;green;]? Please use the syntax 'Use <object>']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("92");
		    	}
		    }else if(room == 4){
		    	switch (what){
		    		case 'door':
		    		case 'doors':
		    			ret += "[[;green;]Which one should you ][[;red;]Use][[;green;]? There's a ][[;red;]north door][[;green;], an ][[;red;]east door][[;green;], a ][[;red;]south door][[;green;], and a][[;red;] west door.]";
		    			break;
		    		case 'mirror':
		    			ret += "[[;green;]You wipe away some dust...but there's no reflection for you.]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]What would you like to use? Please use the syntax 'Use <object>']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("93");
		    	}
		    }else if(room == 5){
		    	switch (what){
		    		case 'door':
		    			enterRoom(4);
		    			ret += "[[;green;]You step back into the dusty hallway from the ][[;red;] west door.]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]What would you like to use? Please use the syntax 'Use <object>']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("94");
		    	}
		    }else if(room == 6){
		    	switch (what){
		    		case 'door':
		    			enterRoom(4);
		    			ret += "[[;green;]You step back into the dusty hallway from the ][[;red;] north door.]";
		    			notes = ['0','1','2','3','4','5','6','7','8'];
		    			break;
		    		case 'organ':
		    			ret += "[[;green;]You're no Mozart but you know enough to ][[;red;]play][[;green;] a note or two.]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]What would you like to use? Please use the syntax 'Use <object>']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("95");
		    	}
		    }else if(room == 7){
		    	switch (what){
		    		case 'door':
		    		case 'doors':
		    			ret += "[[;green;]Which one should you ][[;red;]Use][[;green;]? There's a ][[;red;]north door][[;green;], an ][[;red;]east door][[;green;], and a][[;red;] west door.]";
		    			break;
		    		case 'mirror':
		    			ret += "[[;green;]Vain much?]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]What would you like to use? Please use the syntax 'Use <object>']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("96");
		    	}
		    }else if(room == 8){
		    	switch (what){
		    		case 'door':
		    		case 'doors':
		    			ret += "[[;green;]Which one should you ][[;red;]Use][[;green;]? There's a ][[;red;]north door][[;green;], and a][[;red;] south door.]";
		    			break;
		    		case 'statue':
		    		case 'statues':
		    			ret += "[[;green;]Which ][[;red;]statue][[;green;] would you like you ][[;red;]use][[;green;]? You see these three:]";
		    			ret += "\n[[;green;]&nbsp;>  ][[;red;]" + currStatues[0] + "]";
		    			ret += "\n[[;green;]&nbsp;>  ][[;red;]" + currStatues[1] + "]";
		    			ret += "\n[[;green;]&nbsp;>  ][[;red;]" + currStatues[2] + "]";
		    			break;
		    		case 'switch':
		    			if(twistedStatues >= 3){
		    				if(switchUsed){
		    					ret += "[[;green;]You've already used the ][[;red;]switch][[;green;], now when you push it back and forth nothing seems to happen.]";
		    				}else{
		    					switchUsed = true;
		    					lights += 1;
		    					if(lights == 3){
		    						panicRoomLocked = false;
		    						ret += "[[;green;]You flip the ][[;red;]switch][[;green;] and hear a beep and a click coming from the direction of the entryway.]";
		    					}else{
		    						ret += "[[;green;]You flip the ][[;red;]switch][[;green;] and hear a beep coming from the direction of the entryway.]";
		    					}
		    				}
		    			}else{
		    				ret += "[[;red;]INVALID COMMAND]";
		    				//console.log("97");
		    			}
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]What would you like to use? Please use the syntax 'Use <object>']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("98");
		    	}
		    }else if(room == 9){
		    	switch (what){
		    		case 'door':
		    			enterRoom(7);
		    			ret += "[[;green;]You enter a creaky hallway from the ][[;red;]east door][[;green;] with 2 more ][[;red;]doors][[;green;] in the hallway, antique ][[;red;]portraits][[;green;] along one wall, and a ][[;red;]mirror][[;green;] along the other.]";
		    			break;
		    		case 'elevator':
		    		case 'panel':
		    			ret += "[[;green;]You search around the elevator ][[;red;]panel][[;green;] but can't find any buttons, just these strange etchings.]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]What would you like to use? Please use the syntax 'Use <object>']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("99");
		    	}
		    }else if(room == 10){
		    	switch (what){
		    		case 'door':
		    			enterRoom(2);
		    			ret += "[[;green;]You re-enter the entryway from the ][[;red;]steel door][[;green;]. There are 3 other ][[;red;]doors][[;green;] in addition to the ][[;red;]stairway.]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]What would you like to use? Please use the syntax 'Use <object>']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("100");
		    	}
		    }else if(room == 11){
		    	switch (what){
		    		case 'door':
		    		case 'doors':
		    			ret += "[[;green;]Which one should you ][[;red;]use][[;green;]? There's a ][[;red;]north door][[;green;], an ][[;red;]east door][[;green;], a][[;red;] west door][[;green;], and a][[;red;] south door][[;green;] as well as the ][[;red;]stairs][[;green;].]";
		    			break;
		    		case 'stair':
		    		case 'stairs':
		    		case 'stairwell':
		    			enterRoom(2);
		    			ret += "[[;green;]You re-enter the entryway from the ][[;red;]stairs][[;green;]. There are 4 ][[;red;]doors][[;green;] in addition to the ][[;red;]stairway.]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]What would you like to use? Please use the syntax 'Use <object>']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("101");
		    	}
		    }else if(room == 12){
		    	switch (what){
		    		case 'door':
		    			ret += "[[;green;]Which one should you ][[;red;]use][[;green;]? There's a ][[;red;]south door][[;green;] and an ][[;red;]east door][[;green;].]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]What would you like to use? Please use the syntax 'Use <object>']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("102");
		    	}
		    }else if(room == 13){
		    	switch(what){
		    		case 'door':
		    			ret += "[[;green;]Which one should you ][[;red;]use][[;green;]? There's a ][[;red;]west door][[;green;] and a ][[;red;]south door][[;green;].]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]What would you like to use? Please use the syntax 'Use <object>']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("103");
		    	}
		    }else if(room == 14){
		    	switch(what){
		    		case 'door':
		    			ret += "[[;green;]Which one should you ][[;red;]use][[;green;]? There's an ][[;red;]east door][[;green;] and a ][[;red;]south door][[;green;].]";
		    			break;
		    		case 'typewriter':
		    			ret += "[[;green;]No matter what key you press the only thing that types is '(' which makes you feel very anxious.]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]What would you like to use? Please use the syntax 'Use <object>']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("104");
		    	}
		    }else if(room == 15){
		    	switch(what){
		    		case 'door':
		    			ret += "[[;green;]Which one should you ][[;red;]use][[;green;]? There's an ][[;red;]east door][[;green;] and a ][[;red;]north door][[;green;].]";
		    			break;
		    		case 'lock':
		    			if(lockerOpened){
		    				ret += "[[;green;]You've already got the last ][[;red;]locker open][[;green;].]";
		    			}else if(lockerLocked){
		    				ret += "[[;green;]You casually spin the combination ][[;red;]lock][[;green;]. ]";
		    				successTurns = 0;
		    				ret += "\n[[;white;]If you want to set it to a specific number use the syntax ][[;red;]Dial <number>]";
		    			}else{
		    				ret += "[[;green;]It won't budge now...almost as if it suddenly rusted in place.]";
		    			}
		    			break;
		    		case 'radio':
		    			ret += "[[;green;]Before you can even get close enough, the chilling tune coming out of it freezes you in your tracks.]";
		    			break;
		    		case 'weight':
		    		case 'weights':
		    			ret += "[[;green;]You can workout when you aren't somewhere so creepy.]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]What would you like to use? Please use the syntax 'Use <object>']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("105");
		    	}
		    }else if(room == 16){
		    	switch(what){
		    		case 'door':
		    			ret += "[[;green;]Which one should you ][[;red;]use][[;green;]? There's a ][[;red;]west door][[;green;], a ][[;red;]north door][[;green;], and a ][[;red;]south door][[;green;].]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]What would you like to use? Please use the syntax 'Use <object>']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("106");
		    	}
		    }else if(room == 17){
		    	switch(what){
		    		case 'door':
		    			enterRoom(16);
		    			ret += "[[;green;]You walk back into the parlor from the ][[;red;]south door][[;green;]. There are two other ][[;red;]doors][[;green;] in the room as well as some fancy couches and empty teacups on the end-tables.]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]What would you like to use? Please use the syntax 'Use <object>']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("107");
		    	}
			}else{
			    ret += "[[;red;]INVALID COMMAND]";
			    //console.log("108");
		    }
		}else if(door == 'door'){
			if(room == 2){
		    	switch (what){
		    		case 'front-left':
		    			enterRoom(3); 
		    			ret += "[[;green;]You enter a game room from the ][[;red;]east door][[;green;], there's one other in the room. There's a lerge bear skin ][[;red;]rug ][[;green;]in the middle of the floor, plenty of hunting trophies on the walls, a ][[;red;]bookshelf ][[;green;]in the corner, and a ][[;red;]chessboard ][[;green;] next to the fireplace.]";
		    			break;
		    		case 'front-right':
		    			if(panicOuterDoorOpened){
		    				if(panicRoomLocked){
		    					ret += "[[;green;]You've already opened this door...]";
		    					ret += "\n[[;green;]Would you like to ][[;red;]Inspect][[;green;] the [[;red;]panel][[;green;]?]";
		    				}else{
		    					enterRoom(10);
			    				ret += "[[;green;]You walk into what appears to be a panic room full of food, supplies, and childrens ][[;red;]books][[;green;]. There's a single ][[;red;]table][[;green;] next to a cot.]";
		    				}
		    			}else{
		    				panicOuterDoorOpened = true;
			    			if(panicRoomLocked){
			    				if(lights == 0){
			    					ret += "[[;green;]You open the door but find a ][[;red;]steel door][[;green;]r behind it with some kind of [[;red;]panel][[;green;] on it that has 3 red lights and what looks to be a card reader.]";
			    				}else if(lights == 1){
			    					ret += "[[;green;]You open the door but find a ][[;red;]steel door][[;green;] behind it with some kind of [[;red;]panel][[;green;] on it that has 2 red lights, 1 green light and what looks to be a card reader.]";
			    				}else if(lights == 2){
			    					ret += "[[;green;]You open the door but find a ][[;red;]steel door][[;green;] behind it with some kind of [[;red;]panel][[;green;] on it that has 1 red light, 2 green lights and what looks to be a card reader.]";
			    				}
			    			}else{
			    				ret += "[[;green;]All 3 lights are green. I think the ][[;red;]steel door][[;green;] could be opened now.]";
			    			}
			    		}
		    			break;
		    		case 'back-left':
		    			enterRoom(4);
		    			ret += "[[;green;]You enter a dusty hallway from the ][[;red;]east door][[;green;] with 3 more ][[;red;]doors][[;green;] in the hallway and a long, dusty ][[;red;]mirror][[;green;] along one wall.]";
		    			break;
		    		case 'back-right':
		    			enterRoom(7);
		    			ret += "[[;green;]You enter a creaky hallway from the ][[;red;]west door][[;green;] with 2 more ][[;red;]doors][[;green;] in the hallway, antique ][[;red;]portraits][[;green;] along one wall, and a ][[;red;]mirror][[;green;] along the other.]";
		    			break;
		    		case 'steel':
		    			if(panicOuterDoorOpened && !panicRoomLocked){
		    				enterRoom(10);
		    				ret += "[[;green;]You walk into what appears to be a panic room full of food, supplies, and childrens books. There's a single ][[;red;]table][[;green;] next to the cot.]";
		    			}else if(panicOuterDoorOpened){
		    				ret += "[[;green;]It's still locked.]";
		    			}else{
		    				ret += "[[;red;]INVALID COMMAND]";
		    				//console.log("109");
		    			}
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]Which door would you like to use? Please use the syntax 'Open <door name> door']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("110");
		    	}
		    }else if(room == 3){
		    	switch (what){
		    		case 'north':
		    			enterRoom(4);
		    			ret += "[[;green;]You enter a dusty hallway from the][[;red;] south door][[;green;]] with 3 more ][[;red;]doors][[;green;] in the hallway and a long, dusty ][[;red;]mirror][[;green;] along one wall.]";
		    			break;
		    		case 'front-right':
		    			enterRoom(2);
		    			if(panicOuterDoorOpened){
		    				ret += "[[;green;]You re-enter the entryway from the ][[;red;]front-left door][[;green;]. There are 2 other ][[;red;]doors][[;green;] in addition to the ][[;red;]steel door][[;green;] and the ][[;red;]stairway.]";
		    			}else{
		    				ret += "[[;green;]You re-enter the entryway from the ][[;red;]front-left door][[;green;]. There are 3 other ][[;red;]doors][[;green;] in addition to the ][[;red;]stairway.]";
		    			}
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]What would you like to use? Please use the syntax 'Use <object>']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("111");
		    	}
		    }else if(room == 4){
		    	switch (what){
		    		case 'north':
		    			enterRoom(6);
		    			ret += "[[;green;]You enter a spacious room with a massive, rusted ][[;red;]organ][[;green;] on the opposite end and a few rows of wooden pews. All across the pews and the floor are loose sheets of music.]";
		    			break;
		    		case 'east':
		    			enterRoom(2);
		    			if(panicOuterDoorOpened){
		    				ret += "[[;green;]You re-enter the entryway from the ][[;red;]back-left door][[;green;]. There are 2 other ][[;red;]doors][[;green;] in addition to the ][[;red;]steel door][[;green;] and the ][[;red;]stairway.]";
		    			}else{
		    				ret += "[[;green;]You re-enter the entryway from the ][[;red;]back-left door][[;green;]. There are 3 other ][[;red;]doors][[;green;] in addition to the ][[;red;]stairway.]";
		    			}
		    			break;
		    		case 'south':
		    			enterRoom(3);
		    			ret += "[[;green;]You enter a game room from the ][[;red;]north door][[;green;], there's one other in the room. There's a large bear skin ][[;red;]rug ][[;green;]in the middle of the floor, plenty of hunting trophies on the walls, a ][[;red;]bookshelf ][[;green;]in the corner, and a ][[;red;]chessboard ][[;green;] next to the fireplace.]";
		    			break;
		    		case 'west':
		    			enterRoom(5);
		    			ret += "[[;green;]You step into what could barely be described as a room but is more of a pile junk surrounded by four walls. There's overturned furniture, ][[;red;]papers][[;green;] strewn about, and a single, opened ][[;red;]box][[;green;] sitting in the middle of it all.]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]Which door would you like to use? Please use the syntax 'Use <door name> door']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    	}
		    }else if(room == 5){
		    	switch (what){
		    		case 'east':
		    			enterRoom(4);
		    			ret += "[[;green;]You step back into the dusty hallway from the ][[;red;]west door.]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]Which door would you like to use? Please use the syntax 'Use <door name> door']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    	}
		    }else if(room == 6){
		    	switch (what){
		    		case 'south':
		    			enterRoom(4);
		    			ret += "[[;green;]You step back into the dusty hallway from the ][[;red;] north door.]";
		    			notes = ['0','1','2','3','4','5','6','7','8'];
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]Which door would you like to use? Please use the syntax 'Use <door name> door']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    	}
		    }else if(room == 7){
		    	switch (what){
		    		case 'north':
		    			enterRoom(8);
		    			if(twistedStatues < 3){
		    				refreshStatues();
		    				ret += "[[;green;]You walk into a long, narrow corridor with another ][[;red;]door][[;green;] on the far end and four podiums in the corners, three of which hold a ][[;red;]statue.]";
		    			}else{
		    				ret += "[[;green;]You walk into a long, narrow corridor with another ][[;red;]door][[;green;] on the far end and four podiums in the corners, three of which hold a ][[;red;]statue][[;green;] while the fourth holds a ][[;red;]switch.]";
		    			}
		    			break;
		    		case 'east':
		    			enterRoom(9);
		    			ret += "[[;green;]You enter a small elevator with a ][[;red;]panel][[;green;] on the wall by the door.]";
		    			break;
		    		case 'west':
		    			enterRoom(2);
		    			if(panicOuterDoorOpened){
		    				ret += "[[;green;]You re-enter the entryway from the ][[;red;]back-right door][[;green;]. There are 2 other ][[;red;]doors][[;green;] in addition to the ][[;red;]steel door][[;green;] and the ][[;red;]stairway.]";
		    			}else{
		    				ret += "[[;green;]You re-enter the entryway from the ][[;red;]back-right door][[;green;]. There are 3 other ][[;red;]doors][[;green;] in addition to the ][[;red;]stairway.]";
		    			}
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]Which door would you like to use? Please use the syntax 'Use <door name> door']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("113");
		    	}
		    }else if(room == 8){
		    	switch (what){
		    		case 'north':
		    			if(twistedStatues < 3){
		    				refreshStatues();
		    				ret += "[[;green;]You walk through the ][[;red;]door][[;green;] on the far end of the hallway and look around to see the same hallway you just left...except the ][[;red;]statues][[;green;] seem to have changed.]";
		    			}else{
		    				ret += "[[;green;]The ][[;red;]door][[;green;] is locked now...when did that happen?]";
		    			}
		    			break;
		    		case 'south':
		    			enterRoom(7);
		    			ret += "[[;green;]You enter a creaky hallway from the ][[;red;]north door][[;green;] with 2 more ][[;red;]doors][[;green;] in the hallway, antique ][[;red;]portraits][[;green;] along one wall, and a ][[;red;]mirror][[;green;] along the other.]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]Which door would you like to use? Please use the syntax 'Use <door name> door']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("114");
		    	}
		    }else if(room == 9){
		    	switch (what){
		    		case 'west':
		    			enterRoom(7);
		    			ret += "[[;green;]You enter a creaky hallway from the ][[;red;]east door][[;green;] with 2 more ][[;red;]doors][[;green;] in the hallway, antique ][[;red;]portraits][[;green;] along one wall, and a ][[;red;]mirror][[;green;] along the other.]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]Which door would you like to use? Please use the syntax 'Use <door name> door']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    	}
		    }else if(room == 10){
		    	switch (what){
		    		case 'west':
		    			enterRoom(2);
		    			ret += "[[;green;]You re-enter the entryway from the ][[;red;]steel door][[;green;]. There are 3 other ][[;red;]doors][[;green;] in addition to the ][[;red;]stairway.]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]Which door would you like to use? Please use the syntax 'Use <door name> door']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    	}
		    }else if(room == 11){
		    	switch (what){
		    		case 'north':
		    			enterRoom(12);
		    			ret += "[[;green;]You walk into a very unsettling nursery from the ][[;red;]south door][[;green;]. There's one other ][[;red;]door][[;green;], toys all over the floor, and a ][[;red;]chest][[;green;] in the corner.]";
		    			break;
		    		case 'south':
		    			enterRoom(16);
		    			ret += "[[;green;]You walk into some sort of parlor or sitting room from the ][[;red;]north door][[;green;]. There are two other ][[;red;]doors][[;green;] in the room as well as some fancy couches and empty teacups on the end-tables.]";
		    			break;
		    		case 'east':
		    			ret += "[[;green;]The ][[;red;]door][[;green;] won't budge. It's locked from the other side and there's no keyhole.]";
		    			break;
		    		case 'west':
		    			enterRoom(14);
		    			ret += "[[;green;]You walk into a study from the ][[;red;]east door][[;green;]. You can see a ][[;red;]typewriter][[;green;] on the ][[;red;]desk][[;green;], a globe in the corner and one other ][[;red;]door][[;green;].]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]Which door would you like to use? Please use the syntax 'Use <door name> door']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("115");
		    	}
		    }else if(room == 12){
		    	switch (what){
		    		case 'south':
		    			enterRoom(11);
		    			ret += "[[;green;]You walk out into the upper landing from the north ][[;red;]door.]";
		    			break;
		    		case 'east':
		    			enterRoom(13);
		    			if(takenClothes < 4){
		    				ret += "[[;green;]You find yourself in a sewing room full of patchy, half-finished outfits on mannequins. There's a cobweb-covered ][[;red;]desk][[;green;] on the other side of the room and one other ][[;red;]door.]";
		    			}else{
		    				ret += "[[;green;]You find yourself in a sewing room full of mannequins. There's a cobweb-covered ][[;red;]desk][[;green;] on the other side of the room and one other ][[;red;]door.]";
		    			}
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]Which door would you like to use? Please use the syntax 'Use <door name> door']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("116");
		    	}
		    }else if(room == 13){
		    	switch (what){
		    		case 'south':
		    			ret += "[[;green;]It's locked. You see some shadows under ][[;red;]door][[;green;] after you try the doorknob.]";
		    			break;
		    		case 'west':
		    			enterRoom(12);
		    			ret += "[[;green;]You walk back into the nursery from the ][[;red;]east door][[;green;]. There's one other ][[;red;]door][[;green;], toys all over the floor, and a ][[;red;]chest][[;green;] in the corner.]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]Which door would you like to use? Please use the syntax 'Use <door name> door']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("117");
		    	}
		    }else if(room == 14){
		    	switch (what){
		    		case 'south':
		    			enterRoom(15);
		    			ret += "[[;green;]You walk into a musty home-gym. There's a lot of ][[;red;]weight][[;green;] equipment sitting around, unused. Along one wall are a set of ][[;red;]lockers][[;green;] and next to them is a ][[;red;]radio][[;green;] playing a faint sound.]";
		    			ret += "\n[[;green;]There is one other door besides the one you came through.]";
		    			break;
		    		case 'east':
		    			enterRoom(11);
		    			ret += "[[;green;]You walk out into the upper landing from the west ][[;red;]door][[;green;].]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]Which door would you like to use? Please use the syntax 'Use <door name> door']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("118");
		    	}
		    }else if(room == 15){
		    	switch (what){
		    		case 'north':
		    			enterRoom(14);
		    			ret += "[[;green;]You walk into a study from the ][[;red;]south door][[;green;]. You can see a ][[;red;]typewriter][[;green;] on the ][[;red;]desk][[;green;], a globe in the corner and one other ][[;red;]door][[;green;].]";
		    			break;
		    		case 'east':
		    			enterRoom(16);
		    			ret += "[[;green;]You walk into some sort of parlor or sitting room from the ][[;red;]west door][[;green;]. There are two other ][[;red;]doors][[;green;] in the room as well as some fancy couches and empty teacups on the end-tables.]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]Which door would you like to use? Please use the syntax 'Use <door name> door']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("119");
		    	}
		    }else if(room == 16){
		    	switch (what){
		    		case 'north':
		    			enterRoom(11);
		    			ret += "[[;green;]You walk out into the upper landing from the ][[;red;]south door][[;green;].]";
		    			break;
		    		case 'west':
		    			enterRoom(15);
		    			ret += "[[;green;]You walk into a musty home-gym. There's a lot of ][[;red;]weight][[;green;] equipment sitting around, unused. Along one wall are a set of ][[;red;]lockers][[;green;] and next to them is a ][[;red;]radio][[;green;] playing a faint sound.]";
		    			ret += "\n[[;green;]There is one other door besides the ][[;red;]east door][[;green;] you came through.]";
		    			break;
		    		case 'south':
		    			enterRoom(17);
		    			ret += "[[;green;]Immediately, as you step out onto a widows walk, the wind chills you to the bone.]";
		    			ret += "\n[[;green;]It's darker then you remember it being and, even though you can see the road in front of the house, you can't remember which direction you came from and there's nothing as far as the eye can see in either direciton]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]Which door would you like to use? Please use the syntax 'Use <door name> door']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("120");
		    	}
		    }else if(room == 17){
		    	switch (what){
		    		case 'north':
		    			enterRoom(16);
		    			ret += "[[;green;]You walk back into the parlor from the ][[;red;]south door][[;green;]. There are two other ][[;red;]doors][[;green;] in the room as well as some fancy couches and empty teacups on the end-tables.]";
		    			break;
		    		case '':
		    		case null:
		    			ret += "[[;white;]Which door would you like to use? Please use the syntax 'Use <door name> door']";
		    			break;
		    		default:
		    			ret += "[[;red;]INVALID COMMAND]";
	    		}
			}else{
			    ret += "[[;red;]INVALID COMMAND]";
			    //console.log("121");
		    }
		}else if(room == 8){
	    	if((what == 'Red' || what  == 'red') && (door == 'Jaguar' || door == 'jaguar') && (currStatues.includes(allStatues[0]))){
	    		if(twistedStatues >= 3){
	    			ret += "[[;green;]You twist the ][[;red;]statue][[;green;] but nothing happens.]";
	    		}else{
	    			twistStatue(allStatues[0]);
	    			if(twistedStatues == 3){
	    				ret += "[[;green;]You twist the ][[;red;]statue][[;green;] and hear a faint click. When you turn around the fourth ][[;red;]podium][[;green;] that was previously empty now holds a ][[;red;]switch.][[;green;]";
	    			}else{
	    				ret += "[[;green;]You twist the ][[;red;]statue][[;green;] a bit, but that's as far as it will go.]";
	    			}
	    		}
	    	}else if((what == 'Blue' || what  == 'blue') && (door == 'Barracuda' || door == 'barracuda') && (currStatues.includes(allStatues[1]))){
	    		if(twistedStatues >= 3){
	    			ret += "[[;green;]You twist the ][[;red;]statue][[;green;] but nothing happens.]";
	    		}else{
	    			twistStatue(allStatues[1]);
	    			if(twistedStatues == 3){
	    				ret += "[[;green;]You twist the ][[;red;]statue][[;green;] and hear a faint click. When you turn around the fourth ][[;red;]podium][[;green;] that was previously empty now holds a ][[;red;]switch.][[;green;]";
	    			}else{
	    				ret += "[[;green;]You twist the ][[;red;]statue][[;green;] a bit, but that's as far as it will go.]";
	    			}
	    		}
	    	}else if((what == 'Green' || what  == 'green') && (door == 'Monkey' || door == 'monkey') && (currStatues.includes(allStatues[2]))){
	    		if(twistedStatues >= 3){
	    			ret += "[[;green;]You twist the ][[;red;]statue][[;green;] but nothing happens.]";
	    		}else{
	    			twistStatue(allStatues[2]);
	    			if(twistedStatues == 3){
	    				ret += "[[;green;]You twist the ][[;red;]statue][[;green;] and hear a faint click. When you turn around the fourth ][[;red;]podium][[;green;] that was previously empty now holds a ][[;red;]switch.][[;green;]";
	    			}else{
	    				ret += "[[;green;]You twist the ][[;red;]statue][[;green;] a bit, but that's as far as it will go.]";
	    			}
	    		}
	    	}else if((what == 'Orange' || what  == 'orange') && (door == 'Iguana' || door == 'iguana') && (currStatues.includes(allStatues[3]))){
	    		if(twistedStatues >= 3){
	    			ret += "[[;green;]You twist the ][[;red;]statue][[;green;] but nothing happens.]";
	    		}else{
	    			twistStatue(allStatues[3]);
	    			if(twistedStatues == 3){
	    				ret += "[[;green;]You twist the ][[;red;]statue][[;green;] and hear a faint click. When you turn around the fourth ][[;red;]podium][[;green;] that was previously empty now holds a ][[;red;]switch.][[;green;]";
	    			}else{
	    				ret += "[[;green;]You twist the ][[;red;]statue][[;green;] a bit, but that's as far as it will go.]";
	    			}
	    		}
	    	}else if((what == 'Purple' || what  == 'purple') && (door == 'Parrot' || door == 'parrot') && (currStatues.includes(allStatues[4]))){
	    		if(twistedStatues >= 3){
	    			ret += "[[;green;]You twist the ][[;red;]statue][[;green;] but nothing happens.]";
	    		}else{
	    			twistStatue(allStatues[4]);
	    			if(twistedStatues == 3){
	    				ret += "[[;green;]You twist the ][[;red;]statue][[;green;] and hear a faint click. When you turn around the fourth ][[;red;]podium][[;green;] that was previously empty now holds a ][[;red;]switch.][[;green;]";
	    			}else{
	    				ret += "[[;green;]You twist the ][[;red;]statue][[;green;] a bit, but that's as far as it will go.]";
	    			}
	    		}
	    	}else if((what == 'Silver' || what  == 'silver') && (door == 'Snake' || door == 'snake') && (currStatues.includes(allStatues[5]))){
	    		if(twistedStatues >= 3){
	    			ret += "[[;green;]You twist the ][[;red;]statue][[;green;] but nothing happens.]";
	    		}else{
	    			twistStatue(allStatues[5]);
	    			if(twistedStatues == 3){
	    				ret += "[[;green;]You twist the ][[;red;]statue][[;green;] and hear a faint click. When you turn around the fourth ][[;red;]podium][[;green;] that was previously empty now holds a ][[;red;]switch.][[;green;]";
	    			}else{
	    				ret += "[[;green;]You twist the ][[;red;]statue][[;green;] a bit, but that's as far as it will go.]";
	    			}
	    		}
	    	}else{
	    		ret += "[[;red;]INVALID COMMAND]";
	    		//console.log("122");
	    	}
		}else{
			ret += "[[;red;]INVALID COMMAND]";
			//console.log("123");
		}
	}

	return ret;
}
function doOpen(what, door){
	var ret = "";
	if(door == '' || door == null){
		if(room == 1){
	    	switch (what){
	    		case 'windows':
	    		case 'window':
	    			ret += "[[;green;]The windows won't budge.]";
	    			break;
	    		case 'door':
	    			enterRoom(2);
	    			ret += "[[;green;]The ][[;red;]entrance ][[;green;]slams shut behind you. In front of you is a ][[;red;]stairway ][[;green;]and four ][[;red;]doors]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to open? Please use the syntax 'Open <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("48");
	    	}
	    }else if(room == 2){
	    	switch (what){
	    		case 'entrance':
	    		case 'front':
	    		case 'entry':
	    			ret += "[[;green;]It won't budge.]";
	    			break;
	    		case 'door':
	    		case 'doors':
	    			ret += "[[;green;]Which one should you ][[;red;]open][[;green;]? There's a ][[;red;]front-right door][[;green;], a][[;red;] back-right door][[;green;], a][[;red;] front-left door][[;green;], and a][[;red;] back-left door.]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to open? Please use the syntax 'Open <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("49");
	    	}
	    }else if(room == 3){
	    	switch (what){
	    		case 'door':
	    		case 'doors':
	    			ret += "[[;green;]Which one should you ][[;red;]open][[;green;]? There's a ][[;red;]north door][[;green;] and an][[;red;] east door.]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to open? Please use the syntax 'Open <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("50");
	    	}
	    }else if(room == 4){
	    	switch (what){
	    		case 'door':
	    		case 'doors':
	    			ret += "[[;green;]Which one should you ][[;red;]open][[;green;]? There's a ][[;red;]north door][[;green;], an ][[;red;]east door][[;green;], a ][[;red;]south door][[;green;], and a][[;red;] west door.]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to open? Please use the syntax 'Open <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("51");
	    	}
	    }else if(room == 5){
	    	switch (what){
	    		case 'door':
	    			enterRoom(4);
	    			ret += "[[;green;]You step back into the dusty hallway from the ][[;red;]west door.]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to open? Please use the syntax 'Open <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("52");
	    	}
	    }else if(room == 6){
	    	switch (what){
	    		case 'door':
	    			enterRoom(4);
	    			ret += "[[;green;]You step back into the dusty hallway from the ][[;red;]north door.]";
	    			notes = ['0','1','2','3','4','5','6','7','8'];
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to open? Please use the syntax 'Open <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("53");
	    	}
	    }else if(room == 7){
	    	switch (what){
	    		case 'door':
	    		case 'doors':
	    			ret += "[[;green;]Which one should you ][[;red;]open][[;green;]? There's a ][[;red;]north door][[;green;], an ][[;red;]east door][[;green;] and a][[;red;] west door.]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to open? Please use the syntax 'Open <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("54");
	    	}
	    }else if(room == 8){
	    	switch (what){
	    		case 'door':
	    		case 'doors':
	    			ret += "[[;green;]Which one should you ][[;red;]open][[;green;]? There's a ][[;red;]north door][[;green;] and a][[;red;] south door.]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to open? Please use the syntax 'Open <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("55");
	    	}
	    }else if(room == 9){
	    	switch (what){
	    		case 'door':
	    			enterRoom(7);
	    			ret += "[[;green;]You enter a creaky hallway from the ][[;red;]east door][[;green;] with 2 more ][[;red;]doors][[;green;] in the hallway, antique ][[;red;]portraits][[;green;] along one wall, and a ][[;red;]mirror][[;green;] along the other.]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to open? Please use the syntax 'Open <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("56");
	    	}
	    }else if(room == 10){
	    	switch (what){
	    		case 'door':
	    			enterRoom(2);
	    			ret += "[[;green;]You re-enter the entryway from the ][[;red;]steel door][[;green;]. There are 3 other ][[;red;]doors][[;green;] in addition to the ][[;red;]stairway.]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to open? Please use the syntax 'Open <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("57");
	    	}
	    }else if(room == 11){
	    	switch (what){
	    		case 'door':
	    			ret += "[[;green;]Which one should you ][[;red;]open][[;green;]? There's a ][[;red;]north door][[;green;], an ][[;red;]east door][[;green;], a ][[;red;]west door][[;green;], and a][[;red;] south door.]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to open? Please use the syntax 'Open <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("58");
	    	}
	    }else if(room == 12){
	    	switch (what){
	    		case 'door':
	    			ret += "[[;green;]Which one should you ][[;red;]open][[;green;]? There's a ][[;red;]south door][[;green;] and an ][[;red;]east door][[;green;].]";
	    			break;
	    		case 'chest':
	    		case 'toychest':
	    			if(chestOpened){
	    				ret += "[[;green;]You've already opened this.]";
	    			}else if(chestLocked){
	    				ret += "[[;green;]It's locked.]";
	    			}else if(inventory.die2 == 1){
	    				ret += "[[;green;]You gently lift the lid to find the ][[;red;]chest][[;green;] is empty except for a single blue ][[;red;]die][[;green;] inside.]";
	    				chestOpened = true;
	    				$('#obj').html(nursery1);
	    			}else{
	    				ret += "[[;red;]ERROR]";
	    			}
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to open? Please use the syntax 'Open <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("59");
	    	}
	     }else if(room == 13){
	    	switch (what){
	    		case 'door':
	    			ret += "[[;green;]Which one should you ][[;red;]open][[;green;]? There's a ][[;red;]south door][[;green;] and a ][[;red;]west door][[;green;].]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to open? Please use the syntax 'Open <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("60");
	    	}
	    }else if(room == 14){
	    	switch (what){
	    		case 'door':
	    			ret += "[[;green;]Which one should you ][[;red;]open][[;green;]? There's a ][[;red;]south door][[;green;] and an ][[;red;]east door][[;green;].]";
	    			break;
	    		case 'drawer':
	    			if(!drawerOpened){
	    				ret += "[[;green;]You pull open the ][[;red;]drawer][[;green;] and a cloud of dust blows up in your face. When it clears you see a single black ][[;red;]king][[;green;] from a chess set inside.]";
	    				drawerOpened = true;
	    				$('#obj').html(study2);
	    			}else{
	    				ret += "[[;green;]You've already opened the only ][[;red;]drawer][[;green;].]";
	    			}
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to open? Please use the syntax 'Open <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("61");
	    	}
	    }else if(room == 15){
	    	switch (what){
	    		case 'door':
	    			ret += "[[;green;]Which one should you ][[;red;]open][[;green;]? There's a ][[;red;]north door][[;green;] and an ][[;red;]east door][[;green;].]";
	    			break;
	    		case 'locker':
	    			if(!lockerOpened && !lockerLocked){
	    				ret += "[[;green;]You pull open the ][[;red;]locker][[;green;] and brush away some cobwebs to find a toy ][[;red;]key][[;green;] sitting inside.]";
	    				lockerOpened = true;
	    				$('#obj').html(gymnasium2);
	    			}else if(!lockerOpened && lockerLocked){
	    				ret += "[[;green;]It won't ][[;red;]open][[;green;], there's combination ][[;red;]lock][[;green;] on the front that you could ][[;red;]use][[;green;].]";
	    			}else{
	    				ret += "[[;green;]You've already opened the last ][[;red;]locker][[;green;].]";
	    			}
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to open? Please use the syntax 'Open <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("62");
	    	}
	    }else if(room == 16){
	    	switch (what){
	    		case 'door':
	    			ret += "[[;green;]Which one should you ][[;red;]open][[;green;]? There's a ][[;red;]north door][[;green;], a ][[;red;]west door][[;green;], and a ][[;red;]south door][[;green;].]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to open? Please use the syntax 'Open <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("63");
	    	}
	    }else if(room == 17){
	    	switch (what){
	    		case 'door':
	    			enterRoom(16);
	    			ret += "[[;green;]You walk back into the parlor from the ][[;red;]south door][[;green;]. There are two other ][[;red;]doors][[;green;] in the room as well as some fancy couches and empty teacups on the end-tables.]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to open? Please use the syntax 'Open <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("64");
	    	}
	    }else{
	    	ret += "[[;red;]INVALID COMMAND]";
	    	//console.log("65");
		}
	}else if(door == 'door'){
		if(room == 2){
	    	switch (what){
	    		case 'front-left':
	    			enterRoom(3);
	    			ret += "[[;green;]You enter a game room from the ][[;red;]east door][[;green;], there's one other in the room. There's a large bear skin ][[;red;]rug ][[;green;]in the middle of the floor, plenty of hunting trophies on the walls, a ][[;red;]bookshelf ][[;green;]in the corner, and a ][[;red;]chessboard ][[;green;] next to the fireplace.]";
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
		    					ret += "[[;green;]You open the door but find a ][[;red;]steel door][[;green;] behind it with some kind of [[;red;]panel][[;green;] on it that has 3 red lights and what looks to be a card reader.]";
		    				}else if(lights == 1){
		    					ret += "[[;green;]You open the door but find a ][[;red;]steel door][[;green;] behind it with some kind of [[;red;]panel][[;green;] on it that has 2 red lights, 1 green light and what looks to be a card reader.]";
		    				}else if(lights == 2){
		    					ret += "[[;green;]You open the door but find a ][[;red;]steel door][[;green;] behind it with some kind of [[;red;]panel][[;green;] on it that has 1 red light, 2 green lights and what looks to be a card reader.]";
		    				}
		    			}else{
		    				enterRoom(10);
		    				ret += "[[;green;]You walk into what appears to be a panic room full of food, supplies, and childrens ][[;red;]books][[;green;]. There's a single ][[;red;]table][[;green;] next to a cot.]";
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
	    				ret += "[[;green;]You walk into what appears to be a panic room full of food, supplies, and childrens ][[;red;]books][[;green;]. There's a single ][[;red;]table][[;green;] next to the cot.]";
	    			}else if(panicOuterDoorOpened){
	    				ret += "[[;green;]It's still locked.]";
	    			}else{
	    				ret += "[[;red;]INVALID COMMAND]";
	    				//console.log("66");
	    			}
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]Which door would you like to open? Please use the syntax 'Open <door name> door']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("67");
	    	}
	    }else if(room == 3){
	    	switch (what){
	    		case 'north':
	    			enterRoom(4);
	    			ret += "[[;green;]You enter a dusty hallway from the][[;red;] south door][[;green;] with 3 more ][[;red;]doors][[;green;] in the hallway and a long, dusty ][[;red;]mirror][[;green;] along one wall.]";
	    			break;
	    		case 'east':
	    			enterRoom(2);
	    			if(panicOuterDoorOpened){
	    				ret += "[[;green;]You re-enter the entryway from the ][[;red;]front-left door][[;green;]. There are 2 other ][[;red;]doors][[;green;] in addition to the ][[;red;]steel door][[;green;] and the ][[;red;]stairway.]";
	    			}else{
	    				ret += "[[;green;]You re-enter the entryway from the ][[;red;]front-left door][[;green;]. There are 3 other ][[;red;]doors][[;green;] in addition to the ][[;red;]stairway.]";
	    			}
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]Which door would you like to open? Please use the syntax 'Open <door name> door']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("68");
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
	    			ret += "[[;white;]Which door would you like to open? Please use the syntax 'Open <door name> door']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("69");
	    	}
	    }else if(room == 5){
	    	switch (what){
	    		case 'east':
	    			enterRoom(4);
	    			ret += "[[;green;]You step back into the dusty hallway from the ][[;red;]west door.]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]Which door would you like to open? Please use the syntax 'Open <door name> door']";
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
	    			ret += "[[;white;]Which door would you like to open? Please use the syntax 'Open <door name> door']";
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
	    			ret += "[[;green;]You enter a small elevator with a ][[;red;]panel][[;green;] on the wall by the ][[;red;]door][[;green;].]";
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
	    			ret += "[[;white;]Which door would you like to open? Please use the syntax 'Open <door name> door']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("70");
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
	    			ret += "[[;white;]Which door would you like to open? Please use the syntax 'Open <door name> door']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("71");
	    	}
	    }else if(room == 9){
	    	switch (what){
	    		case 'west':
	    			enterRoom(7);
	    			ret += "[[;green;]You enter a creaky hallway from the ][[;red;]east door][[;green;] with 2 more ][[;red;]doors][[;green;] in the hallway, antique ][[;red;]portraits][[;green;] along one wall, and a ][[;red;]mirror][[;green;] along the other.]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]Which door would you like to open? Please use the syntax 'Open <door name> door']";
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
		    			ret += "[[;white;]Which door would you like to open? Please use the syntax 'Open <door name> door']";
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
	    			ret += "[[;white;]Which door would you like to open? Please use the syntax 'Open <door name> door']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("72");
	    	}
	    }else if(room == 12){
	    	switch (what){
	    		case 'south':
	    			enterRoom(11);
	    			ret += "[[;green;]You walk out into the upper landing from the ][[;red;]north door][[;green;].]";
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
	    			ret += "[[;white;]Which door would you like to open? Please use the syntax 'Open <door name> door']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("73");
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
	    			ret += "[[;white;]Which door would you like to open? Please use the syntax 'Open <door name> door']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("74");
	    	}
	    }else if(room == 14){
	    	switch (what){
	    		case 'south':
	    			enterRoom(15);
	    			ret += "[[;green;]You walk into a musty home-gym. There's a lot of ][[;red;]weight][[;green;] equipment sitting around, unused. Along one wall are a set of ][[;red;]lockers][[;green;] and next to them is a ][[;red;]radio][[;green;] playing a faint sound.]";
	    			ret += "\n[[;green;]There is one other door besides the ][[;red;]north door][[;green;] you came through.]";
	    			break;
	    		case 'east':
	    			enterRoom(11);
	    			ret += "[[;green;]You walk out into the upper landing from the ][[;red;]west door][[;green;].]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]Which door would you like to open? Please use the syntax 'Open <door name> door']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("75");
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
	    			ret += "[[;white;]Which door would you like to open? Please use the syntax 'Open <door name> door']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("76");
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
	    			ret += "[[;white;]Which door would you like to open? Please use the syntax 'Open <door name> door']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("77");
	    	}
	    }else if(room == 17){
	    	switch (what){
	    		case 'north':
	    			enterRoom(16);
	    			ret += "[[;green;]You walk back into the parlor from the ][[;red;]south door][[;green;]. There are two other ][[;red;]doors][[;green;] in the room as well as some fancy couches and empty teacups on the end-tables.]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]Which door would you like to open? Please use the syntax 'Open <door name> door']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    	}
	    }else{
		    ret += "[[;red;]INVALID COMMAND]";
		    //console.log("78");
	    }
	}else{
		ret += "[[;red;]INVALID COMMAND]";
		//console.log("79");
	}

	return ret;
}
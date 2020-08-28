$('#2').terminal({
	Help: function(){
		this.update(-1, null);
		this.echo("[[;red;]Try one of these commands: \n > Inspect <object> \n > Open <object> \n > Take <object> \n > Inventory \n > Use <object>]");
	},
	Go: function(what) {
		if(room == 1){
			switch(what){
	    		case "home":
		    		this.echo("[[;green;]You live happily ever after in blissful ignorance]");
		    		room = -1;
		    		break;
		    	default:
		    		this.echo("[[;red;]INVALID COMMAND]");
	    	}
	    }else{
		   	this.echo("[[;red;]INVALID COMMAND]");
	    }
	},
	Inspect: function(what){
		if(room == 1){
	    	switch (what){
	    		case 'house':
	    			if(!destroyedNote){
	    				this.echo("[[;green;]This creepy house only seems to have one] [[;red;]door][[;green;]...and it looks like there is something on the] [[;red;]door.]");
	    			}else{
	    				this.echo("[[;green;]This creepy house only seems to have one] [[;red;]door.]");
	    			}
	    			break;
	    		case 'door':
	    			if(!destroyedNote){
	    				this.echo("[[;green;]It doesn't look like this ][[;red;]door][[;green;] has been opened in decades. There's a ][[;red;]note][[;green;] attached to the ][[;red;]door.]");
	    			}else{
	    				this.echo("[[;green;]It doesn't look like this ][[;red;]door][[;green;] has been opened in decades.]");
	    			}
	    			break;
	    		case 'note':
	    			if(!destroyedNote){
		    			this.echo("[[;green;]It reads 'Please HELP, I'm trapped and can't get out. I am in the BASEMENT.']");// The paper shows no sign of being outside in the weather and it's somehow attached by a nail on the inside of the ][[;red;]door.]");
		    			readNote = true;
		    		}else{
		    			this.echo("[[;green;]The] [[;red;]note][[;green;] is just dust in the wind now...]");
		    		}
	    			break;
	    		case 'windows':
	    		case 'window':
	    			this.echo("[[;green;]You can't see inside past all the dust and they all look rusted shut.]");
	    			break;
	    		case 'coins':
	    		case 'coin':
	    			this.echo("[[;green;]You have a dime, 2 nickels, and three pennies.]");
	    			break;
	    		case 'lint':
	    			this.echo("[[;green;]It's just some pocket ][[;red;]lint]");
	    			break;
	    		case 'pencil':
	    			this.echo("[[;green;]Fresh, sharp, and ready to write my way out.]");
	    			break;
	    		case '':
	    		case null:
	    			this.echo("[[;green;]What would you like to inspect? Please use the syntax 'Inspect <object>']");
	    			break;
	    		default:
	    			this.echo("[[;red;]INVALID COMMAND]");
	    	}
	    }else if(room == 2){
	    	switch (what){
	    		case 'stairwell':
	    		case 'staircase':
	    		case 'stairs':
	    			this.echo("[[;green;]It seems solid enough. I wonder what's at the top?");
	    			break;
	    		case 'doors':
	    		case 'door':
	    			this.echo("[[;green;]There are four in this hallway: a ][[;red;]front-right door][[;green;], a][[;red;] back-right door][[;green;], a][[;red;] front-left door][[;green;], and a][[;red;] back-left door.]");
	    			break;
	    		case 'entrance':
	    		case 'front':
	    		case 'entry':
	    			this.echo("[[;green;]It won't budge.]");
	    			break;
	    		case 'panel':
	    			if(panicOuterDoorOpened){
	    				this.echo("[[;red;]INVALID COMMAND]");
	    			}else if(panicRoomLocked){
	    				if(lights == 0){
	    					this.echo("[[;green;]There are 3 red lights and what looks like a ][[;red;]keycard][[;green;] reader.]");
	    				}else if(lights == 1){
	    					this.echo("[[;green;]There are 2 red lights, 1 green light, and what looks like a ][[;red;]keycard][[;green;] reader.]");
	    				}else{
	    					this.echo("[[;green;]There is 1 red light, 2 green lights, and what looks like a ][[;red;]keycard][[;green;] reader.]");
	    				}
	    			}else{
	    				this.echo("[[;green;]All 3 lights are green. The ][[;red;]steel door][[;green;] could ][[;red;]open][[;green;] now.]");
	    			}
	    		case null:
	    			this.echo("[[;green;]What would you like to inspect? Please use the syntax 'Inspect <object>']");
	    			break;
	    		default:
	    			this.echo("[[;red;]INVALID COMMAND]");
	    	}
	    }else if(room == 3){
	    	switch (what){
	    		case 'rug':
	    			this.echo("[[;green;]You lift up the rug and find an old baseball ][[;red;]card.]");
	    			break;
	    		case 'doors':
	    		case 'door':
	    			this.echo("[[;green;]There are two in this room: a ][[;red;]north door][[;green;] and an][[;red;] east door.]");
	    			break;
	    		case 'card':
	    			if(inventory.card == 2){
	    				this.echo("[[;green;]It looks ancient. 'Jack Crimian #24 Pitcher'.]");
	    			}else{
	    				this.echo("[[;green;]It's pretty far under the rug so you can't see much but you could probably ][[;red;]take][[;green;] it.]");
	    			}	
	    			break;
	    		case 'chessboard':
	    		case 'chess':
	    			if(inventory.king == 2){
	    				this.echo("[[;green;]The piece you found earlier is clearly the ][[;red;]king][[;green;] that's missing from this set...You could probably ][[;red;]use][[;green;] it to complete the set.]");
	    			}else if(inventory.king == 3){
	    				this.echo("[[;green;]It's in the middle of a game, best leave it alone now that all the pieces are back in place.]");
	    			}else{
	    				this.echo("[[;green;]It's in the middle of the game but you can't find the black ][[;red;]king][[;green;] anywhere around.]");
	    			}
	    			break;
	    		case 'bookshelf':
	    		case 'books':
	    		case 'book':
	    			this.echo("All the ][[;red;]books][[;green;] are coated in dust except this copy of the Lord of the Rings that looks brand new.]");
	    			break;
	    		case null:
	    			this.echo("[[;green;]What would you like to inspect? Please use the syntax 'Inspect <object>']");
	    			break;
	    		default:
	    			this.echo("[[;red;]INVALID COMMAND]");
	    	}
	    }else{
		    this.echo("[[;red;]INVALID COMMAND]");
	    }
	},
	Take: function(what){
		if(room == 1){
	    	switch (what){
	    		case 'note':
	    			if(destroyedNote){
	    				this.echo("[[;green;]You grasp at the dust that was the [[;red;]note][[;green;] but it's floating away in the wind...]");
	    			}else{
		    			if(!readNote){
		    				this.echo("[[;green;]It reads 'Please HELP, I'm trapped and can't get out. I am in the BASEMENT.' The paper shows no sign of being outside in the weather and it's somehow attached by a nail on the inside of the ][[;red;]door.]");
		    			}
		    			this.echo("[[;green;]You grab the [[;red;]note][[;green;] off the door but as soon as it comes free it dissolves into dust in the wind.]");
		    			destroyedNote = true;
		    		}
	    			break;
	    		case '':
	    		case null:
	    			this.echo("[[;green;]What would you like to take? Please use the syntax 'Take <object>']");
	    			break;
	    		default:
	    			this.echo("[[;red;]INVALID COMMAND]");
	    	}
	    }else if(room == 3){
	    	switch(what){
	    		case 'card':
	    			if(inventory.card == 2){
	    				this.echo("[[;green;]You've already put the ][[;red;]card][[;green;] in your ][[;red;]inventory.]");
	    			}else{
	    				this.echo("[[;green;]You reach under the ][[;red;]rug][[;green;] and pull out the baseball ][[;red;]card][[;green;]. Jack Crimian? Never heard of him.]");
	    			}
	    			break;
	    		case 'chessboard':
	    		case 'chess':
	    		case 'piece':
	    			//should there be a different response once the kings been placed?
	    			if(inventory.king == 3){
	    				this.echo("[[;green;]You should probably leave it alone now that you've finally got all the pieces returned.]");
	    			}else{
	    				this.echo("[[;green;]You have a bad feeling about taking a piece in the middle of a game. Better leave it alone...]");
	    			}
	    			break;
	    		case 'book':
	    		case 'books':
	    			this.echo("[[;green;]You really don't have any room right now to carry anything that large]");
	    			break;
	    		case '':
	    		case null:
	    			this.echo("[[;green;]What would you like to take? Please use the syntax 'Take <object>']");
	    			break;
	    		default:
	    			this.echo("[[;red;]INVALID COMMAND]");
	    	}
	    }else{
		    this.echo("[[;red;]INVALID COMMAND]");
	    }
	},
	Open: function(what, door){
		if(door == '' || door == null){
			if(room == 1){
		    	switch (what){
		    		case 'windows':
		    		case 'window':
		    			this.echo("[[;green;]The windows won't budge.]");
		    			break;
		    		case 'door':
		    			enterRoom(2);
		    			this.echo("[[;green;]The ][[;red;]entrance ][[;green;]slams shut behind you. In front of you is a ][[;red;]stairway ][[;green;]and four ][[;red;]doors]");
		    			break;
		    		case '':
		    		case null:
		    			this.echo("[[;green;]What would you like to open? Please use the syntax 'Open <object>']");
		    			break;
		    		default:
		    			this.echo("[[;red;]INVALID COMMAND]");
		    	}
		    }else if(room == 2){
		    	switch (what){
		    		case 'entrance':
		    		case 'front':
		    		case 'entry':
		    			this.echo("[[;green;]It won't budge.]");
		    			break;
		    		case 'door':
		    		case 'doors':
		    			this.echo("[[;green;]Which one should you open? There's a ][[;red;]front-right door][[;green;], a][[;red;] back-right door][[;green;], a][[;red;] front-left door][[;green;], and a][[;red;] back-left door.]");
		    			break;
		    		case '':
		    		case null:
		    			this.echo("[[;green;]What would you like to open? Please use the syntax 'Open <object>']");
		    			break;
		    		default:
		    			this.echo("[[;red;]INVALID COMMAND]");
		    	}
		    }else if(room == 3){
		    	switch (what){
		    		case 'door':
		    		case 'doors':
		    			this.echo("[[;green;]Which one should you open? There's a ][[;red;]north door][[;green;] and an][[;red;] east door.]");
		    			break;
		    		case '':
		    		case null:
		    			this.echo("[[;green;]What would you like to open? Please use the syntax 'Open <object>']");
		    			break;
		    		default:
		    			this.echo("[[;red;]INVALID COMMAND]");
		    	}
		    }else{
		    	this.echo("[[;red;]INVALID COMMAND]");
			}
		}else if(door == 'door'){
			if(room == 2){
		    	switch (what){
		    		case 'front-left':
		    			enterRoom(3);
		    			this.echo("[[;green;]You enter a game room. There's a lerge bear skin ][[;red;]rug ][[;green;]in the middle of the floor, plenty of hunting trophies on the walls, a ][[;red;]bookshelf ][[;green;]in the corner, and a ][[;red;]chessboard ][[;green;] next to the fireplace.]");
		    			break;
		    		case 'front-right':
		    			if(panicOuterDoorOpened){
		    				this.echo("[[;green;]You've already opened this door...]");
		    			}else{
		    				panicOuterDoorOpened = true;
			    			if(panicRoomLocked){
			    				if(lights == 0){
			    					this.echo("[[;green;]You open the door but find a steel door behind it with some kind of [[;red;]panel][[;green;] on it that has 3 red lights and what looks to be a card reader].");
			    				}else if(lights == 1){
			    					this.echo("[[;green;]You open the door but find a steel door behind it with some kind of [[;red;]panel][[;green;] on it that has 2 red lights, 1 green light and what looks to be a card reader].");
			    				}else if(lights == 2){
			    					this.echo("[[;green;]You open the door but find a steel door behind it with some kind of [[;red;]panel][[;green;] on it that has 1 red light, 2 green lights and what looks to be a card reader].");
			    				}
			    			}else{
			    				enterRoom(10);
			    				this.echo("[[;green;]You walk into what appears to be a panic room full of food, supplies, and childrens books. There's a single ][[;red;]table][[;green;] next to the cot.]");
			    			}
		    			}
		    			break;
		    		case 'back-left':
		    			enterRoom(4);
		    			this.echo("[[;green;]You enter a dusty hallway from the ][[;red;] east door][[;green;]] with 3 more ][[;red;]doors][[;green;] in the hallway and a long, dusty ][[;red;]mirror][[;green;] along one wall.]");
		    			break;
		    		case 'back-right':
		    			enterRoom(7);
		    			this.echo("[[;green;]You enter a creaky hallway from the ][[;red;] west door][[;green;] with 3 more ][[;red;]doors][[;green;] in the hallway, antique ][[;red;]portraits][[;green;] along one wall, and a ][[;red;]mirror][[;green;] along the other.]");
		    			break;
		    		case 'steel':
		    			if(panicOuterDoorOpened && !panicRoomLocked){
		    				enterRoom(10);
		    				this.echo("[[;green;]You walk into what appears to be a panic room full of food, supplies, and childrens books. There's a single ][[;red;]table][[;green;] next to the cot.]");
		    			}else if(panicOuterDoorOpened){
		    				this.echo("[[;green;]It's still locked.]");
		    			}else{
		    				this.echo("[[;red;]INVALID COMMAND]");
		    			}
		    			break;
		    		case '':
		    		case null:
		    			this.echo("[[;green;]Which door would you like to open? Please use the syntax 'Open <door name> door']");
		    			break;
		    		default:
		    			this.echo("[[;red;]INVALID COMMAND]");
		    	}
		    }else if(room == 3){
		    	switch (what){
		    		case 'north':
		    			enterRoom(4);
		    			this.echo("[[;green;]You enter a dusty hallway from the][[;red;] south door][[;green;]] with 3 more ][[;red;]doors][[;green;] in the hallway and a long, dusty ][[;red;]mirror][[;green;] along one wall.]");
		    			break;
		    		case 'front-right':
		    			enterRoom(2);
		    			if(panicOuterDoorOpened){
		    				this.echo("[[;green;]You re-enter the entryway from the ][[;red;]front-left door][[;green;]. There are 2 other doors in addition to the ][[;red;]steel door][[;green;] and the ][[;red;]stairway.]");
		    			}else{
		    				this.echo("[[;green;]You re-enter the entryway from the ][[;red;]front-left door][[;green;]. There are 3 other doors in addition to the ][[;red;]stairway.]");
		    			}
		    			break;
		    		case '':
		    		case null:
		    			this.echo("[[;green;]Which door would you like to open? Please use the syntax 'Open <door name> door']");
		    			break;
		    		default:
		    			this.echo("[[;red;]INVALID COMMAND]");
		    	}
		    }else{
			    this.echo("[[;red;]INVALID COMMAND]");
		    }
		}else{
			this.echo("[[;red;]INVALID COMMAND]");
		}
	},
	Inventory: function(){
		//TO-DO examine inventory
		this.echo("[[;green;]You check your pockets and find: \n&nbsp;> a few ][[;red;]coins]\n[[;green;]&nbsp;> some pocket ][[;red;]lint]\n[[;green;]&nbsp;> a #2 ][[;red;]pencil]");
	},
	Use: function(what, door){
		if(door == '' || door == null){
			if(room == 1){
		    	switch (what){
		    		case 'coins':
			    	case 'coin':
			    		this.echo("[[;green;]I need to hold onto my lunch money.]");
			    		break;
			    	case 'lint':
			    		this.echo("[[;green;]It's just some pocket ][[;red;]lint][[;green;] ...what could I possibly do with it?]");
			    		break;
			    	case 'pencil':
			    		this.echo("[[;green;]I have no paper]");
			    		break;
		    		case 'windows':
		    		case 'window':
		    			this.echo("[[;green;]The windows won't budge.]");
		    			break;
		    		case 'door':
		    			enterRoom(2);
		    			this.echo("[[;green;]The ][[;red;]door ][[;green;]slams shut behind you. In front of you is a ][[;red;]stairway ][[;green;]and four ][[;red;]doors]");
		    			break;
		    		case '':
		    		case null:
		    			this.echo("[[;green;]What would you like to use? Please use the syntax 'Use <object>']");
		    			break;
		    		default:
		    			this.echo("[[;red;]INVALID COMMAND]");
		    	}
		    }else if(room == 2){
		    	switch (what){
		    		case 'coins':
			    	case 'coin':
			    		this.echo("[[;green;]I need to hold onto my lunch money.]");
			    		break;
			    	case 'lint':
			    		this.echo("[[;green;]It's just some pocket ][[;red;]lint][[;green;] ...what could I possibly do with it?]");
			    		break;
			    	case 'pencil':
			    		this.echo("[[;green;]I have no paper]");
			    		break;
		    		case 'stairwell':
		    		case 'staircase':
		    		case 'stairs':
		    			enterRoom(11);
		    			this.echo("[[;green;]You emerge onto an upper landing with 4 ][[;red;]doors]");
		    			break;
		    		case 'door':
		    		case 'doors':
		    			if(panicRoomLocked){
		    				this.echo("[[;green;]Which one should you ][[;red;]use][[;green;]? There's a ][[;red;]front-right door][[;green;], a][[;red;] back-right door][[;green;], a][[;red;] front-left door][[;green;], and a][[;red;] back-left door.]");
		    			}else{
		    				this.echo("[[;green;]Which one should you ][[;red;]use][[;green;]? There's a ][[;red;] back-right door][[;green;], a][[;red;] front-left door][[;green;], a][[;red;] back-left door][[;green;], and the ][[;red;]steel door.]");
		    			}
		    			break;
		    		case 'keycard':
		    			if(panicOuterDoorOpened){
		    				if(inventory.card == 3){
		    					this.echo("[[;green;]You've already scanned the keycard.]");
		    				}else{
		    					inventory.card = 3;
		    					lights += 1;
		    					if(lights == 3){
		    						panicRoomLocked = false;
		    						this.echo("[[;green;]You place the [[;red;]keycard][[;green;] against the [[;red;]panel][[;green;] and the last light turns green. There's a faint click as the [[;red;]steel door][[;green;] unlocks.]");
		    					}else if(lights == 2){
		    						this.echo("[[;green;]You place the [[;red;]keycard][[;green;] against the [[;red;]panel][[;green;] and one of the 2 red lights turns green. One more to go!]");
		    					}else if(lights == 1){
		    						this.echo("[[;green;]You place the [[;red;]keycard][[;green;] against the [[;red;]panel][[;green;] and the first red light turns green.]");
		    					}
		    				}
		    			}else{
		    				this.echo("[[;red;]INVALID COMMAND]");
		    			}
						break;
		    		case '':
		    		case null:
		    			this.echo("[[;green;]What would you like to ][[;red;]use][[;green;]? Please use the syntax 'Use <object>']");
		    			break;
		    		default:
		    			this.echo("[[;red;]INVALID COMMAND]");
		    	}
		    }else if(room == 3){
		    	switch (what){
		    		case 'door':
		    		case 'doors':
		    			this.echo("[[;green;]Which one should you ][[;red;]use][[;green;]? There's a ][[;red;]north door][[;green;] and an][[;red;] east door.]");
		    			break;
		    		case 'piece':
		    		case 'king':
		    			if(inventory.king == 2){
		    				this.echo("[[;green;]You place the ][[;red;]king][[;green;] back on the ][[;red;]board][[;green;] and hear a click from back in the entryway.]");
		    				lights += 1;
		    				inventory.king = 3;
		    			}else{
		    				this.echo("[[;red;]INVALID COMMAND]");
		    			}
		    			break;
		    		case '':
		    		case null:
		    			this.echo("[[;green;]What would you like to ][[;red;]use][[;green;]? Please use the syntax 'Use <object>']");
		    			break;
		    		default:
		    			this.echo("[[;red;]INVALID COMMAND]");
		    	}
			}else{
			    this.echo("[[;red;]INVALID COMMAND]");
		    }
		}else if(door == 'door'){
			if(room == 2){
		    	switch (what){
		    		case 'front-left':
		    			enterRoom(3); 
		    			this.echo("[[;green;]You enter a game room. There's a lerge bear skin ][[;red;]rug ][[;green;]in the middle of the floor, plenty of hunting trophies on the walls, a ][[;red;]bookshelf ][[;green;]in the corner, and a ][[;red;]chessboard ][[;green;] next to the fireplace.]");
		    			break;
		    		case 'front-right':
		    			if(panicOuterDoorOpened){
		    				this.echo("[[;green;]You've already opened this door...]");
		    			}else{
		    				panicOuterDoorOpened = true;
			    			if(panicRoomLocked){
			    				if(lights == 0){
			    					this.echo("[[;green;]You open the door but find a steel door behind it with some kind of [[;red;]panel][[;green;] on it that has 3 red lights and what looks to be a card reader].");
			    				}else if(lights == 1){
			    					this.echo("[[;green;]You open the door but find a steel door behind it with some kind of [[;red;]panel][[;green;] on it that has 2 red lights, 1 green light and what looks to be a card reader].");
			    				}else if(lights == 2){
			    					this.echo("[[;green;]You open the door but find a steel door behind it with some kind of [[;red;]panel][[;green;] on it that has 1 red light, 2 green lights and what looks to be a card reader].");
			    				}
			    			}else{
			    				this.echo("[[;green;]All 3 lights are green. I think the ][[;red;]steel door][[;green;] could be opened now.]");
			    			}
			    		}
		    			break;
		    		case 'back-left':
		    			enterRoom(4);
		    			this.echo("[[;green;]You enter a dusty hallway from the ][[;red;] east door][[;green;]] with 3 more ][[;red;]doors][[;green;] in the hallway and a long, dusty ][[;red;]mirror][[;green;] along one wall.]");
		    			break;
		    		case 'back-right':
		    			enterRoom(7);
		    			this.echo("[[;green;]You enter a creaky hallway from the ][[;red;] west door][[;green;] with 3 more ][[;red;]doors][[;green;] in the hallway, antique ][[;red;]portraits][[;green;] along one wall, and a ][[;red;]mirror][[;green;] along the other.]");
		    			break;
		    		case 'steel':
		    			if(panicOuterDoorOpened && !panicRoomLocked){
		    				enterRoom(10);
		    				this.echo("[[;green;]You walk into what appears to be a panic room full of food, supplies, and childrens books. There's a single ][[;red;]table][[;green;] next to the cot.]");
		    			}else if(panicOuterDoorOpened){
		    				this.echo("[[;green;]It's still locked.]");
		    			}else{
		    				this.echo("[[;red;]INVALID COMMAND]");
		    			}
		    			break;
		    		case '':
		    		case null:
		    			this.echo("[[;green;]Which door would you like to open? Please use the syntax 'Open <door name> door']");
		    			break;
		    		default:
		    			this.echo("[[;red;]INVALID COMMAND]");
		    	}
		    }else if(room == 3){
		    	switch (what){
		    		case 'north':
		    			enterRoom(4);
		    			this.echo("[[;green;]You enter a dusty hallway from the][[;red;] south door][[;green;]] with 3 more ][[;red;]doors][[;green;] in the hallway and a long, dusty ][[;red;]mirror][[;green;] along one wall.]");
		    			break;
		    		case 'front-right':
		    			enterRoom(2);
		    			if(panicOuterDoorOpened){
		    				this.echo("[[;green;]You re-enter the entryway from the ][[;red;]front-left door][[;green;]. There are 2 other doors in addition to the ][[;red;]steel door][[;green;] and the ][[;red;]stairway.]");
		    			}else{
		    				this.echo("[[;green;]You re-enter the entryway from the ][[;red;]front-left door][[;green;]. There are 3 other doors in addition to the ][[;red;]stairway.]");
		    			}
		    			break;
		    		case '':
		    		case null:
		    			this.echo("[[;green;]What would you like to ][[;red;]use][[;green;]? Please use the syntax 'Use <object>']");
		    			break;
		    		default:
		    			this.echo("[[;red;]INVALID COMMAND]");
		    	}
		    }else{
			    this.echo("[[;red;]INVALID COMMAND]");
		    }
		}else{
			this.echo("[[;red;]INVALID COMMAND]");
		}
	}
}, {
	checkArity: false,
    greetings: "[[;green;]Welcome adventurer!]"
});
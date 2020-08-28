function doInspect(what){
	var ret = "";
	if(['coins', 'coin', 'lint', 'pencil', 'keycard', 'card', 'king', 'scrap', 'die', 'dice', 'key'].includes(what)){
		switch (what){
			case 'coins':
	    	case 'coin':
	    		ret += "[[;green;]You have a dime, 2 nickels, and three pennies.]";
	    		break;
	    	case 'lint':
	    		ret += "[[;green;]It's just some pocket ][[;red;]lint]";
	    		break;
	    	case 'pencil':
	    		ret += "[[;green;]Fresh, sharp, and ready to write my way out.]";
	    		break;
	    	case 'card':
				if(inventory.card == 2){
					ret += "[[;green;]It looks to be at least 25 years old. 'Jack Crimian #24 Pitcher'.]";
				}else if(room == 3){
					ret += "[[;green;]It's pretty far under the rug so you can't see much but you could probably ][[;red;]Take][[;green;] it.]";
				}else{
					ret += "[[;red;]INVALID COMMAND]";
					//console.log("3");
				}
				break;
			case 'keycard':
				if(inventory.keycard == 2){
					ret += "[[;green;]You wonder what it could open...]";
				}else if(room == 5){
					ret += "[[;green;]It's sitting in the bottom of the box, you should ][[;red;]take][[;green;] it and see what it opens.]";
				}else{
					ret += "[[;red;]INVALID COMMAND]";
					//console.log("4");
				}
				break;
			case 'king':
				if(inventory.king == 2){
					ret += "[[;green;]It's a black piece from a chess set.]";
				}else if(inventory.king == 1 && room == 14 && drawerOpened){
					ret += "[[;green;]The chess piece is just sitting in the opened ][[;red;]drawer][[;green;]. You could ][[;red;]Take][[;green;] it.]";
				}else if(inventory.king == 3 && room == 3){
					ret += "[[;green;]Now that you've returned it to the ][[;red;]board][[;green] whoever was playing can resume.]";
				}else{
					ret += "[[;red;]INVALID COMMAND]";
					//console.log("5");
				}
				break;
			case 'scrap':
				if(inventory.scrap == 2){
					ret += "[[;green;]There's something written on one side. '05-20-15']";
				}else{
					ret += "[[;red;]INVALID COMMAND]";
					//console.log("6");
				}
				break;
			case 'die':
				if(inventory.die1 == 1 && room == 10){
					ret += "[[;green;]Maybe you should ][[;red;]Take][[;green;] it. It's just siting there unused after all.]";
				}else{
	    			if(inventory.die1 == 2 && inventory.die2 == 2){
		    			ret += "[[;green;]You have two six-sided ][[;red;]dice][[;green;], not sure what you'd ][[;red;]Use][[;green;] them for...]";
		    		}else if(inventory.die1 == 2 || inventory.die2 == 2){
		    			ret += "[[;green;]You have one six-sided ][[;red;]die][[;green;], not sure what you'd ][[;red;]Use][[;green;] it for...]";
		    		}else{
		    			ret += "[[;red;]INVALID COMMAND]";
		    			//console.log("7");
		    		}
		    	}
				break;
			case 'dice':
				if(inventory.die1 == 2 && inventory.die2 == 2){
	    			ret += "[[;green;]You have two six-sided ][[;red;]dice][[;green;], not sure what you'd ][[;red;]Use][[;green;] them for...]";
	    		}else{
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("8");
	    		} 
				break;
			case 'key':
				if(inventory.key == 2){
					ret += "[[;green;]It's a very bright, pastel toy ][[;red;]key.]";
				}else if(inventory.key == 3 && room == 12){
					ret += "[[;green;]They ][[;red;]key][[;green;] is still inside the ][[;red;]chest][[;green;] where you put it.]";
				}else if(room == 15 && inventory.key == 1 && lockerOpened){
					ret += "[[;green;]You can see the toy ][[;red;]key][[;green;] sitting in the ][[;red;]locker][[;green;]. You could definitely reach in and ][[;red;]Take][[;green;] it.]";
				}else{
					ret += "[[;red;]INVALID COMMAND]";
					//console.log("9");
				}
				break;
	    	case '':
	    	case null:
	    		ret += "[[;white;]What would you like to inspect? Please use the syntax 'Inspect <object>']";
	    		break;
	    	default:
	    		ret += "[[;red;]INVALID COMMAND]";
	    		//console.log("10");
		}
	}else{
		if(room == 1){
	    	switch (what){
	    		case 'house':
	    			if(!destroyedNote){
	    				ret += "[[;green;]This creepy house only seems to have one] [[;red;]door][[;green;]...and it looks like there is something on the] [[;red;]door.]";
	    			}else{
	    				ret += "[[;green;]This creepy house only seems to have one] [[;red;]door.]";
	    			}
	    			break;
	    		case 'door':
	    			if(!destroyedNote){
	    				ret += "[[;green;]It doesn't look like this ][[;red;]door][[;green;] has been opened in decades. There's a ][[;red;]note][[;green;] attached to the ][[;red;]door.]";
	    			}else{
	    				ret += "[[;green;]It doesn't look like this ][[;red;]door][[;green;] has been opened in decades.]";
	    			}
	    			break;
	    		case 'note':
	    			if(!destroyedNote){
		    			ret += "[[;green;]It reads 'Please HELP, I'm trapped and can't get out. I am in the BASEMENT.']";// The paper shows no sign of being outside in the weather and it's somehow attached by a nail on the inside of the ][[;red;]door.]";
		    			readNote = true;
		    		}else{
		    			ret += "[[;green;]The] [[;red;]note][[;green;] is just dust in the wind now...]";
		    		}
	    			break;
	    		case 'windows':
	    		case 'window':
	    			ret += "[[;green;]You can't see inside past all the dust and they all look rusted shut.]";
	    			break;	    		
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to inspect? Please use the syntax 'Inspect <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("11");
	    	}
	    }else if(room == 2){
	    	switch (what){
	    		case 'stairwell':
	    		case 'staircase':
	    		case 'stairs':
	    			ret += "[[;green;]It seems solid enough. You wonder what's at the top...you could ][[;red;]Use][[;green;] them to find out.]";
	    			break;
	    		case 'doors':
	    		case 'door':
	    			ret += "[[;green;]There are four in this hallway: a ][[;red;]front-right door][[;green;], a][[;red;] back-right door][[;green;], a][[;red;] front-left door][[;green;], and a][[;red;] back-left door.]";
	    			break;
	    		case 'entrance':
	    		case 'front':
	    		case 'entry':
	    			ret += "[[;green;]It won't budge.]";
	    			break;
	    		case 'panel':
	    			if(!panicOuterDoorOpened){
	    				ret += "[[;red;]INVALID COMMAND]";
	    				//console.log("12");
	    			}else if(panicRoomLocked){
	    				if(lights == 0){
	    					ret += "[[;green;]There are 3 red lights and what looks like a ][[;red;]keycard][[;green;] reader.]";
	    				}else if(lights == 1){
	    					ret += "[[;green;]There are 2 red lights, 1 green light, and what looks like a ][[;red;]keycard][[;green;] reader.]";
	    				}else{
	    					ret += "[[;green;]There is 1 red light, 2 green lights, and what looks like a ][[;red;]keycard][[;green;] reader.]";
	    				}
	    			}else{
	    				ret += "[[;green;]All 3 lights are green. The ][[;red;]steel door][[;green;] could ][[;red;]Open][[;green;] now.]";
	    			}
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to inspect? Please use the syntax 'Inspect <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("13");
	    	}
	    }else if(room == 3){
	    	switch (what){
	    		case 'rug':
	    			ret += "[[;green;]You lift up the rug and find an old baseball ][[;red;]card.]";
	    			break;
	    		case 'doors':
	    		case 'door':
	    			ret += "[[;green;]There are two in this room: a ][[;red;]north door][[;green;] and an][[;red;] east door.]";
	    			break;
	    		case 'chessboard':
	    		case 'chess':
	    			if(inventory.king == 2){
	    				ret += "[[;green;]The piece you found earlier is clearly the ][[;red;]king][[;green;] that's missing from this set...You could probably ][[;red;]use][[;green;] it to complete the set.]";
	    			}else if(inventory.king == 3){
	    				ret += "[[;green;]It's in the middle of a game, best leave it alone now that all the pieces are back in place.]";
	    			}else{
	    				ret += "[[;green;]It's in the middle of the game but you can't find the black ][[;red;]king][[;green;] anywhere around.]";
	    			}
	    			break;
	    		case 'bookshelf':
	    		case 'books':
	    		case 'book':
	    			ret += "[[;green;]All the ][[;red;]books][[;green;] are coated in dust except this copy of the Lord of the Rings that looks brand new.]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to inspect? Please use the syntax 'Inspect <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("14");
	    	}
	    }else if(room == 4){
	    	switch (what){
	    		case 'doors':
	    		case 'door':
	    			ret += "[[;green;]There are four in this hallway: a ][[;red;]north door][[;green;], an][[;red;] east door][[;green;], a][[;red;] south door][[;green;], and a][[;red;] west door.]";
	    			break;
	    		case 'mirror':
	    			ret += "[[;green;]You wipe away the dust and instead of your own reflection you see a completely different hallway: cleaner and with old portraits along the opposite wall.]";
	    			break;
	    		case 'portraits':
	    		case 'portrait':
	    			ret += '[[;green;]There are no portraits in this room.]';
	    			break;
	    		case 'spider':
	    		case 'spiderweb':
	    		case 'cobweb':
	    			ret += '[[;green;]You reach up to see if the spider is real...it definitely is, it nearly bites your finger off.]';
	    			break;
	    		case 'wall':
	    			ret += "[[;green;]There's a ][[;red;]mirror][[;green;] along one side of the wall and a cobweb with an abnormally large spider on the other side.]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to inspect? Please use the syntax 'Inspect <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("14");
	    	}
	    }else if(room == 5){
	    	switch (what){
	    		case 'doors':
	    		case 'door':
	    			ret += "[[;green;]There is only the ][[;red;]door][[;green;] you entered through.]";
	    			break;
	    		case 'papers':
	    		case 'paper':
	    			ret += "[[;green;]They all have gibberish written on them in green ink...]";
	    			break;
	    		case 'box':
	    			if(inventory.keycard == 1){
	    				ret += "[[;green;]You pull out a handful of random ][[;red;]papers][[;green;] and find a single ][[;red;]keycard][[;green;] on the bottom.]";
	    			}else{
	    				ret += "[[;green;]There are still a few ][[;red;]papers][[;green;] on the bottom but it's otherwise empty now.]";
	    			}
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to inspect? Please use the syntax 'Inspect <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("15");
	    	}
	    }else if(room == 6){
	    	switch (what){
	    		case 'doors':
	    		case 'door':
	    			ret += "[[;green;]There is only the ][[;red;]door][[;green;] you entered through.]";
	    			break;
	    		case 'organ':
	    			ret += "[[;green;]Interestingly, there are seven 'natural' keys right in the middle that aren't coated in dust like the others. Maybe you could ][[;red;]Play][[;green;] those?]";
	    			break;
	    		case 'scrap':
	    			ret += "[[;green;]The numbers 05-20-15 are written on it. You could ][[;red;]Take][[;green;] it so you don't forget those numbers, they might mean something.]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to inspect? Please use the syntax 'Inspect <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("16");
	    	}
	    }else if(room == 7){
	    	switch (what){
	    		case 'doors':
	    		case 'door':
	    			ret += "[[;green;]There are three in this hallway: a ][[;red;]north door][[;green;], an][[;red;] east door][[;green;], and a][[;red;] west door.]";
	    			break;
	    		case 'mirror':
	    			ret += "[[;green;]You don't see yourself in this mirror! Are you a vampire? You don't think so...but the hallway in the mirror looks different...dustier.]";
	    			break;
	    		case 'portraits':
	    		case 'portrait':
	    			ret += "[[;green;]You know those old portraits where the eyes follow you? These don't have any eyes...]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to inspect? Please use the syntax 'Inspect <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("17");
	    	}
	    }else if(room == 8){
	    	switch (what){
	    		case 'doors':
	    		case 'door':
	    			ret += "[[;green;]There are two in this corridor: a ][[;red;]north door][[;green;] and a][[;red;] south door.]";
	    			break;
	    		case 'podium':
	    		case 'podiums':
	    		case 'statues':
	    		case 'statue':
	    			ret += "[[;green;]There are four ][[;red;]podiums][[;green;] in the corners and three of them hold ][[;red;]statues][[;green;]. The three ][[;red;]statues][[;green;] you see are: ]";
	    			ret += "\n[[;green;]&nbsp;>  ][[;red;]" + currStatues[0] + "]";
	    			ret += "\n[[;green;]&nbsp;>  ][[;red;]" + currStatues[1] + "]";
	    			ret += "\n[[;green;]&nbsp;>  ][[;red;]" + currStatues[2] + "]";
	    			if(twistedStatues < 3){
	    				ret += "\n[[;green;]They look like if I ][[;red;]use][[;green;] them I could twist them a little bit...]";
	    			}else{
	    				ret += "\n[[;green;]The fourth ][[;red;]podium][[;green;] holds a ][[;red;]switch.]";
	    			}
	    			break;
	    		case 'switch':
	    			if(twistedStatues == 3){
	    				 ret += "[[;green;]It's sitting on the fourth ][[;red;]podium][[;green;] and you could probably ][[;red;]use][[;green;] it somehow...]";
	    			}else{
	    				ret += "[[;red;]INVALID COMMAND]";
	    				//console.log("18");
	    			}
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to inspect? Please use the syntax 'Inspect <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("19");
	    	}
	    }else if(room == 9){
	    	switch (what){
	    		case 'doors':
	    		case 'door':
	    			ret += "[[;green;]There is only the ][[;red;]door][[;green;] you came through.]";
	    			break;
	    		case 'panel':
	    			if(inventory.die1 < 3 && inventory.die2 < 3){
	    				ret += "[[;green;]You check out the ][[;red;]panel][[;green;] by the ][[;red;]door][[;green;] but there are no buttons on it. Only two squares with a dot in the middle of each etched into the metal.]";
	    			}else if(inventory.die1 == 3 || inventory.die2 == 3){
	    				ret += "[[;green;]You check out the ][[;red;]panel][[;green;] by the ][[;red;]door][[;green;] but there are no buttons on it. Only two squares with a dot in the middle of each etched into the metal, one of which is glowing.]";
	    			}
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to inspect? Please use the syntax 'Inspect <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("20");
	    	}
	    }else if(room == 10){
	    	switch (what){
	    		case 'doors':
	    		case 'door':
	    			ret += "[[;green;]There is only the ][[;red;]door][[;green;] you came through.]";
	    			break;
	    		case 'book':
	    		case 'books':    		
	    			ret += "[[;green;]Harry Potter? Lord of the Rings? A dictionary? Comic books? What a nerd.]";
	    			break;
	    		case 'table':
	    			if(inventory.die1 == 1){
	    				ret += "[[;green;]There's a single red ][[;red;]die][[;green;] sitting there.]";
	    			}else{
	    				ret += "[[;green;]There's nothing there anymore.]";
	    			}
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to inspect? Please use the syntax 'Inspect <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("21");
	    	}
	    }else if(room == 11){
	    	switch (what){
	    		case 'doors':
	    		case 'door':
	    			ret += "[[;green;]There are four on this landing: a ][[;red;]north door][[;green;], an ][[;red;]east door][[;green;], a ][[;red;]west door][[;green;], and a][[;red;] south door.]";
	    			break;
	    		case 'stairwell':
	    		case 'staircase':
	    		case 'stairs':
	    			ret += "[[;green;]It seems solid enough. It goes back down to the entryway.]";
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to inspect? Please use the syntax 'Inspect <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("22");
	    	}
	    }else if(room == 12){
	    	switch (what){
	    		case 'doors':
	    		case 'door':
	    			ret += "[[;green;]There are two in this room: an ][[;red;]east door][[;green;] and a][[;red;] south door.]";
	    			break;
	    		case 'toys':
	    		case 'toy':
	    			ret += "[[;green;]Some Star Wars figures, loose legos, a castle set.]";
	    			break;
	    		case 'chest':
	    		case 'toychest':
	    			if(chestLocked){
	    				ret += "[[;green;]It's locked but there is a hole in the front for a ][[;red;]key][[;green;].]";
	    			}else if(chestOpened){
	    				if(inventory.die2 == 1){
	    					ret += "[[;green;]You've already opened it and there is a blue ][[;red;]die][[;green;] sitting inside.]";
	    				}else{
	    					ret += "[[;green;]You've already opened it and there is nothing left inside.]";
	    				}
	    			}else{
	    				ret += "[[;green;]The ][[;red;]key][[;green;] is in the keyhole. You can ][[;red;]open][[;green;] it now.]";
	    			}
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to inspect? Please use the syntax 'Inspect <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("23");
	    	}
	    }else if(room == 13){
	    	switch (what){
	    		case 'doors':
	    		case 'door':
	    			ret += "[[;green;]There are two in this room: a ][[;red;]west door][[;green;] and a][[;red;] south door.]";
	    			break;
	    		case 'desk':
	    			ret += "[[;green;]There seems to be something carved into the wood of the ][[;red;]desk][[;green;]...'GM->PP->SS'...are those people's initials?]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to inspect? Please use the syntax 'Inspect <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("24");
	    	}
	    }else if(room == 14){
	    	switch (what){
	    		case 'doors':
	    		case 'door':
	    			ret += "[[;green;]There are two in this room: an ][[;red;]east door][[;green;] and a][[;red;] south door.]";
	    			break;
	    		case 'desk':
	    			ret += "[[;green;]There's a ][[;red;]typewriter][[;green;] on top and it looks like you might be able to ][[;red;]open][[;green;] the ][[;red;]drawer][[;green;] on the side.]";
	    			break;
	    		case 'typewriter':
	    			ret += "[[;green;]The ][[;red;]paper][[;green;] seems to have somekind of programming code written on it...]";
	    			break;
	    		case 'paper':
	    			ret += "[[;green;]It looks like gibberish to you...]";
	    			break;
	    		case 'drawer':
	    			if(drawerOpened && inventory.king == 1){
	    				ret += "[[;green;]It look's like there is the black ][[;red;]king][[;green;] from a chess set inside.]";
	    			}else if(drawerOpened){
	    				ret += "[[;green;]The open ][[;red;]drawer][[;green;] is completely empty.]";
	    			}else{
	    				ret += "[[;green;]It looks like you could ][[;red;]Open][[;green;] it.]";
	    			}
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to inspect? Please use the syntax 'Inspect <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("25");
	    	}
	    }else if(room == 15){
	    	switch (what){
	    		case 'doors':
	    		case 'door':
	    			ret += "[[;green;]There are two in this room: an ][[;red;]east door][[;green;] and a][[;red;] north door.]";
	    			break;
	    		case 'locker':
	    		case 'lockers':
	    			if(lockerOpened){
	    				if(inventory.key == 1){
	    					ret += "[[;green;]Most of them are empty except one that has a toy ][[;red;]key][[;green;] sitting inside.]";
	    				}else{
	    					ret += "[[;green;]They all sit empty, except for the cobwebs.]";
	    				}
	    			}else{
	    				ret += "[[;green;]Most of them are empty, but one is still closed and has a combination ][[;red;]lock][[;green;] on the front...]";
	    			}
	    			break;
	    		case 'radio':
	    			ret += "[[;green;]There's a few faint notes coming out of it...][[;red;]D][[;green;]...][[;red;]D][[;green;]...][[;red;]D][[;green;]...][[;red;]A][[;green;]...][[;red;]F][[;green;]...][[;red;]D][[;green;]...][[;red;]A][[;green;]...][[;red;]F][[;green;]...][[;red;]D][[;green;]...a chill runs down your spine.]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to inspect? Please use the syntax 'Inspect <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("26");
	    	}
	    }else if(room == 16){
	    	switch (what){
	    		case 'doors':
	    		case 'door':
	    			ret += "[[;green;]There are three in this room: a ][[;red;]west door][[;green;], a ][[;red;]south door][[;green;], and a][[;red;] north door.]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to inspect? Please use the syntax 'Inspect <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("27");
	    	}
	    }else if(room == 17){
	    	switch (what){
	    		case 'doors':
	    		case 'door':
	    			ret += "[[;green;]The only [[;red;]door][[;green;] is the one you came through.]";
	    			break;
	    		case '':
	    		case null:
	    			ret += "[[;white;]What would you like to inspect? Please use the syntax 'Inspect <object>']";
	    			break;
	    		default:
	    			ret += "[[;red;]INVALID COMMAND]";
	    			//console.log("28");
	    	}
	    }else{
		    ret += "[[;red;]INVALID COMMAND]";
		    //console.log("29");
	    }
	}
	return ret;
}
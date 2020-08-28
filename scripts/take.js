function doTake(what){
	var ret = "";
	if(room == 1){
    	switch (what){
    		case 'note':
    			if(destroyedNote){
    				ret += "[[;green;]You grasp at the dust that was the [[;red;]note][[;green;] but it's floating away in the wind...]";
    			}else{
	    			if(!readNote){
	    				ret += "[[;green;]It reads 'Please HELP, I'm trapped and can't get out. I am in the BASEMENT.' The paper shows no sign of being outside in the weather and it's somehow attached by a nail on the inside of the ][[;red;]door.]";
	    			}
	    			ret += "[[;green;]You grab the [[;red;]note][[;green;] off the door but as soon as it comes free it dissolves into dust in the wind.]";
	    			destroyedNote = true;
	    		}
    			break;
    		case '':
    		case null:
    			ret += "[[;white;]What would you like to take? Please use the syntax 'Take <object>']";
    			break;
    		default:
    			ret += "[[;red;]INVALID COMMAND]";
    			//console.log("30");
    	}
    }else if(room == 3){
    	switch(what){
    		case 'card':
    			if(inventory.card == 2){
    				ret += "[[;green;]You've already put the ][[;red;]card][[;green;] in your ][[;red;]inventory.]";
    			}else{
    				ret += "[[;green;]You reach under the ][[;red;]rug][[;green;] and pull out a baseball ][[;red;]card][[;green;]. Jack Crimian? Never heard of him.]";
    				inventory.card = 2;
    			}
    			break;
    		case 'chessboard':
    		case 'chess':
    		case 'piece':
    			//should there be a different response once the kings been placed?
    			if(inventory.king == 3){
    				ret += "[[;green;]You should probably leave it alone now that you've finally got all the pieces returned.]";
    			}else{
    				ret += "[[;green;]You have a bad feeling about taking a piece in the middle of a game. Better leave it alone...]";
    			}
    			break;
    		case 'book':
    		case 'books':
    			ret += "[[;green;]You really don't have any room right now to carry anything that large]";
    			break;
    		case '':
    		case null:
    			ret += "[[;white;]What would you like to take? Please use the syntax 'Take <object>']";
    			break;
    		default:
    			ret += "[[;red;]INVALID COMMAND]";
    			//console.log("31");
    	}
    }else if(room == 4){
        switch(what){
            case 'mirror':
                ret += "[[;green;]You can't find any way to pry it off the wall...not that you'd know what to do with it once you did.]";
                break;
            case 'spider':
            case 'cobweb':
                ret += "[[;green;]Ew, no.]";
                break;
            case 'dust':
                ret += "[[;green;]It's like smaller ][[;red;]lint][[;green;] but try as you might you can't grab any.]";
                break;
            case '':
            case null:
                ret += "[[;white;]What would you like to take? Please use the syntax 'Take <object>']";
                break;
            default:
                ret += "[[;red;]INVALID COMMAND]";
        }
    }else if(room == 5){
    	switch(what){
    		case 'keycard':
    			if(inventory.keycard == 2){
    				ret += "[[;green;]You've already put the ][[;red;]keycard][[;green;] in your ][[;red;]inventory.]";
    			}else{
    				ret += "[[;green;]You pick up the blank ][[;red;]keycard][[;green;] and stick it in your pocket next to your favorite piece of ][[;red;]lint][[;green;]. You wonder what it might ][[;red;]Open][[;green;]...]";
    				inventory.keycard = 2;
    			}
    			break;
    		case 'papers':
    		case 'paper':
    			ret += "[[;green;]Best to leave that trash where you found it, this isn't the time to try to clean up]";
    			break;
    		case '':
    		case null:
    			ret += "[[;white;]What would you like to take? Please use the syntax 'Take <object>']";
    			break;
    		default:
    			ret += "[[;red;]INVALID COMMAND]";
    	}
    }else if(room == 6){
    	switch(what){
    		case 'scrap':
    			if(paperFree && inventory.scrap == 1){
    				ret += "[[;green;]It has '05-20-15' written on it. You place the ][[;red;]scrap][[;green;] in your pocket.]";
    				inventory.scrap = 2;
    			}else if(paperFree && inventory.scrap == 2){
    				ret += "[[;green;]You've already put the ][[;red;]scrap][[;green;] of paper in your ][[;red;]inventory.]";
    			}else{
    				ret += "[[;red;]INVALID COMMAND]";
    			}
    			break;
    		case '':
    		case null:
    			ret += "[[;white;]What would you like to take? Please use the syntax 'Take <object>']";
    			break;
    		default:
    			ret += "[[;red;]INVALID COMMAND]";
    	}
    }else if(room == 7){
        switch(what){
            case 'mirror':
                ret += "[[;green;]You can't find any way to pry it off the wall...not that you'd know what to do with it once you did.]";
                break;
            case '':
            case null:
                ret += "[[;white;]What would you like to take? Please use the syntax 'Take <object>']";
                break;
            default:
                ret += "[[;red;]INVALID COMMAND]";
        }
    }else if(room == 8){
    	switch (what){
    		case 'podium':
    		case 'statue':
    			ret += "[[;green;]It won't budge.]";
    			break;
    		case 'podiums':
    		case 'statues':
    			ret += "[[;green;]They won't budge.]";
    			break;
    		case 'switch':
    			if(twistedStatues == 3){
    				 ret += "[[;green;]It's bolted to the ][[;red;]podium.]";
    			}else{
    				ret += "[[;red;]INVALID COMMAND]";
    				//console.log("35");
    			}
    			break;
    		case '':
    		case null:
    			ret += "[[;white;]What would you like to take? Please use the syntax 'Take <object>']";
    			break;
    		default:
    			ret += "[[;red;]INVALID COMMAND]";
    			//console.log("36");
    	}
	}else if(room == 10){
		switch (what){
			case 'book':
    		case 'books':
    			ret += "[[;green;]You really don't have any room right now to carry anything that large]";
    			break;
    		case 'die':
    		case 'dice':
    			if(inventory.die1 == 1){
    				ret += "[[;green;]You pick it up and place it in your pocket.]";
    				inventory.die1 = 2;
    			}else if(inventory.die1 == 2){
    				ret += "[[;green;]You already put it in your pocket.]";
    			}else{
    				ret += "[[;red;]INVALID COMMAND]";
    				//console.log("37");
    			}
    			break;
    		case '':
    		case null:
    			ret += "[[;white;]What would you like to take? Please use the syntax 'Take <object>']";
    			break;
    		default:
    			ret += "[[;red;]INVALID COMMAND]";
    			//console.log("38");
    	}
    }else if(room == 12){
		switch (what){
			case 'toy':
    		case 'toys':
    			ret += "[[;green;]As you reach down to pick up one a chill runs down your spine. Better leave them where they are...]";
    			break;
    		case 'die':
    		case 'dice':
    			if(inventory.die2 == 1){
    				ret += "[[;green;]You reach into the chest, pick it up, and place it in your pocket.]";
    				inventory.die2 = 2;
    			}else{
    				ret += "[[;red;]INVALID COMMAND]";
    				//console.log("39");
    			}
    			break;
    		case 'key':
    			if(inventory.key == 3){
    				ret += "[[;green;]You try to pull it out of the keyhole but now it's stuck, it won't even turn anymore.]";
    			}else{
					ret += "[[;red;]INVALID COMMAND]";
					//console.log("40");
    			}
    			break;
    		case 'chest':
    		case 'toychest':
    			ret += "[[;green;]Where would you even place that? You definitely can't haul it around with you.]";
    			break;
    		case '':
    		case null:
    			ret += "[[;white;]What would you like to take? Please use the syntax 'Take <object>']";
    			break;
    		default:
    			ret += "[[;red;]INVALID COMMAND]";
    			//console.log("41");
    	}
    }else if(room == 13){
		switch (what){
			case 'desk':
    			ret += "[[;green;]It is solid wood, there's no way you could lift it, much less carry it anywhere.]";
    			break;
            case 'mannequin':
            case 'mannequins':
                ret += "[[;green;]As you grab the mannequin it feels like it tenses up. You jump back in fear.]";
                break;
            case 'outfit':
            case 'outfits':
            case 'clothes':
            case 'clothing':
                if(takenClothes == 0){
                    ret += '[[;green;]You grab a scarf off of a mannequin and throw it around your neck. Nice.]';
                }else if(takenClothes == 1){
                    ret += '[[;green;]This hat might be half-finished but it looks better on you then that mannequin.]';
                }else if(takenClothes == 2){
                    ret += '[[;green;]Sweater vests are in this year right? You put it on.]';
                }else if(takenClothes == 3){
                    ret += '[[;green;]You drape a moth-eaten shawl across your shoulders, it pairs well with the scarf.]';
                }else{
                    ret += "[[;green;]Unfortunately there's nothing left to put on.]";
                }
                takenClothes = takenClothes + 1;
                break;
    		case '':
    		case null:
    			ret += "[[;white;]What would you like to take? Please use the syntax 'Take <object>']";
    			break;
    		default:
    			ret += "[[;red;]INVALID COMMAND]";
    			//console.log("42");
    	}
    }else if(room == 14){
    	switch (what){
			case 'desk':
    			ret += "[[;green;]That seems unlikely...]";
    			break;
    		case 'typewriter':
    			ret += "[[;green;]You go to pick it up (for some weird reason) and find that (also for some weird reason) it's bolted to the ][[;red;]desk][[;green;].]";
    			break;
    		case 'paper':
    			ret += "[[;green;]As soon as you touch the ][[;red;]paper][[;green;] you get a paper cut and pull back.]";
    			break;
    		case 'king':
    		case 'piece':
    			if(drawerOpened && inventory.king == 1){
    				ret += "[[;green;]You reach into the ][[;red;]drawer][[;green;] and pull out chess piece. After turning it over in your hand, you place it in your pocket.]";
    				inventory.king = 2;
    			}else{
    				ret += "[[;red;]INVALID COMMAND]";
    				//console.log("43");
    			}
    			break;
    		case '':
    		case null:
    			ret += "[[;white;]What would you like to take? Please use the syntax 'Take <object>']";
    			break;
    		default:
    			ret += "[[;red;]INVALID COMMAND]";
    			//console.log("44");
    	}
    }else if(room == 15){
    	switch (what){
			case 'radio':
    			ret += "[[;green;]Before you can even get close enough, the chilling tune coming out of it freezes you in your tracks.]";
    			break;
    		case 'weight':
    		case 'weights':
    			ret += "[[;green;]You try to lift one of the barbells and realize you probably need to work out more.]";
    			break;
    		case 'key':
    			if(lockerOpened && inventory.key == 1){
    				ret += "[[;green;]You reach inside and grab the toy ][[;red;]key][[;green;] and place it in your pocket.]";
    				inventory.key = 2;
    			}else{
    				ret += "[[;red;]INVALID COMMAND]";
    				//console.log("45");
    			}
    			break;
    		case '':
    		case null:
    			ret += "[[;white;]What would you like to take? Please use the syntax 'Take <object>']";
    			break;
    		default:
    			ret += "[[;red;]INVALID COMMAND]";
    			//console.log("46");
    	}
    }else{
	    ret += "[[;red;]INVALID COMMAND]";
	    //console.log("47");
    }
    
    return ret;
}
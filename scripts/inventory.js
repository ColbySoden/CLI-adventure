function doInventory(){
	var ret = "";
	ret += "[[;green;]You check your pockets and find:]";
	if(inventory.lint == 2){
		ret += "\n[[;green;]&nbsp;>  some pocket ][[;red;]lint]";
	}
	if(inventory.pencil == 2){
		ret += "\n[[;green;]&nbsp;>  a #2 ][[;red;]pencil]";
	}
	if(inventory.coins == 2){
		ret += "\n[[;green;]&nbsp;>  a few ][[;red;]coins]";
	}
	if(inventory.keycard == 2){
		ret += "\n[[;green;]&nbsp;>  a ][[;red;]keycard]";
	}
	if(inventory.card == 2){
		ret += "\n[[;green;]&nbsp;>  a Jack Crimian baseball ][[;red;]card]";
	}
	if(inventory.king == 2){
		ret += "\n[[;green;]&nbsp;>  the black ][[;red;]king][[;green;] from a chess set]";
	}
	if(inventory.scrap == 2){
		ret += "\n[[;green;]&nbsp;>  a ][[;red;]scrap][[;green;] of paper with '05-20-15' written on it]";
	}
	if(inventory.die1 == 2){
		ret += "\n[[;green;]&nbsp;>  a red ][[;red;]die]";
	}
	if(inventory.die2 == 2){
		ret += "\n[[;green;]&nbsp;>  a blue ][[;red;]die]";
	}
	if(inventory.key == 2){
		ret += "\n[[;green;]&nbsp;>  a colorful toy ][[;red;]key]";
	}

	return ret;
}
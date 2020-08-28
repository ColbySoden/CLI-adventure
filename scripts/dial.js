function doDial(num){
	var ret = "";
	if(room == 15 && lockerLocked){
		if(num == null){
			ret += "[[;white;]Which number would you like to turn the ][[;red;]lock][[;white;] to? Please use the syntax 'Dial <number>']";
		}else if(isNaN(num)){
			ret += "[[;white;]Try dialing a specific number. Ex. ][[;red;]Dial 12]";
		}else{
			var intNum = parseInt(num);
			if(intNum > 24){
				ret += "[[;green;]There are only 24 numbers on this ][[;red;]lock][[;green;].]";
			}else{
				ret += "[[;green;]You carefully turn the ][[;red;]lock][[;green;] to " + num + ".]";
				turnLock(intNum);
				if(successTurns == 3){
					ret += "\n[[;green;]You can feel the clasp in the lock give way. Try to ][[;red;]open][[;green;] the ][[;red;]locker][[;green;] now.]";
					lockerLocked = false;
				}
			}
		}
	}else if(room == 15){
		ret += "[[;green;]It won't budge now...almost as if it suddenly rusted in place.]";
	}else{
		ret += "[[;red;]INVALID COMMAND]";
		//console.log("124");
	}

	return ret;
}
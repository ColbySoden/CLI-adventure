function doGo(what){
	var ret = "";
	if(room == 1){
		switch(what){
	    	case "home":
	    		if(!done){
		   			ret += "[[;green;]You live happily ever after in blissful ignorance]";
		   		}else{
		   			ret += "[[;green;]You turn away from that house forever and walk on home...it's better this way.]";
		   		}
		   		room = -1;
		   		$('#obj').html('Created By: Colby Soden\nThank you!');
		   		break;
		   	default:
		   		ret += "[[;red;]INVALID COMMAND]";
		   		console.log("1");
	    }
	}else{
	   	ret += "[[;red;]INVALID COMMAND]";
	   	console.log("2");
	}

	return ret;
}


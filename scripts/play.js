function doPlay(note){
	var ret = "";
	if(room == 6){
		switch (note){
    		case 'A':
    		case 'a':
    			ret += "[[;green;]The organ croaks and let's out a faint ][[;red;]A.]";
    			notes.shift();
    			notes[8] = 'A';
    			break;
    		case 'B':
    		case 'b':
    			ret += "[[;green;]The organ belts a bold ][[;red;]B.]";
    			notes.shift();
    			notes[8] = 'B';
    			break;	
    		case 'C':
    		case 'c':
    			ret += "[[;green;]A cloud of dust spews as a pipe lets out a ][[;red;]C][[;green;] note.]";
    			notes.shift();
    			notes[8] = 'C';
    			break;
    		case 'D':
    		case 'd':
    			ret += "[[;green;]Low and almost with a grumble a ][[;red;]D][[;green;] note is released.]";
    			notes.shift();
    			notes[8] = 'D';
    			break;
    		case 'E':
    		case 'e':
    			ret += "[[;green;]Along with a creak from the pews, the organ lets out a short ][[;red;]E.]";
    			notes.shift();
    			notes[8] = 'E';
    			break;
    		case 'F':
    		case 'f':
    			ret += "[[;green;]You can barely hear it but one could call that sound an ][[;red;]F.]";
    			notes.shift();
    			notes[8] = 'F';
    			break;
    		case 'G':
    		case 'g':
    			ret += "[[;green;]The organ creaks as the pipes release a long ][[;red;]G.]";
    			notes.shift();
    			notes[8] = 'G';
    			break;
    		case 'A#':
    		case 'A-sharp':
    		case 'A-flat':
    		case 'B#':
    		case 'B-sharp':
    		case 'B-flat':
    		case 'C#':
    		case 'C-sharp':
    		case 'C-flat':
    		case 'D#':
    		case 'D-sharp':
    		case 'D-flat':
    		case 'E#':
    		case 'E-sharp':
    		case 'E-flat':
    		case 'F#':
    		case 'F-sharp':
    		case 'F-flat':
    		case 'G#':
    		case 'G-sharp':
    		case 'G-flat':
    		case 'a#':
    		case 'a-sharp':
    		case 'a-flat':
    		case 'b#':
    		case 'b-sharp':
    		case 'b-flat':
    		case 'c#':
    		case 'c-sharp':
    		case 'c-flat':
    		case 'd#':
    		case 'd-sharp':
    		case 'd-flat':
    		case 'e#':
    		case 'e-sharp':
    		case 'e-flat':
    		case 'f#':
    		case 'f-sharp':
    		case 'f-flat':
    		case 'g#':
    		case 'g-sharp':
    		case 'g-flat':
    			ret += "[[;white;]Alright let's not get too fancy...]";
    			break;
            case 'organ':
            case 'note':
            case 'music':
            case 'song':
                ret += '[[;white;]Which note you like to play? Try ][[;red;]Play F]';
                break;
    		case '':
    		case null:
    			ret += "[[;white;]Which note would you like to play? Please use the syntax 'Play <note>']";
    			break;
    		default:
    			ret += "[[;red;]INVALID COMMAND]";
    			//console.log("126");
	    }
	}else{
		ret += "[[;red;]INVALID COMMAND]";
		//console.log("127");
	}
	if(notes[0] == 'D' &&
		notes[1] == 'D' &&
		notes[2] == 'D' &&
		notes[3] == 'A' &&
		notes[4] == 'F' &&
		notes[5] == 'D' &&
		notes[6] == 'A' &&
		notes[7] == 'F' &&
		notes[8] == 'D'){
		ret += "\n[[;green;]A chill runs down your spine as the house itself seems to react to that tune. With the final note a single ][[;red;]scrap][[;green;] of paper flies out of the organ and floats to the floor.]";
		paperFree = true;
	}
	return ret;
}
var room = 1;

//Front of House
var readNote = false;
var destroyedNote = false;

//Entryway
var panicOuterDoorOpened = false;
var panicRoomLocked = true;
var lights = 0;

//Organ room
var paperFree = false;
var notes = ['0','1','2','3','4','5','6','7','8'];

//Statuary Corridor
var allStatues = ['Red Jaguar', 'Blue Barracuda', 'Green Monkey', 'Orange Iguana', 'Purple Parrot', 'Silver Snake'];
var currStatues = [''];
var twistedStatues = 0;
var winnningStatues = ['Green Monkey', 'Purple Parrot', 'Silver Snake'];
var switchUsed = false;

//Nursery
var chestLocked = true;
var chestOpened = false;

//Study
var drawerOpened = false;

//Gym
var lockerOpened = false;
var lockerLocked = true;
var successTurns = 0;
var success = [5, 20, 15];

//Sewing room
var takenClothes = 0;

function turnLock(num){
	if(num == success[successTurns]){
		successTurns += 1;
	}else{
		successTurns = 0;
	}
}

function twistStatue(stat){
	if(stat == winnningStatues[twistedStatues]){
		if(twistedStatues < 2){
			twistedStatues += 1;
		}else{
			//3 = success
			twistedStatues += 1;
		}
	}else{
		twistedStatues = 0;
	}
	return twistedStatues;
}

var statueCounter = 0;
function refreshStatues(){
	if(currStatues[0] == null || currStatues[0] == ''){
		statueCounter += 1;
		currStatues[0] = allStatues[0];
		currStatues[1] = allStatues[1];
		currStatues[2] = allStatues[2];
	}else if(statueCounter >= 5){
		currStatues[0] = winnningStatues[1];
		currStatues[1] = winnningStatues[2];
		currStatues[2] = winnningStatues[0];
		statueCounter = 0;
	}else{
		statueCounter += 1;
		var n1 = Math.floor(Math.random() * 6);
		var n2 = Math.floor(Math.random() * 6); 
		while(n2 == n1){
			n2 = Math.floor(Math.random() * 6);
		}
		var n3 = Math.floor(Math.random() * 6);
		while(n3 == n2 || n3 == n1){
			n3 = Math.floor(Math.random() * 6);
		}
		currStatues[0] = allStatues[n1];
		currStatues[1] = allStatues[n2];
		currStatues[2] = allStatues[n3];
	}
}

var inventory = {}; //1 = not picked up, 2 = in pocket, 3 = used
inventory['coins'] = 2;
inventory['lint'] = 2;
inventory['pencil'] = 2;
inventory['keycard'] = 1;
inventory['card'] = 1;
inventory['king'] = 1;
inventory['scrap'] = 1;
inventory['die1'] = 1;
inventory['die2'] = 1;
inventory['key'] = 1;

function resetInventory(){
	inventory['coins'] = 2;
	inventory['lint'] = 2;
	inventory['pencil'] = 2;
	inventory['keycard'] = 1;
	inventory['card'] = 1;
	inventory['king'] = 1;
	inventory['scrap'] = 1;
	inventory['die1'] = 1;
	inventory['die2'] = 1;
	inventory['key'] = 1;
	lockerOpened = false;
	lockerLocked = true;
	successTurns = 0;
	chestLocked = true;
	chestOpened = false;
	drawerOpened = false;
	readNote = false;
	destroyedNote = false;

	panicOuterDoorOpened = false;
	panicRoomLocked = true;
	lights = 0;

	paperFree = false;
	notes = ['0','1','2','3','4','5','6','7','8'];

	currStatues = [''];
	twistedStatues = 0;
	switchUsed = false;
}

var runEnd = false;
var done = false;
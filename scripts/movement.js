$(function() {
	$('#obj').html(house1);
});

function enterRoom(num){
	var scene = "";
	room = num;
	switch(num){
		case 1:
			scene = house1;
			break;
		case 2:
			scene = entryway;
			break;
		case 3:
			if(inventory.king == 3){
				scene = gameroom2;
			}else{
				scene = gameroom1;
			}
			break;
		case 4:
			scene = dustyHallway;
			break;
		case 5:
			scene = junkRoom;
			break;
		case 6:
			scene = organRoom;
			break;
		case 7:
			scene = creakyHallway;
			break;
		case 8:
			scene = statuaryCorridor;
			break;
		case 9:
			scene = elevator;
			break;
		case 10:
			scene = panicRoom;
			break;
		case 11:
			scene = upperLanding;
			break;
		case 12:
			if(chestOpened){
				scene = nursery1;
			}else{
				scene = nursery2;
			}
			break;
		case 13:
			scene = sewingRoom;
			break;
		case 14:
			if(drawerOpened){
				scene = study2;
			}else{
				scene = study1;
			}
			break;
		case 15:
			if(lockerOpened){
				scene = gymnasium2;
			}else{
				scene = gymnasium1;
			}
			break;
		case 16:
			var randDR = Math.floor(Math.random()*2);
			if(randDR == 1){
				scene = drawingRoom2;
			}else{
				scene = drawingRoom;
			}
			break;f
		case 17:
			scene = widowWalk;
			break;
		case 18:
			scene = basement1;
			break;
		default:
			console.log('ERROR entering room');
	}

	$('#obj').html(scene);
}
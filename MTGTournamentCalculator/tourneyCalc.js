function tournament() {
	this.playPacks = parseInt(document.getElementById("playPacks").value); //packs players play with, sealed=6 draft=3 etc
	this.playerCount = parseInt(document.getElementById("playerCount").value); //number of players
	this.entryCost = parseInt(document.getElementById("entryCost").value); //entry fee for each player playing
	this.packsPerBox = parseInt(document.getElementById("packsPerBox").value); //usually a constant 36 unless playing an older set or modern masters
	this.prizePittyPacks = parseInt(document.getElementById("prizePittyPacks").value); //prize everyone gets
	this.prizeFirst = parseInt(document.getElementById("prizeFirst").value); //prize first place gets ON TOP OF PITTY
	this.prizeSecond = parseInt(document.getElementById("prizeSecond").value); //prize second place gets ON TOP OF PITTY
	this.prizeThird = parseInt(document.getElementById("prizeThird").value); //prize third place gets ON TOP OF PITTY
	this.totalCost = parseInt(document.getElementById("totalCost").value); //total cost of running the tournament (including buying magic boxes)
	
	this.boxes = document.getElementById("boxes")
	this.totalProfit = document.getElementById("profit")
	this.packsLeft = document.getElementById("remainingPacks")
	this.remaining = document.getElementById("remaining")
	this.first = document.getElementById("first")
	this.second = document.getElementById("second")
	this.third = document.getElementById("third")
	this.last = document.getElementById("last")


	this.boxesRequired = function(){
		return Math.ceil((this.playerCount*this.playPacks + this.playerCount*this.prizePittyPacks+this.prizeFirst+this.prizeSecond+this.prizeThird)/this.packsPerBox)
	};
	this.remainingPacks = function(){
		return (this.boxesRequired()*this.packsPerBox)-(this.playerCount*(this.playPacks+this.prizePittyPacks)+this.prizeFirst+this.prizeSecond+this.prizeThird);
	};
	this.profit = function(){
		return this.playerCount*this.entryCost - this.totalCost;
	};
	this.recoup = function(){
		var remain = (this.boxesRequired()*this.packsPerBox)-(this.playerCount*(this.playPacks+this.prizePittyPacks)+this.prizeFirst+this.prizeSecond+this.prizeThird);
		var profit = this.playerCount*this.entryCost - this.totalCost;
		if(remain>0 && profit<0){
			return ((profit*-1)/remain);
		}
		return 0;
	};
	this.prizeValue = function(place){
		var prizes = this.prizePittyPacks+this.playPacks;
		if(place==1){
			prizes= prizes+this.prizeFirst;
		}else if(place==2){
			prizes= prizes+this.prizeSecond;
		}else if (place==3){
			prizes= prizes+this.prizeThird;
		}
		return Math.floor((this.entryCost/prizes)*100)/100;
	};
	this.update = function(){
		this.playPacks = parseInt(document.getElementById("playPacks").value); //packs players play with, sealed=6 draft=3 etc
		this.playerCount = parseInt(document.getElementById("playerCount").value); //number of players
		this.entryCost = parseInt(document.getElementById("entryCost").value); //entry fee for each player playing
		this.packsPerBox = parseInt(document.getElementById("packsPerBox").value); //usually a constant 36 unless playing an older set or modern masters
		this.prizePittyPacks = parseInt(document.getElementById("prizePittyPacks").value); //prize everyone gets
		this.prizeFirst = parseInt(document.getElementById("prizeFirst").value); //prize first place gets ON TOP OF PITTY
		this.prizeSecond = parseInt(document.getElementById("prizeSecond").value); //prize second place gets ON TOP OF PITTY
		this.prizeThird = parseInt(document.getElementById("prizeThird").value); //prize third place gets ON TOP OF PITTY
		this.totalCost = parseInt(document.getElementById("totalCost").value); //total cost of running the tournament (including buying magic boxes)
		//alert(this.prizeFirst)
		this.boxes.value = this.boxesRequired();
		this.totalProfit.value = this.profit();
		this.packsLeft.value = this.remainingPacks();
		this.remaining.value = this.recoup();
		this.first.value = this.prizeValue(1);
		this.second.value = this.prizeValue(2);
		this.third.value = this.prizeValue(3);
		this.last.value = this.prizeValue(4);
	};
};
var t = new tournament();

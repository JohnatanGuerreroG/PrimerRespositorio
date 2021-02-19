
class Media{
    constructor(title){
        this._title=title;
        this._isCheketOut=false;
        this._ratings=[];
    }

    get title(){
        return this._title;
    }
    get isCheketOut(){
        return this._isCheketOut;
    }
    get ratings(){
        return this._ratings;
    }
    set isCheketOut(newValue){
        this._isCheketOut=newValue;
    }
    toggleCheckOutStatus(){
        this._isCheketOut=!this._isCheketOut;
    }
    getAverageRating(){
        return Math.floor(this._ratings.reduce((currentSum,raiting)=>
            currentSum+raiting,0)/this.ratings.length);
    }
    addRating(newRating){
        this._ratings.push(newRating);
    }
}

class Book extends Media{
    constructor(title,author,pages){
        super(title);
        this._author=author;
        this._pages=pages;
    }

    get author(){
        return this._author;
    }

    get pages(){
        return this._pages;
    }
}

class Movie extends Media{
    constructor(title,director,runTime){
        super(title);
        this._director=director;
        this._runTime=runTime;
    }

    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }
}

const historyOfEverything =new Book('A Short History of Nearly Everything','Bill Bryson',544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheketOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());


const speed=new Movie('Speed','Jan de Bont',116);
speed.toggleCheckOutStatus();
console.log(speed.isCheketOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.addRating(2);
console.log(speed.getAverageRating());








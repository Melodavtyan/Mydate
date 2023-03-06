let m = ["January","February","March","Mpril","May","June","July","August","September","October","November","December"];

class MyDate {
    constructor() {
        this._year = 1970,
        this._month = 0,
        this._date = 1,
        this._hours = 0,
        this._minutes = 0,
        this._seconds = 0,
        this._milliseconds = 0

    }
   
    get year(){
        return this._year
    }
    set year(value){
        return this._year += value
    }
    get month(){
        return this._month
    }
    set month(value){
       this._year += Math.floor(value/12)
       this._month = value%12
    }
    get date(){
        return this._date
    }
    set date(value){
        this.month += Math.floor(value/30)
        this._date = value%30
        
    }
    get hours(){
        return this._hours
    }
    set hours(value){
        this.date += Math.floor(value/24)
        this._hours = value%24
    }
    get minutes(){
        return this._minutes
    }
    set minutes(value){
        this.hours += Math.floor(value/60)
        this._minutes = value%60
    }
    get seconds(){
        return this._seconds
    }
    set seconds(value){
        this.minutes += Math.floor(value/60)
        this._seconds = value%60
    }
    get milliseconds(){
        return this._milliseconds
    }
    set milliseconds(value){
        this.seconds += Math.floor(value/1000)
        this._milliseconds = value%1000
    }
    toString(){
        return`${this.year}/${m[this.month]}/${this.date}      ${this.hours}h:${this.minutes}m:${this.seconds}s.${this.milliseconds}ms`
    }
    

};
let mydate = new MyDate();
mydate.month= 0
console.log(mydate.toString());


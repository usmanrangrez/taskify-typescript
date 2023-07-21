import './App.css';

// /*learing Ts
let name = 'usman';
name='ali'

let age:number = 8;
age=9;

let isAsleep:boolean = true;
isAsleep=false;

let hobbies:string[] = ['play','code']
let games:readonly [number,string] = [4,'code',]
let [x,y] = games;

//for objects

type Person = {
  name : string,
  age : number,
  dob?: number//means optional
}

let person : Person = {
  name : "usman",
  age : 5
}

//or

let person2 : {name:string , age:number , dob?:number} = {
  name: "Usmann",
  age: 12
}

let Obj:number[]  = [1,23];

type X = {
  id:number,
  name:string,
  18?:boolean
}

let person3:X = {
  id:1,
  name:'lullz'
}


let ourPeople : X[] = [
  {
    id:1,
    name:"zui"
  },
  {
    id:2,
    name:'hui',
    18:true
  },
  {
    id:4,
    name:'yyyy',
    18:false
  }
]
 
let both:number | string = 15;
console.log(both);
both = "ali";

console.log(both);

// var printName: Function;

let printName : (name:string) => never;


function printName2(name:string):void{
  console.log(name);
}

printName2("usmnfan");

interface Y{
  address:string,
  phno?:number
}

interface Z extends Y{
  name:string,
  id?:number
}

let zee:Z = {
  name:"okkkk",
  id:4,
  address:'safff'
}


// */

function App() {
  return (
    <div className="App">
      {games}
      {<br/>}
      {x}
      {y}
      {<br/>}
      {person.name}
      {<br/>}
      {person["name"]}
      {<br/>}
      {person2.age}
      {<br/>}
      {person3.name}
      {<br/>}
      {zee.name}
    </div>
  );
}

export default App;

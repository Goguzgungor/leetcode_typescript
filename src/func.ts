let varFunc = (name:string, id :number ) : string=>{
    
    return ("This expamle wroted by" + name +" - id:"+ id);
}

function defFunc(name:string, id:number){
    return "This expamle wroted by " + name +" - id:"+ id;
}
let mystr = defFunc("Ali",1123)
console.log(mystr)
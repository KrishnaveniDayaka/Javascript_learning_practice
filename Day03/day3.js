
for(let student=0;student<=10;student++)
    console.log("Good morning")

console.log("End of for loop")
    
let start=0;
let end=10;
while (start<end){
    console.log("Good Evening")
    start++;
}

console.log("End of while loop")

do{
    console.log("today is my bday");
    start++
}while(start<end){
    console.log(start)
}

console.log("End of do while loop")


//array:
let girls=['sheela','krishna','radha','kavya','pallavi']
let boys=['venky','rudra','puneeth']

//add at the end
console.log("Before adding array",girls);
girls.push(boys);
console.log("new array",girls)
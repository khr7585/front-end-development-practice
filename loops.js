// for loop
for(let i=0;i<=5;i++){
    console.log(i);
}
// 0,1,2,3,4,5


//while loop
let k=0;
while(k<=5){
    console.log(k);
    k++;
}
// 0,1,2,3,4,5


//do while loop
let i=0;
do{
    console.log(i);
    i++;
}while(i<=5);


//for of loop
let arr=[10,20,30];
for(let value of arr){
    console.log(value);
}
// 10,20,30


//break and continue
for(let i=0;i<=5;i++){
    if(i===3)break;
    console.log(i);
}
// 1,2
for(let i=0;i<=5;i++){
    if(i===3)continue;
    console.log(i);
}
// 1,2,4,5
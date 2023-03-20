let str="";
for (let i=10; i<=20; i++){ str=str +`${i} ` };
console.log(str);

let str1='';
for (let i=10; i<=20; i++){  u = i *i ;
    str1 += u + " ";
};
console.log(str1)
let str2='';
for (let i=1; i<=10; i++){ u=i*7 ;
    str2 += u +" "  ;}
    console.log(str2);

let sum=0;
let i=0;
while (i<=15) {
    sum+=i;
    i++
}
console.log((sum));
// // //
let mult=1;
for (let i=15; i<=35; i++){  mult *= i} ;
console.log(mult);

i=1;
sum=0;
while (i<=500){
    sum+=i;
    i++
}
let mean = sum/(i-1);
console.log(mean);

sum = 0;
for (let i=30; i<=80; i++){
    if (i %2 == 0){
        sum +=i;
    }
    else continue;
}
console.log(sum);
str='';
for ( let i=100; i<=200; i++){
    if (i %3 == 0){
        str+= `${i} `;
    }
    else continue
}
console.log(str);
let x=896;
str='';
for (let i=0; i<=x ;i++){
    if(x %i ==0){
        str+= `${i} `}
    else continue
}
console.log(str);

let z=0;
for(let i=0; i<=x; i++ ){
    if( x %i == 0 && i%2 ==0){
        z++;
       }
    else continue
}
console.log(z);

let a=[];
let b=[];
for (let i=1; i<=10; i++){
    b[i-1] = i};
for (let j=1; j<=10;j++ )
 {
    a = b.map((b) => b *j);
    console.log(`умножение на ${j} :` + String(a));
}

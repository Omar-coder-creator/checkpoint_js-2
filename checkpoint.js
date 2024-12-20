function reverse (ch){
    rev = "";
    for(i of ch){
        rev = i + rev;
    }
    return rev;
}

function count_characters(ch){
    nb = 0 ;
    for(i in ch){
        nb++;
    }
    return nb;
}

function Capitalize_Words(ch){
    ch+=" ";
    chx="";
    p = ch.indexOf(" ");
    while(ch != ""){
        chx += ch[0].toUpperCase() + ch.slice(1,p)+ " ";
        ch = ch.slice(p+1,ch.length);
        p = ch.indexOf(" ");
    }
    return chx ;
}

function min_max(arr){
    min = arr[0];
    max = arr[0];
    for (i of arr) {
        if (i > max) {
            max = i ;
        }
        if (i < min) {
            min = i ;
        }
    }
    return [min,max];
}

function addition(arr){
    sum = 0 ;
    for(i of arr){
        sum+=i;
    }
    return sum;
}

function filter(arr){
    newarr=[];
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        newarr.push(arr[i]);
    }
        
    }
    return newarr;
}

function factorial(n){
    f = 1 ;
    for (let i = 2; i <= n; i++) {
        f=f*i;
    }
    return f;
}

function isprime(n){
    i = 2;
    test = true
    while(test  && i < n){
        test = n % i != 0 ;
        i++;
    }
    return test;
}

function fibonacci(n){
    u0=0;
    u1=1;
    for (let i = 2; i <= n; i++) {
        u=u1+u0;
        u0=u1;
        u1=u;
    }
    return u;
}
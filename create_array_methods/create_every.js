let numbers=[4,12,0,55,78,11,20,101,5,66,32],checkedNumbers=numbers.every(e=>e<100),checkedNumbers2=(console.log(numbers),console.log(checkedNumbers),Array.prototype.myEvery=function(r){for(let e=0;e<this.length;e++)if(!r(this[e],e,this))return!1;return!0},numbers.some(e=>e%2!=0));console.log(numbers),console.log(checkedNumbers2);
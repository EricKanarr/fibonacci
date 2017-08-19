function threeandfive () {
  let sumcount = 0;
  for (let i = 0; i < 1000; i++){
    if (i % 3 === 0){
      sumcount += i;
    }
    if (i % 5 === 0){
      sumcount += i;
    }
  }
  return sumcount;
}
console.log(threeandfive())

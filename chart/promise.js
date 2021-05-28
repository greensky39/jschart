function greet() {
  return new Promise(function(resolve){
      setTimeout(function() {
          resolve('hello');
      }, 1000);
  });
}

(async function() {
  var result = await greet(); //resolved 될 때까지 대기
  console.log(result);
})();
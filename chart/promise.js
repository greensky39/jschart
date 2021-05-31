// function greet() {
//   return new Promise(function(resolve){
//       setTimeout(function() {
//           resolve('hello');
//       }, 1000);
//   });
// }

// (async function() {
//   let result = await greet(); 
//   console.log(result);
// })();



async function showData() {

  // JSON 읽기
  const response = await fetch('http://127.0.0.1:5500/promiseTest.html');
  const data = await response;

  // 1초 대기
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  console.log(data);
  return data;
}

showData();

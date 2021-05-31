async function showData() {

  // JSON 읽기
  const response = await fetch('http://localhost:8000/data?size=10&page=10');
  const data = await response.json();

  // 1초 대기
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  console.log(data);
  return data;
}

showData();
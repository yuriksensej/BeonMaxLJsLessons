let inputRub = document.getElementById('rub'),
  inputUsd = document.getElementById('usd');
let count = 1;
inputRub.addEventListener('input', () => {
  //let myPromise = new Promise(function (myResolve, myReject) {
  //
  let request = new XMLHttpRequest();
  request.addEventListener('readystatechange', function () {
    // setTimeout(f1, 1000);
    // function f1() {
    if (request.readyState === 4 && request.status === 200) {
      let data = JSON.parse(request.response);
      inputUsd.value = inputRub.value / data.usd;
      console.log(
        inputUsd.value + ' ' + data.usd + ' ' + count + ' ' + request.readyState
      );
      count++;
    } else {
      inputUsd.value = 'Что-то пошло не так!';
    }
    // }
  });
  request.open('GET', 'js/current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();
});

function form() {
  console.log('form');

  let form = document.querySelectorAll('form.form');

  form.forEach((item) => {
    let message = {
      loading: 'Загрузка...',
      succsess: 'Спасибо! Скоро мы с вами свяжемся!',
      failure: 'Что-то пошло не так...'
    };

    let input = item.querySelectorAll('input'),
        statusMessage = document.createElement('div');
    statusMessage.classList.add('status');


    item.addEventListener('submit', function(e) {
      e.preventDefault();
      this.appendChild(statusMessage);

      let formData = new FormData(this),
          obj = {};

      formData.forEach(function(value, key){
        obj[key] = value;
      });

      let json = JSON.stringify(obj);

      function postData(data) {
        return new Promise(function(resolve, reject) {
          let request = new XMLHttpRequest();

          request.open('POST', 'server.php');
          request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

          request.onreadystatechange = function() {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4 && request.status == 200) {
              resolve();
            } else {
              reject();
            }
          };

          request.send(data);
        }); // Promise end
      } // postData end

      let clearInput = () => {
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }; // clearInput end

      let clearMessage = () => {
        setTimeout(function() {
          statusMessage.innerHTML = '';
        }, 3000);
      }; //clearMessage end

      postData(json)
        .then(() => statusMessage.innerHTML = message.loading)
        .then(() => statusMessage.innerHTML = message.succsess)
        .catch(() => statusMessage.innerHTML = message.failure)
        .then(clearInput)
        .then(clearMessage);
    }); // submin end
  });
}

module.exports = form;
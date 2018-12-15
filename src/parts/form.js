function form() {
  let form = document.querySelectorAll('form.form');

  form.forEach(function(item) {
    let message = {
      loading: 'Loading...',
      succsess: 'Thank you! We will contact you soon!',
      failure: 'Something goes wrong...'
    };

    let input = item.querySelectorAll('input'),
        statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    input.forEach(function(item) {
      let name = item.getAttribute('name');
      if (name == 'phone') {
        mask(item);
      }

      if (name == 'email') {
        validate(item, /^[a-zA-Z0-9 ,.\-:"()]*?$/);
      }

      if (name == 'datetime') {
        validate(item, /^[0-9 .\/]*?$/);
      }
    });


    item.addEventListener('submit', function(e) {
      e.preventDefault();
      this.appendChild(statusMessage);
      statusMessage.classList.remove('hidden');

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
        setTimeout(() => statusMessage.classList.add('hidden'), 3000);
        setTimeout(() => statusMessage.parentNode.removeChild(statusMessage), 4000);
      }; //clearMessage end

      postData(json)
        .then(() => {
          statusMessage.style.backgroundColor = '#BEAB2A';
          statusMessage.innerHTML = message.loading;
        })
        .then(() => {
          statusMessage.style.backgroundColor = '#166D29';
          statusMessage.innerHTML = message.succsess;
        })
        .catch(() => {
          statusMessage.style.backgroundColor = 'red';
          statusMessage.innerHTML = message.failure;
        })
        .then(clearInput)
        .then(clearMessage);
    }); // submin end
  });

  // validate
  function validate(input, regex) {
    let value = input.value;
    input.addEventListener('input', function(e){
      let newValue = e.target.value;
      if (!newValue.match(regex)) {
        input.value = value;
        return;
      }
      value = newValue;
    });
  } // end validate

  // mask
  function mask(input) {
    function setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
      else if (elem.createTextRange) {
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
      }
    } // end setCursorPosition

    function change(event) {
      let matrix = "+1 (___) ___-____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, "");
      if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
      });

      if (event.type == "blur") {
        if (this.value.length == 2) this.value = "";
      } else setCursorPosition(this.value.length, this);
    } // end Change

    input.addEventListener("input", change, false);
    input.addEventListener("focus", change, false);
    input.addEventListener("blur", change, false);
  } // end mask
}

module.exports = form;
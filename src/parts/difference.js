function showDifference() {

  let differenceCard = document.querySelectorAll('.difference__info-cards .officer');

  differenceCard.forEach(function(item) {
    let plusWrap = item.querySelector('.officer__card-item--show'),
        plus = plusWrap.querySelector('.plus'),
        step = item.querySelectorAll('.officer__card-item'),
        stepIndex = 0;

    step.forEach((item) => item.style.display = 'none');
    plusWrap.style.display = 'flex';

    plus.addEventListener('click', (e) => {
      e.preventDefault();

      for (let i = 0; i < step.length; i++) {
        if (i == stepIndex) {
          step[i].style.display = 'flex';
          step[i].style.height = '83px';
          step[i].classList.add('show');
        }
      }

      stepIndex++;
      if (stepIndex + 1 == step.length) {
        plusWrap.classList.add('fadeOut');
        setTimeout(() => plusWrap.style.display = 'none', 600);
      }


    });
  });

}

module.exports = showDifference;
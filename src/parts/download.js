function downloadBtn() {
  let downloadBtn = document.querySelectorAll('.download');

  downloadBtn.forEach((item) => {

    let link = document.createElement('a');
    link.setAttribute('href','assets/WP-2014-2-Five-Steps-to-Planning-Success.pdf');
    link.setAttribute('download', 'fileName');

    item.addEventListener('click', (e) => {
      e.preventDefault();
      link.click();
    })
  })
}

module.exports = downloadBtn;
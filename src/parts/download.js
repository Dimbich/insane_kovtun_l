function downloadBtn() {
  HTMLElement.prototype.click = function() {
    let evt = this.ownerDocument.createEvent('MouseEvents');
   evt.initMouseEvent('click', true, true, this.ownerDocument.defaultView, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
   this.dispatchEvent(evt);
  } 

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
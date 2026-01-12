const body = document.querySelector('body');
const imgContainer = document.createElement('div');

function displayImg(imgUrl, elt) {
  body.appendChild(imgContainer);

  imgContainer.innerHTML = `<img src="${imgUrl}">`;
  imgContainer.className = 'displayMe';

  imgContainer.style.top = (elt.offsetTop + 30) + 'px';

  const difference =
    document.documentElement.clientWidth - elt.offsetLeft;

  if (difference < 260) {
    imgContainer.style.right = '20px';
    imgContainer.style.left = 'auto';
  } else {
    imgContainer.style.left = elt.offsetLeft + 'px';
  }

  imgContainer.style.animation = 'fadeIn .8s forwards';
}

function removeImg() {
  imgContainer.style.animation = 'fadeOut .8s forwards';

  setTimeout(() => {
    if (body.contains(imgContainer)) {
      body.removeChild(imgContainer);
    }
  }, 800);
}
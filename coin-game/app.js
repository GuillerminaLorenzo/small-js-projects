function isTouching(a,b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}

const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');

window.addEventListener('keyup', function(e) {
    if(e.key === 'ArrowDown') {
        moveVertical(avatar, 50);
    } else if (e.key === 'ArrowUp') {
        moveVertical(avatar, -50);
    } else if (e.key === 'ArrowLeft') {
        moveHorizontal(avatar, -50);
        avatar.style.transform =  'scale(-1,1)';
    } else if (e.key === 'ArrowRight') {
        moveHorizontal(avatar, 50);
        avatar.style.transform =  'scale(1,1)';
    }
    if (isTouching(avatar, coin)) moveCoin();
});

const moveVertical = (element, amount) => {
    const currTop = extractPos(avatar.style.top);
    element.style.top = `${currTop + amount}px`;
}

const moveHorizontal = (element, amount) => {
    const currLeft = extractPos(avatar.style.left);
    element.style.left = `${currLeft + amount}px`;
}

const extractPos = (pos) => {
    if (!pos) return 100;
    return parseInt(pos.slice(0,-2));
};

const moveCoin = () => {
    const width = Math.floor(Math.random() * window.innerWidth);
    const height = Math.floor(Math.random() * window.innerHeight);

    coin.style.top = `${width}px`;
    coin.style.left = `${height}px`;
};

moveCoin();
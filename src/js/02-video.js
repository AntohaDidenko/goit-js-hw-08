const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const NAME_LOCAL_STORAGE = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(item) {
  localStorage.setItem(NAME_LOCAL_STORAGE, item.seconds);
}

const getSeconds = localStorage.getItem(NAME_LOCAL_STORAGE);

if (getSeconds) {
  player.setCurrentTime(getSeconds);
}

import '../css/estilo.css';
import imagen from '../imgs/octogib.jpg';
import video from '../videos/video.mp4';

const element = document.createElement('p');
element.textContent = 'Agregando información desde el modulo ´index.js´ ';
document.body.appendChild(element);
const img = document.createElement('img');
img.setAttribute('src',imagen);
img.setAttribute('height','300');
document.body.appendChild(img);

const videoelem = document.createElement('video');
videoelem.setAttribute('src',video);
videoelem.setAttribute('controls',true);
videoelem.setAttribute('width','300');

document.body.appendChild(videoelem);

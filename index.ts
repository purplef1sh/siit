// Import stylesheets
import './style.css';

const imageNamesList = [
  'Around-The-World-Plank.jpg',
  'Basic-Push-Up.jpg',
  'Basic-Squat.jpg',
  'Bicycle-Crunch.jpg',
  'Body-Saw.jpg'
]

function getImageUrl(imageName: string): string {
  return `https://github.com/purplef1sh/siit/blob/master/images/${imageName}?raw=true`;
}

function getNameFromImageName(imageName: string): string {
  return imageName.substring(0, imageName.lastIndexOf('.')).split('-').join(' ');
}

const imageName = imageNamesList[0];

const imageEl: HTMLImageElement = document.querySelector('img');
imageEl.src = getImageUrl(imageName);

const titleEl: HTMLElement = document.querySelector('.title');
titleEl.innerText = getNameFromImageName(imageName);
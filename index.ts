// Import stylesheets
import './style.css';

const imageEl: HTMLImageElement = document.querySelector('img');
const titleEl: HTMLElement = document.querySelector('.title');

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


// TODO: Create function to display(imageName)
const imageName = imageNamesList[0];


imageEl.src = getImageUrl(imageName);

titleEl.innerText = getNameFromImageName(imageName);
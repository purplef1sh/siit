// Import stylesheets
import './style.css';

const imageEl: HTMLImageElement = document.querySelector('img');
const titleEl: HTMLElement = document.querySelector('.title');

const strengthList = [
  'Narrow-Squat.jpg',
  'Basic-Squat.jpg',
  'Wide-Squat.jpg',
  'Lunge.jpg',
  'Lunge.jpg',
  'Renegade-Row.jpg',
  'Renegade-Row.jpg',
  'Basic-Push-Up.jpg',
  'Bicycle-Crunch.jpg',
  'Table-Top-Heel-Tap.jpg',
  'Leg-Lifts-Hold.png',
  'Wall-Plank-Pelvic-Tilt.jpeg',
  'Pelvic-Bridge.jpg',
  'High-Plank.jpeg',
  'Plankle-Touch.png',
  'Wide-Plank.jpeg',
  'Regular-Plank.jpeg',
  'Around-The-World-Plank.jpg',
  'Around-The-World-Plank.jpg',
  'Body-Saw.jpg', 
  'Wall-Sitjpg'
];
const stretchList = [
  'Doorway-Arm-Stretch.jpg',
  'Doorway-Arm-Stretch.jpg',
  'Downward-Dog.jpg',
  'Side-Split.jpeg',
  'Side-Split.jpeg',
  'Hip-Flexor.jpg',
  'Hip-Flexor.jpg',
  'Seated-Spinal-Twist.jpg',
  'Seated-Spinal-Twist.jpg',
  'Standing-Side-Reach.jpg',
  'Standing-Side-Reach.jpg',
  'Pigeon-Pose.jpeg',
  'Neck-Rolls.jpg',
  'Downward-Dog-Hand-Up.jpg',
  'Downward-Dog-Hand-Up.jpg',

]


function getImageUrl(imageName: string): string {
  return `https://github.com/purplef1sh/siit/blob/master/images/${imageName}?raw=true`;
}

function getNameFromImageName(imageName: string): string {
  return imageName.substring(0, imageName.lastIndexOf('.')).split('-').join(' ');
}


// TODO: Create function to display(imageName)
const imageName = stretchList[5];



imageEl.src = getImageUrl(imageName);

titleEl.innerText = getNameFromImageName(imageName);
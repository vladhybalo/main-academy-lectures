const constraints = { audio: false, video: { width: 1000, height: 500 } };

navigator.mediaDevices.getUserMedia(constraints)
  .then(function(mediaStream) {
    const video = document.querySelector('video');
    video.srcObject = mediaStream;
    video.onloadedmetadata = function(e) {
    video.play();
    };
  })
  .catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.


const canvas = document.querySelector('canvas');
const img = document.querySelector('img')

const getPhoto = () => {
  const video = document.querySelector('video');
  
  // drow to canvas
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

  // drow into img tag
  let image_data_url = canvas.toDataURL('image/jpeg');
  img.src = image_data_url;
}

document.querySelector('button').addEventListener('click', getPhoto);
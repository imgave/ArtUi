const url =
  "https://api.harvardartmuseums.org/image?apikey=cf023b6d-1c02-413d-894a-ca20dd00cc78";

let picFrame = document.getElementById("picFrame");
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");
let picArray = [];
let picPos = 0;

fetch(url)
  .then((res) => res.json())
  .then((result) => {
    picArray = result.records;
    picFrame.src = picArray[0].baseimageurl;

    console.log(picArray);
  });

prevButton.addEventListener("click", function () {
  picPos--;
  if (picPos === -1) picPos = picArray.length - 1;

  picFrame.src = picArray[picPos].baseimageurl;
});

nextButton.addEventListener("click", function () {
  picPos++;
  if (picPos === picArray.length) picPos = 0;

  picFrame.src = picArray[picPos].baseimageurl;
});

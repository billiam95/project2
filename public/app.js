$(() => {
console.log(`jquery loaded`)
$(`img.carousel`).eq(0).css(`display`, `block`)

let imageNum = 0;
let imageIndex = $(`div.carousel-container`).children().length-1;

$(`.next`).on(`click`, () => {
  $(`.carousel`).eq(imageNum).fadeOut(300)
  $(`.carousel`).delay(250)
  if (imageNum >= imageIndex)
    {
    imageNum = 0;
    }
  else
    {
    imageNum++;
    }
$(`.carousel`).eq(imageNum).fadeIn(300)
});

$(`.previous`).on(`click`, () => {
  $(`.carousel`).eq(imageNum).fadeOut(300)
  $(`.carousel`).delay(250)
  if (imageNum <= 0)
    {
    imageNum = imageIndex;
    }
  else
    {
    imageNum--;
    }
  $(`.carousel`).eq(imageNum).fadeIn(500)
})
})

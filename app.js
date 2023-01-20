let randomNumber = Math.ceil(Math.random() * 100);
const input = document.querySelector(".input");
const buton = document.querySelector(".input-con button");
let live = 6;

console.log(buton);

//Değişkenler
// ceil() sayıyı yukarı yuvarlar

// 1-100 arasında sayı tut
console.log(randomNumber);

//addEventListener herhangi bir elementi takip eder, dinler. tıklandığında (click lendiğinde )

buton.addEventListener("click", () => {
  console.log(+input.value); //+ koyarak stringi number a çeviriyoruz.
  live--;
  console.log("can", live);

  //Kazanma durumu

  if (+input.value === randomNumber) {
    console.log("Bildiniz");
  }

  //tahmin edilen sayı küçükse

  if (+input.value < randomNumber) {
    console.log("Arttır");
  }

  //Tahmin edilen sayı büyükse

  if (+input.value > randomNumber) {
    console.log("Azalt");
  }

  //can bitince
  if (live == 0) {
    console.log("Kaybettiniz can bitti");
  }
});

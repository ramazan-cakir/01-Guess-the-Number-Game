let randomNumber = Math.ceil(Math.random() * 100);
const input = document.querySelector(".input");
const buton = document.querySelector(".input-con button");
const result = document.querySelector(".result");
const imgCon = document.querySelector(".img-con");
let live = 3;

// console.log((result.innerText = "Congragulations")); // Result un içinde kazanma yada kaybetme durumunda innerText ile yeni yazılar yazabiliriz. Ama önce const ve querySelector ile ulaşmamız lazım
// console.log(imgCon);
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
    result.innerText = "Congragulations";
    imgCon.style.backgroundImage = "url('./assets/Congragulations.gif')";
  }
  //tahmin edilen sayı küçükse

  if (+input.value < randomNumber) {
    console.log("Arttır");
    result.innerText = "Please enter higher number ⬆️";
  }
  //Tahmin edilen sayı büyükse

  if (+input.value > randomNumber) {
    console.log("Azalt");
    result.innerText = "Please enter lower number ⬇️";
  }

  //can bitince
  if (live == 0) {
    console.log("Kaybettiniz can bitti");
    result.innerText = "Try Again!! ";
    imgCon.style.backgroundImage = "url('./assets/try-again.gif')";
  }
});



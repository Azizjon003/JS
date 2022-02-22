let umid1 = prompt(
  "boyingnizni kiriting  bolmasa dastur ishlamaydi (misol uchun 1.8)"
);
let umid2 = prompt("Keyingi navbatda vazningizni kiriting bu biz uchun zarur");
let aziz1 = 1.8;
let aziz2 = 65;
let umid3 = umid2 / (umid1 * umid1);
let aziz3 = aziz2 / aziz1 ** 2;

if (aziz3 > umid3) {
  alert("Men semizroq ekanman (hamma qiymatlar konsolda )");
  console.log(
    umid3,
    "bu szning natijangiz",
    "  ",
    aziz3,
    "bu mening natijangiz"
  );
} else {
  alert("siz semizroq ekansz   (hamma qiymatlar konsolda )");
  console.log(
    umid3,
    "bu szning natijangiz",
    "  ",
    aziz3,
    "bu mening natijangiz"
  );
}

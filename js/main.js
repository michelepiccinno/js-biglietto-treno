let km = prompt('Quanti km devi percorrere?');
let age = prompt('Quanti anni hai?');
let fullPrice = (km * 0.21).toFixed(2);
let netPrice = 0;

document.getElementById("my-km").innerHTML = km;
document.getElementById("my-age").innerHTML = age;

if (age < 18) {
  netPrice = (fullPrice * 0.8).toFixed(2);
  document.getElementById("my-price").innerHTML = 'Hai un età inferiore ad anni 18 pertanto usufruirai di uno sconto del 20%. Il prezzo del tuo biglietto è di: <span class="text-decoration-line-through opacity-50"> € ' + fullPrice + '</span> € ' + netPrice;
} else if (age > 65) {
  netPrice = (fullPrice * 0.6).toFixed(2);
  document.getElementById("my-price").innerHTML = 'Hai un età maggiore di anni 65 pertanto usufruirai di uno sconto del 40%. Il prezzo del tuo biglietto è di: <span class="text-decoration-line-through opacity-50"> € ' + fullPrice + '</span> € ' + netPrice;
} else {
  netPrice = fullPrice;
document.getElementById("my-price").innerHTML = 'Il prezzo intero del biglietto è di € ' + netPrice;
}

//console.log('full price ' + fullPrice);
//console.log('netPrice ' + netPrice);
//console.log('km ' + km);
//console.log('age ' + age);




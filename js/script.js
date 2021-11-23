/*Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100.
MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    MILESTONE 2
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
    MILESTONE 3
Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.*/

// Seleziono il container
const container = document.querySelector('.container');

// Creo griglia numerata
for (let i = 1; i <= 100; i++)  {
    const box = document.createElement('div');
    box.classList.add('square');
    box.append(i);
    container.append(box);
    console.log(i);

    // Stabilisco condizioni
    if (i % 15==0) {
        box.classList.add('red');
        box.innerHTML = 'fizzbuzz';
    } else if (i % 3 ==0) {
        box.classList.add('green');
        box.innerHTML = 'fizz';
    } else if (i % 5 ==0) {
        box.classList.add('yellow');
        box.innerHTML = 'buzz';
    }
}

const container = document.querySelector('.container');

for (let i = 1; i <= 100; i++)  {
    const box = document.createElement('div');
    box.classList.add('square');
    box.append(i);
    container.append(box);
    console.log(i);

    if (i % 3 ==0) {
        box.classList.add('green');
        box.innerHTML = 'fizz';
    } else if (i % 5 ==0) {
        box.classList.add('yellow');
        box.innerHTML = 'buzz';
    }
}

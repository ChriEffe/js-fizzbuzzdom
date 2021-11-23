const container = document.querySelector('.container');

for (let i = 1; i <= 100; i++)  {
    const box = document.createElement('div');
    box.classList.add('square');
    box.append(i);
    container.append(box);
    console.log(i);
}

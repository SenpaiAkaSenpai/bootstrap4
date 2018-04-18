/*jshint esversion: 6 */
const canvasElem = document.getElementById('canvas');
const ctx = canvasElem.getContext('2d');

// x, y, width, height
ctx.fillRect(25, 25, 100, 100);
ctx.fillRect(175, 25, 100, 100);


// czyszczenie
ctx.clearRect(50, 50, 75, 75)

ctx.clearRect(175, 50, 75, 75)


// obramowanie
for (var i = 0; i < 10; i++)  {
ctx.strokeRect(75 + i * 2, 75 + i * 2, 50 - i * 2, 50 - i * 2);
}

for (var i = 0; i < 10; i++)  {
ctx.strokeRect(175 + i * 2, 75 + i * 2, 50 - i * 2, 50 - i * 2);
}

// określenie czcionki
ctx.font = 'italic bold 18px arial';
ctx.textBaseline = 'middle';
// top, bottom
ctx.fillText('Twoja mama robi słabe spaghetti', 5, 145)

ctx.font = 'italic bold 9px arial';
ctx.textBaseline = 'middle';
ctx.fillStyle = 'darkred';

ctx.fillText('I nawet cię nie kocha i tylko tak mówi, żeby ci nie było przykro', 7, 275)

// rysowanie kołaf
ctx.fillStyle = 'green';
ctx.beginPath()

ctx.arc(150, 175, 10, 180, Math.PI);
ctx.stroke();


ctx.arc(155, 180, 2, 0, 2*Math.PI);
ctx.stroke();

ctx.arc(145, 180, 2, 0, 2*Math.PI);
ctx.stroke();



ctx.arc(150, 150, 100, 0, 0.9*Math.PI);
ctx.stroke();

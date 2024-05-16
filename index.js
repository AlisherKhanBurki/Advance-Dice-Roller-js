
function rollDice(){
    const dice = document.getElementById('dice_input').value;
    const dice_Result = document.getElementById('dice-Result');
    const dice_images = document.getElementById('dice-images');

    const values = [];
    const images = [];

    for (let i = 0; i < dice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values[i] = value;
        images.push(`<img src="dice_img/${value}.png" alt="Dice ${value}">`)
        
    }

    dice_Result.textContent = `Dice: ${values.join(', ')}`;
    dice_images.innerHTML = images.join(' ');




}
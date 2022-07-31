let ball = document.getElementById('float-circle');

// Write your code below
function up(element) {
    element.style.bottom = '250px';
    console.log('clicked up');
};

function down(element) {
    element.style.bottom = '50px';
    console.log('clicked down');
};

document.onkeyup = down(ball);
document.onkeydown = up(ball);
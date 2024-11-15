const lift = document.querySelector('.lift');
const buttons = document.querySelectorAll('.tugma button');
const raqam = document.getElementById('raqam');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const floorHeight = 100;
    const targetFloor = 7 - index;
    const position = (targetFloor - 1) * floorHeight;

    lift.style.transform = `translateY(-${position}px)`;
    lift.style.transition = 'transform 3s linear';

    setTimeout(() => {
      raqam.textContent = targetFloor;
    }, 3000);
  });
});

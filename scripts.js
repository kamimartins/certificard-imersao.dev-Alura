const b = document.querySelectorAll('button');
const src = document.querySelector('.tela');

b.forEach(function(button) {
  button.addEventListener('click', calculate);
});

function calculate(event){
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '='){
    if (src.value !== ''){
      src.value = eval(src.value);
    }
  }else if (clickedButtonValue === 'C'){
    src.value = '';
  }else{

    src.value += clickedButtonValue;
  }
}

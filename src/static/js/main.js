//open popup
function openPopup(popup){
  document.getElementById(popup).style.display = 'block';
}

//close popup
function closePopup(popup){
  document.getElementById(popup).style.display = 'none';
}

//focus in next code cell
function focusInNextCodeCell($this){
  if($this.value != false){
    $this.nextElementSibling.focus();
  }
}

//timer
function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}
let time = 60 * 2,
    display = document.querySelector('#js-timer');
if(display){
  startTimer(time, display);
}

//change color
function changeColor(){
  let bodyTag = document.querySelector('body');
  if(bodyTag.classList.contains('light')){
    bodyTag.classList.remove('light');
    bodyTag.classList.add('dark');
  } else{
    bodyTag.classList.add('light');
    bodyTag.classList.remove('dark');
  }
}

//showClearBtn
function showClearBtn($this){
  if($this.value.trim() != false){
    $this.classList.add('value');
  } else{
    $this.classList.remove('value');
  }
}

//clearSearchInput
function clearSearchInput(){
  document.querySelector('.js-search-input').value = '';
  document.querySelector('.js-search-input').classList.remove('value');
}

//alertClose
function alertClose($this){
  $this.parentElement.remove();
}

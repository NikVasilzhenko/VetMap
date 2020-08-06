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

//showAllItems
function showAllItems(Sthis){
  Sthis.parentElement.classList.add('open');
}
function hideSomeItems(Sthis){
  Sthis.parentElement.classList.remove('open');
}

//openPopup
function openPopup(popupID){
  let popup = document.getElementById(popupID);  
  popup.style.display = 'block';
  popup.classList.remove('close');  
  popup.classList.add('open');  
}

//popupOverlayClose
function popupOverlayClose($this){
  let popup = $this.parentElement;
  popup.classList.remove('open');  
  popup.classList.add('close'); 
  setTimeout( (function(){popup.style.display = 'none';}), 250);
}

//popupBtnClose
function popupBtnClose($this){
  let popup = $this.parentElement.parentElement.parentElement;
  popup.classList.remove('open');  
  popup.classList.add('close'); 
  setTimeout( (function(){popup.style.display = 'none';}), 250);
}

//fav
function fav($this){
  if($this.classList.contains('active')){
    $this.classList.remove('active');
    $this.lastElementChild.innerHTML = 'В избранное';
  } else{
    $this.classList.add('active');
    $this.lastElementChild.innerHTML = 'В избранном';
  }
}

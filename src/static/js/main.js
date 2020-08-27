//open popup
function openPopup(popup){
  document.getElementById(popup).style.display = 'block';
}

//close popup
function closePopup(popup){  
  let thisPopup = document.getElementById(popup);
  thisPopup.classList.remove('open');  
  thisPopup.classList.add('close'); 
  setTimeout( (function(){thisPopup.style.display = 'none';}), 250);
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

//popupBtnBack
function popupBtnBack($this){
  let popup = $this.parentElement.parentElement.parentElement.parentElement;
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

//openHideComplaintForm
function openHideComplaintForm(hideId){
  document.getElementById(hideId).style.display = 'block';
}

//close complaint
document.getElementById('js-complaint').addEventListener('submit', function(e){  
  e.preventDefault();
  closePopup('js-complaint-popup');
  openPopup('js-complaint-confirm-popup');
});

//blocChange
function blocChange($this){
  if( $this.classList.contains('on') ){
    $this.classList.remove('on');
    $this.classList.add('off');
    $this.firstElementChild.firstElementChild.textContent = "voice_over_off";
    $this.lastElementChild.textContent = "Разблокировать";
    openPopup('js-block-on-popup');
  } else{
    $this.classList.remove('off');
    $this.classList.add('on');
    $this.firstElementChild.firstElementChild.textContent = "record_voice_over";
    $this.lastElementChild.textContent = "Заблокировать";
    openPopup('js-block-off-popup');
  }
}

//review open/close
function reviewToggle($this){
  if($this.previousElementSibling.classList.contains('open')){
    $this.previousElementSibling.classList.remove('open');
    $this.firstElementChild.innerHTML = 'Читать весь';
  } else{
    $this.previousElementSibling.classList.add('open');
    $this.firstElementChild.innerHTML = 'Свернуть';
  }
}

//rait
function rait($this){
  let allStars = $this.parentElement.parentElement.querySelectorAll('input');
  let numb = $this.value;
  
  for(i = 0; i < allStars.length; i++){
    //console.log(allStars[i].nextElementSibling);
    allStars[i].nextElementSibling.innerHTML = 'star_border';
    allStars[i].nextElementSibling.classList.remove('active');
  }
  for(j = 0; j < numb; j++){
    allStars[j].nextElementSibling.innerHTML = 'star';
    allStars[j].nextElementSibling.classList.add('active');
  }
}

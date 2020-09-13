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

//input type number
function catalogItemCounter(field){
  let allItems = document.querySelectorAll(field);
  for(i = 0; i < allItems.length; i++){
    let inputNum = allItems[i].querySelector('.js-number-input'),
        inputMin = inputNum.getAttribute('min');
    allItems[i].querySelector('.js-number-minus').addEventListener('click', function(){
      if(inputNum.value <= inputMin){
        inputNum.value = inputMin;
      } else{
        inputNum.value = Number(inputNum.value) - 1;
      }
    });
    allItems[i].querySelector('.js-number-plus').addEventListener('click', function(){
      inputNum.value = Number(inputNum.value) + 1;
    });
  }
}
    
catalogItemCounter('.js-number');

//grid/row
function isGrid($this){
  document.getElementById('js-item-list').classList.add('grid');
  $this.classList.add('active');
  $this.nextElementSibling.classList.remove('active');
}
function isRow($this){
  document.getElementById('js-item-list').classList.remove('grid');
  $this.classList.add('active');
  $this.previousElementSibling.classList.remove('active');
}

//slides functions
const animationTime = 350;
function slideDown($this, animationTime) {
  let overlay = $this;
    
  if(getComputedStyle(overlay, true).display === 'none'){
    if( !(overlay.classList.contains('inAnimate')) ){
      overlay.classList.add('inAnimate');
        
      let paddingTopSize = parseInt(getComputedStyle(overlay, true).paddingTop);
      let paddingBottomSize = parseInt(getComputedStyle(overlay, true).paddingBottom);
      let marginTopSize = parseInt(getComputedStyle(overlay, true).marginTop);
      let marginBottomSize = parseInt(getComputedStyle(overlay, true).marginBottom); 

      overlay.style.paddingTop = '0';
      overlay.style.paddingBottom = '0';
      overlay.style.marginTop = '0';
      overlay.style.marginBottom = '0';
      overlay.style.display = 'block';
      overlay.style.overflow = 'hidden';
      overlay.style.height = '0';

      let scrollSize = overlay.scrollHeight + paddingTopSize + paddingBottomSize;

      overlay.style.transition = 'all ' + animationTime + 'ms ease-in-out';
      overlay.style.height = scrollSize + "px";
      overlay.style.paddingTop = paddingTopSize + "px";
      overlay.style.paddingBottom = paddingBottomSize + "px";
      overlay.style.marginTop = marginTopSize + "px";
      overlay.style.marginBottom = marginBottomSize + "px";
      setTimeout(
        (function(){
          overlay.style.overflow = '';
          overlay.style.height = '';
          overlay.style.paddingTop = '';
          overlay.style.paddingBottom = '';
          overlay.style.marginTop = '';
          overlay.style.marginBottom = '';
          overlay.classList.remove('inAnimate');
        }), animationTime
      )
    }
  }
}
function slideUp($this, animationTime) {
  let overlay = $this;
    
  if(getComputedStyle(overlay, true).display !== 'none'){
      
    if( !(overlay.classList.contains('inAnimate')) ){
      overlay.classList.add('inAnimate');

      let paddingTopSize = parseInt(getComputedStyle(overlay, true).paddingTop);
      let paddingBottomSize = parseInt(getComputedStyle(overlay, true).paddingBottom); 
      let marginTopSize = parseInt(getComputedStyle(overlay, true).marginTop);
      let marginBottomSize = parseInt(getComputedStyle(overlay, true).marginBottom);
      let containerHeight = overlay.clientHeight; 

      overlay.style.height = containerHeight + 'px';
      overlay.style.overflow = 'hidden';      
      overlay.style.paddingTop = paddingTopSize + 'px';
      overlay.style.paddingBottom = paddingBottomSize + 'px';
      overlay.style.marginTop = marginTopSize + 'px';
      overlay.style.marginBottom = marginBottomSize + 'px';
      overlay.style.transition = 'all ' + animationTime + 'ms ease-in-out';

      setTimeout(
        (function(){
          overlay.style.paddingTop = 0;
          overlay.style.paddingBottom = 0;
          overlay.style.marginTop = 0;
          overlay.style.marginBottom = 0;
          overlay.style.height = 0;
        }), 100
      )      
      setTimeout(
        (function(){
          overlay.style.overflow = '';
          overlay.style.height = '';
          overlay.style.paddingTop = '';
          overlay.style.paddingBottom = '';
          overlay.style.marginTop = '';
          overlay.style.marginBottom = '';
          overlay.style.display = 'none';
          overlay.classList.remove('inAnimate');
        }), animationTime
      )
    }
  }
}
function slideToggle($this, animationTime){
  let overlay = $this;
  if(getComputedStyle(overlay, true).display !== 'none'){
    slideUp($this, animationTime);
  } else{
    slideDown($this, animationTime);
  }
}

function accordion(Sthis){
  Sthis.classList.toggle('open');
  slideToggle(Sthis.nextElementSibling, animationTime);
}

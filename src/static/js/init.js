//International Telephone Input
let input = document.querySelector("#js-phone");
if(input){
    window.intlTelInput(input, {
      // allowDropdown: false,
      // autoHideDialCode: false,
      // autoPlaceholder: "off",
      // dropdownContainer: document.body,
      // excludeCountries: ["us"],
      // formatOnDisplay: false,
      // geoIpLookup: function(callback) {
      //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
      //     var countryCode = (resp && resp.country) ? resp.country : "";
      //     callback(countryCode);
      //   });
      // },
      // hiddenInput: "full_number",
      // initialCountry: "auto",
      // localizedCountries: { 'de': 'Deutschland' },
      // nationalMode: false,
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // placeholderNumberType: "MOBILE",
      preferredCountries: ['ru', 'ua',  'kz', 'be'],
      // separateDialCode: true,
      utilsScript: "build/js/utils.js",
    });
}

lightGallery(document.getElementById('js-lightgallery'))

let datepicker = new Datepicker('.js-date');

//storys
let categorysFilter = new Swiper('#js-categorys-filter', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  freeMode: true,
});
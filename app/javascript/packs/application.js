// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("custom/adminlte.js")

require("custom/Chart.min.js")
require("custom/sparkline.js")
require("custom/jquery.vmap.min.js")
require("custom/jquery.vmap.usa.js")
require("custom/jquery.knob.min.js")
require("custom/moment.min.js")
require("custom/daterangepicker.js")
require("custom/summernote-bs4.min.js")
require("custom/jquery.overlayScrollbars.min.js")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import 'bootstrap';
import "@fortawesome/fontawesome-free/js/all";

document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip()
});



require("custom/main.js")
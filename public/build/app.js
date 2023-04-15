"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-iso-string.js */ "./node_modules/core-js/modules/es.date.to-iso-string.js");
/* harmony import */ var core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_iso_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");














var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 500,
    disableOnInteraction: true
  },
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  breakpoint: {
    992: {
      slidesPerView: 1
    }
  }
});
window.onscroll = function () {
  var header = document.getElementById("header");
  if (window.pageYOffset > 50) {
    header.classList.add("isSticky");
  } else {
    header.classList.remove("isSticky");
  }
};
var form = document.getElementById('formHome');
if (form != null && form != undefined) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var contentElement = document.getElementById('cardContainer');
    var formData = new FormData();
    var dateRangeValue = document.getElementById("daterange").value.split(" - ");
    var dateStartRestructured = convertDate(dateRangeValue[0]);
    var dateStopRestructured = convertDate(dateRangeValue[1]);
    console.log(dateStartRestructured);
    formData.append("startDate", dateStartRestructured);
    formData.append("stopDate", dateStopRestructured);
    var containCheckboxArtist = document.querySelectorAll('.containCheckbox')[0];
    var containCheckboxCity = document.querySelectorAll('.containCheckbox')[1];
    var checkboxesArtist = containCheckboxArtist.querySelectorAll('input[type="checkbox"]');
    var checkboxesCity = containCheckboxCity.querySelectorAll('input[type="checkbox"]');
    var checkedCheckboxesArtist = [];
    var checkedCheckboxesCity = [];
    checkboxesArtist.forEach(function (checkbox) {
      if (checkbox.checked) {
        var idString = checkbox.id.replace('artist', '');
        var idNumber = parseInt(idString);
        checkedCheckboxesArtist.push(idNumber);
      }
    });
    checkboxesCity.forEach(function (checkbox) {
      if (checkbox.checked) {
        var idString = checkbox.id.replace('city', '');
        var idNumber = parseInt(idString);
        checkedCheckboxesCity.push(idNumber);
      }
    });
    formData.append("artists", checkedCheckboxesArtist);
    formData.append("citys", checkedCheckboxesCity);
    fetch('/concertSearch', {
      method: 'POST',
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      },
      body: formData
    }).then(function (response) {
      return response.text();
    }).then(function (html) {
      contentElement.innerHTML = '';
      contentElement.innerHTML = html;
    })["catch"](function (error) {
      console.log('La requête a échoué', error);
    });
  });
}
$(function () {
  $('input[name="daterange"]').daterangepicker({
    locale: {
      cancelLabel: 'Annuler',
      format: "DD/MM/YYYY",
      applyLabel: "ok",
      fromLabel: 'De',
      toLabel: 'à',
      daysOfWeek: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
      monthNames: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
    }
  }, function (start, end, label) {
    console.log("A new date selection was made: " + start.format('DD-MM-YYYY') + ' to ' + end.format('DD-MM-YYYY'));
  });
  var today = new Date();
  var today2 = new Date();
  var limit = new Date(today.setMonth(today.getMonth() + 3));
  $('input[name="daterange"]').val(today2.toLocaleDateString("fr-FR") + " - " + limit.toLocaleDateString("fr-FR"));
});
var play = document.getElementById("play");
play.addEventListener("click", function () {
  var iframe = document.createElement('iframe');
  iframe.src = 'https://codingwith-adam.github.io/space-invaders/index.html';
  iframe.width = '100%';
  iframe.height = '700';
  document.getElementById("mainContent").innerHTML = '';
  document.getElementById("mainContent").appendChild(iframe);
});
function convertDate(dateString) {
  var parts = dateString.split('/');
  var day = parts[0];
  var month = parts[1];
  var year = parts[2];
  var date = new Date("".concat(year, "-").concat(month, "-").concat(day));
  var formattedDate = date.toISOString().slice(0, 10);
  return formattedDate;
}
var elementCreate = document.getElementById("openCreate");
elementCreate.addEventListener("click", function () {
  document.getElementById('modalCreate').show();
});
var elements = document.querySelectorAll(".update");
var elementsArray = Array.prototype.slice.call(elements);
elementsArray.forEach(function (elem) {
  elem.addEventListener("click", function () {
    var date = this.dataset.date.split('/');
    var day = parseInt(date[0]);
    var month = parseInt(date[1]);
    var year = parseInt(date[2]);
    var id = this.dataset.id;
    var idArtist = parseInt(this.dataset.name) - 1;
    var idCity = parseInt(this.dataset.city) - 1;
    document.getElementById('concert_update_daterange_day').value = day;
    document.getElementById('concert_update_daterange_month').value = month;
    document.getElementById('concert_update_daterange_year').value = year;
    document.getElementById('concert_update_id').value = id;
    document.getElementById('concert_update_artists').value = idArtist;
    document.getElementById('concert_update_citys').value = idCity;
    document.getElementById('modalUpdate').show();
  });
});
var elementsDelete = document.querySelectorAll(".delete");
var elementsArrayDelete = Array.prototype.slice.call(elementsDelete);
elementsArrayDelete.forEach(function (elem) {
  elem.addEventListener("click", function () {
    var id = this.dataset.id;
    document.getElementById('form_delete_id').value = id;
    document.getElementById('modalDelete').show();
  });
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-19ec03"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDYyxLQUFLLEdBQUdtQixFQUFFO0lBQ3BEbEMsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUN5RixJQUFJLEVBQUU7RUFDakQsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQzVKRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIubXlTd2lwZXJcIiwge1xuICAgIGVmZmVjdDogXCJjb3ZlcmZsb3dcIixcbiAgICBncmFiQ3Vyc29yOiB0cnVlLFxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBhdXRvcGxheToge1xuICAgICAgICBkZWxheTogNTAwLFxuICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogdHJ1ZSxcbiAgICB9LFxuICAgIGNvdmVyZmxvd0VmZmVjdDoge1xuICAgICAgICByb3RhdGU6IDI1LFxuICAgICAgICBzdHJldGNoOiAwLFxuICAgICAgICBkZXB0aDogMTAwLFxuICAgICAgICBtb2RpZmllcjogMSxcbiAgICAgICAgc2xpZGVTaGFkb3dzOiB0cnVlLFxuICAgIH0sXG4gICAgYnJlYWtwb2ludDoge1xuICAgICAgICA5OTI6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDFcbiAgICAgICAgfVxuICAgIH1cbn0pO1xud2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiA1MCkge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImlzU3RpY2t5XCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJpc1N0aWNreVwiKVxuICAgIH1cbn1cblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtSG9tZScpO1xuaWYgKGZvcm0gIT0gbnVsbCAmJiBmb3JtICE9IHVuZGVmaW5lZCkge1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRDb250YWluZXInKTtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGNvbnN0IGRhdGVSYW5nZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlcmFuZ2VcIikudmFsdWUuc3BsaXQoXCIgLSBcIik7XG4gICAgICAgIGNvbnN0IGRhdGVTdGFydFJlc3RydWN0dXJlZCA9IGNvbnZlcnREYXRlKGRhdGVSYW5nZVZhbHVlWzBdKTtcbiAgICAgICAgY29uc3QgZGF0ZVN0b3BSZXN0cnVjdHVyZWQgPSBjb252ZXJ0RGF0ZShkYXRlUmFuZ2VWYWx1ZVsxXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGVTdGFydFJlc3RydWN0dXJlZClcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwic3RhcnREYXRlXCIsIGRhdGVTdGFydFJlc3RydWN0dXJlZCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInN0b3BEYXRlXCIsIGRhdGVTdG9wUmVzdHJ1Y3R1cmVkKTtcbiAgICAgICAgY29uc3QgY29udGFpbkNoZWNrYm94QXJ0aXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhaW5DaGVja2JveCcpWzBdO1xuICAgICAgICBjb25zdCBjb250YWluQ2hlY2tib3hDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhaW5DaGVja2JveCcpWzFdO1xuICAgICAgICBjb25zdCBjaGVja2JveGVzQXJ0aXN0ID0gY29udGFpbkNoZWNrYm94QXJ0aXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuICAgICAgICBjb25zdCBjaGVja2JveGVzQ2l0eSA9IGNvbnRhaW5DaGVja2JveENpdHkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG4gICAgICAgIGNvbnN0IGNoZWNrZWRDaGVja2JveGVzQXJ0aXN0ID0gW107XG4gICAgICAgIGNvbnN0IGNoZWNrZWRDaGVja2JveGVzQ2l0eSA9IFtdO1xuICAgICAgICBjaGVja2JveGVzQXJ0aXN0LmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkU3RyaW5nID0gY2hlY2tib3guaWQucmVwbGFjZSgnYXJ0aXN0JywgJycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkTnVtYmVyID0gcGFyc2VJbnQoaWRTdHJpbmcpO1xuICAgICAgICAgICAgICAgIGNoZWNrZWRDaGVja2JveGVzQXJ0aXN0LnB1c2goaWROdW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2hlY2tib3hlc0NpdHkuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRTdHJpbmcgPSBjaGVja2JveC5pZC5yZXBsYWNlKCdjaXR5JywgJycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkTnVtYmVyID0gcGFyc2VJbnQoaWRTdHJpbmcpO1xuICAgICAgICAgICAgICAgIGNoZWNrZWRDaGVja2JveGVzQ2l0eS5wdXNoKGlkTnVtYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImFydGlzdHNcIiwgY2hlY2tlZENoZWNrYm94ZXNBcnRpc3QpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJjaXR5c1wiLCBjaGVja2VkQ2hlY2tib3hlc0NpdHkpXG5cbiAgICAgICAgZmV0Y2goJy9jb25jZXJ0U2VhcmNoJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRi1Ub2tlbic6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAgICAgLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICAgICAgY29udGVudEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgY29udGVudEVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMYSByZXF1w6p0ZSBhIMOpY2hvdcOpJywgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG59XG4kKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdpbnB1dFtuYW1lPVwiZGF0ZXJhbmdlXCJdJykuZGF0ZXJhbmdlcGlja2VyKHtcbiAgICAgICAgbG9jYWxlOiB7XG4gICAgICAgICAgICBjYW5jZWxMYWJlbDogJ0FubnVsZXInLFxuICAgICAgICAgICAgZm9ybWF0OiBcIkREL01NL1lZWVlcIixcbiAgICAgICAgICAgIGFwcGx5TGFiZWw6IFwib2tcIixcbiAgICAgICAgICAgIGZyb21MYWJlbDogJ0RlJyxcbiAgICAgICAgICAgIHRvTGFiZWw6ICfDoCcsXG4gICAgICAgICAgICBkYXlzT2ZXZWVrOiBbJ0RpJywgJ0x1JywgJ01hJywgJ01lJywgJ0plJywgJ1ZlJywgJ1NhJ10sXG4gICAgICAgICAgICBtb250aE5hbWVzOiBbJ0phbnZpZXInLCAnRmV2cmllcicsICdNYXJzJywgJ0F2cmlsJywgJ01haScsICdKdWluJywgJ0p1aWxsZXQnLCAnQW/Du3QnLCAnU2VwdGVtYnJlJywgJ09jdG9icmUnLCAnTm92ZW1icmUnLCAnRGVjZW1icmUnXSxcbiAgICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChzdGFydCwgZW5kLCBsYWJlbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkEgbmV3IGRhdGUgc2VsZWN0aW9uIHdhcyBtYWRlOiBcIiArIHN0YXJ0LmZvcm1hdCgnREQtTU0tWVlZWScpICsgJyB0byAnICsgZW5kLmZvcm1hdCgnREQtTU0tWVlZWScpKTtcbiAgICB9KTtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdG9kYXkyID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBsaW1pdCA9IG5ldyBEYXRlKHRvZGF5LnNldE1vbnRoKHRvZGF5LmdldE1vbnRoKCkgKyAzKSk7XG4gICAgJCgnaW5wdXRbbmFtZT1cImRhdGVyYW5nZVwiXScpLnZhbCh0b2RheTIudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIikgKyBcIiAtIFwiICsgbGltaXQudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZnItRlJcIikpXG59KTtcblxuY29uc3QgcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheVwiKTtcbnBsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICBpZnJhbWUuc3JjID0gJ2h0dHBzOi8vY29kaW5nd2l0aC1hZGFtLmdpdGh1Yi5pby9zcGFjZS1pbnZhZGVycy9pbmRleC5odG1sJztcbiAgICBpZnJhbWUud2lkdGggPSAnMTAwJSc7XG4gICAgaWZyYW1lLmhlaWdodCA9ICc3MDAnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRlbnRcIikuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGVudFwiKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xufSlcblxuZnVuY3Rpb24gY29udmVydERhdGUoZGF0ZVN0cmluZykge1xuICAgIGNvbnN0IHBhcnRzID0gZGF0ZVN0cmluZy5zcGxpdCgnLycpO1xuICAgIGNvbnN0IGRheSA9IHBhcnRzWzBdO1xuICAgIGNvbnN0IG1vbnRoID0gcGFydHNbMV07XG4gICAgY29uc3QgeWVhciA9IHBhcnRzWzJdO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gKTtcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICByZXR1cm4gZm9ybWF0dGVkRGF0ZTtcbn1cbmNvbnN0IGVsZW1lbnRDcmVhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW5DcmVhdGVcIik7XG5lbGVtZW50Q3JlYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQ3JlYXRlJykuc2hvdygpXG59KVxuY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnVwZGF0ZVwiKTtcbmNvbnN0IGVsZW1lbnRzQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbGVtZW50cyk7XG5lbGVtZW50c0FycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLmRhdGFzZXQuZGF0ZS5zcGxpdCgnLycpO1xuICAgICAgICBjb25zdCBkYXkgPSBwYXJzZUludChkYXRlWzBdKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBwYXJzZUludChkYXRlWzFdKTtcbiAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlSW50KGRhdGVbMl0pO1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuZGF0YXNldC5pZDtcbiAgICAgICAgY29uc3QgaWRBcnRpc3QgPSBwYXJzZUludCh0aGlzLmRhdGFzZXQubmFtZSkgLSAxO1xuICAgICAgICBjb25zdCBpZENpdHkgPSBwYXJzZUludCh0aGlzLmRhdGFzZXQuY2l0eSkgLSAxO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uY2VydF91cGRhdGVfZGF0ZXJhbmdlX2RheScpLnZhbHVlID0gZGF5O1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uY2VydF91cGRhdGVfZGF0ZXJhbmdlX21vbnRoJykudmFsdWUgPSBtb250aDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmNlcnRfdXBkYXRlX2RhdGVyYW5nZV95ZWFyJykudmFsdWUgPSB5ZWFyO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uY2VydF91cGRhdGVfaWQnKS52YWx1ZSA9IGlkO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uY2VydF91cGRhdGVfYXJ0aXN0cycpLnZhbHVlID0gaWRBcnRpc3Q7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25jZXJ0X3VwZGF0ZV9jaXR5cycpLnZhbHVlID0gaWRDaXR5O1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxVcGRhdGUnKS5zaG93KClcbiAgICB9KTtcbn0pO1xuY29uc3QgZWxlbWVudHNEZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVwiKTtcbmNvbnN0IGVsZW1lbnRzQXJyYXlEZWxldGUgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbGVtZW50c0RlbGV0ZSk7XG5lbGVtZW50c0FycmF5RGVsZXRlLmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5kYXRhc2V0LmlkO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybV9kZWxldGVfaWQnKS52YWx1ZSA9IGlkO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxEZWxldGUnKS5zaG93KClcbiAgICB9KTtcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJzd2lwZXIiLCJTd2lwZXIiLCJlZmZlY3QiLCJncmFiQ3Vyc29yIiwiY2VudGVyZWRTbGlkZXMiLCJzbGlkZXNQZXJWaWV3IiwibG9vcCIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsImNvdmVyZmxvd0VmZmVjdCIsInJvdGF0ZSIsInN0cmV0Y2giLCJkZXB0aCIsIm1vZGlmaWVyIiwic2xpZGVTaGFkb3dzIiwiYnJlYWtwb2ludCIsIndpbmRvdyIsIm9uc2Nyb2xsIiwiaGVhZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBhZ2VZT2Zmc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZm9ybSIsInVuZGVmaW5lZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29udGVudEVsZW1lbnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZGF0ZVJhbmdlVmFsdWUiLCJ2YWx1ZSIsInNwbGl0IiwiZGF0ZVN0YXJ0UmVzdHJ1Y3R1cmVkIiwiY29udmVydERhdGUiLCJkYXRlU3RvcFJlc3RydWN0dXJlZCIsImNvbnNvbGUiLCJsb2ciLCJhcHBlbmQiLCJjb250YWluQ2hlY2tib3hBcnRpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29udGFpbkNoZWNrYm94Q2l0eSIsImNoZWNrYm94ZXNBcnRpc3QiLCJjaGVja2JveGVzQ2l0eSIsImNoZWNrZWRDaGVja2JveGVzQXJ0aXN0IiwiY2hlY2tlZENoZWNrYm94ZXNDaXR5IiwiZm9yRWFjaCIsImNoZWNrYm94IiwiY2hlY2tlZCIsImlkU3RyaW5nIiwiaWQiLCJyZXBsYWNlIiwiaWROdW1iZXIiLCJwYXJzZUludCIsInB1c2giLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwiYm9keSIsInRoZW4iLCJyZXNwb25zZSIsInRleHQiLCJodG1sIiwiaW5uZXJIVE1MIiwiZXJyb3IiLCIkIiwiZGF0ZXJhbmdlcGlja2VyIiwibG9jYWxlIiwiY2FuY2VsTGFiZWwiLCJmb3JtYXQiLCJhcHBseUxhYmVsIiwiZnJvbUxhYmVsIiwidG9MYWJlbCIsImRheXNPZldlZWsiLCJtb250aE5hbWVzIiwic3RhcnQiLCJlbmQiLCJsYWJlbCIsInRvZGF5IiwiRGF0ZSIsInRvZGF5MiIsImxpbWl0Iiwic2V0TW9udGgiLCJnZXRNb250aCIsInZhbCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInBsYXkiLCJpZnJhbWUiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhcHBlbmRDaGlsZCIsImRhdGVTdHJpbmciLCJwYXJ0cyIsImRheSIsIm1vbnRoIiwieWVhciIsImRhdGUiLCJjb25jYXQiLCJmb3JtYXR0ZWREYXRlIiwidG9JU09TdHJpbmciLCJzbGljZSIsImVsZW1lbnRDcmVhdGUiLCJzaG93IiwiZWxlbWVudHMiLCJlbGVtZW50c0FycmF5IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJjYWxsIiwiZWxlbSIsImRhdGFzZXQiLCJpZEFydGlzdCIsIm5hbWUiLCJpZENpdHkiLCJjaXR5IiwiZWxlbWVudHNEZWxldGUiLCJlbGVtZW50c0FycmF5RGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==
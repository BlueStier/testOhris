import './styles/app.scss';
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    autoplay: {
        delay: 500,
        disableOnInteraction: true,
    },
    coverflowEffect: {
        rotate: 25,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    breakpoint: {
        992: {
            slidesPerView: 1
        }
    }
});
window.onscroll = () => {
    const header = document.getElementById("header");
    if (window.pageYOffset > 50) {
        header.classList.add("isSticky")
    } else {
        header.classList.remove("isSticky")
    }
}

const form = document.getElementById('formHome');
if (form != null && form != undefined) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const contentElement = document.getElementById('cardContainer');
        let formData = new FormData();
        const dateRangeValue = document.getElementById("daterange").value.split(" - ");
        const dateStartRestructured = convertDate(dateRangeValue[0]);
        const dateStopRestructured = convertDate(dateRangeValue[1]);
        console.log(dateStartRestructured)
        formData.append("startDate", dateStartRestructured);
        formData.append("stopDate", dateStopRestructured);
        const containCheckboxArtist = document.querySelectorAll('.containCheckbox')[0];
        const containCheckboxCity = document.querySelectorAll('.containCheckbox')[1];
        const checkboxesArtist = containCheckboxArtist.querySelectorAll('input[type="checkbox"]');
        const checkboxesCity = containCheckboxCity.querySelectorAll('input[type="checkbox"]');
        const checkedCheckboxesArtist = [];
        const checkedCheckboxesCity = [];
        checkboxesArtist.forEach((checkbox) => {
            if (checkbox.checked) {
                const idString = checkbox.id.replace('artist', '');
                const idNumber = parseInt(idString);
                checkedCheckboxesArtist.push(idNumber);
            }
        });
        checkboxesCity.forEach((checkbox) => {
            if (checkbox.checked) {
                const idString = checkbox.id.replace('city', '');
                const idNumber = parseInt(idString);
                checkedCheckboxesCity.push(idNumber);
            }
        });
        formData.append("artists", checkedCheckboxesArtist);
        formData.append("citys", checkedCheckboxesCity)

        fetch('/concertupdate', {
                method: 'POST',
                headers: {
                    'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: formData,
            })
            .then(response => response.text())
            .then(html => {
                contentElement.innerHTML = '';
                contentElement.innerHTML = html;
            })
            .catch(error => {
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
            monthNames: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
        }
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('DD-MM-YYYY') + ' to ' + end.format('DD-MM-YYYY'));
    });
    const today = new Date();
    const today2 = new Date();
    const limit = new Date(today.setMonth(today.getMonth() + 3));
    $('input[name="daterange"]').val(today2.toLocaleDateString("fr-FR") + " - " + limit.toLocaleDateString("fr-FR"))
});

const play = document.getElementById("play");
play.addEventListener("click", () => {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://codingwith-adam.github.io/space-invaders/index.html';
    iframe.width = '100%';
    iframe.height = '700';
    document.getElementById("mainContent").innerHTML = '';
    document.getElementById("mainContent").appendChild(iframe);
})

function convertDate(dateString) {
    const parts = dateString.split('/');
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    const date = new Date(`${year}-${month}-${day}`);
    const formattedDate = date.toISOString().slice(0, 10);
    return formattedDate;
}
const elements = document.querySelectorAll(".update");
const elementsArray = Array.prototype.slice.call(elements);
elementsArray.forEach(function (elem) {
    elem.addEventListener("click", function () {
        const date = this.dataset.date.split('/');
        const day = parseInt(date[0]);
        const month = parseInt(date[1]);
        const year = parseInt(date[2]);
        const id = this.dataset.id;
        const idArtist = parseInt(this.dataset.name) - 1;
        const idCity = parseInt(this.dataset.city) - 1;
        document.getElementById('concert_update_daterange_day').value = day;
        document.getElementById('concert_update_daterange_month').value = month;
        document.getElementById('concert_update_daterange_year').value = year;
        document.getElementById('concert_update_id').value = id;
        document.getElementById('concert_update_artists').value = idArtist;
        document.getElementById('concert_update_citys').value = idCity;
        document.getElementById('modal').show()
    });
});
const elementsDelete = document.querySelectorAll(".delete");
const elementsArrayDelete = Array.prototype.slice.call(elementsDelete);
elementsArrayDelete.forEach(function (elem) {
    elem.addEventListener("click", function () {
        const id = this.dataset.id;
        document.getElementById('form_delete_id').value = id;
        document.getElementById('modalDelete').show()
    });
});
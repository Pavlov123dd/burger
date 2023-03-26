const productContainers = [...document.querySelectorAll('#slider')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const burger = document.querySelector('#burger');
const headerNav = document.querySelector('#headerNav');
const anchors = document.querySelectorAll('a[href^="#"]');
const modalWindow = document.querySelector('#modalWindow');
const orderButton = [...document.querySelectorAll('.button-buy, .mobile-button')];
const modalClose = document.querySelector('.close-modal')
const modalForm = document.querySelector('#modalForm')


productContainers.forEach((item, i) => {
    let containerDimensions = item.children[0].getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
});


const initMap = () => {
    let element = document.getElementById("googleMap");
    let options = {
        zoom: 17,
        center: new google.maps.LatLng(46.524297, 6.633062),
        zoomControl: false,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.SATELLITE

    };

    let myMap = new google.maps.Map(element, options);

    let markers =
        {
            coordinates: {lat: 46.524297, lng: 6.633062},
            info: '<br><img src="../img/burger%20point.png"><br>'
        };


    const addMarker = (properties) => {
        let marker = new google.maps.Marker({
            position: properties.coordinates,
            map: myMap,
            icon: '../img/burger%20point.png'
        });

        if (properties.image) {
            marker.setIcon(properties.image);
        }
    };
    addMarker(markers);
};
initMap();


const toggleClass = () => {
    burger.classList.toggle('active')
    headerNav.classList.toggle('active')
};


burger.addEventListener(`click`, (e) => {
    toggleClass()
});

headerNav.addEventListener(`click`, (e) => {
    toggleClass()
});


(() => {
    anchors.forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()

            const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'

            document.querySelector(goto).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    });
})();


const toggleFunc = () => {
    orderButton.forEach(button => {
        button.addEventListener('click', (e) => {
            modalWindow.classList.toggle('modal-window-active');
        })
    })
}
toggleFunc();


const modalCloseFunc = () => {
    modalClose.addEventListener('click', (e) => {
        modalWindow.classList.remove('modal-window-active')
    })
}
modalCloseFunc();
const modalFormLis = () => {
    modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        modalWindow.classList.remove('modal-window-active')
    })
}
modalFormLis();


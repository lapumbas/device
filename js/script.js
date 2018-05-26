let slider = [];
let SLIDES_COUNT = 3;

for (let i = 0; i < SLIDES_COUNT; i++) {
  slider[i] = {};
  slider[i].radio = document.querySelector(`.slider-controls>input:nth-child(${2 * i + 1})`);
  slider[i].slide = document.querySelector(`.slide-${i + 1}`)
}

for (let i = 0; i < SLIDES_COUNT; i++) {
  slider[i].radio.addEventListener('change', evt => {
    evt.preventDefault();
    if (slider[i].radio.checked) {
      for (let i = 0; i < SLIDES_COUNT; i++) {
        slider[i].slide.classList.remove(`slide-show`);
      }
      slider[i].slide.classList.add(`slide-show`);
    }
  })
}

let index = 0;
setInterval(() => {
  index++;
  if (index >= SLIDES_COUNT) index = 0;
  slider[index].radio.checked = true;
  for (let i = 0; i < SLIDES_COUNT; i++) {
    slider[i].slide.classList.remove(`slide-show`);
  }
  slider[index].slide.classList.add(`slide-show`);
}, 5000);

let services = [];
let servicesMenu = document.querySelector(`.services-menu`).getElementsByTagName(`li`);
let servicesDeals = document.querySelector(`.services-deals`).getElementsByTagName(`li`);

for (let i = 0; i < servicesMenu.length; i++) {
  services[i] = {};
  services[i].servicesMenuButton = servicesMenu[i].querySelector(`.services-menu-button`);
  services[i].servicesDeal = servicesDeals[i].querySelector(`.services-deal`);
}

for (let i = 0; i < services.length; i++) {
  services[i].servicesMenuButton.addEventListener(`click`, evt => {
    evt.preventDefault();
    for (let i = 0; i < services.length; i++) {
      services[i].servicesMenuButton.classList.remove(`active`);
      services[i].servicesDeal.classList.remove(`services-show`);
    };
    services[i].servicesMenuButton.classList.add(`active`);
    services[i].servicesDeal.classList.add(`services-show`);
  })
}

let modalMap = document.querySelector(`.modal-map`);
let modalMapCloseButton = modalMap.querySelector(`.modal-close-btn`);
let overlay = document.querySelector(`.overlay`);
let miniMap = document.querySelector(`.contacts img`);

let modalWriteUs = document.querySelector(`.modal-write-us`);
let writeUsButton = document.querySelector(`.write-us-btn`);
let modalWriteCloseButton = modalWriteUs.querySelector(`.modal-close-btn`);
let modalWriteForm = modalWriteUs.querySelector(`form`);
let modalFormName = modalWriteForm.querySelector(`input[name = name]`);
let modalFormEmail = modalWriteForm.querySelector(`input[name = email]`);
let modalFormText = modalWriteForm.querySelector(`textarea`);

modalWriteForm.addEventListener(`submit`, evt => {
  if (!modalFormName.value || !modalFormEmail.value || !modalFormText.value) {
    evt.preventDefault();
    modalWriteUs.classList.add(`modal-shake`);
  } else {
    localStorage.setItem(`userName`, modalFormName.value);
    localStorage.setItem(`userEmail`, modalFormEmail.value);
  }
})

miniMap.addEventListener(`click`, evt => {
  evt.preventDefault();
  overlay.classList.add(`overlay-modal-show`);
  modalMap.classList.add(`modal-show`);
})

modalMapCloseButton.addEventListener(`click`, evt => {
  evt.preventDefault();
  overlay.classList.remove(`overlay-modal-show`);
  modalMap.classList.remove(`modal-show`);
})

modalWriteCloseButton.addEventListener(`click`, evt => {
  evt.preventDefault();
  overlay.classList.remove(`overlay-modal-show`);
  modalWriteUs.classList.remove(`modal-show`);
  modalWriteUs.classList.remove(`modal-shake`);
})

writeUsButton.addEventListener(`click`, evt => {
  evt.preventDefault();
  overlay.classList.add(`overlay-modal-show`);
  modalWriteUs.classList.add(`modal-show`);
  modalFormText.focus();
  if (!localStorage.userName) {
    modalFormName.focus();
  } else {
    modalFormName.value = localStorage.userName;
  };
  if (!localStorage.userEmail) {
    modalFormEmail.focus();
  } else {
    modalFormEmail.value = localStorage.userEmail;
  };



})

overlay.addEventListener(`click`, evt => {
  evt.preventDefault();
  overlay.classList.remove(`overlay-modal-show`);
  modalWriteUs.classList.remove(`modal-show`);
  modalMap.classList.remove(`modal-show`);
  modalWriteUs.classList.remove(`modal-shake`);
})
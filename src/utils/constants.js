export const validationConfig = {
    formSelector: '.input',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__input-error_visible',
};

//ПОПАПЫ
export const popupProfile = document.querySelector('.popup_type_edit-profile');
export const popupCreate = document.querySelector('.popup_type_add-card');
export const popupImg = document.querySelector('.popup_type_show-image');
export const popupAvatar = document.querySelector('.popup_type_new-avatar');
//export const popupDeleteImg = document.querySelector('.popup_type_delete-img');

//ФОРМА РЕДАКТИРОВАНИЯ ПРОФИЛЯ
export const openPopupProfileBtn = document.querySelector('.profile__edit-button');
export const formElement = document.querySelector('.input_type_edit-profile');
export const nameInput = formElement.querySelector('.popup__input_text_name');
export const jobInput = formElement.querySelector('.popup__input_text_job');
//export const avatarInput = document.querySelector('.popup__input_avatar_link');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
//export const profileAvatar = document.querySelector('.profile__avatar');

//СОЗДАНИЕ НОВЫХ КАРТОЧЕК
export const elementContainer = document.querySelector('.elements');
export const cardSelector = document.querySelector('.element');
//export const createCardBtn = document.querySelector('.profile__add-button');

//Инпуты
export const inputCreateForm = document.querySelector('.input_type_add-card');
export const inputEditAvatar = document.querySelector('.input_type_new-avatar');

//export const validatingInputsForEditProfile = new FormValidator(validationConfig, formElement);
//export const validatingInputsForCards = new FormValidator(validationConfig, inputCreateForm);
//export const validatingInputForAvatar = new FormValidator(validationConfig, inputEditAvatar);

//export const popupWithImg = new PopupWithImage(popupImg);
export const userInfo = new UserInfo(profileName, profileJob, profileAvatar);

export const editAvatarBtn = document.querySelector('.profile__avatar-button');

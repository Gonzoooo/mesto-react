import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/Api";


function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isInfo, setInfo] = React.useState({});

    function handleEditAvatarClick(){
        setEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick(){
        setEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick(){
        setAddPlacePopupOpen(true);
    }

    function closeAllPopups(){
        setAddPlacePopupOpen(false);
        setEditProfilePopupOpen(false);
        setEditAvatarPopupOpen(false);
    }

    function handlePopupUserName(data){
        api.updateUserInfo({
            name: data.name
        })
            .then((data) => {
                PopupWithForm.userName(data);
            })
            .then(()=> {
                closeAllPopups();
            })
            .catch((e) => {
                console.log(`ошибка при изменении данных: ${e}`);
            });
    }

    function handlePopupUserDescription(data){
        api.updateUserInfo({
            about: data.about,
        })
            .then((data) => {
                PopupWithForm.userDescription(data);
            })
            .then(()=> {
                closeAllPopups();
            })
            .catch((e) => {
                console.log(`ошибка при изменении данных: ${e}`);
            });
    }

    function handlePopupUserAvatar(avatar){
        api.addNewAvatar({
            avatar: avatar.avatar
        })
            .then((avatar) =>{
                PopupWithForm.userName(avatar);
            })
            .then(() => {
                closeAllPopups();
            })
            .catch((e) => {
                console.log(`ошибка при изменении аватара: ${e}`);
            });
    }

    return (
        <body className="page">
            <Header />
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                userAvatar={isInfo ? handlePopupUserAvatar:''}
                userName={handlePopupUserName}
                userDescription={handlePopupUserDescription}
            />
            <Footer />
            <>
                <PopupWithForm name='new-avatar' title='Обновить аватар' value='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                    <div className="input input_type_new-avatar">
                        <input id="popup__input_avatar_link" required className="popup__input popup__input_avatar_link" type="url" name="avatar" placeholder="Ссылка на аватар"/>
                    </div>
                </PopupWithForm>
                <PopupWithForm name='edit-profile' title='Редактировать профиль' value='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                    <div className="input input_type_edit-profile">
                        <input id="popup__input_text_name" required className="popup__input popup__input_text_name" type="text" name="name" value="Жак-Ив Кусто" placeholder="Имя"/>
                        <span id="popup__input_text_name--error"/>
                        <input id="popup__input_text_job" required className="popup__input popup__input_text_job" type="text" name="about" value="Исследователь океана" placeholder="О себе"/>
                        <span id="popup__input_text_job--error"/>
                    </div>
                </PopupWithForm>
                <PopupWithForm name='add-card' title='Новое место' value='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                    <div className="input input_type_add-card">
                        <input id="popup__input_place_name" required className="popup__input popup__input_place_name" type="text" name="name" placeholder="Название"/>
                        <span id="popup__input_place_name--error"/>
                        <input id="popup__input_place_link" required className="popup__input popup__input_place_link" type="url" name="link" placeholder="Ссылка на картинку"/>
                        <span id="popup__input_place_link--error"/>
                    </div>
                </PopupWithForm>
                <PopupWithForm name='delete-img' title='Вы уверены?' value='Да' />
            </>
            <ImagePopup />
        </body>
    );
}

export default App;
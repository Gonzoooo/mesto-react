import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";


function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});

    function handleCardClick(card){
        setSelectedCard(card);
        setImagePopupOpen(true);
    }

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
        setSelectedCard({});
    }

    return (
        <body className="page">
            <Header />
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
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
            <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard}/>
        </body>
    );
}

export default App;
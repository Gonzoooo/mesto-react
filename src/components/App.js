import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from "../utils/api";
import EditProfilePopup from "./EditProfilePopup";


function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});
    const [currentUser, setCurrentUser] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getInitialCards()
            .then(data => {
                setCards(data);
            })
            .catch((e) => {
                console.log(`ошибка при загрузке данных: ${e}`);
            });
    },[]);


    React.useEffect(() => {
        api.getUserInfo()
            .then(data => {
                setCurrentUser(data);
            })
            .catch((e) => {
                console.log(`ошибка при загрузке данных: ${e}`);
            });
    }, []);

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.setLike(card._id, isLiked)
            .then((newCard) => {
                setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
            })
            .catch((e) => {
                console.log(`ошибка при загрузке данных: ${e}`);
            });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards((cards) => cards.filter((item) => item !== card));
            })
            .catch((e) => {
                console.log(`ошибка при загрузке данных: ${e}`);
            });
    }

    function handleUpdateUser(info) {
        api.setUserInfo(info)
            .then((info) => {
                setCurrentUser(info);
            })
            .then(() => {
                closeAllPopups();
            })
            .catch((e) => {
                console.log(`ошибка при загрузке данных: ${e}`);
            });
    }

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
        setImagePopupOpen(false);
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header />
                <Main
                    onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                    cards={cards}
                />
                <Footer />
                <PopupWithForm name='new-avatar' title='Обновить аватар' submitBtnText='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                    <div className="input input_type_new-avatar">
                        <input id="popup__input_avatar_link" required className="popup__input popup__input_avatar_link" type="url" name="avatar" placeholder="Ссылка на аватар"/>
                    </div>
                </PopupWithForm>

                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

                <PopupWithForm name='add-card' title='Новое место' submitBtnText='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                        <div className="input input_type_add-card">
                            <input id="popup__input_place_name" required className="popup__input popup__input_place_name" type="text" name="name" placeholder="Название"/>
                            <span id="popup__input_place_name--error"/>
                            <input id="popup__input_place_link" required className="popup__input popup__input_place_link" type="url" name="link" placeholder="Ссылка на картинку"/>
                            <span id="popup__input_place_link--error"/>
                        </div>
                </PopupWithForm>
                <PopupWithForm name='delete-img' title='Вы уверены?' submitBtnText='Да' />
                <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard}/>

            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from "../utils/api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";


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

    function handleUpdateAvatar(avatar) {
        api.addNewAvatar(avatar)
            .then((avatar) => {
                setCurrentUser(avatar);
            })
            .then(() => {
                closeAllPopups();
            })
            .catch((e) => {
                console.log(`ошибка при загрузке данных: ${e}`);
            });
    }

    function handleAddPlaceSubmit(newCard) {
        api.addNewCard(newCard)
            .then((newCard) => {
                setCards([newCard, ...cards]);
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

                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>

                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

                <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>

                <PopupWithForm name='delete-img' title='Вы уверены?' submitBtnText='Да' />

                <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard}/>

            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
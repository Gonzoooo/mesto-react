import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
    return (
        <div className="App">
            <body className="page">
            <Header />
            <Main />
            <Footer />
            <>
                <PopupWithForm name='new-avatar' title='Обновить аватар' value='Сохранить'>
                    <div className="input input_type_new-avatar">
                        <input id="popup__input_avatar_link" required className="popup__input popup__input_avatar_link" type="url" name="avatar" placeholder="Ссылка на аватар"/>
                        <span id="popup__input_avatar_link--error"/>
                    </div>
                </PopupWithForm>
                <PopupWithForm name='edit-profile' title='Редактировать профиль' value='Сохранить'>
                    <div className="input input_type_edit-profile">
                        <input id="popup__input_text_name" required className="popup__input popup__input_text_name" type="text" name="name" value="Жак-Ив Кусто" placeholder="Имя"/>
                        <span id="popup__input_text_name--error"/>
                        <input id="popup__input_text_job" required className="popup__input popup__input_text_job" type="text" name="about" value="Исследователь океана" placeholder="О себе"/>
                        <span id="popup__input_text_job--error"/>
                    </div>
                </PopupWithForm>
                <PopupWithForm name='add-card' title='Новое место' value='Создать'>
                    <div className="input input_type_add-card">
                        <input id="popup__input_place_name" required className="popup__input popup__input_place_name" type="text" name="name" placeholder="Название"/>
                        <span id="popup__input_place_name--error"/>
                        <input id="popup__input_place_link" required className="popup__input popup__input_place_link" type="url" name="link" placeholder="Ссылка на картинку"/>
                        <span id="popup__input_place_link--error"/>
                    </div>
                </PopupWithForm>
                <PopupWithForm name='delete-img' title='Вы уверены?' value='LF' />
            </>
            <ImagePopup />
            </body>
        </div>
    );
}

export default App;
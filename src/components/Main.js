import React from "react";
import avatar from '../images/image.jpg';
import buttonAdd from '../images/Addbutton.svg';
import buttonEdit from '../images/Editbutton.svg';

function Main() {
    function handleEditAvatarClick(){
        const popupAvatar = document.querySelector('.popup_type_new-avatar');
        popupAvatar.classList.add('popup_visible');
    }

    function handleEditProfileClick(){
        const popupProfile = document.querySelector('.popup_type_edit-profile');
        popupProfile.classList.add('popup_visible');
    }

    function handleAddPlaceClick(){
        const popupCreate = document.querySelector('.popup_type_add-card');
        popupCreate.classList.add('popup_visible');
    }

    return (
        <div className="Main">
            <main className="content">

                <section className="profile">
                    <button className="profile__avatar-button" onClick={handleEditAvatarClick}/>
                    <img src={avatar} className="profile__avatar" alt="Аватар"/>
                    <div className="profile__info">
                        <h1 className="profile__name">Жак ив кусто</h1>
                        <button type="button" className="profile__edit-button" onClick={handleEditProfileClick}>
                            <img src={buttonEdit} alt='Кнопка редактировани'/></button>
                        <p className="profile__job">Исследователь океана</p>
                    </div>
                    <button type="button" className="profile__add-button" onClick={handleAddPlaceClick}>
                        <img src={buttonAdd} alt='Кнопка добавления'/></button>
                </section>

                <div className="elements">
                    <template className="element">
                        <div className="element__container">
                            <button aria-label="Trash" type="button" className="element__trash"/>
                            <img className="element__img" alt='fgh'/>
                            <div className="element__group">
                                <h2 className="element__text"/>
                                <button aria-label="Like" type="button" className="element__like"/>
                                <div className="element__like-count">0</div>
                            </div>
                        </div>
                    </template>
                </div>

            </main>
        </div>
    );
}

export default Main;
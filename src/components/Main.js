import avatar from '../images/image.jpg';
import buttonAdd from '../images/Addbutton.svg';
import buttonEdit from '../images/Editbutton.svg';
import buttonClose from '../images/CloseIcon.svg';

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

                <div className="popup popup_type_new-avatar">
                    <div className="overlay"/>
                    <form className="form" name="input" noValidate>
                        <button aria-label="Close" type="button" className="form__close-icon form__close-icon_for_avatar">
                            <img src={buttonClose} className="form__close"
                                 alt="Крестик закрытия окна"/></button>
                        <h2 className="form__title">Обновить аватар</h2>
                        <div className="input input_type_new-avatar">
                            <input id="popup__input_avatar_link" required className="popup__input popup__input_avatar_link"
                                   type="url" name="avatar" placeholder="Ссылка на аватар"/>
                            <span id="popup__input_avatar_link--error"/>
                            <button className="popup__submit-button" type="submit" name="button">Сохранить</button>
                        </div>
                    </form>
                </div>

                <div className="popup popup_type_edit-profile">
                    <div className="overlay"/>
                    <form className="form" name="input" noValidate>
                        <button aria-label="Close" type="button" className="form__close-icon form__close-icon_for_profile">
                            <img src={buttonClose} className="form__close"
                                 alt="Крестик закрытия окна"/></button>
                        <h2 className="form__title">Редактировать профиль</h2>
                        <div className="input input_type_edit-profile">
                            <input id="popup__input_text_name" required
                                   className="popup__input popup__input_text_name" type="text" name="name"
                                   value="Жак-Ив Кусто" placeholder="Имя"/>
                            <span id="popup__input_text_name--error"/>
                            <input id="popup__input_text_job" required
                                   className="popup__input popup__input_text_job" type="text" name="about"
                                   value="Исследователь океана" placeholder="О себе"/>
                            <span id="popup__input_text_job--error"/>
                            <button className="popup__submit-button" type="submit" name="button">Сохранить</button>
                        </div>
                    </form>
                </div>

                <div className="popup popup_type_add-card">
                    <div className="overlay"/>
                    <form className="form" name="input" noValidate>
                        <button aria-label="Close" type="button" className="form__close-icon form__close-icon_for_edit"><img
                            src={buttonClose} className="form__close"
                            alt="Крестик закрытия окна"/></button>
                        <h2 className="form__title">Новое место</h2>
                        <div className="input input_type_add-card">
                            <input id="popup__input_place_name" required
                                   className="popup__input popup__input_place_name" type="text" name="name"
                                   placeholder="Название"/>
                            <span id="popup__input_place_name--error"/>
                            <input id="popup__input_place_link" required
                                   className="popup__input popup__input_place_link" type="url" name="link"
                                   placeholder="Ссылка на картинку"/>
                            <span id="popup__input_place_link--error"/>
                            <button className="popup__submit-button popup__submit-button_create" type="submit"
                                    name="button">Создать
                            </button>
                        </div>
                    </form>
                </div>

                <div className="popup popup_type_delete-img">
                    <div className="overlay"/>
                    <form className="form" name="input" noValidate>
                        <button aria-label="Close" type="button" className="form__close-icon form__close-icon_for_delete">
                            <img src={buttonClose} className="form__close"
                                 alt="Крестик закрытия окна"/></button>
                        <h2 className="form__title">Вы уверены?</h2>
                        <button className="popup__submit-button popup__submit-button_delete" type="submit"
                                name="button">Да
                        </button>
                    </form>
                </div>

                <div className="popup popup_type_show-image">
                    <div className="overlay"/>
                    <div className="form form_show-image">
                        <button aria-label="Close" type="button" className="form__close-icon form__close-icon_for_img"><img
                            src={buttonClose} className="form__close"
                            alt="Крестик закрытия окна"/></button>
                        <img className="form__img" alt='bn'/>
                        <h2 className="form__title form__title_zoom"/>
                    </div>
                </div>

            </main>
        </div>
    );
}

export default Main;
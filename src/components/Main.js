import React from "react";
import buttonAdd from '../images/Addbutton.svg';
import buttonEdit from '../images/Editbutton.svg';

function Main(props) {
    return (
        <div className="Main">
            <main className="content">

                <section className="profile">
                    <button className="profile__avatar-button" onClick={props.onEditAvatar}/>
                    <img src={'avatar'} style={{ backgroundImage: `url(${props.userAvatar})` }} className="profile__avatar" alt="Аватар"/>
                    <div className="profile__info">
                        <h1 className="profile__name">{`${props.userName}`}</h1>
                        <button type="button" className="profile__edit-button" onClick={props.onEditProfile}><img src={buttonEdit} alt='Кнопка редактировани'/></button>
                        <p className="profile__job">{`${props.userDescription}`}</p>
                    </div>

                    <button type="button" className="profile__add-button" onClick={props.onAddPlace}><img src={buttonAdd} alt='Кнопка добавления'/></button>
                </section>

                <div className="elements">
                    <template className="element">
                        <div className="element__container">
                            <button aria-label="Trash" type="button" className="element__trash"/><img className="element__img" alt='Урна'/>
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
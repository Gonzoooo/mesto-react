import React from "react";
import buttonAdd from '../images/Addbutton.svg';
import buttonEdit from '../images/Editbutton.svg';
import Card from "./Card";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">

            <section className="profile">
                    <button className="profile__avatar-button" onClick={props.onEditAvatar}/>
                    <img src={currentUser.avatar} className="profile__avatar" alt="Аватар"/>
                    <div className="profile__info">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button type="button" className="profile__edit-button" onClick={props.onEditProfile}><img src={buttonEdit} alt='Кнопка редактировани'/></button>
                        <p className="profile__job">{currentUser.about}</p>
                    </div>

                    <button type="button" className="profile__add-button" onClick={props.onAddPlace}><img src={buttonAdd} alt='Кнопка добавления'/></button>
                </section>

            <ul className="elements">
                {cards.map((card) => (
                <Card name={card} link={card} likes={card} key={card._id} onCardClick={props.onCardClick} card={card}/>
                ))}
            </ul>
        </main>
    );
}

export default Main;
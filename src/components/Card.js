import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = props.card.owner._id === currentUser._id;

// Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `${isOwn ? 'element__trash-visible' : 'element__trash'}`
    );

    function handleClick() {
        props.onCardClick(props.card);
    }

    return(
        <li className="element">
            <div className="element__container">
                <button aria-label="Trash" type="button" className={cardDeleteButtonClassName}/>
                <img src={props.card.link} alt={props.card.name} className="element__img" onClick={handleClick}/>
                <div className="element__group">
                    <h2 className="element__text">{props.card.name}</h2>
                    <button aria-label="Like" type="button" className="element__like"/>
                    <div className="element__like-count">{props.card.likes.length}</div>
                </div>
            </div>
        </li>
    )
}

export default Card
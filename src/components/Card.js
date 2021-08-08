import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = props.card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `element__trash ${isOwn ? 'element__trash-visible' : 'element__trash'}`
    );

    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (
        `element__like ${isLiked ? 'element__like_active' : 'element__like'}`
    );

    function handleClick() {
        props.onCardClick(props.card);
    }
    function handleLikeClick() {
        props.onCardLike(props.card);
    }

    return(
        <li className="element">
            <div className="element__container">
                <button aria-label="Trash" type="button" className={cardDeleteButtonClassName}/>
                <img src={props.card.link} alt={props.card.name} className="element__img" onClick={handleClick}/>
                <div className="element__group">
                    <h2 className="element__text">{props.card.name}</h2>
                    <button aria-label="Like" type="button" onClick={handleLikeClick} className={cardLikeButtonClassName}/>
                    <div className="element__like-count">{props.card.likes.length}</div>
                </div>
            </div>
        </li>
    )
}

export default Card
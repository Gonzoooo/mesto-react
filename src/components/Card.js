import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);

    function handleClick() {
        props.onCardClick(props.card);
    }

    return(
        <li className="element">
            <div className="element__container">
                <button aria-label="Trash" type="button" className="element__trash"/>
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
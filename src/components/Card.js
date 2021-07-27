import React from "react";

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }
    return(
        <li className="element">
            <div className="element__container">
                <button aria-label="Trash" type="button" className="element__trash"/>
                <img src={props.link} alt="Изображение на карточке" className="element__img" onClick={handleClick}/>
                    <div className="element__group">
                        <h2 className="element__text">{props.name}</h2>
                        <button aria-label="Like" type="button" className="element__like"/>
                        <div className="element__like-count">{props.likes}</div>
                    </div>
            </div>
        </li>
    )
}

export default Card
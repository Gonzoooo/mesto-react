import React from "react";
import buttonClose from "../images/CloseIcon.svg";

function ImagePopup(props){
    return(
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_visible':''}`}>
            <div className="overlay"/>
            <div className="form form_show-image">
                <button aria-label="Close" type="button" onClick={props.onClose} className="form__close-icon form__close-icon_for_img"><img src={buttonClose} className="form__close" alt="Крестик закрытия окна"/></button>
                <img src={props.card.link} className="form__img" alt={props.card.name}/>
                <h2 className="form__title form__title_zoom">{props.card.name}</h2>
            </div>
        </div>
    )
}

export default ImagePopup;
import React from "react";
import buttonClose from "../images/CloseIcon.svg";

function PopupWithForm(props) {
    return (
            <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_visible':''}`}>
                <div className="overlay"/>
                <form className="form" name={`${props.name}`} noValidate>
                    <button aria-label="Close" type="button" className="form__close-icon" onClick={props.onClose}>
                        <img src={buttonClose} className="form__close" alt="Крестик закрытия окна"/></button>
                    <h2 className="form__title">{`${props.title}`}</h2>
                    {props.children}
                    <button className="popup__submit-button" type="submit" name="button">{`${props.value}`}</button>
                </form>
            </div>
    )
}

export default PopupWithForm;
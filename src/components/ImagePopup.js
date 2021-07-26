import React from "react";
import buttonClose from "../images/CloseIcon.svg";

function ImagePopup(){
    return(
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
    )
}

export default ImagePopup;
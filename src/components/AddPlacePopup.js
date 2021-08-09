import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup(props) {
    const cardNameRef = React.useRef();
    const cardImgRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name: cardNameRef.current.value,
            link: cardImgRef.current.value,
        });
    }

    return(
        <PopupWithForm name='add-card' title='Новое место' onSubmit={handleSubmit} submitBtnText='Создать' isOpen={props.isOpen} onClose={props.onClose}>
            <div className="input input_type_add-card">
                <input id="popup__input_place_name" ref={cardNameRef} required className="popup__input popup__input_place_name" type="text" name="name" placeholder="Название"/>
                <span id="popup__input_place_name--error"/>
                <input id="popup__input_place_link" ref={cardImgRef} required className="popup__input popup__input_place_link" type="url" name="link" placeholder="Ссылка на картинку"/>
                <span id="popup__input_place_link--error"/>
            </div>
        </PopupWithForm>
    )
}

export default AddPlacePopup;
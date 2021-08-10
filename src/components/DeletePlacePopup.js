import PopupWithForm from "./PopupWithForm";
import React from "react";

function DeletePlacePopup(props) {

    function handleSubmit(e) {
        e.preventDefault();
        props.onDeletePlace();
    }

    return(
        <PopupWithForm name='delete-img' title='Вы уверены?' submitBtnText='Да' onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose}/>
    )
}

export default DeletePlacePopup;
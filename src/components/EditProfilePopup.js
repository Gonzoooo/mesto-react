import PopupWithForm from "./PopupWithForm";
import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
            name: name,
            about: description,
        });
    }

    return(
        <PopupWithForm name='edit-profile' title='Редактировать профиль' submitBtnText='Сохранить' onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose}>
            <div className="input input_type_edit-profile">
                <input id="popup__input_text_name" required value={name} onChange={handleChangeName} className="popup__input popup__input_text_name" type="text" name="name" placeholder="Имя"/>
                <span id="popup__input_text_name--error"/>
                <input id="popup__input_text_job" required value={description} onChange={handleChangeDescription} className="popup__input popup__input_text_job" type="text" name="about" placeholder="О себе"/>
                <span id="popup__input_text_job--error"/>
            </div>
        </PopupWithForm>
    )
}

export default EditProfilePopup;
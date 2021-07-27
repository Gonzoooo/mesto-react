import React from "react";
import buttonAdd from '../images/Addbutton.svg';
import buttonEdit from '../images/Editbutton.svg';
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = React.useState({});
    const [userAvatar, setUserAvatar] = React.useState({});
    const [userDescription, setUserDescription] = React.useState({});

    React.useEffect(() => {
        api.getUserInfo()
            .then(data => {
                console.log(data);
                setUserName(data.name);
                setUserAvatar(data.avatar);
                setUserDescription(data.about);
            })
    }, []);

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getInitialCards()
            .then(data => {
                console.log(data);
                setCards(data);
            })
    },[]);

    return (
        <main className="content">

            <section className="profile">
                    <button className="profile__avatar-button" onClick={props.onEditAvatar}/>
                    <img src={userAvatar} className="profile__avatar" alt="Аватар"/>
                    <div className="profile__info">
                        <h1 className="profile__name">{`${userName}`}</h1>
                        <button type="button" className="profile__edit-button" onClick={props.onEditProfile}><img src={buttonEdit} alt='Кнопка редактировани'/></button>
                        <p className="profile__job">{`${userDescription}`}</p>
                    </div>

                    <button type="button" className="profile__add-button" onClick={props.onAddPlace}><img src={buttonAdd} alt='Кнопка добавления'/></button>
                </section>

            <ul className="elements">
                {cards.map((card) => (
                <Card name={card.name} link={card.link} likes={card.likes.length} key={card._id} onCardClick={props.onCardClick} card={card}/>
                ))}
            </ul>
        </main>
    );
}

export default Main;
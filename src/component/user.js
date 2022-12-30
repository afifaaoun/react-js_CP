import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHeart, faTrash, faHouse} from "@fortawesome/free-solid-svg-icons"

const User =() =>{
    return (
        <div className="user">
            <div className="icones">
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faTrash} />
                <FontAwesomeIcon icon={faHouse} />
            </div>
            <h1 className="name"> Juddy Abbott</h1>
            <h2 className="description"> brief description</h2>
        </div>
    )
}

export default User

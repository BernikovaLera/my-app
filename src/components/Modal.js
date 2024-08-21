import React, { useState } from "react";
import "./css/Modal.css";

const Modal = function (props) {
    return (
        <div className="Modal">
            <div className="Modal-window">
                <h3 className="Modal-header">{props.title}</h3>
                <div className="Modal-content">
                    {props.children}
                </div>
                <div className="Modal-footer">
                    {props.buttons}
                </div>
            </div>
        </div>
    );
};

export default Modal;
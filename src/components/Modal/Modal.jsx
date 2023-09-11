import { createPortal } from "react-dom";
import React, { Component } from "react";


const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {


    componentDidMount() {
        window.addEventListener()
    }

    render() {
        return createPortal(
            <div className="Overlay">
                <div className="Modal">
                    {this.props.children}
                </div>
            </div>, modalRoot
        )
    }

}
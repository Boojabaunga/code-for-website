import { ReactNode, Children, cloneElement, isValidElement } from 'react';
import Modal from 'react-modal';
import { customStyles } from './type';
interface Props {
  isOpen: boolean;
  closeDialog? : () => void;
  children: ReactNode
}

const Dialog = (props : Props)=> {
    return (
        <div>
            <Modal
              isOpen={props.isOpen}
              closeTimeoutMS={200}
              shouldCloseOnOverlayClick  = {true}
              shouldCloseOnEsc = {true}
              onRequestClose = {props.closeDialog}
              style= {customStyles}
            >
              {props.children}
            </Modal>
        </div>
    )
}

export default Dialog;
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#__next');


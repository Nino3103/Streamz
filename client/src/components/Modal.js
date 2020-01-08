import React from 'react'
import ReactDOM from 'react-dom'
import history from '../history'

const Modal = props => {
  return ReactDOM.createPortal(
    <div  
    // onClick={() => history.push('/')}
    onClick={props.onDismiss}
    className = "ui dimmer modals visible active"
    >
      <div 
      // prevent the event propagation of the parent div
      onClick={(e) => e.stopPropagation()}
      className = "ui standard modal visible active"
      >
        <div className ="header"> {props.title}</div>
        <div className = "content"> {props.description}</div>
        <div className = "action ui segment">
          {props.actions}
        </div>
        
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal 

// reminder : createPortal takes two arguments
// 1) JSX elements
// 2) parent element to append to the JSX 


// then add to the public index.html file : 
// <div id="modal"></div>
// after 
// <div id="root"></div>
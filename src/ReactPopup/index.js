import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const ReactPopup = () => (
  <div>
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button className="trigger-button" type="button">
            RULES
          </button>
        }
      >
        {close => (
          <div>
            <div className="closeButtonContainer">
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                <IoMdClose className="icon" />
                <span>close</span>
              </button>
            </div>
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
                className="rules-img"
              />
            </div>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default ReactPopup

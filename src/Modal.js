import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      zIndex: 3,
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 10,
      maxWidth: 600,
      minHeight: 400,
      margin: '0 auto'
    };

    const closeBtn = {
        float: "right",
        backgroundColor: "red",
        marginRight: 5,
        marginTop: 2,
        color: "white",
        borderRadius: "20px",
        fontSize: "1.6em"
    };

    const modalHeader = {
        width: "100%",
        height: "40px",
        borderRadius: 5,
        backgroundColor: "black",
        textAlign: "center"
    }
    const modalTitle = {
        color: "white",
        fontSize: "1.6em"
    }

    return (
        <div className="backdrop" style={backdropStyle}>
            <div className="modal" style={modalStyle}>
                <div className="header" style={modalHeader}>
                    <span style={modalTitle}>{this.props.title}</span>
                    <button  style={closeBtn} onClick={this.props.onClose}>
                        X
                    </button>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node
};

export default Modal;
const Popup = ({ popupWindow, children, onPopupClick }) => {
  return popupWindow ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='btn close-btn' onClick={onPopupClick}>
          x
        </button>
        {children}
      </div>
    </div>
  ) : (
    ''
  );
};

export default Popup;

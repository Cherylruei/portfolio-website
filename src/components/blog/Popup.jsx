const Popup = ({ trigger, setTrigger, children }) => {
  return trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        <button className='btn close-btn' onClick={() => setTrigger(!trigger)}>
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

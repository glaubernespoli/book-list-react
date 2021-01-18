import './Alert.css';

const Alert = ({alert}) => {
    return (
      <div>
        {alert.show && <h2 className={alert.type}> {alert.message}</h2>}
      </div>
    );
}

export default Alert;
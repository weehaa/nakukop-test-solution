import styles from './ErrorIndicator.module.css';
import icon from './fail.png';

interface ErrorIndicatorProps {
    message?: string
}

const ErrorIndicator = ({message}: ErrorIndicatorProps) => {
  return (
    <div className={styles.errorIndicator}>
      {/*<img src={icon} alt="error icon"/>*/}
      <span className={styles.boom}>Error</span>
      <span>
        {message || 'something has gone wrong'}
      </span>
    </div>
  );
};

export default ErrorIndicator;

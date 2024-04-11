import FirstComponentProps from './firstComponent.types';
import styles from './firstComponent.module.css';

export default function FirstComponent({ firstName, lastName, img }: FirstComponentProps) {
  return (
    <div className={styles['fc-card']}>
      {img && <img className={styles['fc-img']} src={img} alt={`${firstName} ${lastName}`} />}
      <div className={styles['fc-content']}>
        <span aria-label="firstName">{firstName ? firstName : 'Missing First Name'}</span>
        <span aria-label="lastName">{lastName ? lastName : 'Missing Last Name'}</span>
      </div>
    </div>
  );
}

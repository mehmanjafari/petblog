import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Popup.module.css';
import closePopupIcon from '@assets/icons/reset.svg';
import type { ReactNode } from 'react';

export default function Popup({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const { state } = useLocation();

  const closeModal = () => navigate(state?.background?.pathname || '/');

  return (
    <div onClick={closeModal} className={styles.popup}>
      <div onClick={(e) => e.stopPropagation()} className={styles.popup__content}>
        <div className={styles.popup__close}>
          <img src={closePopupIcon} alt="Закрыть" />
        </div>
        {children}
      </div>
    </div>
  );
}

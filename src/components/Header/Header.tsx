import Search from '@components/Search/Search';
import styles from './Header.module.css';
import logo from '@assets/logo.svg';
import addPostIcon from '@assets/icons/add-post.svg';
import favoriteIcon from '@assets/icons/favorite.svg';
import profileIcon from '@assets/icons/profile.svg';
import { IActiveProps } from '@src/types/props';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ stateIsActive, setStateIsActive }: IActiveProps) {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} ${'_container'}`}>
        <div className={`${styles.header__body} ${styles.bodyHeader}`}>
          <Link to={'/'} className={styles.bodyHeader__logo}>
            <img src={logo} alt="Логотип" />
            <span>PetBlog</span>
          </Link>
          <Search stateIsActive={stateIsActive} setStateIsActive={setStateIsActive} />
          <div className={`${styles.bodyHeader__activity} ${styles.activity}`}>
            <a href="#" className={styles.activity__btn}>
              <img src={addPostIcon} alt="Создание поста" />
            </a>
            <a href="#" className={styles.activity__btn}>
              <img src={favoriteIcon} alt="Избранное" />
            </a>
            <Link
              to={'/sign-in'}
              state={{ backgroundLocation: location }}
              className={styles.activity__btn}
            >
              <img src={profileIcon} alt="Профиль" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

import { Link } from 'react-router-dom';
import styles from '../SignInSignUp.module.css';

export default function SignUp() {
  return (
    <div className={styles.auth}>
      <div className={styles.auth__title}>Регистрация</div>
      <div className={styles.auth__subTitle}>
        Ещё нет аккаунта? <Link to={'/sign-in'}>Войти</Link>
      </div>
      <form action="#" className={styles.authForm}>
        <input
          name="username"
          required
          autoComplete="username"
          placeholder="Имя пользователя"
          type="text"
          className={styles.authForm__input}
        />
        <input
          name="password"
          required
          autoComplete="current-password"
          placeholder="Пароль"
          type="password"
          className={styles.authForm__input}
        />
        <input
          name="confirmPassword"
          required
          autoComplete="new-password"
          placeholder="Подтвердите пароль"
          type="password"
          className={styles.authForm__input}
        />
        <button className={styles.authForm__btn}>Регистрация</button>
      </form>
    </div>
  );
}

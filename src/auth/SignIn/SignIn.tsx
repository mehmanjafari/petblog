import { Link } from 'react-router-dom';
import styles from '../SignInSignUp.module.css';

export default function SignIn() {
  return (
    <div className={styles.auth}>
      <div className={styles.auth__title}>Вход</div>
      <div className={styles.auth__subTitle}>
        Ещё нет аккаунта? <Link to={'/sign-up'}>Зарегистрироваться</Link>
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
          placeholder="Введите пароль"
          type="password"
          className={styles.authForm__input}
        />
        <label className={styles.authForm__checkbox}>
          <input type="checkbox" name="rememberMe" />
          <span>Запомнить меня</span>
        </label>
        <button className={styles.authForm__btn}>Войти</button>
      </form>
    </div>
  );
}

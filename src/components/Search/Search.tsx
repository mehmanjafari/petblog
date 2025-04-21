import styles from './Search.module.css';
import searchIcon from '@assets/icons/search.svg';
import resetIcon from '@assets/icons/reset.svg';
import { IActiveProps } from '@src/types/props';

const suggestionsData = [
  { id: 1, text: 'Как автоматизировать процессы в веб-разработке' },
  { id: 2, text: 'Как адаптировать сайт под любые устройства' },
  { id: 3, text: 'Как архитектурно правильно строить React-проекты' },
  { id: 4, text: 'Как анимировать интерфейсы красиво и быстро' },
  { id: 5, text: 'Как анимировать интерфейсы красиво и быстро' },
  { id: 6, text: 'Как активно продвигать свой блог без бюджета' },
  { id: 7, text: 'Как активно продвигать свой блог без бюджета' },
  { id: 8, text: 'Как активно продвигать свой блог без бюджета' },
  { id: 9, text: 'Как активно продвигать свой блог без бюджета' },
  { id: 10, text: 'Как активно продвигать свой блог без бюджета' },
];

export default function Search({ stateIsActive, setStateIsActive }: IActiveProps) {
  return (
    <div className={styles.search}>
      <div className={styles.search__body}>
        <div className={styles.search__output}>
          <form action="#" className={styles.search__form}>
            <input
              type="text"
              onChange={(e) =>
                setStateIsActive((prev) => ({ ...prev, searchActive: e.target.value }))
              }
              placeholder="Введите запрос"
              value={stateIsActive.searchActive}
              className={styles.search__input}
            />
          </form>
          <button
            onClick={() => setStateIsActive((prev) => ({ ...prev, searchActive: '' }))}
            className={`${styles.search__closeBtn} ${stateIsActive.searchActive ? 'active' : ''}`}
          >
            <img src={resetIcon} alt="Очистить поиск" />
          </button>
        </div>
        <button className={styles.search__searchBtn}>
          <img src={searchIcon} alt="Поиск" />
        </button>
      </div>
      <div
        className={`${styles.search__tippy} ${styles.tippySearch} ${stateIsActive.searchActive ? 'active-tippy' : ''}`}
      >
        <ul className={styles.tippySearch__list}>
          {suggestionsData.map((suggestion) => (
            <li key={suggestion.id} className={styles.tippySearch__item}>
              <img src={searchIcon} alt="Подсказка поиск" />
              <div>{suggestion.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

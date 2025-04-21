import { TAGS_DATA } from '@constants/tags';
import styles from './Tags.module.css';
import { Link } from 'react-router-dom';

export default function Tags() {
  return (
    <section className={styles.tags}>
      <div className={`${styles.tags__container} ${'_container'}`}>
        <ul className={styles.tags__items}>
          {TAGS_DATA.map((tag) => (
            <li className={styles.tags__item} key={tag.id}>
              <Link to={`/tag/${encodeURIComponent(tag.path.toLowerCase())}`}>{tag.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

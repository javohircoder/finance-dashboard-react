import Pots from './Pots/Pots.jsx';
import styles from './PostSection.module.scss';
import SvgArrowRight from '../../../UI/icons/SvgArrowRight.jsx';

function PostSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h4 className={styles.title}>Post</h4>
        <a className={styles.link} href="#">
          See Details
          <span className={styles.icon}>
            <SvgArrowRight />
          </span>
        </a>
      </div>

      <div className={styles.content}>
        <Pots />
      </div>
    </section>
  );
}

export default PostSection;

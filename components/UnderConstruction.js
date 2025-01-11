// Under Construction Page Component
import styles from '../styles/underConstruction.module.css';

const UnderConstruction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Under Construction</h1>
        <p className={styles.message}>Site nearly ready. We're working hard to launch soon!</p>
        <div className={styles.progressContainer}>
          <progress className={styles.progressBar} value="80" max="100"></progress>
          <span className={styles.progressPercentage}>80%</span>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;

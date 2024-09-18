import styles from './Rotate.module.scss';

const Rotate = () => {
  return (
    <form className={styles.rotate}>
      <h3 className={styles.rotate_nameToolkit}>Rotate angle</h3>
      <input
        type="number"
        name="rotate"
        className={styles.rotate_input}
        max="360"
        min="0"
      />
      <p className={styles.rotate_description}>Supportive Text</p>
    </form>
  );
};

export default Rotate;

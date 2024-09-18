import styles from './Button.module.scss';

interface IButton {
  text: string;
  disabled?: boolean;
}

const Button = (props: IButton) => {
  const { text, disabled = false } = props;

  return (
    <button className={styles.button} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;

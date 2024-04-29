import styles from './template.module.css';
export default function template(props) {
  return (
        <div id={styles.appletPage}>
            {props.children}
        <div id={styles.about}>
            About This Project: ksdjgiodjsgisugaiorsjgyioju
        </div>
        </div>
  );
}

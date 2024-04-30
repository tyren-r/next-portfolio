import styles from './template.module.css';
export default function template(props) {
  return (
        <div id={styles.projectMain}>
        <div id={styles.applet}>
            {props.children}
          </div>
        </div>
  );
}

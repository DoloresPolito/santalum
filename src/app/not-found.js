import styles from "./styles.module.scss"

export default function NotFound() {
    return (
      <div className={styles.notfoundsection}>
        <div className={styles.notfoundcontainer}>

     <p>404</p>
        <h1>Página no encontrada</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <a href="/" style={{ color: "blue", textDecoration: "underline" }}>
          Volver al inicio
        </a>
        </div>
      </div>
    );
  }
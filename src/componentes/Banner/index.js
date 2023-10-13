import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png"

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Mundo!</h1>
        <p className={styles.paragrafo}>
          Sint minim nulla consequat in esse adipisicing enim anim culpa esse sunt esse laboris veniam. Eu laboris enim adipisicing cillum id ex. Ex sint et anim tempor.
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt=""
              />
              <img className={styles.minhaFoto} src={minhaFoto} alt="Foto do Antonio Evaldo Sorrindo" />
      </div>
    </div>
  );
}

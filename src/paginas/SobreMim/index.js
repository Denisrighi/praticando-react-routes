import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo={"Sobre mim"}>
      <h3 className={styles.subtitulo}>Olá, eu sou o Antonio!!</h3>
      <img
        src={fotoSobreMim}
        alt="Foto do Antonio Evaldo sorrindo"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Irure eiusmod aliqua deserunt ea occaecat consequat cupidatat eiusmod
        nulla cupidatat. Aute do nostrud cupidatat elit mollit laboris sint
        irure sit cillum nulla tempor. In labore eiusmod quis veniam eiusmod
        elit do occaecat tempor elit ex adipisicing.
      </p>

      <p className={styles.paragrafo}>
        Labore mollit Lorem consequat laboris commodo non. Eu sunt esse officia
        ullamco enim ex eiusmod reprehenderit adipisicing adipisicing velit
        incididunt. In aliquip ad nulla id labore proident in.
      </p>

      <p className={styles.paragrafo}>
        Aliqua Lorem excepteur anim sit incididunt nostrud mollit labore in est
        veniam. Reprehenderit non elit enim culpa magna adipisicing excepteur
        tempor aliquip voluptate minim in. Adipisicing sit aliquip aliquip non
        elit laboris elit sint Lorem labore magna. Labore officia qui deserunt
        ut amet aliqua enim culpa sunt do ipsum excepteur nostrud. Cillum aute
        enim duis consectetur ullamco dolore aliqua est sit sunt quis enim
        nostrud. Qui adipisicing adipisicing adipisicing non.
      </p>

      <p className={styles.paragrafo}>
        Est elit pariatur id in quis sint est labore quis anim. Ipsum do cillum
        enim sint proident laborum est. Veniam minim occaecat magna aliqua id
        est ut labore. Laboris adipisicing esse duis pariatur aliqua minim dolor
        esse mollit laborum. Aliqua deserunt cillum voluptate Lorem fugiat
        reprehenderit anim enim excepteur ad.
      </p>

      <p className={styles.paragrafo}>
        Ullamco qui enim irure elit adipisicing ad nostrud nisi duis laborum
        veniam duis. Adipisicing cillum reprehenderit culpa dolor Lorem veniam
        ipsum excepteur fugiat proident sit deserunt nisi anim. Occaecat
        exercitation velit excepteur ut. Mollit id cillum aliquip magna
        exercitation elit eiusmod anim fugiat quis incididunt laborum fugiat.
        Eiusmod in labore ullamco non ipsum veniam voluptate laborum culpa elit
        incididunt aute consectetur laborum. Laborum commodo do exercitation
        nulla voluptate quis qui minim et ullamco pariatur anim non adipisicing.
        Lorem et nostrud qui veniam dolor ad consequat dolore cillum sint
        ullamco eiusmod. Eu elit do Lorem velit qui et ipsum et. Proident tempor
        cupidatat incididunt anim consequat cillum sit nisi dolore magna do do
        deserunt nisi.
      </p>
      <p className={styles.paragrafo}>
        Ullamco qui enim irure elit adipisicing ad nostrud nisi duis laborum
        veniam duis. Adipisicing cillum reprehenderit culpa dolor Lorem veniam
        ipsum excepteur fugiat proident sit deserunt nisi anim. Occaecat
        exercitation velit excepteur ut. Mollit id cillum aliquip magna
        exercitation elit eiusmod anim fugiat quis incididunt laborum fugiat.
        Eiusmod in labore ullamco non ipsum veniam voluptate laborum culpa elit
        incididunt aute consectetur laborum. Laborum commodo do exercitation
        nulla voluptate quis qui minim et ullamco pariatur anim non adipisicing.
        Lorem et nostrud qui veniam dolor ad consequat dolore cillum sint
        ullamco eiusmod. Eu elit do Lorem velit qui et ipsum et. Proident tempor
        cupidatat incididunt anim consequat cillum sit nisi dolore magna do do
        deserunt nisi.
      </p>
    </PostModelo>
  );
}

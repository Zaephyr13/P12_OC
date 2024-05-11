import { useTheme } from '../../utils/hooks/index'
import DownloadBtn from '../../components/downloadbtn/downloadbtn'
import MaPhoto from '../../assets/photo/moi.webp'
import GitHub from '../../assets/icones/github.png'
import DarkGitHub from '../../assets/icones/darkgithub.png'
import LinkedIn from '../../assets/icones/linkedin.png'
import DarkLinkedIn from '../../assets/icones/darklinkedin.png'
import Twitter from '../../assets/icones/twitter.png'
import DarkTwitter from '../../assets/icones/darktwitter.png'
import ImageStyle from '../../utils/style/imagestyle'
import '../../sass/containers/_introduction.scss'

const Introduction = () => {
  const { darkMode } = useTheme()

  return (
    <section className="intro">
      <h2 id="a-propos" className="intro__title">
        À propos
      </h2>
      <div className="intro__desc">
        <p>
          Passionné par les nouvelles technologies, j'ai choisi de me
          reconvertir professionnellement après 10 années passées dans
          l'automatique industrielle.
          <br />
          Et ainsi, de suivre ma passion pour la programmation et d'acquérir de
          nouvelles compétences qui viennent compléter celles acquises pendant
          mes années en tant qu'ingénieur automaticien'.
        </p>
        <p>
          Afin d'évoluer dans le domaine du développement web, j’ai intégré la
          formation certifiante intégrateur web niveau Bac +2 d’OpenClassrooms
          au cours de laquelle j’ai acquis des compétences solides en HTML, CSS,
          JavaScript et React.
        </p>
        <p>
          Je suis très enthousiaste à l’idée de découvrir de nouvelles
          opportunités et développer de nouvelles compétences dans ce domaine
          tout en perfectionnant celles déjà acquises.
        </p>
        <div className="intro__desc-liens">
          <a href="https://github.com/Zaephyr13" target="blank">
            <img
              src={darkMode ? DarkGitHub : GitHub}
              alt="Lien vers mon profil Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/christian-antuna-324963219/"
            target="blank"
          >
            <img
              src={darkMode ? DarkLinkedIn : LinkedIn}
              alt="Lien vers mon profil LinkedIn"
            />
          </a>
          <a href="https://twitter.com/Zaephyr4" target="blank">
            <img
              src={darkMode ? DarkTwitter : Twitter}
              alt="Lien vers mon profil Twitter"
            />
          </a>
        </div>
        <DownloadBtn />
      </div>
      <div className="intro__photo">
        <ImageStyle />
        <img
          className="image-theme"
          src={MaPhoto}
          alt="Portrait de Christian Antuna"
        />
        <h3>Christian Antuna</h3>
        <h3>Développeur front-end</h3>
      </div>
    </section>
  )
}

export default Introduction

// == Import : npm
import { Link } from 'react-router-dom';

// == Import : local
import Sahra from '../../assets/about_us/dino_sahra.png';
import Eva from '../../assets/about_us/dino_eva.png';
import Gaetan from '../../assets/about_us/dino_gaetan.png';
import Romain from '../../assets/about_us/dino_romain.png';
import Yan from '../../assets/about_us/dino_yan.png';
import Twitter from '../../assets/social/icone-twitter.svg';
import Linkedin from '../../assets/social/icone-linkedin.svg';
import Github from '../../assets/social/icone-github.svg';

// = Import : style
import './About.scss';

// = AboutUs Component
function AboutUs() {
  return (
    <div className="About">
      <h2 className="About-Title"> A propos de l'équipe de développement</h2>
      <section className="About-Container">

        <div className="About-Card">
          <div className="About-Card-info">
            <img className="About-Card-avatar" src={Eva} alt="Dino Eva" />
            <div className="About-Card-title">Eva Redon</div>
            <div className="About-Card-subtitle">Dev &amp; Scrum Master</div>
          </div>
          <ul className="About-Card-social">
            <li className="About-Card-social__item">
              <Link to="https://www.linkedin.com/in/eva-redon-dev/">
                <img className="About-Icon" src={Linkedin} alt="Linkedin icône" />
              </Link>
            </li>
            <li className="About-Card-social__item">
              <Link to="https://github.com/evaredon">
                <img className="About-Icon" src={Github} alt="Github icône" />
              </Link>
            </li>
            <li className="About-Card-social__item">
              <img className="About-Icon" src={Twitter} alt="Twitter icône" />
            </li>
          </ul>
        </div>

        <div className="About-Card">
          <div className="About-Card-info">
            <img className="About-Card-avatar" src={Sahra} alt="Dino Sahra" />
            <div className="About-Card-title">Sahra Marchand</div>
            <div className="About-Card-subtitle">Lead Dev Front</div>
          </div>
          <ul className="About-Card-social">
            <li className="About-Card-social__item">
              <Link to="https://www.linkedin.com/in/sahra-marchand/">
                <img className="About-Icon" src={Linkedin} alt="Linkedin icône" />
              </Link>
            </li>
            <li className="About-Card-social__item">
              <Link to="https://github.com/sahramarchand">
                <img className="About-Icon" src={Github} alt="Github icône" />
              </Link>
            </li>
            <li className="About-Card-social__item">
              <img className="About-Icon" src={Twitter} alt="Twitter icône" />
            </li>

          </ul>
        </div>

        <div className="About-Card">
          <div className="About-Card-info">
            <img className="About-Card-avatar" src={Gaetan} alt="Dino Sahra" />
            <div className="About-Card-title">Gaëtan Leborgne</div>
            <div className="About-Card-subtitle">Lead DevBack</div>
          </div>
          <ul className="About-Card-social">
            <li className="About-Card-social__item">
              <Link to="https://www.linkedin.com/in/ga%C3%ABtan-leborgne/">
                <img className="About-Icon" src={Linkedin} alt="Linkedin icône" />
              </Link>
            </li>
            <li className="About-Card-social__item">
              <Link to="https://github.com/GaetanLeborgne">
                <img className="About-Icon" src={Github} alt="Github icône" />
              </Link>
            </li>
            <li className="About-Card-social__item">
              <img className="About-Icon" src={Twitter} alt="Twitter icône" />
            </li>
          </ul>
        </div>

        <div className="About-Card">
          <div className="About-Card-info">
            <img className="About-Card-avatar" src={Romain} alt="Dino Sahra" />
            <div className="About-Card-title">Romain Gradelet</div>
            <div className="About-Card-subtitle">Dev &amp; Git Master</div>
          </div>
          <ul className="About-Card-social">
            <li className="About-Card-social__item">
              <Link to="https://www.linkedin.com/in/romain-gradelet/">
                <img className="About-Icon" src={Linkedin} alt="Linkedin icône" />
              </Link>
            </li>
            <li className="About-Card-social__item">
              <Link to="https://github.com/Romain-GRADELET">
                <img className="About-Icon" src={Github} alt="Github icône" />
              </Link>
            </li>
            <li className="About-Card-social__item">
              <img className="About-Icon" src={Twitter} alt="Twitter icône" />
            </li>
          </ul>
        </div>

        <div className="About-Card">
          <div className="About-Card-info">
            <img className="About-Card-avatar" src={Yan} alt="Dino Sahra" />
            <div className="About-Card-title">Yan Berdin</div>
            <div className="About-Card-subtitle">Dev &amp; Product Owner</div>
          </div>
          <ul className="About-Card-social">
            <li className="About-Card-social__item">
              <Link to="https://www.linkedin.com/in/yan-berdin-44619921/">
                <img className="About-Icon" src={Linkedin} alt="Linkedin icône" />
              </Link>
            </li>
            <li className="About-Card-social__item">
              <Link to="https://github.com/YanBerdin">
                <img className="About-Icon" src={Github} alt="Github icône" />
              </Link>
            </li>
            <li className="About-Card-social__item">
              <img className="About-Icon" src={Twitter} alt="Twitter icône" />
            </li>
          </ul>
        </div>

      </section>
    </div>
  );
}

// == Export
export default AboutUs;

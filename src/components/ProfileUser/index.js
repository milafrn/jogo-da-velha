import React from "react";
import Facebook from '../../img/facebook.png';
import GitHub from '../../img/github.png';
import Instagram from '../../img/instagram.png';
import Linkedin from '../../img/linkedin.png';
import Profile from '../../img/profile.jpeg';
import Twitter from '../../img/twitter.png';
import AvatarProfile from "../../objects/AvatarProfile";
import IconSocial from "../../objects/IconSocial";
import './styles.css';



const ProfileUser = () => (
  <dl className="profile-user">
    <dd className="avatar">
      <AvatarProfile src={Profile} alt="Avatar do Marco Bruno" />
    </dd>
    <dt className="title">Camila Fernandes</dt>
    <dd className="description">Sou estudante de Front-End. No momento não trabalho na área de programação, mas um dia ainda irei conseguir entrar no mercado de programação.</dd>
    <dd className="socials">
      <IconSocial action="https://github.com/milafrn" src={GitHub} alt="Logo da GitHub" />
      <IconSocial action="#" src={Linkedin} alt="Logo da Linkedin" />
      <IconSocial action="https://www.facebook.com/kaah.fernandes.79/" src={Facebook} alt="Logo da Facebook" />
      <IconSocial action="#" src={Twitter} alt="Logo da Twitter" />
      <IconSocial action="#" src={Instagram} alt="Logo da Instagram" />
    </dd>
  </dl>
);

export default ProfileUser;

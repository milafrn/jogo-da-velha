import React from "react";
import Profile from '../../img/profile.jpeg';
import AvatarProfile from "../../objects/AvatarProfile";
import './styles.css';


const ProfileUser = () => (
  <dl className="profile-user">
    <dd className="avatar">
      <AvatarProfile src={Profile} alt="Avatar do Marco Bruno" />
    </dd>
    <dt className="title">Camila Fernandes</dt>
    <dd className="description">Sou estudante de Front-End. No momento não trabalho na área de programação, mas um dia ainda irei conseguir entrar no mercado de programação.</dd>
  </dl>
);

export default ProfileUser;

import React from "react";
import Profile from '../../img/profile.jpeg';
import AvatarProfile from "../../objects/AvatarProfile";

const ProfileUser = () => (
  <dl>
    <dd>
      <AvatarProfile src={Profile} alt="Avatar do Marco Bruno" />
    </dd>
    <dt>Mila</dt>
    <dd>Sou estudante de Front-End. No momento não trabalho na área de programação, mas um dia ainda irei conseguir entrar no mercado de programação.</dd>
  </dl>
);

export default ProfileUser;

import React from 'react';
import './styles.css';
import Header from '../Header';
import CollabCodeWhite from "../../img/logo-white.png";
import Avatar from '../../objects/Avatar';
import Title from '../../objects/Title';
import Text from '../../objects/Text';
import Social from '../../objects/Social';


const Layer = () => (
  <section className="layer">
    <Header logoImg={CollabCodeWhite} />
    <Avatar />
    <Title content="Marco Bruno" />
    <Text content="Migrei de palhaço para Dev. Front-End/UX e agora eu trabalho na comunidade da Impulso" />
    <Social />
  </section>
);

export default Layer;
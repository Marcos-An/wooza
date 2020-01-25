import React from 'react';
import {
  Card,
  Image,
  Name,
  Infos,
  Cargo,
  Divider,
  ProjetoInfo,
  Projeto,
  PrefixInfo
} from './styled';

function Cards(props) {
  return (
    <Card>
      <Image image={props.item.Image} />
      <Infos>
        <Cargo>{props.item.Cargo}</Cargo>
        <Name>{props.item.Name}</Name>
        <Divider />
        <ProjetoInfo>
          <div>
            <PrefixInfo>Projeto atual:</PrefixInfo>
            <Projeto>{props.item.Projeto}</Projeto>
          </div>
          <div>
            <PrefixInfo>Entrega:</PrefixInfo>
            <Projeto>{props.item.Entrega}</Projeto>
          </div>
        </ProjetoInfo>
      </Infos>
    </Card>
  );
}

export default Cards;

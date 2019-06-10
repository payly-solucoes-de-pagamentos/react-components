import React from 'react';
import ArrowFilledIcon from '../../Icons/arrow-filled';
import * as Styled from './style';
import Button from '../../Button';

/*
  Helper criado para a troca de conteúdo do componente "SendingFiles", com exceção dos ícones, devido o a mudança de contexto.
*/

export default ({ context, retrySend, resetFlow }) => {
  let component;

  switch (context) {
    case false:
      component = (
        <>
          <Styled.Title>Algo deu errado</Styled.Title>
          <Styled.Paragraph>Não conseguimos enviar seus arquivos :/</Styled.Paragraph>

          <Styled.ButtonWrapper>
            <Button width="200px" onClick={retrySend}>Tentar novamente</Button>
          </Styled.ButtonWrapper>

          <Styled.ButtonWrapper>
            <Button width="200px" onClick={resetFlow} isSecondary >Voltar</Button>
          </Styled.ButtonWrapper>
        </>
      )
      break;

    case true:
      component = (
        <>
          <Styled.Title>Sucesso!</Styled.Title>
          <Styled.Paragraph>Seus arquivos vão entrar em nossa fila de processamento.</Styled.Paragraph>
          <Styled.IconBox>
            <ArrowFilledIcon />
          </Styled.IconBox>
          <Styled.Paragraph>Você pode acompanhar aqui ao lado.</Styled.Paragraph>
          <Styled.ButtonWrapper>
            <Button width="200px" onClick={resetFlow} >Enviar mais arquivos</Button>
          </Styled.ButtonWrapper>
        </>
      )
      break;

    default:
      component = (
        <>
          <Styled.Title>Enviando arquivos</Styled.Title>
          <Styled.Paragraph>Estamos enviando seus arquivos.</Styled.Paragraph>
          <Styled.Paragraph>Não feche esta janela e não troque de página.</Styled.Paragraph>
        </>
      )
      break;
  }

  return component
}

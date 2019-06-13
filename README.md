# payly-components
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Instalação
  Importante salientar que é necessário adicionar à aplicação um arquivo **.npmrc** contendo as seguintes linhas

  > registry=https://repo.devops.processing-cloud.internal.payly.com.br/repository/npm-public/
  > authToken=NpmToken.32250e96-c0b3-3646-8912-8616ba4d9be8

```bash
npm install --save payly-components-js
```

## Uso

```jsx
import React, { Component } from "react";

import { Modal } from "payly-components-js";

class Example extends Component {
  render() {
    return <Modal />;
  }
}
```

# Contribuição
  É importante para o funcionamento da LIB que todos os novos componentes e features possuam teste unitário e de UI!

## Regras para merge request e publicação:
 - Teste unitário
 - Code Review
 - Alterar a versão da lib
 - Changelog
 - Teste de ui no Storybook no diretório **PRINCIPAL** `src/`
 - Teste de ui no Storybook no diretório de **EXEMPLO** `example/`

> O teste de UI dentro do exemplo é necessário pois os componentes testados são importados como uma Lib, com instalação via NPM, e não diretamente no diretório de componentes.
## Novos componentes
  No storybook, tanto no diretório **PRINCIPAL** quanto no diretório de  **EXEMPLO**, é importante criar uma story para cada componente novo.

## Para executar o Storybook, utilizar o seguinte bash:
  ```bash
    npm run storybook
  ```
## Testes unitários

  ### Para rodar os testes unitários execute
  ```bash
  npm run test
  ```
  #
  ### Para receber o coverage dos testes unitários
  ```bash
  npm run test:coverage
  ```
  #
  ### Libs de teste:
- [Jest](https://jestjs.io/)
- [Sinon](https://sinonjs.org/)
- [Enzyme](https://airbnb.io/enzyme/)
- [jest-enzyme](https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme#readme)
##

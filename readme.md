# Course-mobile-automation-webdriverio

Construção do curso de mobile automation testing com webdriverio.

- [Step by step in javascript](./course-javascript-mobile-automation/readme.md)
   - [Complete project](./javascript/readme.md)

- [Step by step in typescript](./course-typescript-mobile-automation/readme.md)
   - [Complete project](./typescript/readme.md)

## Conteúdo do curso

__IMPORTANTE: APPIUM_SKIP_CHROMEDRIVER_INSTALL=1 npm install__

0. **Conceitos iniciais**
   - Padrão Triple A testing
   - End-2-End
      - O que validar em um teste e2e?
      - O que não validar em um teste e2e?

   - Técnicas de teste
      - Analise de valor limite
      - Partição de equivalência
      - ...

   - Tipos de Dispositivos (SmartPhone, SmartPOS, Totem, SmartWatch, TVs e etc.)
   - Emulador vs Simulador
   - Device Farm, Device Cloud e Device Real
   - 

1. **Configuração inicial**
   - [Windows](./01-setup-environment/setup_appium_windows.md)
   - [Mac](./01-setup-environment/setup_appium_mac.md)
   - [Appium Inspector]()

2. **Web**
   - [Instalação & Configuração (Android Web)](./02-course-javascript-mobile-automation/aula-01/)
   - [Configurando o Autocomplete](./02-course-javascript-mobile-automation/aula-02/)
   - Android
      - [Mapeamento de elementos](./02-course-javascript-mobile-automation/aula-03/)
         - [ID](./02-course-javascript-mobile-automation/aula-03/test/specs/login/login-by-id.test.js)
         - [CSS Selector](./02-course-javascript-mobile-automation/aula-03/test/specs/login/login-by-css-selector.test.js)
         - [XPATH](./02-course-javascript-mobile-automation/aula-03/test/specs/login/login-by-xpath.test.js)

      - Criando uma suite para executar os testes
         - [wdio.device.conf.js](./02-course-javascript-mobile-automation/aula-03/wdio.device.conf.js)
         - [wdio.emulator.conf.js](./02-course-javascript-mobile-automation/aula-03/wdio.emulator.conf.js)

   - iOS
      - [Mapeamento de elementos](./02-course-javascript-mobile-automation/aula-04/)
         - [Accessibility ID](./02-course-javascript-mobile-automation/aula-04/test/specs/login/ios/login-by-accessibility-id.test.js)
         - [-ios predicate string](./02-course-javascript-mobile-automation/aula-04/test/specs/login/ios/login-by-ios-predicate-string.test.js)
         - [-ios class chain](./02-course-javascript-mobile-automation/aula-04/test/specs/login/ios/login-by-ios-class-chain.test.js)
         - [xpath](./02-course-javascript-mobile-automation/aula-04/test/specs/login/ios/login-by-xpath.test.js)

3. **Android**
   - Instalação & Configuração (Android) do projeto com o WebdriverIO
   - Encontrando elementos
      - Accessibility id
      - Class Name
      - XPath
      - UiSelector
      - UiScrollable

   - Outros recursos
      - Dialog/Alert
      - Vertical Scroll
      - Horizontal Scroll
      - Permissões ao dispositivo

4. **iOS**
   - Instalação & Configuração(iOS) do projeto com o WebdriverIO
   - Encontrando elementos
      - Accessibility id
      - Class Name
      - XPath
      - Class Chain
      - Predicate String

   - Outros recursos
      - Dialog/Alert
      - Vertical Scroll
      - Picker view

5. **Page Object Model**
   - Estrutura do projeto (tests, screenObjects, data, utils)

6. **WebView**
   - Android
   - iOS

7. **Otimizando o projeto**
   - eslint
   - biome
   - Compartilhando configurações do Android e iOS

8. **Device cloud**
   - Browserstack
      - Configuração
      - Enviando apk via API

   - Lambdatest
      - Configuração
      - Enviando apk via API

9. **CI/CD**
   - Github Actions
   - Bitrise
   - Azure DevOps
   - Gitlab

10. **Relatórios**
   - Allure Reports

11. **Sub modulos**
   - Trabalhando com sub modulos

12. **Appium Inspector**
13. **Adb commands**
14. **Mobile Performance test**
15. **Mobile Visual Regression test**
16. **Mobile Web test**
17. **Mobile Monkey testing**
18. **Otimização de código**
   - Promisse.All()
   - Logs

19. **Services**
   - Usandos os plugin(serviços) do WebdriverIO
   - Criando um plugin(serviços) com o WebdriverIO

20. **Debug no WebdriverIO**
21. **Ferramentas auxiliares do WebdriverIO**
   - REPL

22. API
   - Integrando os testes com a API do JIRA
   - Integrando os testes com a API do QASE
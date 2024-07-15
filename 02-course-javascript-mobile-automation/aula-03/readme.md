# Aula 03

## **Passo 1:** Crie o arquivo 'login.test.js' dentro da pasta test/spec

## **Passo 2:** Cole o template abaixo da estrutura mínima de um teste
```javascript
describe('Nome do produto', () => {

    it('Nome do teste', async () => {

    })
})
```

## **Passo 3:** Mapear o elemento por Id

``` text
Arrange

1. Abrir o site no link 'https://www.saucedemo.com/v1/'
2. Mapear o campo 'username' por id
3. Mapear o campo 'username' por id
3. Mapear o botão [Login] por id
4. Mapear o texto 'Products' após o login

Act

5. Informar o valor 'standard_user' no campo 'username'
6. Informar o valor 'secret_sauce' no campo 'password'
7. Clicar no botão [Login]

Assert

8. Validar se o texto 'Products' é exibido na tela.

```

## **Passo 4:** Nos arquivos wdio.device.conf.js e wdio.emulator.conf.js, informem o nome do arquivo de teste na seção spec.

```text
    specs: [
        './test/specs/**/login.test.js'
    ],
```

## **Passo 4:** Execute os testes com o comando

``` bash
npm run emulator
```

ou 

``` bash
npm run real-device
```

## **Passo 5:** Criando uma [suite de testes](https://webdriver.io/docs/organizingsuites#grouping-test-specs-in-suites)

No arquivo wdio.device.conf.js e wdio.emulator.conf.js abaixo da seção da spec, crie uma seção de suites.

``` json
// wdio.conf.js
export const config = {
    // define all tests
    specs: [
        './test/specs/**/**/*.spec.js'
    ],
    // ...
    // define specific suites
    suites: {
        login: [
         './test/specs/login/**.js'
        ],
        otherFeature: [
            // ...
        ]
    },
    // ...
}
```

## **Passo 6:** Adicione o maxInstances igual a 1 nos arquivos de configuração wdio.device.conf.js e wdio.emulator.conf.js para que execute um teste de cada vez no dispositivo.


## **Passo 7:** No arquivo package.json, crie um script para executar os testes da suite.

``` json
{
  "name": "aula-03",
  "type": "module",
  "devDependencies": {
    "@babel/core": "^7.24.7",
    "@babel/preset-env": "^7.24.7",
    "@babel/register": "^7.24.6",
    "@wdio/appium-service": "^8.39.1",
    "@wdio/local-runner": "^8.39.1",
    "@wdio/mocha-framework": "^8.39.0",
    "@wdio/spec-reporter": "^8.39.0",
    "appium-uiautomator2-driver": "^3.7.2"
  },
  "scripts": {
    "real-device": "wdio run ./wdio.device.conf.js",
    "login-real-device": "wdio run ./wdio.device.conf.js --suite login",
    "emulator": "wdio run ./wdio.emulator.conf.js",
    "login-emulator": "wdio run ./wdio.emulator.conf.js --suite login"
  },
  "dependencies": {
    "appium": "^2.11.2",
    "appium-chromedriver": "^5.6.63"
  }
}

```


## **Passo 8:** Execute os testes com o comando

``` bash
npm run login-real-device
```

ou 

``` bash
npm run login-emulator
```


# Aula 04

## **Passo 1:** Dentro da pasta 'Login', crie duas pastas uma 'Android' e uma 'iOS'

## **Passo 2:** Mova os arquivos dos testes android para a pasta Android

## **Passo 3:** Crie uma pasta 'config' 

1. Crie dentro da pasta config uma pasta com nome 'Android' e 'ios' 
2. Mova os arquivos wdio.device.conf.js e wdio.emulator.conf.js para a pasta 'Android'
3. Ajuste o arquivo package.json para executar os scripts do arquivo de configuração correto.
```json
{
  "name": "aula-04",
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
    "real-device": "wdio run ./config/android/wdio.device.conf.js",
    "login-real-device": "wdio run ./config/android/wdio.device.conf.js --suite login",
    "emulator": "wdio run ./config/android/wdio.emulator.conf.js",
    "login-emulator": "wdio run ./config/android/wdio.emulator.conf.js --suite login"
  },
  "dependencies": {
    "appium": "^2.11.2",
    "appium-chromedriver": "^5.6.63"
  }
}
```
4. Ajuste as suites dos arquivos wdio.device.conf.js e wdio.emulator.conf.js para executar os testes corretamente.
```json
specs: [
        '../../test/specs/**/android/**.js'
    ],
    suites: {
        login: [
            '../../test/specs/login/android/**.js'
        ],
        otherFeature: [
            // ...
        ]
    },
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
```

## **Passo 4:** Duplique o arquivo wdio.device.conf.js e cole dentro da pasta config/ios e renomeie para wdio.ios.device.conf.js

## **Passo 5:** Altere as capacidades para as descritas abaixo

```json
        capabilities: [{
            platformName: 'iOS',  /* Plataforma */
            browserName: 'safari technology preview', /* navegador safaria pare executar o testes*/
            'appium:deviceName': 'iPhone 12', /* Dispositivo para executar os testes */
            'appium:platformVersion': '17.2', /* Versão do dispositivo para executar os testes */
            'appium:newCommandTimeout': 3600, /* Timeout para iniciar os testes */
            'appium:automationName': 'XCUITest', /* Driver do iOS para executar os testes */
            "appium:unicodeKeyboard": true /* Desativar o teclado */
        }],
```

## **Passo 6:** Crie o arquivo de teste 'login-by-accessibility-id.test.js' dentro da pasta test/specs/ios

## **Passo 7:** Adicione um novo script no package.json para executar os testes ios 'login-ios-device'

```json
{
  "name": "aula-04",
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
    "real-device": "wdio run ./config/android/wdio.device.conf.js",
    "login-real-device": "wdio run ./config/android/wdio.device.conf.js --suite login",
    "emulator": "wdio run ./config/android/wdio.emulator.conf.js",
    "login-emulator": "wdio run ./config/android/wdio.emulator.conf.js --suite login",
    "login-ios-device": "wdio run ./config/ios/wdio.ios.device.conf.js --suite login"
  },
  "dependencies": {
    "appium": "^2.11.2",
    "appium-chromedriver": "^5.6.63"
  }
}

```

## **Passo 8:** Instale a dependência do xcuitest executando o comando do 'npm install appium-xcuitest-driver'

## **Passo 9:** Abra a url 'https://pt.m.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal' no simulador do ios

## **Passo 10:** Conecte com o Appium inspector

## **Passo 11:** Mapeie com o acessibility id para abrir o menu

## **Passo 12:** Mapeie o botão de entrar com o ios class chain

## **Passo 13:** Mapeie o input username e password com o ios predicate string

## **Passo 14:** Mapeie o botao entrar do login com xpath

## **Passo 15:** Execute os testes
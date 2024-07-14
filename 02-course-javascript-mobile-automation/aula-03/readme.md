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

## **Passo 4:** Execute o comando 



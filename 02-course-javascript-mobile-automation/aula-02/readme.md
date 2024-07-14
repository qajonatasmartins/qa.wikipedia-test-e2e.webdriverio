# Aula 02

## **Passo 1:** Abra o [link do autocomplete](https://webdriver.io/docs/autocompletion/#visual-studio-code-vscode)

## **Passo 2:** Crie o arquivo 'jsconfig.json' no diretório do projeto.

## **Passo 3:** Cole o conteúdo abaixo no arquivo 'jsconfig.json'

```json
{
    "compilerOptions": {
        "types": [
            "node",
            "@wdio/globals/types",
            "@wdio/mocha-framework"
        ]
    }
}
```

## **Passo 4:** Execute teste o autocomplete e execute novamente os testes

``` bash
npm run real-device 
```

``` bash
npm run emulator 
```

# Aula 01

**Passo 1:**

Execute o comando abaixo para iniciar o projeto

```sh {"id":"01J2FPBY8DRM7N529RFSQY4B0V"}
npm init wdio@latest .
```

**Retorno no terminal**

````````text {"id":"01J2FNQ0YAAQDFECY26K1QFHEN"}
➜  aula-01 git:(main) ✗ npm init wdio@latest .

                 -:...........................-:.
                 +                              +
              `` +      `...`        `...`      + `
            ./+/ +    .:://:::`    `::///::`  ` + ++/.
           .+oo+ +    /:+ooo+-/    /-+ooo+-/ ./ + +oo+.
           -ooo+ +    /-+ooo+-/    /-+ooo+-/ .: + +ooo.
            -+o+ +    `::///:-`    `::///::`    + +o+-
             ``. /.     `````        `````     .: .``
                  .----------------------------.
           `-::::::::::::::::::::::::::::::::::::::::-`
          .+oooo/:------------------------------:/oooo+.
      `.--/oooo-                                  :oooo/--.`
    .::-``:oooo`                                  .oooo-``-::.
  ./-`    -oooo`--.: :.--                         .oooo-    `-/.
 -/`    `-/oooo////////////////////////////////////oooo/.`    `/-
`+`   `/+oooooooooooooooooooooooooooooooooooooooooooooooo+:`   .+`
-/    +o/.:oooooooooooooooooooooooooooooooooooooooooooo:-/o/    +.
-/   .o+  -oooosoooososssssooooo------------------:oooo- `oo`   +.
-/   .o+  -oooodooohyyssosshoooo`                 .oooo-  oo.   +.
-/   .o+  -oooodooysdooooooyyooo` `.--.``     .:::-oooo-  oo.   +.
-/   .o+  -oooodoyyodsoooooyyooo.//-..-:/:.`.//.`./oooo-  oo.   +.
-/   .o+  -oooohsyoooyysssysoooo+-`     `-:::.    .oooo-  oo.   +.
-/   .o+  -ooooosooooooosooooooo+//////////////////oooo-  oo.   +.
-/   .o+  -oooooooooooooooooooooooooooooooooooooooooooo-  oo.   +.
-/   .o+  -oooooooooooooooooooooooooooooooooooooooooooo-  oo.   +.
-+////o+` -oooo---:///:----://::------------------:oooo- `oo////+-
+ooooooo/`-oooo``:-```.:`.:.`.+/-    .::::::::::` .oooo-`+ooooooo+
oooooooo+`-oooo`-- `/` .:+  -/-`/`   .::::::::::  .oooo-.+oooooooo
+-/+://-/ -oooo-`:`.o-`:.:-````.:    .///:``````  -oooo-`/-//:+:-+
: :..--:-:.+ooo+/://o+/-.-:////:-....-::::-....--/+ooo+.:.:--.-- /
- /./`-:-` .:///+/ooooo/+///////////////+++ooooo/+///:. .-:.`+./ :
:-:/.           :`ooooo`/`              .:.ooooo :           ./---
                :`ooooo`/`              .:.ooooo :
                :`ooooo./`              .:-ooooo :
                :`ooooo./`              .:-ooooo :
            `...:-+++++:/.              ./:+++++-:...`
           :-.````````/../              /.-:````````.:-
          -/::::::::://:/+             `+/:+::::::::::+.
          :oooooooooooo++/              +++oooooooooooo-
 
                           Webdriver.IO
              Next-gen browser and mobile automation
                    test framework for Node.js


===============================
🤖 WDIO Configuration Wizard 🧙
===============================

? A project named "aula-01" was detected at "/Users/jonatasmartins/Documents/estudos/q
a.wikipedia-test-e2e.webdriverio/02-course-javascript-mobile-automation/aula-01", 
correct? Yes
? What type of testing would you like to do? E2E Testing - of Web or Mobile 
Applications
? Where is your automation backend located? On my local machine
? Which environment you would like to automate? Mobile - native, hybrid and mobile web
 apps, on Android or iOS
? Which mobile environment yould like to automate? Android - native, hybrid and mobile web apps, tested on emulators and real devices using UiAutomator2 (https://www.npmjs.com/package/appium-uiautomator2-driver)
? Which framework do you want to use? Mocha (https://mochajs.org/)
? Do you want to use a compiler? Babel (https://babeljs.io/)
? Do you want WebdriverIO to autogenerate some test files? Yes
? What should be the location of your spec files? 
/Users/jonatasmartins/Documents/estudos/qa.wikipedia-test-e2e.webdriverio/02-course-ja
vascript-mobile-automation/aula-01/test/specs/**/*.js
? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? Yes
? Where are your page objects located? /Users/jonatasmartins/Documents/estudos/qa.wikipedia-test-e2e.webdriverio/02-course-javascript-mobile-automation/aula-01/test/pageobjects/**/*.js
? Which reporter do you want to use? spec
? Do you want to add a plugin to your test setup? 
? Do you want to add a service to your test setup? appium
? Do you want me to run `npm install` Yes

Setting up Babel project...
✔ Success!

Installing packages using npm:
- @wdio/local-runner@latest
- @wdio/mocha-framework@latest
- @wdio/spec-reporter@latest
- @wdio/appium-service@latest
- @babel/register
- @babel/core
- @babel/preset-env
- appium-uiautomator2-driver

Run `npm audit` for details.
✔ Success!

Creating a WebdriverIO config file...
✔ Success!

Autogenerating test files...
✔ Success!

Adding "wdio" script to package.json
✔ Success!

🤖 Successfully setup project at /Users/jonatasmartins/Documents/estudos/qa.wikipedia-test-e2e.webdriverio/02-course-javascript-mobile-automation/aula-01 🎉

Join our Discord Community Server and instantly find answers to your issues or queries. Or just join and say hi 👋!
  🔗 https://discord.webdriver.io

Visit the project on GitHub to report bugs 🐛 or raise feature requests 💡:
  🔗 https://github.com/webdriverio/webdriverio

To run your tests, execute:
$ cd /Users/jonatasmartins/Documents/estudos/qa.wikipedia-test-e2e.webdriverio/02-course-javascript-mobile-automation/aula-01
$ npm run wdio

? Continue with Appium setup using appium-installer 
(https://github.com/AppiumTestDistribution/appium-installer)? (Y/n) 

```
````````

**Passo 2:** Informe 'Y' para verificar as instalações do appium na sua maquina ou 'n' para não verificar.

- Aqui informei 'n'

**Passo 3:** Abra o emulador ou conecte o device no computador

**Passo 4:** Execute o comando abaixo

```sh {"id":"01J2FPBY8DRM7N529RFWS01GCZ"}
npm run wdio
```

**Possivéis erros:**

1. PlataformVersion incorreta para a versão do emulador ou device conectado.
``` text
ERROR webdriver: Request failed with status 500 due to unknown error: An unknown server-side error occurred while processing the command. Original error: Unable to find an active device or emulator with OS 12.0. The following are available: emulator-5554 (10)
```
- **Solucão**: Abra o arquivo do wdio.conf.js e altere o plataformVersion para a versão correta do android do seu dispositivo/emulador conectado.

``` javascript
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        browserName: 'Chrome',
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '12.0', /* Adicione a versão correta aqui*/
        'appium:automationName': 'UiAutomator2'
    }],
```
2. Download do google chrome para execução do teste web no device

```text
ERROR @wdio/runner: Error: Failed to create session.
[0-0] An unknown server-side error occurred while processing the command. Original error: No Chromedriver found that can automate Chrome '91.0.4472'. You could also try to enable automated chromedrivers download as a possible workaround.
```

- **Solucão**: 



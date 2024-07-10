@echo off

REM Verifica se o Node.js está instalado
node --version > nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js não encontrado. Instale o Node.js no site 'https://nodejs.org/pt' e tente novamente.
    exit /b 1
)
echo Node.js encontrado. Versão: 
node --version

REM Instalação dos pacotes npm necessários
call :InstallNpmPackage "appium"
call :InstallNpmPackage "appium-doctor"
call :InstallNpmPackage "appium-installer"
call :InstallAppiumPackage "xcuitest"
call :InstallAppiumPackage "uiautomator2"

REM Verifica se o Appium está instalado
appium --version > nul 2>&1
if %errorlevel% neq 0 (
    echo Appium não encontrado. Instale o Appium e tente novamente.
    exit /b 1
)
echo Appium encontrado. Versão: 
appium --version

REM Executa o Appium Doctor para diagnóstico
echo Executando Appium Doctor:
appium-doctor
if %errorlevel% neq 0 (
    echo Appium Doctor encontrou problemas. Corrija-os e tente novamente.
    exit /b 1
)
echo Appium Doctor não encontrou problemas.

REM Verifica se o Java SDK está instalado
java -version > nul 2>&1
if %errorlevel% neq 0 (
    echo Java SDK não encontrado. Instale o Java SDK e configure JAVA_HOME.
    exit /b 1
)
echo Java SDK encontrado. Versão: 
java -version

REM Configura a variável de ambiente HOME
call :ConfigurarVariavelAmbiente HOME "%USERPROFILE%"

REM Verifica se o ANDROID_HOME está configurado corretamente
if "%ANDROID_HOME%" == "" (
    echo ANDROID_HOME não está configurado. Configure e tente novamente.
    exit /b 1
)

REM Obtém o diretório do usuário atual do Windows
for /f "tokens=3 delims=\" %%a in ("%USERPROFILE%") do set "UserDirectory=%%a"

REM Configura o caminho completo para o SDK do Android
set "ANDROID_SDK=%USERPROFILE%\AppData\Local\Android\Sdk"

REM Verifica se o diretório do SDK do Android existe
if not exist "%ANDROID_SDK%" (
    echo Diretório do SDK do Android não encontrado: %ANDROID_SDK%
    exit /b 1
)

REM Configura a variável de ambiente ANDROID_HOME
setx ANDROID_HOME "%ANDROID_SDK%"

REM Verifica se a variável foi configurada corretamente
if %errorlevel% neq 0 (
    echo Falha ao configurar ANDROID_HOME.
    exit /b 1
)

echo ANDROID_HOME configurado com sucesso: %ANDROID_HOME%
exit /b 0

REM Verifica se a variável foi configurada corretamente
if %errorlevel% neq 0 (
    echo Falha ao configurar ANDROID_HOME.
    exit /b 1
)

echo ANDROID_HOME configurado com sucesso: %ANDROID_HOME%
exit /b 0

REM Verifica se o adb está configurado corretamente
adb version > nul 2>&1
if %errorlevel% neq 0 (
    echo adb não encontrado ou não configurado corretamente.
    exit /b 1
)
echo adb encontrado. Versão: 
adb version

REM Se todas as verificações passaram, ambiente está configurado corretamente
echo Configuração do ambiente do Appium concluída com sucesso.
exit /b 0

:InstallNpmPackage
echo Verificando instalação do pacote npm %1...
npm list -g %1 > nul 2>&1
if %errorlevel% neq 0 (
    echo %1 não encontrado. Instalando...
    npm install -g %1
    if %errorlevel% neq 0 (
        echo Falha ao instalar %1. Verifique e tente novamente.
        exit /b 1
    )
) else (
    echo %1 já está instalado.
)
exit /b 0

:InstallAppiumPackage
echo Verificando instalação do pacote npm %1...
npm list -g %1 > nul 2>&1
if %errorlevel% neq 0 (
    echo %1 não encontrado. Instalando...
    appium driver install %1
    if %errorlevel% neq 0 (
        echo Falha ao instalar %1. Verifique e tente novamente.
        exit /b 1
    )
) else (
    echo %1 já está instalado.
)
exit /b 0


:ConfigurarVariavelAmbiente
setlocal
set "VAR_NAME=%~1"
set "VAR_VALUE=%~2"

REM Verifica se a variável de ambiente já está configurada
if not "%VAR_VALUE%"=="" (
    echo %VAR_NAME% configurada: %VAR_VALUE%
    setx %VAR_NAME% "%VAR_VALUE%"
) else (
    echo %VAR_NAME% não pode ser configurada.
    exit /b 1
)
endlocal
exit /b 0

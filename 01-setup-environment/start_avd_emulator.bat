@echo off

rem Encontrar o diretório do SDK do Android
for /f "delims=" %%i in ('where emulator') do set "EMULATOR_PATH=%%~dpi.."

rem Verificar se o diretório do SDK do Android foi encontrado
if not exist "%EMULATOR_PATH%" (
    echo Diretório do SDK do Android não encontrado. Verifique a instalação do Android SDK.
    exit /b 1
)

rem Listar todos os AVDs disponíveis
for /f %%a in ('"%EMULATOR_PATH%\emulator.exe -list-avds"') do set "AVDS=%%a"

rem Verificar se existem AVDs disponíveis
if "%AVDS%" == "" (
    echo Nenhum dispositivo Android virtual encontrado.
    exit /b 1
)

rem Mostrar a lista de dispositivos disponíveis
echo Dispositivos Android disponíveis:
echo %AVDS%

rem Solicitar ao usuário para selecionar um dispositivo
set /p SELECTED_INDEX=Digite o número do dispositivo que deseja iniciar:

rem Validar se o número digitado é um número inteiro
setlocal enabledelayedexpansion
set "valid=true"
for /f %%a in ("%SELECTED_INDEX%") do (
    if "%%a" lss "0" set "valid=false"
    if "%%a" gtr "!AVDS!" set "valid=false"
    if not "%%a"=="!SELECTED_INDEX!" set "valid=false"
)
if "!valid!"=="false" (
    echo Erro: Entrada inválida. Digite um número válido.
    exit /b 1
)

rem Selecionar o dispositivo com base no índice fornecido
for /f "tokens=%SELECTED_INDEX%" %%a in ("%AVDS%") do set "SELECTED_AVD=%%a"
echo Iniciando o dispositivo: !SELECTED_AVD!

rem Executar o comando para iniciar o dispositivo selecionado
"%EMULATOR_PATH%\emulator.exe" -avd !SELECTED_AVD!

:end

#!/bin/bash

# Função para configurar variável de ambiente se não estiver configurada
function configurar_variavel_ambiente {
    local var_name=$1
    local var_value=$2

    if [[ -z "${!var_name}" ]]; then
        export "$var_name"="$var_value"
        echo "Variável de ambiente $var_name configurada: $var_value"
    else
        echo "Variável de ambiente $var_name já está configurada: ${!var_name}"
    fi
}

# Função para verificar e instalar um pacote npm globalmente
# Uso: install_npm_package NOME_PACOTE
install_npm_package() {
    package_name=$1
    echo "Verificando instalação do pacote npm $package_name..."
    if ! command -v $package_name &> /dev/null; then
        echo "$package_name não encontrado. Instalando..."
        npm install -g $package_name
        if [[ $? -ne 0 ]]; then
            echo "Falha ao instalar $package_name. Verifique e tente novamente."
            exit 1
        fi
    else
        echo "$package_name já está instalado."
    fi
}

# Função para verificar e instalar driver do appium
# Uso: install_appium_package driver_appium
install_appium_package() {
    package_name=$1
    echo "Verificando instalação do pacote npm $package_name..."
    if ! command -v $package_name &> /dev/null; then
        echo "$package_name não encontrado. Instalando..."
        appium driver install $package_name
        if [[ $? -ne 0 ]]; then
            echo "Falha ao instalar $package_name. Verifique e tente novamente."
            exit 1
        fi
    else
        echo "$package_name já está instalado."
    fi
}

# Verifica se o Node.js está instalado
node_version=$(node --version 2>&1)
if [[ $? -ne 0 ]]; then
  echo "Node.js não encontrado. Instale o Node.js no site 'https://nodejs.org/pt' e tente novamente."
  exit 1
fi
echo "Node.js encontrado. Versão: $node_version"

# Instala o Appium se não estiver instalado
install_npm_package "appium"

# Instala o appium-installer se não estiver instalado
install_npm_package "appium-installer"

# Instala o appium-installer se não estiver instalado
install_appium_package "appium driver install xcuitest"

# Instala o appium-installer se não estiver instalado
install_appium_package "appium driver install uiautomator2"

# Instala o appium-doctor se não estiver instalado
install_npm_package "appium-doctor"

# Verifica se o Appium está instalado
appium_version=$(appium --version 2>&1)
if [[ $? -ne 0 ]]; then
  echo "Appium não encontrado. Instale o Appium e tente novamente."
  exit 1
fi
echo "Appium encontrado. Versão: $appium_version"

# Executa o Appium Doctor para diagnóstico
echo "Executando Appium Doctor:"
appium-doctor
if [[ $? -ne 0 ]]; then
  echo "Appium Doctor encontrou problemas. Corrija-os e tente novamente."
  exit 1
fi
echo "Appium Doctor não encontrou problemas."

# Verifica se o Java SDK está instalado
java_version=$(java -version 2>&1)
if [[ $? -ne 0 ]]; then
  echo "Java SDK não encontrado. Instale o Java SDK e configure JAVA_HOME."
  exit 1
fi
echo "Java SDK encontrado. Versão: $java_version"

# Configura a variável de ambiente HOME se não estiver configurada
configurar_variavel_ambiente HOME "/Users/$(whoami)"

# Verifica as variáveis de ambiente necessárias
if [[ -z "$HOME" ]]; then
  echo "Variável de ambiente HOME não está configurada."
  exit 1
fi
echo "Variável de ambiente HOME configurada."


# Verifica se o ANDROID_HOME está configurado corretamente
if [[ -n "$ANDROID_HOME" ]]; then
    if [[ ! -d "$ANDROID_HOME" ]]; then
        echo "Caminho configurado para ANDROID_HOME não existe: $ANDROID_HOME"
        exit 1
    fi
else
    # Identifica automaticamente o diretório do Android SDK
    android_sdk_dir=$(dirname "$(dirname "$(which adb)")")
    if [[ -d "$android_sdk_dir" ]]; then
        configurar_variavel_ambiente ANDROID_HOME "$android_sdk_dir"
    else
        echo "Android SDK não encontrado. Instale o Android SDK e configure ANDROID_HOME."
        exit 1
    fi
fi

# Verifica se o Android Studio está instalado
# Coloque aqui os comandos necessários para verificar a instalação do Android Studio

if [[ -z "$JAVA_HOME" ]]; then
  echo "Variável de ambiente JAVA_HOME não está configurada."
  exit 1
fi
echo "Variável de ambiente JAVA_HOME configurada: $JAVA_HOME"

if [[ -z "$ANDROID_HOME" ]]; then
  echo "Variável de ambiente ANDROID_HOME não está configurada."
  exit 1
fi
echo "Variável de ambiente ANDROID_HOME configurada: $ANDROID_HOME"

# Verifica se o adb está configurado corretamente
adb_version=$(adb version 2>&1)
if [[ $? -ne 0 ]]; then
  echo "adb não encontrado ou não configurado corretamente."
  exit 1
fi
echo "adb encontrado. Versão: $adb_version"

# Se todas as verificações passaram, ambiente está configurado corretamente
echo "Configuração do ambiente do Appium concluída com sucesso."

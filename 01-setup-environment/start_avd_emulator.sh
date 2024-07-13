#!/bin/bash

# Listar todos os AVDs disponíveis
avds=$(emulator -list-avds)

# Verificar se existem AVDs disponíveis
if [ -z "$avds" ]; then
    echo "Nenhum dispositivo Android virtual encontrado."
    exit 1
fi

# Converter a lista em um array para iterar sobre os dispositivos
avds_array=($avds)

# Mostrar a lista de dispositivos disponíveis
echo "Dispositivos Android disponíveis:"
for (( i=0; i<${#avds_array[@]}; i++ )); do
    echo "$i: ${avds_array[$i]}"
done

# Solicitar ao usuário para selecionar um dispositivo
echo -n "Digite o número do dispositivo que deseja iniciar: "
read selected_index

# Validar se o número digitado é um número inteiro e está dentro do intervalo
re='^[0-9]+$'
if ! [[ $selected_index =~ $re ]]; then
   echo "Erro: Entrada inválida. Digite um número válido."
   exit 1
fi

if (( selected_index < 0 || selected_index >= ${#avds_array[@]} )); then
    echo "Erro: Número fora do intervalo válido."
    exit 1
fi

# Selecionar o dispositivo com base no índice fornecido
selected_avd="${avds_array[$selected_index]}"
echo "Iniciando o dispositivo: $selected_avd"

# Executar o comando para iniciar o dispositivo selecionado
${ANDROID_HOME}/emulator/emulator -avd ${selected_avd}


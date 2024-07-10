# Configuração Appium Windows

## Java JDK

1. Baixando o JDK através do [LINK](https://www.oracle.com/br/java/technologies/downloads/#jdk17-windows)
   - Instale a versão do java jdk 17 para esse projeto.  ![alt text](./img/jdk-windows.png)
2. Realize a instalação do jdk baixado e siga o passo a passo.
3. Variáveis de ambiente
   - Agora vamos configurar as variáveis de ambiente, para isso abra o menu iniciar e pesquise por "Editar as variáveis de ambiente do sistema"
   ![alt text](./img/variavel-ambiente-01.png)
   - Clique na aba "Avançado" >> [Variáveis de Ambiente...]
   ![alt text](./img/variavel-ambiente-02.png)
   - Nas 'Variáveis de ambiente', de um duplo clique sobre a váriavel "path" >> [Novo]
   - Adicione o 'bin' do JDK instalado e clique em [OK]
     - Por padrão o diretório é **"C:\Program Files\Java\jdk-17\bin"**, verifique o diretório da sua máquina.
   - Adicione a variável **JAVA_HOME** nas **"Variáveis de ambiente do usuário"** com o diretório do Jdk instalado. **Exemplo**: **"C:\Program Files\Java\jdk-17"**
    ![alt text](./img/variavel-ambiente-03.png)
    *Imagem meramente ilustrativa*
   - Clique em [OK] e confirme as alterações

## NVM (Node version manager) e Node.js

1. **Baixar o NVM para Windows**
   - Abra o navegador e vá para a página de releases do NVM no GitHub: [NVM for Windows Releases](https://github.com/coreybutler/nvm-windows/releases).
   - Na seção "**Assets**", encontre o arquivo **nvm-setup.zip** na versão mais recente e clique nele para fazer o download.
2. **Instalar o NVM**
   - Após o download estar completo, abra o arquivo **nvm-setup.zip**
   - Extraia o conteúdo do arquivo zip para uma pasta de sua escolha. Por exemplo, você pode extrair para C:\nvm para manter as coisas simples.
   - Navegue até a pasta onde você extraiu o NVM. Dentro dela, você deve ver um arquivo executável chamado **nvm-setup.exe**.
   - Execute **nvm-setup.exe** como administrador. Você pode fazer isso clicando com o botão direito do mouse no arquivo e selecionando "Executar como administrador".
   - Siga as instruções do instalador para completar a instalação do NVM. Durante a instalação, você pode deixar as opções padrão ou ajustá-las conforme necessário.
3. **Configurar o NVM**
   - Após a instalação, abra o Prompt de Comando do Windows como administrador. Isso é importante para evitar problemas de permissão ao instalar versões do Node.js.
   - Para verificar se o NVM foi instalado corretamente, digite o seguinte comando: ``nvm version`` (Isso deve exibir a versão do NVM instalada.)
4. **Instalando versão especifica do Node.js**
   - Vamos instalar a versão do node.js ``18.17.0``, para isso, use o comando ``nvm install 18.17.0``
   - Após a instalação, você pode verificar se o Node.js foi instalado corretamente digitando: ``node -v`` (Isso deve exibir a versão do Node.js instalada.)

## Android Studio


## Appium

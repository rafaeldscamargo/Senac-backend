# Verificar versão do node instalado
node -v

# Ver se esta na pasta que é desejado gerar o arquivO

# Gerar arquivo package.json
npm init -y

# Instalar o TypeScript
npm i -g typescript

# Transpilar o codigo TS
npx tsc index.ts

# criar arquivo de configuração do TS
npx tsc --init

# Configurações no arquivo (tsconfig.json)
"target":"es6",
"module":"commonjs",
"sourceMap": true,
"outDir":"./build",
"rootDir":"./src",
"removeComments": true,
"noImplicitAny": true,

# Adicionar script no package.json
"start": "npx tsc && node ./build/index.js"
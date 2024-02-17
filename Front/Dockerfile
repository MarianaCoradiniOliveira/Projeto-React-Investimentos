# imagem
FROM node:18-alpine 

# diretório de trabalho - aplicação react
WORKDIR /react-investimentos/

# copia o projeto dentro da imagem
COPY ./Front/public/ /react-investimentos/public
COPY ./Front/src/ /react-investimentos/src
COPY ./Front/package.json /react-investimentos/

RUN npm install

CMD ["npm", "start"]
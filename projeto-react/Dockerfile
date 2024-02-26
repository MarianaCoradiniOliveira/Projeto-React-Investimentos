# imagem
FROM node:18-alpine 

# diretório de trabalho - aplicação react
WORKDIR /react-projeto/

# copia o projeto dentro da imagem
COPY ./projeto-react/public/ /react-projeto/public
COPY ./projeto-react/src/ /react-projeto/src
COPY ./projeto-react/package.json /react-projeto/

RUN npm install

CMD ["npm", "start"]
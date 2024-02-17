# imagem
FROM node:18-alpine 

# diretório de trabalho - aplicação react
WORKDIR /react-investimentos/

# copia o projeto dentro da imagem
COPY ./front/public/ /react-investimentos/public
COPY ./front/src/ /react-investimentos/src
COPY ./front/package.json /react-investimentos/

RUN npm install

CMD ["npm", "start"]
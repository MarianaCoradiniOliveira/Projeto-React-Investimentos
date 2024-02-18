<!-- build da imagem -->
docker build -t react -f ./front/Dockerfile .

<!-- subindo o container -->
docker run -p 8080:3000 -v $(pwd)/front:/react-investimentos/ --name projeto-react-container react
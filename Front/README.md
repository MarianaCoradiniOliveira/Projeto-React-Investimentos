<!-- build da imagem -->
docker build -t react -f ./Front/Dockerfile .

<!-- subindo o container -->
docker run -p 8000:3000 -v $(pwd)/Front:/react-investimentos/ --name projeto-react-container react
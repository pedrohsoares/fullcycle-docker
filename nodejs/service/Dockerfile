FROM node:21

WORKDIR /usr/src/app

COPY package*.json .
COPY index.js .

EXPOSE 3000

CMD [ "/bin/bash", "-c", "npm install && node index.js" ]
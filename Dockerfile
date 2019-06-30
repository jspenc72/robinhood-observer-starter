FROM node:12.4.0
WORKDIR /robinhood/
COPY package.json /robinhood/

RUN npm i

COPY . /robinhood/

ENV ROBINHOOD_USERNAME="username"
ENV ROBINHOOD_PASSWORD="password"
ENV SYMBOLS="TVIX:AAPL:GOOG"

ENTRYPOINT ["node", "/robinhood/index.js"]
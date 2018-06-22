FROM node:8
COPY ./admin /admin
COPY ./client /client
RUN  npm install -g cnpm --registry=https://registry.npm.taobao.org && cnpm i -g pm2
WORKDIR /admin
RUN cnpm i && npm run build
WORKDIR /client
RUN cnpm i && npm run build

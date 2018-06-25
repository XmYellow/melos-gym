FROM node:8
COPY / /client
RUN  npm install -g cnpm --registry=https://registry.npm.taobao.org
WORKDIR /client
RUN cnpm i && npm run build

EXPOSE 4000

CMD  npm run server

FROM node:8
COPY ./admin /admin
COPY ./client /client
RUN  npm install -g cnpm --registry=https://registry.npm.taobao.org && cnpm i -g pm2
WORKDIR /admin
RUN cnpm i && npm run build && nohup npm run server &
WORKDIR /client
RUN cnpm i && npm run build && nohup npm run server &

EXPOSE 3000 4000

CMD ['node', '/admin/server/express.js']

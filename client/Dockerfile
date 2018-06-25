FROM node:10
COPY / /client
WORKDIR /client
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org && cnpm i && npm run build
EXPOSE 3000
CMD  npm run server

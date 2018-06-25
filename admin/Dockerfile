FROM node:8
COPY / /admin
WORKDIR /admin
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org && cnpm i && npm run build
EXPOSE 4000
CMD  npm run server

FROM node:alpine
RUN mkdir /chat-app
COPY ./package.json /chat-app/.
RUN mkdir /data
RUN ln -s /chat-app/package.json /data/.
WORKDIR /data
RUN npm install
EXPOSE 3000
ENV NODE_PATH /data/node_modules/
WORKDIR /chat-app
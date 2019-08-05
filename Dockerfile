FROM node:10

ADD . /usr/src/app
WORKDIR /usr/src/app

RUN yarn && yarn:build

CMD [ "yarn", "start" ]
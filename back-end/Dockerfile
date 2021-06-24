FROM node:16-alpine

RUN apk update && apk upgrade
RUN apk add make

WORKDIR /opt/app

COPY package.json .
RUN yarn install

COPY . .
RUN make build

ENTRYPOINT ["./entrypoint.sh" ]
CMD ["yarn", "start"]

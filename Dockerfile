FROM node:12.19.0-alpine3.9 AS development

RUN mkdir -p /nest
ADD . /nest
WORKDIR /nest

COPY package*.json ./

RUN apk update && \
    npm install -g npm && \
    npm install -g @nestjs/cli

COPY . .
RUN npm run build
ENV HOST 0.0.0.0
EXPOSE 3000

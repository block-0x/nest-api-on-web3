FROM node:14.19.0 AS development

RUN mkdir -p /nest
ADD . /nest
WORKDIR /nest

COPY package*.json ./

RUN npm i && \
    npm install -g npm && \
    npm install -g @nestjs/cli

COPY . .
ENV HOST 0.0.0.0
EXPOSE 3000

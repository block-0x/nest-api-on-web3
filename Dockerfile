FROM node:14.19.0 AS development

RUN mkdir -p /nest
ADD . /nest
WORKDIR /nest

COPY package*.json ./

RUN npm i && \
    npm install -g npm && \
    npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers && \
    npm install @openzeppelin/contracts && \
    npm install -g solc && \
    npm install -g @nestjs/cli

COPY . .

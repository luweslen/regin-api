FROM node:16-alpine

WORKDIR /home/node/app

# Install Dependencies
RUN apk update && apk upgrade

# Configure container network
EXPOSE 3000
EXPOSE 9229


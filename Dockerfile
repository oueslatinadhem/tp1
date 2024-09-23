FROM node:20-alpine3.19
ENV NODE_ENV production
WORKDIR /app
COPY package*.* .
RUN npm ci
COPY . .
EXPOSE 3001
CMD  npm start
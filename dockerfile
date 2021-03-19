# creamos una variable
ARG PORT=3000
FROM node:12-alpine3.12 AS build
LABEL autor="jprr"
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE ${PORT}


FROM nginx:1.19.0-alpine AS prod-stage
COPY --from=build /app/build /usr/share/nginx/html
CMD [ "nginx", "-g", "daemon off;" ]
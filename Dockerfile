FROM node:alpine

WORKDIR /app

COPY src ./src
COPY prisma ./prisma
COPY rules ./rules
COPY .env.production ./.env
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock
COPY tsconfig.json ./tsconfig.json
COPY gc-metrics-key.json ./gc-metrics-key.json
COPY gc-storage-key.json ./gc-storage-key.json


RUN yarn install
RUN npx prisma migrate deploy
RUN npx prisma db seed
RUN yarn build
RUN cp -r prisma/* dist/prisma
RUN cp -r .env dist
RUN cp -r gc-metrics-key.json dist
RUN cp -r gc-storage-key.json dist

EXPOSE 4200
EXPOSE 5432

CMD [ "yarn", "start" ]
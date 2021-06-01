
FROM node:16.1-alpine AS deps
ARG APP=next-app
RUN npm i -g pnpm
WORKDIR /usr/app
COPY ".npmrc" .
COPY ["./apps/${APP}/package.json", "pnpm-lock.*", "./"]
RUN pnpm install
ENV NODE_ENV=production
COPY ./apps/${APP}/. .
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]

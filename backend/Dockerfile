FROM node:14.17-alpine
ENV NODE_ENV=production
ENV SESSION_SECRET=TEMP_SESSION_SECRET
ENV DATABASE_ADAPTER=prisma_postgresql
RUN npm i -g pnpm
WORKDIR /usr/src/app
COPY ["package.json", "../pnpm-lock.*", "./"]
RUN pnpm install
COPY . .
RUN pnpm run build
EXPOSE 3000
CMD ["pnpm", "start"]

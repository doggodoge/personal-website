FROM node:18-alpine AS build
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate
ENV PATH="/app/.corepack/bin:${PATH}"
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

FROM nginx:alpine AS production
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

FROM node:20-alpine AS builder

WORKDIR /app
ENV CI=true

COPY . .

RUN corepack enable && pnpm install --frozen-lockfile
RUN pnpm build

# ----------------------------

FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

# Copy built app
COPY --from=builder /app ./

EXPOSE 3000

CMD ["node", "node_modules/next/dist/bin/next", "start", "-p", "3000"]

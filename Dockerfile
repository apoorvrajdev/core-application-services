FROM node:20-alpine AS builder

WORKDIR /app

# Copy everything first
COPY . .

# Install dependencies
RUN corepack enable && pnpm install --frozen-lockfile

# Build
RUN pnpm build

FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app ./

EXPOSE 3000

CMD ["pnpm", "start"]

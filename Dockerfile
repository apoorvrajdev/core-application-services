FROM node:20-alpine AS builder

WORKDIR /app

# Set CI mode for pnpm (important fix)
ENV CI=true

# Copy everything first
COPY . .

# Install dependencies
RUN corepack enable && pnpm install --frozen-lockfile

# Build app
RUN pnpm build


# ---- Production stage ----
FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app ./

EXPOSE 3000

CMD ["pnpm", "start"]

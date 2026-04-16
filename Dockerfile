# Production image for static export (`output: "export"` → `out/`).
# This project does not use Prisma or Next.js standalone output; serving is nginx, not `node server.js`.

# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json* ./

# Install all deps (including dev) so `next build` can compile TypeScript, Tailwind, etc.
RUN npm ci

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN mkdir -p public

RUN npm run build

# Stage 3: Runner — static `out/` via nginx (matches Fly `internal_port = 8080`)
FROM nginx:alpine AS runner

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

FROM oven/bun:1.1.45-node20

WORKDIR /app
COPY . .
RUN bun install

EXPOSE 3000
CMD ["bun", "run", "src/index.ts"]

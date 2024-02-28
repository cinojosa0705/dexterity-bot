# Use the official Bun image as the base
FROM oven/bun:1 as base
WORKDIR /usr/src/app

# Install dependencies into a temporary directory to cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# Install production dependencies only
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# Copy node_modules from the temporary directory, then copy all project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules /usr/src/app/node_modules
COPY . /usr/src/app

# Optional: Run tests and build your application
# Set the environment variable to production for this stage
ENV NODE_ENV=production
RUN bun test
RUN bun run build

# Copy production dependencies and source code into the final image
FROM base AS release
COPY --from=install /temp/prod/node_modules /usr/src/app/node_modules
COPY --from=prerelease /usr/src/app/index.ts /usr/src/app/
COPY --from=prerelease /usr/src/app/package.json /usr/src/app/

# Set the user to 'bun', expose the application's port, and define the entry point
USER bun
EXPOSE 3000/tcp
ENTRYPOINT ["bun", "run", "src/index.ts"]

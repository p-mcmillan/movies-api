# Variables
DOCKER_IMAGE = movies-api-backend
DOCKER_TAG = latest
DOCKER_CONTAINER = movies_api

# Default target: build the project
all: build

# Build the NestJS project
build:
	npm run build

# Format the code using Prettier
format:
	npm run format

# Start the NestJS application
start:
	npm run start

# Start the NestJS application in development mode
start-dev:
	npm run start:dev

# Start the NestJS application in production mode
start-prod:
	docker run -d -p 4001:4001 --name $(DOCKER_CONTAINER) $(DOCKER_IMAGE):$(DOCKER_TAG)

# Lint the code using ESLint
lint:
	npm run lint

# Run tests
test:
	npm run test

# Run tests with coverage
test-cov:
	npm run test:cov

# Run tests in watch mode
test-watch:
	npm run test:watch

# Build and run the Docker container
docker-build:
	docker build -t $(DOCKER_IMAGE):$(DOCKER_TAG) .

docker-run:
	docker run -d -p 3000:3000 --name $(DOCKER_CONTAINER) $(DOCKER_IMAGE):$(DOCKER_TAG)

# Stop and remove the Docker container
docker-stop:
	docker stop $(DOCKER_CONTAINER)
	docker rm $(DOCKER_CONTAINER)

# Clean up build artifacts
clean:
	rm -rf dist

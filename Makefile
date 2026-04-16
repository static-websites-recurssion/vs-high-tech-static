.PHONY: help install lint build clean docker-build docker-run

IMAGE_NAME ?= vs-high-tech-static
IMAGE_TAG ?= latest
CONTAINER_NAME ?= vs-high-tech-static
PORT ?= 8080

help:
	@echo "Targets:"
	@echo "  make install       - npm ci"
	@echo "  make lint          - npm run lint"
	@echo "  make build         - next build (static export to out/)"
	@echo "  make clean         - remove .next and out"
	@echo "  make docker-build  - docker build -t $(IMAGE_NAME):$(IMAGE_TAG)"
	@echo "  make docker-run    - run container on port $(PORT)"

install:
	npm ci

lint:
	npm run lint

build:
	npm run build

clean:
	rm -rf .next out

docker-build:
	docker build -t $(IMAGE_NAME):$(IMAGE_TAG) .

docker-run: docker-build
	docker rm -f $(CONTAINER_NAME) 2>/dev/null || true
	docker run --name $(CONTAINER_NAME) -p $(PORT):8080 $(IMAGE_NAME):$(IMAGE_TAG)

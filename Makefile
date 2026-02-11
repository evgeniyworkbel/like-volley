docker-image-build:
	docker build -t evgeniyworkbel/like-volley --platform linux/amd64,linux/arm64 .

docker-image-push:
	docker push evgeniyworkbel/like-volley
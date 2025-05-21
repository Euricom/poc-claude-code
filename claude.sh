mkdir -p ./.data
docker run -it --rm -v $(pwd):/app/ -v ./.data:/home/codeuser claude-code-sandbox

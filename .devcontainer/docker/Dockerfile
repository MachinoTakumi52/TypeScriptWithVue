# debianベース Node設定
FROM node:20.14-bookworm-slim

# timezone
RUN ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

# apt
RUN apt update

# git
RUN apt-get install -y git
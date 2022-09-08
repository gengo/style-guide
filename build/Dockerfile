FROM node:18-bullseye

WORKDIR /srv/style-guide

RUN apt update && apt install -y ruby ruby-dev

COPY . ./

RUN gem install bundler
RUN bundle config set --local system 'true'
RUN bundle install

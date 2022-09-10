FROM  ghost:1-alpine

WORKDIR /usr/local/apache2/htdocs

COPY package.json .

RUN npm install

COPY . .

ENTRYPOINT [ "npm" ]

CMD ["start"]

FROM node:latest

# Set working directory
WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]

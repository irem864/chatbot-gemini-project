FROM nginx:alpine
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./chatbot-react/build /usr/share/nginx/html


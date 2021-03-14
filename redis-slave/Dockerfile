FROM redis:6.2.1-alpine
COPY ./slave.conf /usr/local/etc/redis/redis.conf
VOLUME /etc/redis /data
EXPOSE 6379
CMD ["redis-server" , "/usr/local/etc/redis/redis.conf"]
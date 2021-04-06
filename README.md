# INT493-url-shortener

## 🐳:=Prerequisites
- Docker
- Docker-compose

### 1. Clone Source Code
```sh
$ git clone https://github.com/kridtakom/INT493-url-shortener.git 
$ cd INT493-url-shortener/ 
```

### 2. Add .env file
**** Don't forget change value for varable \
For example : REDIS_HOST=192.168.1.2
```sh
$ cd URL-Shortener/
$ mv .env.example .env
$ vi .env
```

### 3. Change REDIS password
**** Don't forget change password to connect REDIS-SERVER
```sh
$ mkdir /etc/redis 
$ chmod 755 /etc/redis
$ cd ../redis
$ vi redis.conf
```

### 4. Assign execute permission to sh file
```
$ cd ..
$ chmod +x *.sh 
```

### 5. Run Docker
```
$ ./docker-update\&clear\&run.sh
```

## 🤖:-Run Redis Slave mode
**** Don't forget change slave_password, redis_master_ip and master_password
```
$ cd redis-slave/
$ vi slave.conf
$ docker build --pull --no-cache -t redis_slave_build .
$ docker run -d -p 6379:6379 --name redis-slave --restart=always redis_slave_build
```

## 👷‍♂️ Run pm2 
```
PORT=3000 pm2 start -i 0 ./bin/www
```

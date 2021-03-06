# INT493-url-shortener

# Prerequisites
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

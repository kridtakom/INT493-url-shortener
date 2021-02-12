# INT493-url-shortener

# Prerequisites
- Docker
- Docker-compose

### 1. Clone Source Code
```sh
$ git clone https://github.com/kridtakom/INT493-url-shortener.git 
$ cd INT493-url-shortener 
$ chmod +x *.sh 
```

### 2. Add .env file
**** Don't forget change value for varable \
For example : REDIS_HOST=192.168.1.2
```sh
$ mv .env.example .env
$ vi .env
```

### 3. Run 
*** Don't forget change redis password in docker-compose file
```
$ ./docker-update&clear&run.sh
```

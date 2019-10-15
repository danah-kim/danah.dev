---
title: "NGINX란?"
path: "/blog/HTTP/nginx"
date: "2019-10-15"
coverImage: "https://www.nginx.com/wp-content/uploads/2019/10/NGINX-Logo-White-Endorsement-RGB.svg"
author: "Danah"
excerpt: "High Performance Load Balancer, Web Server, & Reverse Proxy"
---

## NGINX

[NGINX | High Performance Load Balancer, Web Server, & Reverse Proxy](https://www.nginx.com/)

Nginx는 Event-Driven 방식으로 클라이언트에 요청을 처리해주는 웹 서버로, 전달자 역할만 하기 때문에 동시접속 처리에 특화된 웹 서버 프로그램이다.

![](http://i.imgur.com/W6JATVH.png)

## 사용이유

- `응용프로그램 서버에 요청을 보내는 리버스 프록시 역할`: 클라이언트의 요청 처리를 분산시킬 수 있는 로드 밸런스를 사용함으로써 효율적인 처리를한다.

  - `로드밸런스`: 컴퓨터 네트워크 기술의 일종으로 둘 혹은 셋이상의 중앙처리장치 혹은 저장장치와 같은 컴퓨터 자원들에게 작업을 나누는 것을 의미한다. 이로써 가용성 및 응답시간을 최적화 시킬 수 있다.

    ![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Elasticsearch_Cluster_August_2014.png/400px-Elasticsearch_Cluster_August_2014.png)

- `HTTP 서버 역할`: 정적파일을 다이렉트로 제공해주기 때문에 백엔드 서버에 부담을 주지 않는다.
- 클라이언트는 Ngnix 포트로만 백엔드 서버에 접근할 수 있어 보안에 도움이 된다.

## Nginx의 디렉터리

    danah@danah-desktop:/etc/nginx$ tree
    .
    ├── conf.d
    ├── fastcgi.conf
    ├── fastcgi_params
    ├── koi-utf
    ├── koi-win
    ├── mime.types
    ├── modules-available
    ├── modules-enabled
    │   ├── 50-mod-http-geoip.conf -> /usr/share/nginx/modules-available/mod-http-geoip.conf
    │   ├── 50-mod-http-image-filter.conf -> /usr/share/nginx/modules-available/mod-http-image-filter.conf
    │   ├── 50-mod-http-xslt-filter.conf -> /usr/share/nginx/modules-available/mod-http-xslt-filter.conf
    │   ├── 50-mod-mail.conf -> /usr/share/nginx/modules-available/mod-mail.conf
    │   └── 50-mod-stream.conf -> /usr/share/nginx/modules-available/mod-stream.conf
    ├── nginx.conf
    ├── proxy_params
    ├── scgi_params
    ├── sites-available
    │   └── default
    ├── sites-enabled
    │   └── default -> /etc/nginx/sites-available/default
    ├── snippets
    │   ├── fastcgi-php.conf
    │   └── snakeoil.conf
    ├── uwsgi_params
    └── win-utf

- `/etc/nginx`: Nginx를 설정하는 디렉토리로 모든 설정을 여기 안에서 한다.
- `/etc/nginx/nginx.conf`: Ngnix의 메인 설정 파일로 Nginx의 글로벌 설정을 수정 할 수 있다.
- `/etc/nginx/sites-available`: 프록시 설정 및 요청 처리방식에 대해 설정 할 수 있다.
- `/etc/nginx/sites-enabled`: sites-available 디렉토리에서 연결된 파일들이 존재하는 곳이다. 여기와 연결이 되어 있어야 nginx가 프록시 설정을 적용한다.
- `/etc/nginx/snippets`: sites-available 디렉토리에 있는 파일들에 공통적으로 포함될 수 있는 설정들을 정의할 수 있다.

## websever setting

```shell
$ sudo apt install nginx
$ cd /etc/nginx/
$ vi nginx.conf -- conf 설정
$ vi /etc/hosts/
$ sudo systemctl restart nginx
```

nginx.conf

```conf
worker_processes 1;

events {
    worker_connections 1024;
}
http {
    server {
        listen 80;
        location / {
            proxy_pass http://test.danah.dev:3000;
        }
    }
}
```

- events: 비동기 이벤트 처리 방식에 대한 옵션을 설정한다.
- `worker_connections`: 하나의 프로세스가 처리할 수 있는 커넥션의 수를 의미한다.
- `proxy_pass`: HTTP 프록시 서버에 들어온 요청에 일치하는 location에 따라 포워딩 될 곳을 설정한다.

hosts

    127.0.0.1 test.danah.dev

- `test.danah.dev`로 요청하면 `127.0.0.1` 으로 요청하는 것과 같음 alias

## Local 환경에서 Virtual Hosts 사용 이유

firebase 같은 API 요청시 CORS 문제를 방지하기 위해 DNS를 지정해준다.

## 참고

- [Nginx를 사용하여 프록시 서버 만들기](https://velog.io/@jeff0720/2018-11-18-2111-%EC%9E%91%EC%84%B1%EB%90%A8-iojomvsf0n)
- [NGINX Docs | NGINX Reverse Proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/)
- [nginx proxy_pass와 hosts로 간단한 로컬 설정](https://chanhy63.tistory.com/19)
- [Nginx VirtualHost](https://www.joinc.co.kr/w/man/12/Nginx/virtualhost)
- [프록시(Proxy)란 무엇인가?](https://milkye.tistory.com/202)

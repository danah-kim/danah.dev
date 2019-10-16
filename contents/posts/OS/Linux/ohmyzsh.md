---
title: "Oh My Zsh"
path: "/blog/OS/Linux/ohmyzsh"
date: "2019-10-15"
coverImage: ""
author: "Danah"
excerpt: "zsh의 환경설정을 다루는 프레임워크"
---

## Oh My Zsh

zsh의 환경설정을 다루는 프레임워크

### zsh 설치

```shell
$ sudo apt-get install zsh
$ zsh --version
```

### 기본 shell 변경하기

```shell
# 쉘 위치 확인
$ which zsh

# 기본 쉘을 zsh 위치로 변경
$ chsh -s `which zsh` # chsh -s /usr/bin/zsh
$ echo $SHELL
```

### Oh My Zsh 설치

```
$ curl -L https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh | sh

# 실행
$ zsh
```

## 참고

- [터미널 초보의 필수품인 Oh My ZSH!를 사용하자](https://nolboo.kim/blog/2015/08/21/oh-my-zsh/)
- [zsh 플러그인 설치하기](https://nachwon.github.io/how-to-install-zsh-plugins/)

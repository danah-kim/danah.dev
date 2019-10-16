---
title: "Git-Flow란?"
path: "/blog/react/gitflow"
date: "2019-10-16"
coverImage: ""
author: "Danah"
excerpt: "소프트웨어의 소스코드를 관리하고 출시하기 위한 브랜칭 관리 전략(branch management strategy)"
---

## git-flow

소프트웨어의 소스코드를 관리하고 출시하기 위한 `브랜칭 관리 전략(branch management strategy)`

**git-flow 설치하기**

```shell
$ apt-get install git-flow
```

## Git-flow 전략

![](https://nvie.com/img/git-model@2x.png)

Git-flow에는 5가지 종류의 브랜치가 존재한다. 항상 유지되는 메인 브랜치들(master, develop)과 일정 기간 동안만 유지되는 보조 브랜치들(feature, release, hotfix)이 있다.

- master : 제품으로 출시될 수 있는 브랜치
- develop : 다음 출시 버전을 개발하는 브랜치
- feature : 기능을 개발하는 브랜치
- release : 이번 출시 버전을 준비하는 브랜치
- hotfix : 출시 버전에서 발생한 버그를 수정 하는 브랜치

## 참고

- [A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)
- [git-flow cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html)
- [우린 Git-flow를 사용하고 있어요 - 우아한형제들 기술 블로그](http://woowabros.github.io/experience/2017/10/30/baemin-mobile-git-branch-strategy.html)

# 아이돈케어 (IDonCare)

> **삼성청년SW아카데미(SSAFY)** <br/> **개발기간: 2023.09.04 ~ 2023.10.06**

## 배포 주소

> **프론트 서버** : ~~[https://i9d111.p.ssafy.io](https://i9d111.p.ssafy.io)~~ <br> **백엔드 서버** : ~~[https://i9d111.p.ssafy.io/tab](https://i9d111.p.ssafy.io/tab)~~<br> **실시간 키오스크** : ~~[https://i9d111.p.ssafy.io/kiosk/auth](https://i9d111.p.ssafy.io/kiosk/auth)~~<br>
> **UCC(시연 영상)** : https://youtu.be/xHrlpX0-5OM

## 개발팀 소개

|                       신지훈                        |                  성연석                   |                    이우철                     |
| :-------------------------------------------------: | :---------------------------------------: | :-------------------------------------------: |
| [wlgns1718@naver.com](https://github.com/wlgns1718) | [@abcd9351](https://github.com/Yeon-seok) | [lwc421@gmail.com](https://github.com/LWC421) |
|                       BackEnd                       |                  BackEnd                  |                    BackEnd                    |

|                이정훈                 |                      이제성                      |              김슬기               |
| :-----------------------------------: | :----------------------------------------------: | :-------------------------------: |
| [wjdgns0631@gmail.com](www.naver.com) | [wptjd6141@naver.com](https://github.com/J3SUNG) | [0_1998@naver.com](www.naver.com) |
|               FrontEnd                |                     FrontEnd                     |             FrontEnd              |

---

## 프로젝트 소개

아이돈케어는 부모가 자녀의 용돈을 손쉽게 관리해주는 서비스를 제공합니다. 뿐만 아니라 미션과 리워드를 통해 자녀의 금융 교육을 보조하고 활동보고서를 통해 올바른 경제 관념을 기를 수 있도록 기능을 제공하고 있습니다.

#### 자녀의 용돈관리와 경제 활동을 위해 다양한 기능을 제공합니다.

- 정기용돈 및 용돈 지급 기능
  - 부모는 서로 관계를 수락한 자녀의 정기 용돈을 등록할 수 있고, 정기 용돈 목록에서 확인할 수 있습니다.
  - 용돈을 바로 지급하거나 자녀의 용돈 요청에 의해 금액을 재설정하여 용돈을 지급할 수 있습니다.
- 미션 기능
  - 미션 카테고리를 통해 간편하게 미션을 등록할 수 있습니다.
  - 자녀가 요청한 미션에 대해 내용을 수정하거나 금액을 재설정하여 등록할 수 있습니다.
  - 미션을 제대로 수행했는지에 대한 내용을 확인할 수 있습니다.
- 활동 보고서 기능
  - 부모는 등록된 자녀의 입출금 내역을 확인할 수 있습니다.
  - 요일별, 월별 자녀의 입출금 상태를 확인할 수 있습니다.
  - 자녀가 가장 많이 소비한 활동과 지난 기간에 비해 소비 활동이 어떻게 변했는지 확인할 수 있습니다.
- 간편결제 기능
  - 자녀는 QR코드를 생성하거나 QR코드를 조회하여 간편하게 결제를 진행할 수 있습니다.

## 시스템 아키텍처

![system drawio (1)](https://github.com/wlgns1718/idoncare/assets/113763592/59186691-9662-45d9-817b-a07874001420)


## 시작 가이드

### Requirements

For building and running the application you need:

- [Node.js 18.16.0](https://nodejs.org/ca/blog/release/v18.16.0)
- [SpringBoot 2.7.13](https://spring.io/blog/2023/06/22/spring-boot-2-7-13-available-now)
- [Java 1.8](https://www.oracle.com/kr/java/technologies/javase/javase8-archive-downloads.html)
- [MySql](https://dev.mysql.com/downloads/installer/)

### Installation

<!-- ```bash
$ git clone https://lab.ssafy.com/s09-webmobile3-sub2/S09P12D111.git
``` -->

#### Backend

```
$ cd Backend/idoncare
$ [update] build.gradle
$ cd..
$ cd openBank
$ [update] build.gradle
$ [Run TabApplication]
```

#### Frontend

```
$ cd Frontend
$ npm install
$ npm run start
```

---

## 기술스택 🛠

[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1700651852355?alt=media&token=58682014-4ab0-4954-b92f-802b506d8a71)](https://github.com/msdio/stackticon)

### FrontEnd

- Node JS
- React
- TypeSCript
- Tailwind

### BackEnd

- Java
- Spring Boot
- Spring Data JPA
- Swagger-ui
- JWT
- Gradle
- JUnit5

### Deploy

- AWS EC2
- Docker
- Docker-compose
- Nginx
- jenkins

### Communication

- Git
- GitLab
- Jira
- Notion
- Mattermost
- Figma

### API 키 발급

#### Kakao developers 카카오 로그인 API 설정

- 내 애플리케이션 → 애플리케이션 추가
- 카카오 로그인 동의항목 설정, 활성화 설정
- REST API 키, Redirect URL, Client Secret 키 생성

## 설치방법
* (recommended) nvm
* node 18.17.1 / mac

노드 환경을 `nvm` 을 통해서 설정합니다. 로컬에 노드 18을 설치해도 동작합니다.
```bash
nvm install 18.17.1
nvm use 18.17.1
```
의존성을 설치합니다.
```bash
npm install
```
서버를 실행합니다. 빌드는 자동으로 됩니다.
```bash
npm run start
```

## API 명세

# 학교 관리자

### 학교 페이지 생성

### POST `/schools/{schoolId}/pages`
* 성공시 200 응답과 함께 작성된 페이지의 id(integer)를 응답으로 돌려줍니다.  

  | http status | 200 |
  |-------------|-----|
  | body        | {"id": 123} |

### 학교 소식 발행

### POST `/pages/{pageId}/notices`
* application/json
* 성공시 200 응답과 함께 작성된 소식의 id(integer)를 응답으로 돌려줍니다.  

  | http status | 200 |
    |-------------|-----|
  | body        | {"id": 123} |

### 학교 소식 삭제
### DELETE `/notices/{noticeId}`
* application/json
* 성공시 204 응답을 돌려줍니다.  

  | http status | 204 |
  |-------------|-----|
  | body        | |

### 학교 소식 수정
### PATCH `/notices/{noticeId}`
* application/json
* body
    * {
      "title": "이렇게 해보는건 어떨까요?",
      "content": "ㅁㄴㅇㄹ"
      }
* 성공시 200 응답과 함께 변경된 notice를 내려줍니다.  

  | http status | 200 |
  |-------------|-----|
  | body        | {"id": 123, "title": "이렇게 해보는건 어떨까요?", "content": "ㅁㄴㅇㄹ"} |

# 학생
### 학교 페이지 구독
### POST `/pages/{pageId}/subscriptions`
* 성공시 200 응답과 함께 구독의 id(integer)를 응답으로 돌려줍니다.  

  | http status | 200 |
  |-------------|-----|
  | body        | {"id": 123} |

### 구독중인 학교 페이지 목록 확인
### GET `/students/{studentId}/subscriptions?page={page}&size={size}`
* 성공시 200 응답과 함께 구독한 학교의 페이지 목록을 내려줍니다.
  * 구독한 학교가 없을 경우 빈 배열을 내려줍니다.
  * 구독한 학교가 있을 경우 구독한 학교의 페이지 목록을 내려줍니다. (최신순)

### 페이지 구독 취소
### DELETE `/students/{studentId}/subscriptions/{subscriptionId}`
* 성공시 204 응답을 돌려줍니다.  

  | http status | 204 |
  |-------------|-----|
  | body        | |

### 학교 페이지별 소식 조회
### GET `/students/{studentId}/notices?schoolId={schoolId}&page={page}&size={size}`

* query parameter
  * page: integer, nullable
  * size: integer, nullable
  * schoolId: integer, nullable
* 성공시 200 응답과 함께 구독한 학교의 소식을 내려줍니다. (최신순)


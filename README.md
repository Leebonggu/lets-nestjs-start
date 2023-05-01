# Next Tutorial

## CRUD Board
- 게시글 모듈
- 회원(권한) 모듈

## Modules 기본 구성
- Controller
- Service
- Entity
- Repository
- Pipe

- @Modules Decorator로 주석이 달린 클래스
  - Nest가 앱 구조를 구성하는데 사용하는 메타 데이터 제공
- 각 프로그램은 하나의 루트 모듈이 필요(App)
- 관련된 기능 집합으로 구성하는게 효과적
- provider: 현재 모듈 내에서, 다른 모듈을 사용하기 위한 설정
- exports: 외부 모듈에서 사용하기 위한 설정?

## Controller
- 요청처리, 요청응답 역할
- 데코레이터를 통한 정의
## Provider
- Nest 클래스는 프로바이더로 취급될 수 있다.
  - 서비스
  - 레포지토리
  - 팩토리
  - 헬퍼 등
- 주요 아이디어 -> 종속성으로 주입할 수 있다는 것.
- 객체는 서로 다양한 관계를 만들 수 있고, 객체의 인스턴스를 연결하는 기능은 대부분 Nest런타임 시스템에 위임된다.
- 예를들어, 
  - 컨트롤러에서 필요한 부분을 모두 컨트롤러에서 구현하면 너무 복잡해짐
  - 필요한 기능을 따로 만들고, 컨트롤러에 주입해서 사용
- 서비스, 레포지토리를 사용하기 위해서는 provider를 네스트에 등록해야 한다.
  - in module file
## Service
- 소프트웨어 개발내의 공통 개념
- @injectable로 감싸져서 모듈에 제공
- 데이터 유효성, 데이터베이스 접근 등의 역할을 수행
  - 비즈니스 로직 담당
- 컨트롤러에서 사용하려면, 종송성을 주입(DI)해서 사용해야 한다.
  - 생성자에 타입으로 넣어서 사용

## Model
- 데이터의 형태
- class or interface의 형태

## DTO
- data transfer object
- 계층간 데이터 교환을 위한 객체

## Pipe
- Injectable이 달린 클래스
- 중간에서 데이터 확인 및 변환
- Nest
  - 메소드 호출 직전, 파이프를 삽입하고 파이프는 메소드로 향하는 인수를 수신하고, 이에 동작
- 핸드러 레벨
  - 컨트롤러에서 UsePipes를 이용해서 사용
- 파라미터 레벨
  - 파라미터 하나에만 사용가능
- 글로벌 레벨
  - 애플리케이션 전체에 적용
- 빌트인 파이프가 몇개 있음
- class-validator, class-transformer

### Custom Pipe
- PipeTransform 인터페이스를 새롭게 만들 커스텀 파이프에 구현해줘야 한다.
- PipeTransform 모든 파이프에서 구현해야하는 인터페이스
- transform(value, meta) 메소드 구현 필요
  - 반환값은 라우트 핸들러로 전달
  - 예외는 클라이언트로 전달

## TypeORM
- nodejs, typescript orm
- 여러 DB 지원

### ORM
- 객체, 관계형DB 데이터를 자동으로 변형 및 연결하는 작업

## Entity
- 생(pure)쿼리를 대신하는 용도
- ORM -> class를 이용한다.
- 디비 테이블에 대한 설계도
- @Entity -> Entity임을 선언

## Repository
- 엔티티 찾기, 삽입, 업데이트, 삭제 등을 처리

## JWT
- 당사자간 정보를 제이슨 객체로 안전하게 전송하기 위한 방법.
- 디지털 서명이 되어있으므로, 확인하고 신뢰할 수 있다.
- 정보를 안전하게 전할 때, 유저의 권한 같은 것을 체크를 하기 위해서 사용하는 모듈

### 구조
- Header
  - 토큰에 대한 메타데이터 포함
    - 타입, 해싱 알고리즘(SHA256...)
- Payload
  - 유저정보, 만료기간, 주제(Subject) 등
- Verify Signature
  - 토큰이 위조되지 않았다는 것을 확인하는 부분
  - 헤더 및 페이로드 세그먼트, 서명 알고리즘, 비밀 또는 공개키를 사용하여 생성됨.

### With Token
- 클라이언트 -> 요청 ->서버 -> 반응 + 토큰 in Header -> 클라이언트
- 유저 요청 헤더에 토큰이 있는 경우가 있다.
  - 서버에서는 이 토큰을 보고, 유저를 검증할 수 있어야 한다.
  - 즉, 토큰을 가지고, 클라이언트가 요청하는 경우에 대한 처리.

## Middleware: 각각 사용목적은 다름
- Pipe: 유효성 검사, 페이로드 변환
- Filters: 오류 처리 
- Guards: 인증 미들웨어.
- Interceptor: 응답 매핑 및 캐시 관리와 함께 요청로깅과 같은 전후 미들웨어
- guards -> interceptor(before) -> pipe -> controller -> service -> controller -> interceptor(after) -> filter -> client

## QueryBuilder
- 생쿼리를 통해 디비값을 가져올 수 있음.

## Config
- 개발 및 운영환경에 따라 달라져야 하는 코드가 있다.
- 외부에 노출되지 않아야 하는 코드가 있다.
  
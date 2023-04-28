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
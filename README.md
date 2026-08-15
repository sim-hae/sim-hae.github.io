# SIMHAE Profile

GitHub Pages에 바로 올릴 수 있는 정적 개인 프로필 페이지입니다.

## 파일 구성

```text
.
├─ index.html         # 소개, 수상, 활동, 학력, 프로젝트, 연락처
├─ style.css          # 디자인과 반응형 레이아웃
├─ script.js          # 한·영 전환, 선택 언어 저장, 연도
├─ profile_image.jpg  # 프로필 사진
├─ favicon.svg        # 브라우저 탭 아이콘
├─ 404.html           # 오류 페이지
└─ .nojekyll          # GitHub Pages 설정
```

## 내용 수정

- 랜딩과 About 이력 목록, 프로젝트: `index.html`
- 이메일, 블로그, Instagram: `index.html`의 `CONTACT` 부분
- 프로필 사진: `profile_image.jpg`를 같은 이름의 새 이미지로 교체
- 색상: `style.css` 맨 위의 `:root` 변수

프로젝트 항목에 링크를 연결하려면 원하는 `<div class="project-row">`를
`<a class="project-row" href="주소">`로 바꾸고 닫는 태그도 `</a>`로 바꾸면 됩니다.

## 로컬에서 확인

`index.html`을 브라우저로 열거나, 이 폴더에서 아래 명령을 실행합니다.

```bash
python -m http.server 8000
```

이후 `http://localhost:8000`으로 접속합니다.

## GitHub Pages 배포

1. 저장소 최상단에 이 폴더의 파일들을 업로드합니다.
2. GitHub 저장소의 **Settings → Pages**로 이동합니다.
3. **Deploy from a branch**, `main`, `/ (root)`를 선택하고 저장합니다.

사용자 페이지 저장소 이름이 `USERNAME.github.io`라면 주소는
`https://USERNAME.github.io/`입니다.

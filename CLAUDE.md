# blog/ — Hugo 블로그

## 플랫폼

- Hugo + GitHub Pages (Phase 1)
- 향후 Ghost 전환 예정 (plan/blog-platform-plan.md 참조)

## 발행 워크플로우

```
content/ideas/ → /blog-outline → /blog-draft → 퇴고
  → blog/content/posts/ 복사 → git push → 자동 배포
```

## 규칙

- 글쓰기 기준: content/writing-style.md
- Hugo shortcode 사용 최소화 (Ghost 전환 대비)
- 이미지: static/images/posts/{date}/ 에 정리
- frontmatter: title, date, tags, draft 필수

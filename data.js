/**
 * data.js — 프롬프트 뱅크 데이터 규격 샘플
 * index.html은 이 파일만 읽습니다. 이 파일만 교체하면 사이트가 업데이트됩니다.
 *
 * 📌 필드 규격:
 *   id       : 고유 식별자 (선택)
 *   section  : 사이드바 그룹 헤더 자동 생성
 *   category : 사이드바 필터 버튼 자동 생성
 *   title    : 카드 제목
 *   desc     : 한 줄 설명 (선택)
 *   content  : 실제 프롬프트 본문 ★ 필수 (복사 버튼 대상)
 *   tags     : 검색 태그 배열 (선택)
 *   source   : 출처 파일명 (선택)
 *
 * 💡 새 섹션/카테고리 추가 시 코드 수정 없이 자동 반영됩니다.
 */

window.PROMPT_DATA = [

  // ── 텍스트 프롬프트 ──
  {
    "id":       "txt-001",
    "section":  "📝 텍스트 프롬프트",
    "category": "카피라이팅",
    "title":    "AIDA 광고 카피 작성기",
    "desc":     "Attention→Interest→Desire→Action 구조의 고전적 광고 카피를 생성합니다.",
    "content":  "당신은 디지털 마케팅 전문 카피라이터입니다.\n\n다음 정보를 바탕으로 AIDA 구조의 광고 카피를 작성해 주세요:\n- 제품/서비스: [여기에 입력]\n- 타겟 고객: [여기에 입력]\n- 핵심 혜택: [여기에 입력]\n\n출력 형식:\n1) Attention (주의 끌기): ...\n2) Interest (흥미 유발): ...\n3) Desire (욕구 자극): ...\n4) Action (행동 유도 CTA): ...",
    "tags":     ["AIDA", "광고", "마케팅"],
    "source":   "marketing_prompts.md"
  },
  {
    "id":       "txt-002",
    "section":  "📝 텍스트 프롬프트",
    "category": "콘텐츠 기획",
    "title":    "30일 SNS 콘텐츠 캘린더",
    "desc":     "한 달 분량의 소셜미디어 콘텐츠 계획을 자동으로 생성합니다.",
    "content":  "소셜미디어 전략가로서 30일 콘텐츠 캘린더를 만들어 주세요.\n\n- 브랜드/주제: [여기에 입력]\n- 주요 플랫폼: [인스타그램 / 틱톡 / 링크드인 등]\n- 목표: [팔로워 증가 / 판매 / 인지도 등]\n- 포스팅 빈도: 주 [N]회",
    "tags":     ["SNS", "콘텐츠", "캘린더"],
    "source":   "content_prompts.md"
  },

  // ── 이미지 프롬프트 ──
  {
    "id":       "img-001",
    "section":  "🖼️ 이미지 프롬프트",
    "category": "제품 사진",
    "title":    "프리미엄 제품 광고 이미지",
    "desc":     "전문 스튜디오 수준의 제품 광고 이미지를 생성하는 프롬프트입니다.",
    "content":  "Professional product photography, [제품명] on clean white marble surface, soft studio lighting with subtle shadows, high-end commercial style, shallow depth of field, 8K ultra detailed, luxury brand aesthetic, minimalist composition",
    "tags":     ["제품", "광고", "스튜디오"],
    "source":   "image_prompts.md"
  },

  // ── 비즈니스 전략 ──
  {
    "id":       "biz-001",
    "section":  "💼 비즈니스 전략",
    "category": "사업 분석",
    "title":    "SWOT 분석 자동화",
    "desc":     "사업 아이디어나 기업의 강점/약점/기회/위협을 구조적으로 분석합니다.",
    "content":  "비즈니스 컨설턴트로서 다음 사업에 대한 완전한 SWOT 분석을 수행해 주세요.\n\n- 사업명/아이디어: [여기에 입력]\n- 업종: [여기에 입력]\n\n분석 형식:\n\n**강점 (Strengths)**\n1. ...\n\n**약점 (Weaknesses)**\n1. ...\n\n**기회 (Opportunities)**\n1. ...\n\n**위협 (Threats)**\n1. ...\n\n**전략적 제언** (2-3문장)",
    "tags":     ["SWOT", "분석", "전략"],
    "source":   "business_prompts.md"
  }

  // 👆 여기에 계속 추가하세요. 마지막 항목엔 쉼표(,) 없이!
];

console.log('✅ data.js 로드 완료: ' + window.PROMPT_DATA.length + '개 프롬프트');
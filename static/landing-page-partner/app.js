/**
 * Perth Link Partner Landing Page - Interactive Logic (Airbnb Host Theme)
 * Developed under when1lone Consulting - Structuralizing B2B Employer Value
 */

// 1. Data Store for Perth Ready-to-Deploy Talents
const workerData = {
  1: {
    title: "김민우 (25세) | 체대 전공 • 현장 조공 경력 3개월 • Morley 셰어하우스 입실 완료",
    location: "즉시 투입 가능 (퍼스 거주)",
    rating: "기술 검증 통과",
    host: "when1lone 대표",
    hostDesc: "한국 내 1:1 심층 화상 면접 및 기초 타일 현장 모의 테스트, 인성 근태 검증을 직접 완료한 정예 청년",
    price: "AUD $300",
    images: ["assets/perth_lifestyle.png", "assets/tile_work.png", "assets/perth_house.png"],
    jobDetails: [
      "**체력 조건**: 체육학 전공으로 600각 대형 타일 양중 및 고강도 자재 이동 등 기초 체력 S등급 검증",
      "**근로 경력**: 국내 아파트 신축 타일 현장 조공(데모도) 3개월 경력으로 그라우팅/메지 및 현장 정리 청소 숙련",
      "**약정 서약**: 근태 보증 서약 및 현장 안전 규칙 100% 준수 약정 완료 (무단 결근 발생 시 즉시 대체 인력 보증 대상)"
    ],
    stayDetails: [
      "**거주 현황**: 플랫폼 Morley 신축 셰어하우스 독방에 정착 입주 완료",
      "**출퇴근 연계**: 동료 카풀 드라이버 매칭 완료로 매일 새벽 6시 정각 현장 출근 픽업 노선 완비"
    ]
  },
  2: {
    title: "이진호 (28세) | 국내 타일 시공 1년 2개월 경력 • 메지/글루 믹싱 베테랑 • SUV 자차 보유",
    location: "자차 출퇴근 (Vic Park 거주)",
    rating: "준기공 테스트 통과",
    host: "when1lone 대표 & Ryan 파트너",
    hostDesc: "현지 실무 1년 이상 준기공을 선별하여 포트폴리오 시공 정밀도를 검증한 특급 기공 라인업",
    price: "AUD $480",
    images: ["assets/tile_work.png", "assets/perth_house.png", "assets/perth_lifestyle.png"],
    jobDetails: [
      "**시공 기술**: 본드/에폭시 믹싱 비율 완벽 숙지, 세라믹/포셀린 그라우팅(메지) 전문, 젠다이 마감 및 코너 정밀 커팅 가능",
      "**실무 경력**: 한국 상가/욕실 리모델링 현역 기공 조수 및 준기공으로 1년 2개월 실무 종사",
      "**도구 보유**: 안전화, 안전모, 화이트카드, 고성능 그라인더 및 정밀 타일 커터 개인 소지"
    ],
    stayDetails: [
      "**거주 현황**: Victoria Park 신축 셰어하우스 독방 거주 중 (지하철역 인근)",
      "**교통 편의**: 본인 소유 SUV 자차 통근. 현장 출퇴근 시 동료 워홀러 3명까지 카풀 픽업 지원 가능"
    ]
  },
  3: {
    title: "박태영 (23세) | 건축공학 전공 • 현역 신체 건강 1등급 • USI/화이트카드 취득 완료",
    location: "6/5 입국 예정 (화이트카드 완료)",
    rating: "사전 교육 수료",
    host: "when1lone 대표",
    hostDesc: "한국에서부터 시공 공구 명칭 암기, 현장 기초 안전 이론 및 공정 사전 교육을 이수한 성실 인재",
    price: "AUD $290",
    images: ["assets/perth_lifestyle.png", "assets/perth_house.png", "assets/tile_work.png"],
    jobDetails: [
      "**신체 조건**: 군필 (해병대 만기 전역), 신장 182cm, 성실성과 책임감 1등급 검증",
      "**학습 태도**: 대학 건축공학과 2학년 휴학 중으로 도면 해독 및 치수 측정이 타 구직자 대비 매우 우수",
      "**사전 준비**: 여권 비자 발급, 호주 USI 생성, 안전 화이트카드 100% 취득 완료"
    ],
    stayDetails: [
      "**거주 예정**: 6월 5일 퍼스 공항 입국 즉시 플랫폼 Scarborough 비치 하우스 독방 입주 예약 완료",
      "**교통 연계**: 동일 셰어에 거주하는 자차 보유 선배 드라이버와 출근 카풀 사전 조율 완료"
    ]
  },
  4: {
    title: "정재형 (31세) | 국내 욕실 리모델링 3년 전문 경력 • 정밀 타일 커팅 및 그라우팅 완벽",
    location: "즉시 투입 가능 (Subiaco 거주)",
    rating: "경력 검증 완료",
    host: "Sunny 실장 & Alex 빌더",
    hostDesc: "하이엔드 리모델링 시장에서 3년 이상 실무 시공을 주도한 베테랑 타일 시공 전문가",
    price: "AUD $500",
    images: ["assets/tile_work.png", "assets/perth_lifestyle.png", "assets/perth_house.png"],
    jobDetails: [
      "**전문 분야**: 주택 욕실 패키지 시공(떠붙임, 압착, 메지, 돔천장, 도기 세팅) 3년 단독 시공 경험 보유",
      "**현지 적응**: 호주식 시공(Timber Wall 글루 바름, 웨트 에어리어 방수 시트 마감) 사전 실무 교육 이수",
      "**소통 역량**: 기초 영어 소통 가능하여 호주인 빌더 사이트에서도 직접 작업 지시 수령 가능"
    ],
    stayDetails: [
      "**거주 현황**: Subiaco 명문 맨션 독방 거주 중 (조용하고 안전한 환경)",
      "**교통 편의**: 개인 소유 차량으로 단독 출퇴근 중 (자차 보조 리소스 적용)"
    ]
  },
  5: {
    title: "최예원 (24세) | 실내디자인 전공 • 마감/실리콘 및 현장 보조 꼼꼼함 최상 • 선배 추천인재",
    location: "즉시 투입 가능 (Joondalup 거주)",
    rating: "실리콘 마감 우수",
    host: "Sunny 실장",
    hostDesc: "여성 실무 선배로서 현장 마인드와 정리 정돈, 실리콘 코킹 정밀도를 보증하는 에이스",
    price: "AUD $300",
    images: ["assets/perth_lifestyle.png", "assets/perth_house.png", "assets/tile_work.png"],
    jobDetails: [
      "**상세 기술**: 실내디자인 전공으로 도면 이해도 우수, 정밀 코킹(실리콘 쏘기), 타일 그라우팅(메지) 틈새 마감 전문성 탁월",
      "**현장 마인드**: 작업 공간 청소, 공구 정리 정돈, 섬세한 마감 터치로 현장 시공 품질 관리 보조 최적화",
      "**준비 사항**: 화이트카드 취득 완료, TFN 텍스 번호 발급 완료"
    ],
    stayDetails: [
      "**거주 현황**: Joondalup 평화로운 가든 하우스 독방 입실 거주 중",
      "**교통 편의**: Sunny 실장 및 팀 드라이버 차량으로 출퇴근 무료 픽업 제공"
    ]
  },
  6: {
    title: "강도윤 (29세) | 상업 타일 2년 경력 • 600각 대형 타일 시공 전문가 • 픽업 가능 SUV 소유",
    location: "자차 보유 (Fremantle 거주)",
    rating: "시공 포트폴리오 패스",
    host: "when1lone 대표 & taeho 대표",
    hostDesc: "고급 도급 현장을 전담할 수 있는 리더십과 600각 이상 대형 시공 경력을 보유한 숙련 타일러",
    price: "AUD $500",
    images: ["assets/tile_work.png", "assets/perth_lifestyle.png", "assets/perth_house.png"],
    jobDetails: [
      "**전문 분야**: 상가 바닥 600x600각 포셀린/세라믹 대형 타일 정밀 부착, 에폭시 본딩 시공 및 평면 평탄 클립 조율 베테랑",
      "**실무 경력**: 국내 준종합건설사 타일 도급팀 2년 전속 근무로 상업 빌딩 및 신축 현장 시공 포트폴리오 검증",
      "**인성 체크**: 근면성 테스트 및 신원 보증 100% 완료, 대단위 용역 사이트 리더 경험 보유"
    ],
    stayDetails: [
      "**거주 현황**: Fremantle 빈티지 테라스 하우스 독방 정착 중",
      "**교통 편의**: 본인 소유 SUV 자차 운전. 새벽 기상 및 퍼스 전 지역 픽업/카풀 3명 매칭 지원"
    ]
  }
};

// 2. DOM Elements Selection
document.addEventListener("DOMContentLoaded", () => {
  initCategoryFilter();
  initRoiCalculator();
  initSearchCapsule();
  initImageCarouselAutoPlay();
});

// ==========================================
// 3. Airbnb Categories Filter Logic
// ==========================================
function initCategoryFilter() {
  const tabs = document.querySelectorAll(".category-tab");
  const cards = document.querySelectorAll(".package-card");
  
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Toggle Active class
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const filterValue = tab.getAttribute("data-category");
      
      cards.forEach(card => {
        const cardCategories = card.getAttribute("data-category").split(" ");
        
        if (filterValue === "all" || cardCategories.includes(filterValue)) {
          card.style.display = "flex";
          // Add subtle fade in animation
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          setTimeout(() => {
            card.style.transition = "var(--transition-normal)";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 50);
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// ==========================================
// 4. Wishlist Toggle Interaction
// ==========================================
function toggleWishlist(button) {
  button.classList.toggle("active");
  const heartIcon = button.querySelector("i");
  if (button.classList.contains("active")) {
    heartIcon.className = "fa-solid fa-heart";
    button.style.transform = "scale(1.3)";
    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 150);
  } else {
    heartIcon.className = "fa-regular fa-heart";
  }
}

// ==========================================
// 5. Search Capsule Active State Simulation
// ==========================================
function initSearchCapsule() {
  const searchCapsule = document.getElementById("searchCapsule");
  if (!searchCapsule) return;

  const tabs = searchCapsule.querySelectorAll(".search-tab");
  
  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      e.stopPropagation();
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });

  document.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
  });

  const searchBtn = searchCapsule.querySelector(".search-btn");
  if (searchBtn) {
    searchBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const grid = document.getElementById("talent-grid");
      if (grid) {
        grid.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }
}

// ==========================================
// 6. Airbnb Image Carousel Auto-play on Hover
// ==========================================
function initImageCarouselAutoPlay() {
  const cards = document.querySelectorAll(".package-card");
  
  cards.forEach(card => {
    const images = card.querySelectorAll(".card-img");
    if (images.length <= 1) return;
    
    let intervalId = null;
    let currentIndex = 0;
    
    card.addEventListener("mouseenter", () => {
      intervalId = setInterval(() => {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
      }, 2000);
    });
    
    card.addEventListener("mouseleave", () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      images.forEach(img => img.classList.remove("active"));
      images[0].classList.add("active");
      currentIndex = 0;
    });
  });
}

// ==========================================
// 7. Interactive Detail Modal Management (Partner Version)
// ==========================================
function openDetailModal(id) {
  const data = workerData[id];
  if (!data) return;
  
  // Set basic texts
  document.getElementById("modalTitle").innerText = data.title;
  document.getElementById("modalRating").innerText = data.rating;
  document.getElementById("modalLocation").innerHTML = `<i class="fa-solid fa-clock"></i> ${data.location}`;
  document.getElementById("modalHost").innerText = data.host;
  document.querySelector(".host-text p").innerText = data.hostDesc;
  document.getElementById("modalCardPrice").innerHTML = `${data.price} <span>/ 일</span>`;
  
  // Update gallery images
  const largeImg = document.getElementById("modalImgLarge");
  largeImg.src = data.images[0];
  largeImg.alt = data.title;
  
  const thumbsContainer = document.querySelector(".gallery-thumbs");
  thumbsContainer.innerHTML = "";
  
  data.images.forEach((imgSrc, index) => {
    const imgEl = document.createElement("img");
    imgEl.src = imgSrc;
    imgEl.alt = `${data.title} 이미지 ${index + 1}`;
    imgEl.className = `thumb ${index === 0 ? "active" : ""}`;
    imgEl.addEventListener("click", function() {
      changeModalImg(imgSrc, this);
    });
    thumbsContainer.appendChild(imgEl);
  });
  
  // Update details lists
  const checklist = document.querySelector(".details-checklist");
  checklist.innerHTML = "";
  
  // Job section
  const jobHeader = document.createElement("h3");
  jobHeader.innerHTML = `<i class="fa-solid fa-user-check"></i> 검증 인력 정보`;
  checklist.appendChild(jobHeader);
  
  const jobUl = document.createElement("ul");
  data.jobDetails.forEach(detail => {
    const li = document.createElement("li");
    li.innerHTML = `<i class="fa-solid fa-check"></i> ${parseMarkdownBold(detail)}`;
    jobUl.appendChild(li);
  });
  checklist.appendChild(jobUl);
  
  // Stay section
  const stayHeader = document.createElement("h3");
  stayHeader.innerHTML = `<i class="fa-solid fa-truck-ramp-box"></i> 정착 인프라 상태`;
  checklist.appendChild(stayHeader);
  
  const stayUl = document.createElement("ul");
  data.stayDetails.forEach(detail => {
    const li = document.createElement("li");
    li.innerHTML = `<i class="fa-solid fa-check"></i> ${parseMarkdownBold(detail)}`;
    stayUl.appendChild(li);
  });
  checklist.appendChild(stayUl);
  
  // Open Modal
  const modal = document.getElementById("detailModal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeDetailModal() {
  const modal = document.getElementById("detailModal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function changeModalImg(src, element) {
  document.getElementById("modalImgLarge").src = src;
  const thumbs = document.querySelectorAll(".gallery-thumbs .thumb");
  thumbs.forEach(t => t.classList.remove("active"));
  element.classList.add("active");
}

function parseMarkdownBold(text) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function openConsultModal() {
  openDetailModal(1);
}

// ==========================================
// 8. Real-time B2B ROI Calculator Logic
// ==========================================
function initRoiCalculator() {
  const teamSlider = document.getElementById("calc-team-size");
  const weeksSlider = document.getElementById("calc-weeks");
  const wageSelect = document.getElementById("calc-avg-wage");
  
  const teamValText = document.getElementById("calc-team-val");
  const weeksValText = document.getElementById("calc-weeks-val");
  
  const totalLaborText = document.getElementById("res-total-labor");
  const totalRiskText = document.getElementById("res-total-risk");
  const netSavingsText = document.getElementById("res-net-savings");
  
  if (!teamSlider || !weeksSlider || !wageSelect) return;
  
  const exchangeRate = 900; // 1 AUD = 900 KRW
  
  function calculateB2BROI() {
    const teamSize = parseInt(teamSlider.value);
    const projectWeeks = parseInt(weeksSlider.value);
    const dailyWage = parseInt(wageSelect.value);
    
    // 1. Total labor cost (5 working days a week)
    const totalLaborCost = teamSize * projectWeeks * 5 * dailyWage;
    
    // 2. Hidden risk cost for direct hire
    // - No-show damage: roughly 10% of total contract value
    // - Share renting stress and carpool orchestration: $100 per worker per week
    // - Admin and legal/payroll overhead: $150 per week of project
    const riskCost = (totalLaborCost * 0.10) + (teamSize * projectWeeks * 100) + (projectWeeks * 150);
    
    // Perth Link Partner reduces this risk cost to exactly $0. So savings is exactly the riskCost!
    const netSavings = riskCost;
    
    // KRW conversion
    const totalLaborKRW = Math.round(totalLaborCost * exchangeRate);
    const riskCostKRW = Math.round(riskCost * exchangeRate);
    const netSavingsKRW = Math.round(netSavings * exchangeRate);
    
    // Update DOM
    teamValText.innerText = `${teamSize}명`;
    weeksValText.innerText = `${projectWeeks}주`;
    
    totalLaborText.innerHTML = `AUD $${totalLaborCost.toLocaleString()} <span class="krw">(약 ${formatKRW(totalLaborKRW)})</span>`;
    totalRiskText.innerHTML = `AUD $${riskCost.toLocaleString()} <span class="krw">(약 ${formatKRW(riskCostKRW)})</span>`;
    netSavingsText.innerHTML = `AUD $${netSavings.toLocaleString()} <span class="krw">(약 ${formatKRW(netSavingsKRW)} 절감)</span>`;
  }
  
  // Event listeners
  teamSlider.addEventListener("input", calculateB2BROI);
  weeksSlider.addEventListener("input", calculateB2BROI);
  wageSelect.addEventListener("change", calculateB2BROI);
  
  // Init
  calculateB2BROI();
}

function formatKRW(amount) {
  const tenThousand = Math.floor(amount / 10000);
  if (tenThousand >= 100) {
    const hundred = Math.floor(tenThousand / 100);
    const remainder = tenThousand % 100;
    return remainder > 0 ? `${hundred}억 ${remainder}만 원` : `${hundred}억 원`;
  }
  return `${tenThousand}만 원`;
}

// ==========================================
// 9. B2B Consult Form Submission Simulation
// ==========================================
function handleApplySubmit(e) {
  e.preventDefault();
  
  const name = document.getElementById("apply-name").value;
  const contact = document.getElementById("apply-phone").value;
  const detail = document.getElementById("apply-detail").value;
  
  const modalTitle = document.getElementById("modalTitle").innerText;
  
  console.log("----- B2B 안심 매칭 상담 문의 접수 완료 -----");
  console.log(`고용주명 / 업체명: ${name}`);
  console.log(`연락처: ${contact}`);
  console.log(`매칭 희망 요건: ${detail}`);
  console.log(`참조 인력 프로필: ${modalTitle}`);
  console.log("-------------------------------------------");
  
  closeDetailModal();
  
  const successModal = document.getElementById("successModal");
  successModal.classList.add("active");
}

function closeSuccessModal() {
  const successModal = document.getElementById("successModal");
  successModal.classList.remove("active");
}

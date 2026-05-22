/**
 * Perth Link Landing Page - Interactive Logic (Airbnb Theme)
 * Developed under when1lone Consulting - Structuralizing 대표's Business Knowledge
 */

// 1. Data Store for Perth Packages (Detailed profiles)
const packageData = {
  1: {
    title: "Morley 신축 타운하우스 타일 조공 + 북유럽풍 감성 셰어 독방",
    location: "Morley, 퍼스 북동부",
    rating: "4.97 (후기 14개)",
    host: "taeho 대표",
    hostDesc: "퍼스 현역 10년 차 빌더/시공사 • 한국 조공 청년 30여 명의 정착을 성공시킨 든든한 동반자",
    price: "AUD $300",
    rent: "AUD $250 / 주",
    images: ["assets/perth_house.png", "assets/tile_work.png", "assets/perth_lifestyle.png"],
    jobDetails: [
      "**현장 업무**: 신축 고급 하우스 타일 욕실 및 거실 바닥 시공 조공(데모도) 및 현장 기술 전수",
      "**급여 조건**: **일당 AUD $300 ~ $350** (경력 및 성실성 확인 후 신속 인상), 매주 금요일 플랫폼에서 100% 임금 지급 보증",
      "**근무 시간**: 주 5일 기본 보장 (평일 06:30 ~ 15:30), 고용주와 협의 하에 주말 추가 근무 가능"
    ],
    stayDetails: [
      "**주거 환경**: Morley 중심가의 쾌적한 북유럽형 신축 타운하우스, **완전 개인 독방 보장**",
      "**인프라**: 초고속 NBN 무제한 인터넷, 드럼세탁기/의류건조기, 식기 및 침구류 풀 세팅 완비",
      "**교통 편의**: 차량 보유 선배 워홀러와 1:1 카풀 드라이브 연계 (안심 출퇴근 무료 픽업)"
    ]
  },
  2: {
    title: "Vic Park 상업 시설 리노베이션 타일 기공 + 역세권 신축 셰어 독방",
    location: "Victoria Park, 퍼스 남부",
    rating: "4.92 (후기 8개)",
    host: "taeho 대표 & Ryan 파트너",
    hostDesc: "상업 시설 시공 전문 계약자 • 10년 경력의 베테랑 현장 총괄 매니저",
    price: "AUD $480",
    rent: "AUD $270 / 주",
    images: ["assets/tile_work.png", "assets/perth_house.png", "assets/perth_lifestyle.png"],
    jobDetails: [
      "**현장 업무**: Victoria Park 핵심 쇼핑 센터 및 카페 대형 포셀린 타일 시공 및 리노베이션 마감",
      "**급여 조건**: **일당 AUD $480 ~ $500** (단가 협의 및 추가 수당 보증), 매주 정기 급여 송금",
      "**근무 시간**: 주 5일 고정 (07:00 ~ 16:00), 바쁜 상업 현장으로 장기 근무 가능자 선호"
    ],
    stayDetails: [
      "**주거 환경**: Victoria Park 역 도보 5분 거리의 세련된 신축 아파트 독방",
      "**인프라**: 개별 발코니, 빌트인 옷장, 마스터룸에 준하는 개별 화장실(옵션), 입주민 전용 헬스장/수영장 무료 이용",
      "**교통 편의**: 현장이 셰어하우스와 도보 5분 거리에 있어 매일 아침 여유로운 도보 출퇴근 가능"
    ]
  },
  3: {
    title: "Scarborough 해변 리조트 타일 메인 보조 + 비치 하우스 셰어 독방",
    location: "Scarborough, 퍼스 서부",
    rating: "4.95 (후기 21개)",
    host: "taeho 대표",
    hostDesc: "호주 현지 부동산 및 건설사 네트워크를 보유한 when1lone 핵심 정착 호스트",
    price: "AUD $290",
    rent: "AUD $260 / 주",
    images: ["assets/perth_house.png", "assets/perth_lifestyle.png", "assets/tile_work.png"],
    jobDetails: [
      "**현장 업무**: Scarborough 오션뷰 리조트 수영장 및 대형 욕실 타일러 보조 (그라우팅, 자재 서포트)",
      "**급여 조건**: **일당 AUD $290 ~ $320** (체력 우수자 및 성실 근무자 추가 인센티브 제공)",
      "**근무 시간**: 주 5일 (06:00 ~ 15:00), 아침 일찍 시작해 3시 퇴근 후 여유로운 해변 서핑 라이프 보장"
    ],
    stayDetails: [
      "**주거 환경**: Scarborough 해변 도보 5분 거리의 감성적인 화이트 비치 하우스 독방",
      "**인프라**: 야외 바비큐 데크, 넓은 정원, 세탁시설 완비, 트렌디한 서퍼 셰어메이트들과 교류",
      "**교통 편의**: 동료 워홀러 차량과 카풀 출근 매칭 (매주 유류비 일부 지원)"
    ]
  },
  4: {
    title: "Subiaco 최고급 목조 주택 내장 마감 보조 + 최고급 맨션 셰어 독방",
    location: "Subiaco, 퍼스 전통 부촌",
    rating: "4.88 (후기 6개)",
    host: "Alex 빌더 (B2B 제휴 호스트)",
    hostDesc: "서호주 주택 건설 라이선스를 보유한 15년 경력 하이엔드 목조 주택 전문 디렉터",
    price: "AUD $350",
    rent: "AUD $315 / 주",
    images: ["assets/tile_work.png", "assets/perth_house.png", "assets/perth_lifestyle.png"],
    jobDetails: [
      "**현장 업무**: Subiaco 명품 단독주택 내외장 타일 및 천장 석고 마감 보조 및 빌더 기술 도제 교육",
      "**급여 조건**: **일당 AUD $350** 고정, 호주 연금(Superannuation 11.5%) 적립 및 산재 보험 100% 가입",
      "**근무 시간**: 주 5일 (07:00 ~ 16:00), 오버타임 시 1.5배 수당 지급"
    ],
    stayDetails: [
      "**주거 환경**: Subiaco 부촌 정원에 위치한 최고급 주택의 독립 킹사이즈 독방",
      "**인프라**: 대형 더블 베드, 개인 데스크, 에어컨, 셰프급 주방 설비 및 조용하고 쾌적한 면학 분위기",
      "**교통 편의**: 자차 보유자 선호 (주차 공간 완비 및 매월 차량 유지비 보조금 $200 지급), 카풀 지원"
    ]
  },
  5: {
    title: "Joondalup 프랜차이즈 매장 바닥 타일 시공 보조 + 조용한 단독주택 독방",
    location: "Joondalup, 퍼스 북부",
    rating: "5.0 (후기 18개)",
    host: "Sunny 실장",
    hostDesc: "현역 여성 타일 마감 전문가이자 세심하게 거주를 돕는 셰어하우스 총괄 관리자",
    price: "AUD $300",
    rent: "AUD $230 / 주",
    images: ["assets/perth_house.png", "assets/tile_work.png", "assets/perth_lifestyle.png"],
    jobDetails: [
      "**현장 업무**: Joondalup 테라스 쇼핑몰 상가 바닥 타일 정밀 시공 보조 및 실리콘 피니싱 (비전공자/초보자 맞춤형)",
      "**급여 조건**: **일당 AUD $300** 스타트, 3개월 무결근 시 일당 인상 100% 약정",
      "**근무 시간**: 주 5일 (06:30 ~ 15:30), 안전을 최우선으로 하는 소프트 젠틀 현장"
    ],
    stayDetails: [
      "**주거 환경**: Joondalup 대학 지구 인근의 아늑하고 평화로운 가든 하우스 독방",
      "**인프라**: 개인 정원 전망 창문, 초고속 NBN 와이파이, 조용하게 휴식을 취할 수 있는 정적인 하우스 룰 적용",
      "**교통 편의**: Sunny 실장의 차량으로 매일 아침 출퇴근 픽업 지원 (무료)"
    ]
  },
  6: {
    title: "Fremantle 신축 메디컬 센터 대형 타일러 매칭 + 올드타운 감성 셰어 독방",
    location: "Fremantle, 퍼스 항구 도시",
    rating: "4.90 (후기 5개)",
    host: "taeho 대표",
    hostDesc: "퍼스 대형 상업 건설 시공 총책임자이자 청년 창업 멘토",
    price: "AUD $500",
    rent: "AUD $280 / 주",
    images: ["assets/tile_work.png", "assets/perth_lifestyle.png", "assets/perth_house.png"],
    jobDetails: [
      "**현장 업무**: Fremantle 종합병원 신축동 로비 대형 에폭시/포셀린 타일 정밀 부착 기공",
      "**급여 조건**: **일당 AUD $500** (국내외 타일/석재 경력 2년 이상 확인 시 즉시 지급)",
      "**근무 시간**: 주 5일 고정 (07:00 ~ 16:00), 추가 야간 근무 발생 시 법정 특근 수당 적용"
    ],
    stayDetails: [
      "**주거 환경**: Fremantle 헤리티지 올드타운 중심의 감성적인 빈티지 테라스 하우스 독방",
      "**인프라**: 개별 미니 발코니, 네스프레소 머신, 세탁기/건조기 풀 옵션, 트렌디한 로컬 카페 도보 2분",
      "**교통 편의**: Fremantle 지구 출근 카풀 무료 제공"
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
    // Add dynamic heartbeat effect
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

  // Clicking outside removes active states
  document.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
  });

  // Search button click action
  const searchBtn = searchCapsule.querySelector(".search-btn");
  if (searchBtn) {
    searchBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      // Scroll to package grid as a search result
      const grid = document.getElementById("packageGrid");
      if (grid) {
        grid.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }
}

// ==========================================
// 6. Airbnb Image Carousel Auto-play / Hover Effect
// ==========================================
function initImageCarouselAutoPlay() {
  const cards = document.querySelectorAll(".package-card");
  
  cards.forEach(card => {
    const images = card.querySelectorAll(".card-img");
    if (images.length <= 1) return;
    
    let intervalId = null;
    let currentIndex = 0;
    
    // Play on hover
    card.addEventListener("mouseenter", () => {
      intervalId = setInterval(() => {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
      }, 2000); // changes image every 2 seconds
    });
    
    // Stop on mouse leave & reset
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
// 7. Interactive Detail Modal Management
// ==========================================
function openDetailModal(id) {
  const data = packageData[id];
  if (!data) return;
  
  // Set basic texts
  document.getElementById("modalTitle").innerText = data.title;
  document.getElementById("modalRating").innerText = data.rating;
  document.getElementById("modalLocation").innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.location}`;
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
  jobHeader.innerHTML = `<i class="fa-solid fa-compass-drafting"></i> 현장 근로 조건`;
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
  stayHeader.innerHTML = `<i class="fa-solid fa-bed"></i> 보증 셰어하우스 조건`;
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
  document.body.style.overflow = "hidden"; // Prevent body scroll
}

function closeDetailModal() {
  const modal = document.getElementById("detailModal");
  modal.classList.remove("active");
  document.body.style.overflow = ""; // Enable body scroll
}

function changeModalImg(src, element) {
  document.getElementById("modalImgLarge").src = src;
  const thumbs = document.querySelectorAll(".gallery-thumbs .thumb");
  thumbs.forEach(t => t.classList.remove("active"));
  element.classList.add("active");
}

// Simple Helper to parse "**text**" in details into HTML bold tags
function parseMarkdownBold(text) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

// Header user icon trigger
function openApplyModal() {
  // If we open from the header, we can open with default first card
  openDetailModal(1);
}

// ==========================================
// 8. Real-time ROI Calculator Logic
// ==========================================
function initRoiCalculator() {
  const jobTypeSelect = document.getElementById("calc-job-type");
  const daysSlider = document.getElementById("calc-days");
  const rentSlider = document.getElementById("calc-rent");
  
  const daysValText = document.getElementById("calc-days-val");
  const rentValText = document.getElementById("calc-rent-val");
  
  const totalIncomeText = document.getElementById("res-total-income");
  const totalExpenseText = document.getElementById("res-total-expense");
  const netSavingsText = document.getElementById("res-net-savings");
  
  if (!jobTypeSelect || !daysSlider || !rentSlider) return;
  
  const exchangeRate = 900; // 1 AUD = 900 KRW (Perth Link Standard)
  const monthlyBaseExpense = 600; // Monthly basic living expenses (excluding share rent) like food, utilities, phone.
  
  function calculateROI() {
    const dailyWage = parseInt(jobTypeSelect.value);
    const workDaysPerWeek = parseInt(daysSlider.value);
    const weeklyRent = parseInt(rentSlider.value);
    
    // 1. Calculate Monthly total Income (assuming 4 weeks per month for simple marketing math)
    const monthlyIncome = dailyWage * workDaysPerWeek * 4;
    
    // 2. Calculate Monthly total Expense (weeklyRent * 4 + baseline food/expense)
    const monthlyExpense = (weeklyRent * 4) + monthlyBaseExpense;
    
    // 3. Net Savings
    const netSavings = monthlyIncome - monthlyExpense;
    
    // 4. KRW conversion
    const monthlyIncomeKRW = Math.round(monthlyIncome * exchangeRate);
    const monthlyExpenseKRW = Math.round(monthlyExpense * exchangeRate);
    const netSavingsKRW = Math.round(netSavings * exchangeRate);
    
    // 5. Update DOM
    daysValText.innerText = `${workDaysPerWeek}일`;
    rentValText.innerText = `AUD $${weeklyRent}`;
    
    totalIncomeText.innerHTML = `AUD $${monthlyIncome.toLocaleString()} <span class="krw">(약 ${formatKRW(monthlyIncomeKRW)})</span>`;
    totalExpenseText.innerHTML = `AUD $${monthlyExpense.toLocaleString()} <span class="krw">(약 ${formatKRW(monthlyExpenseKRW)})</span>`;
    netSavingsText.innerHTML = `AUD $${netSavings.toLocaleString()} <span class="krw">(약 ${formatKRW(netSavingsKRW)})</span>`;
  }
  
  // Event listeners
  jobTypeSelect.addEventListener("change", calculateROI);
  daysSlider.addEventListener("input", calculateROI);
  rentSlider.addEventListener("input", calculateROI);
  
  // Init
  calculateROI();
}

// Convert numbers like 5400000 -> "540만 원" for highly readable visual aesthetics
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
// 9. Quick Apply Form Submission Simulation
// ==========================================
function handleApplySubmit(e) {
  e.preventDefault();
  
  const name = document.getElementById("apply-name").value;
  const contact = document.getElementById("apply-phone").value;
  const experience = document.getElementById("apply-experience").value;
  
  // Gather selected package title if modal is open
  const modalTitle = document.getElementById("modalTitle").innerText;
  
  console.log("----- 안심 매칭 지원서 접수 완료 -----");
  console.log(`구직자명: ${name}`);
  console.log(`연락처: ${contact}`);
  console.log(`경력 구분: ${experience}`);
  console.log(`선택 패키지: ${modalTitle}`);
  console.log("-------------------------------------");
  
  // Close detail modal
  closeDetailModal();
  
  // Open success modal
  const successModal = document.getElementById("successModal");
  successModal.classList.add("active");
}

function closeSuccessModal() {
  const successModal = document.getElementById("successModal");
  successModal.classList.remove("active");
}

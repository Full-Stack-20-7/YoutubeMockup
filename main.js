// 사이드바 로드 및 토글 기능
const appContainer = document.querySelector('.app-container');
const sidebarContainer = document.getElementById('sidebar-container');
const guideButton = document.getElementById('guide-button');
const scrim = document.getElementById('scrim');

// 토글 기능 바인딩
guideButton.addEventListener('click', () => {
    appContainer.classList.toggle('collapsed');
});

// 스크림 클릭 시 사이드바 닫기
scrim.addEventListener('click', () => {
    appContainer.classList.add('collapsed');
});

async function loadSidebar() {
    try {
        const response = await fetch('sidebar.html');
        if (!response.ok) throw new Error('Network response was not ok');
        const html = await response.text();
        sidebarContainer.innerHTML = html;
        
        // 사이드바 아이템 클릭 이벤트 (활성화 표시)
        const bindSidebarEvents = () => {
            const sidebarItems = sidebarContainer.querySelectorAll('.menu-item, .mini-menu-item');
            sidebarItems.forEach(item => {
                item.addEventListener('click', () => {
                    sidebarContainer.querySelectorAll('.menu-item.active, .mini-menu-item.active').forEach(activeItem => {
                        activeItem.classList.remove('active');
                    });
                    item.classList.add('active');
                });
            });
        };
        bindSidebarEvents();
    } catch (error) {
        console.error('사이드바를 불러오는 데 실패했습니다:', error);
        // fetch 실패 시(예: 로컬 파일 시스템 직접 실행)를 대비한 대체 로직이나 안내가 필요할 수 있습니다.
    }
}

loadSidebar();

// 필터 칩 클릭 이벤트 핸들러
const chips = document.querySelectorAll('.chip');
chips.forEach(chip => {
    chip.addEventListener('click', () => {
        document.querySelector('.chip.active').classList.remove('active');
        chip.classList.add('active');
    });
});

// 영상 데이터 정의
const recommendedVideos = [
    { id: 1, title: "추천 영상 01", channel: "추천 채널 01", views: "1만회", time: "1시간 전", duration: "3:54", thumbnail: "https://loremflickr.com/360/202/concert?lock=1", avatar: "https://loremflickr.com/36/36/person?lock=1" },
    { id: 2, title: "추천 영상 02", channel: "추천 채널 02", views: "2만회", time: "2시간 전", duration: "6:34", thumbnail: "https://loremflickr.com/360/202/concert?lock=2", avatar: "https://loremflickr.com/36/36/person?lock=2" },
    { id: 3, title: "추천 영상 03", channel: "추천 채널 03", views: "3만회", time: "3시간 전", duration: "12:45", thumbnail: "https://loremflickr.com/360/202/concert?lock=3", avatar: "https://loremflickr.com/36/36/person?lock=3" },
];

const shortsData = [
    { id: 10, title: "쇼츠 제목", views: "1만회", thumbnail: "https://loremflickr.com/210/373/concert?lock=10" },
    { id: 11, title: "쇼츠 제목", views: "2만회", thumbnail: "https://loremflickr.com/210/373/concert?lock=11" },
    { id: 12, title: "쇼츠 제목", views: "3만회", thumbnail: "https://loremflickr.com/210/373/concert?lock=12" },
    { id: 13, title: "쇼츠 제목", views: "4만회", thumbnail: "https://loremflickr.com/210/373/concert?lock=13" },
    { id: 14, title: "쇼츠 제목", views: "5만회", thumbnail: "https://loremflickr.com/210/373/concert?lock=14" },
];

const generalVideos = [
    { id: 21, title: "영상 제목 01", channel: "채널명", views: "42만회", time: "2일 전", duration: "15:40", thumbnail: "https://loremflickr.com/360/202/concert?lock=21", avatar: "https://loremflickr.com/36/36/person?lock=21" },
    { id: 22, title: "영상 제목 02", channel: "채널명", views: "5.2만회", time: "12시간 전", duration: "08:25", thumbnail: "https://loremflickr.com/360/202/concert?lock=22", avatar: "https://loremflickr.com/36/36/person?lock=22" },
    { id: 23, title: "영상 제목 03", channel: "채널명", views: "12만회", time: "4일 전", duration: "06:15", thumbnail: "https://loremflickr.com/360/202/concert?lock=23", avatar: "https://loremflickr.com/36/36/person?lock=23" },
    { id: 24, title: "영상 제목 04", channel: "채널명", views: "3.7만회", time: "6일 전", duration: "22:10", thumbnail: "https://loremflickr.com/360/202/concert?lock=24", avatar: "https://loremflickr.com/36/36/person?lock=24" },
    { id: 25, title: "영상 제목 05", channel: "채널명", views: "9.1만회", time: "1일 전", duration: "11:35", thumbnail: "https://loremflickr.com/360/202/concert?lock=25", avatar: "https://loremflickr.com/36/36/person?lock=25" },
    { id: 26, title: "영상 제목 06", channel: "채널명", views: "21만회", time: "1주일 전", duration: "18:50", thumbnail: "https://loremflickr.com/360/202/concert?lock=26", avatar: "https://loremflickr.com/36/36/person?lock=26" },
    { id: 27, title: "영상 제목 07", channel: "채널명", views: "6.8만회", time: "3일 전", duration: "14:20", thumbnail: "https://loremflickr.com/360/202/concert?lock=27", avatar: "https://loremflickr.com/36/36/person?lock=27" },
    { id: 28, title: "영상 제목 08", channel: "채널명", views: "4.5만회", time: "5일 전", duration: "09:45", thumbnail: "https://loremflickr.com/360/202/concert?lock=28", avatar: "https://loremflickr.com/36/36/person?lock=28" },
    { id: 29, title: "영상 제목 09", channel: "채널명", views: "35만회", time: "2일 전", duration: "25:30", thumbnail: "https://loremflickr.com/360/202/concert?lock=29", avatar: "https://loremflickr.com/36/36/person?lock=29" },
    { id: 30, title: "영상 제목 10", channel: "채널명", views: "18만회", time: "14시간 전", duration: "07:12", thumbnail: "https://loremflickr.com/360/202/concert?lock=30", avatar: "https://loremflickr.com/36/36/person?lock=30" },
    { id: 31, title: "영상 제목 11", channel: "채널명", views: "11만회", time: "4일 전", duration: "1:02:40", thumbnail: "https://loremflickr.com/360/202/concert?lock=31", avatar: "https://loremflickr.com/36/36/person?lock=31" },
    { id: 32, title: "영상 제목 12", channel: "채널명", views: "7.4만회", time: "2일 전", duration: "19:15", thumbnail: "https://loremflickr.com/360/202/concert?lock=32", avatar: "https://loremflickr.com/36/36/person?lock=32" }
];

// 템플릿 생성 함수
function createVideoCard(video) {
    return `
        <div class="video-card">
            <div class="thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
                ${video.duration ? `<span class="duration">${video.duration}</span>` : ''}
            </div>
            <div class="video-info">
                <img class="channel-avatar" src="${video.avatar}" alt="Avatar">
                <div class="video-text">
                    <h3 class="video-title">${video.title}</h3>
                    <p class="channel-name">${video.channel}</p>
                    <p class="video-meta">조회수 ${video.views} • ${video.time}</p>
                </div>
                <button class="video-card-menu">
                    <svg viewBox="0 0 24 24" width="24" height="24"><path d="M12 4a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2 0 000-4Z"></path></svg>
                </button>
            </div>
        </div>
    `;
}

function createShortsItem(short) {
    return `
        <div class="shorts-item">
            <div class="shorts-thumbnail">
                <img src="${short.thumbnail}" alt="${short.title}">
            </div>
            <div class="shorts-info">
                <div class="shorts-text">
                    <h3 class="shorts-title">${short.title}</h3>
                    <p class="shorts-meta">조회수 ${short.views}</p>
                </div>
                <button class="item-menu-button">
                    <svg viewBox="0 0 24 24" width="24" height="24"><path d="M12 4a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2 0 000-4Z" fill="#aaa"></path></svg>
                </button>
            </div>
        </div>
    `;
}

// 화면 렌더링
document.getElementById('recommended-videos').innerHTML = recommendedVideos.map(createVideoCard).join('');
document.getElementById('shorts-grid').innerHTML = shortsData.map(createShortsItem).join('');
document.getElementById('general-videos').innerHTML = generalVideos.map(createVideoCard).join('');


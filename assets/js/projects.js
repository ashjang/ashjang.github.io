$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/gets.png',
            link: 'https://github.com/ashjang/Gets',
            title: 'Gets',
            demo: false,
            technologies: ['NodeJS', 'Express', 'MySQL', 'Blender'],
            description: "개인 맞춤 코디 추천, 가상 피팅 서비스로 다양ㅇ한 스타일링 및 구매 가능하도록 개발한 통합 패션 플랫폼",
            categories: ['web']
        },
        {
            image: 'assets/images/fittogether.png',
            link: 'https://github.com/ashjang/FitTogether',
            title: 'FitTogether',
            demo: false,
            technologies: ['Java', 'Spring Boot', 'MySQL', 'gradle', 'Junits', 'Swagger', 'Docker', 'Redis'],
            description: "가까운 위치의 운동 메이트를 찾아주고 유저들 간 정보를 공유할 수 있도록 하는 플랫폼",
            categories: ['web']
        },
        {
            image: 'assets/images/bible.png',
            link: 'https://github.com/ashjang/LordBible',
            title: 'Lord Bible',
            demo: false,
            technologies: ['Swift', 'Firebase', 'Python'],
            description: "4가지 번역본 제공하고 통독체크, 오늘의 말씀, 위젯 등의 서비스를 제공하는 애플리케이션",
            categories: ['iOS']
        },
        {
            image: 'assets/images/studyiOS.png',
            link: 'https://github.com/ashjang/swiftIOS',
            title: 'swift_iOS',
            demo: false,
            technologies: ['Swift'],
            description: "스위프트 공부 - 문법, 다이어리 프로젝트",
            categories: ['iOS']
        },
        {
            image: 'assets/images/monitoring.png',
            link: 'https://github.com/ashjang/monitoringSys',
            title: 'Monitoring System',
            demo: false,
            technologies: ['Python'],
            description: "프라이버시를 고려한 환자 및 1인 가구의 실내 위험 모니터링 시스템 개발",
            categories: ['data']
        },
        {
            image: 'assets/images/crawling.png',
            link: 'https://github.com/ashjang/crawlingBible',
            title: '웹 크롤링',
            demo: false,
            technologies: ['Python'],
            description: "4가지 번역본 웹 크롤링",
            categories: ['data']
        },
        {
            image: 'assets/images/db1.png',
            link: 'https://github.com/ashjang/DB_practice1',
            title: '학생DB',
            demo: false,
            technologies: ['Python', 'MySQL'],
            description: "학생 데이터를 관리할 수 있는 데이터베이스",
            categories: ['data']
        },
        {
            image: 'assets/images/db2.png',
            link: 'https://github.com/ashjang/DB_practice2',
            title: '카테고리DB',
            demo: false,
            technologies: ['Python', 'MySQL'],
            description: "여러 테이블을 관리할 수 있는 데이터베이스",
            categories: ['data']
        },
        {
            image: 'assets/images/convPay.png',
            link: 'https://github.com/ashjang/conveniencePayment',
            title: '편의점 결제',
            demo: false,
            technologies: ['Java'],
            description: "편의점 결제 서버 개발",
            categories: ['DIY']
        },
        {
            image: 'assets/images/reservation.png',
            link: 'https://github.com/ashjang/Reservation',
            title: '예약',
            demo: false,
            technologies: ['Java'],
            description: "예약 서버 개발",
            categories: ['DIY']
        },
        {
            image: 'assets/images/order.png',
            link: 'https://github.com/ashjang/Order',
            title: '주문',
            demo: false,
            technologies: ['Java'],
            description: "주문 서버 개발",
            categories: ['DIY']
        },
        {
            image: 'assets/images/algorithm.png',
            link: 'https://github.com/ashjang/Algorithm',
            title: '알고리즘',
            demo: false,
            technologies: ['Java'],
            description: "알고리즘 공부",
            categories: ['DIY']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
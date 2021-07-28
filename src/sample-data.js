export const dashboardMenus = [
    {
        key: '/dashboard/realtimeAdmin',
        name: '시스템 관리자',
        type: 'dashboard',
        url: '/dashboard/realtimeAdmin',
        imageUrl: '/images/dashboard.png',
        description: null,
        displayName: '시스템 관리자',
    },
    {
        key: '/dashboard/realtimeAdmin_resource',
        name: '시스템 관리자 (리소스)',
        type: 'dashboard',
        url: '/dashboard/realtimeAdmin_resource',
        imageUrl: '/images/dashboard.png',
        description: null,
        displayName: '시스템 관리자 (리소스)',
    },
    {
        key: '/dashboard/realtimeAdmin_front',
        name: 'Front 통합 대시보드',
        type: 'dashboard',
        url: '/dashboard/realtimeAdmin_front',
        imageUrl: '/images/dashboard.png',
        description: null,
        displayName: 'Front 통합 대시보드',
    },
    {
        key: '/dashboard/multiDomain',
        name: 'Multi Domain',
        type: 'dashboard',
        url: '/dashboard/multiDomain',
        imageUrl: '/images/dashboard.png',
        description: null,
        displayName: 'Multi Domain',
    },
    {
        key: '/dashboard/topology',
        name: '토폴로지',
        type: 'dashboard',
        url: '/dashboard/topology',
        imageUrl: '/images/dashboard.png',
        description: null,
        displayName: '토폴로지',
    },
    {
        key: '/dashboard/batchjob',
        name: 'Batch Job',
        type: 'dashboard',
        url: '/dashboard/batchjob',
        imageUrl: '/images/dashboard.png',
        description: null,
        displayName: 'Batch Job',
    },
];

export const analysisMenus = [
    {
        key: '/analysis/xview',
        name: 'X-View',
        type: 'analysis',
        url: '/analysis/xview',
        imageUrl: '/images/analysis.png',
        description: null,
        displayName: 'X-View',
    },
    {
        key: '/analysis/service',
        name: '애플리케이션 현황',
        type: 'analysis',
        url: '/analysis/service',
        imageUrl:
            '/images/analysis.png',
        description: null,
        displayName: '애플리케이션 현황',
    },
    {
        key: '/analysis/performanceBrowser',
        name: '성능 브라우저',
        type: 'analysis',
        url: '/analysis/performanceBrowser',
        imageUrl:
            '/images/analysis.png',
        description: null,
        displayName: '성능 브라우저',
    },
    {
        key: '/analysis/regression',
        name: 'Metrics 회귀분석',
        type: 'analysis',
        url: '/analysis/regression',
        imageUrl:
            '/images/analysis.png',
        description: null,
        displayName: 'Metrics 회귀분석',
    },
    {
        key: '/analysis/event',
        name: 'EVENT',
        type: 'analysis',
        url: '/analysis/event',
        imageUrl: '/images/analysis.png',
        description: null,
        displayName: 'EVENT',
    },
    {
        key: '/analysis/dbmetrics',
        name: 'DB 검색',
        type: 'analysis',
        url: '/analysis/dbmetrics',
        imageUrl:
            '/images/analysis.png',
        description: null,
        displayName: 'DB 검색',
    },
    {
        key: '/analysis/userAgent',
        name: 'Browser/OS/Device',
        type: 'analysis',
        url: '/analysis/userAgent',
        imageUrl:
            '/images/analysis.png',
        description: null,
        displayName: 'Browser/OS/Device',
    },
    {
        key: '/analysis/applicationHistory',
        name: '소스코드(리소스) 변경 이력',
        type: 'analysis',
        url: '/analysis/applicationHistory',
        imageUrl:
            '/images/analysis.png',
        description: null,
        displayName: '소스코드(리소스) 변경 이력',
    },
    {
        key: '/analysis/loadedClasses',
        name: '로디드 클래스',
        type: 'analysis',
        url: '/analysis/loadedClasses',
        imageUrl: '/images/analysis.png',
        description: null,
        displayName: '로디드 클래스',
    },
    {
        key: '/analysis/env',
        name: '시스템 환경변수',
        type: 'analysis',
        url: '/analysis/env',
        imageUrl:
            '/images/analysis.png',
        description: null,
        displayName: '시스템 환경변수',
    },
    {
        key: '/analysis/file',
        name: '파일',
        type: 'analysis',
        url: '/analysis/file',
        imageUrl: '/images/analysis.png',
        description: null,
        displayName: '파일',
    },
    {
        key: '/analysis/socket',
        name: '소켓',
        type: 'analysis',
        url: '/analysis/socket',
        imageUrl: '/images/analysis.png',
        description: null,
        displayName: '소켓',
    },
    {
        key: '/analysis/thread',
        name: 'Thread',
        type: 'analysis',
        url: '/analysis/thread',
        imageUrl: '/images/analysis.png',
        description: null,
        displayName: 'Thread',
    },
    {
        key: '/analysis/methodStacktrace',
        name: '다이나믹 메서드 스택트레이스',
        type: 'analysis',
        url: '/analysis/methodStacktrace',
        imageUrl:
            '/images/analysis.png',
        description: null,
        displayName: '다이나믹 메서드 스택트레이스',
    },
    {
        key: '/analysis/delayMethod',
        name: '지연 메소드 통계',
        type: 'analysis',
        url: '/analysis/delayMethod',
        imageUrl:
            '/images/analysis.png',
        description: null,
        displayName: '지연 메소드 통계',
    },
    {
        key: '/analysis/crud',
        name: 'CRUD 매트릭스',
        type: 'analysis',
        url: '/analysis/crud',
        imageUrl: '/images/analysis.png',
        description: null,
        displayName: 'CRUD 매트릭스',
    },
    {
        key: '/analysis/collection',
        name: '메모리(컬렉션)',
        type: 'analysis',
        url: '/analysis/collection',
        imageUrl: '/images/analysis.png',
        description: null,
        displayName: '메모리(컬렉션)',
    },
    {
        key: '/analysis/searchclass',
        name: 'Jar/DLL 파일 내 Class 검색',
        type: 'analysis',
        url: '/analysis/searchclass',
        imageUrl:
            '/images/analysis.png',
        description: null,
        displayName: 'Jar/DLL 파일 내 Class 검색',
    },
    {
        key: '/analysis/jarcheck',
        name: '클래스 파일 위치 검색',
        type: 'analysis',
        url: '/analysis/jarcheck',
        imageUrl:
            '/images/analysis.png',
        description: null,
        displayName: '클래스 파일 위치 검색',
    },
    {
        key: '/analysis/modifyfile',
        name: '수정된 파일 검색',
        type: 'analysis',
        url: '/analysis/modifyfile',
        imageUrl:
            '/images/analysis.png',
        description: null,
        displayName: '수정된 파일 검색',
    },
    {
        key: '/analysis/servicedump',
        name: '서비스 덤프',
        type: 'analysis',
        url: '/analysis/servicedump',
        imageUrl: '/images/analysis.png',
        description: null,
        displayName: '서비스 덤프',
    },
];
export const statisticsMenus = [
    {
        key: '/statistics/dailySystem',
        name: '일일 시스템 성능',
        type: 'statistics',
        url: '/statistics/dailySystem',
        imageUrl:
            '/images/statistics.png',
        description: null,
        displayName: '일일 시스템 성능',
    },
    {
        key: '/statistics/dailyBusiness',
        name: '일일 Business 성능',
        type: 'statistics',
        url: '/statistics/dailyBusiness',
        imageUrl:
            '/images/statistics.png',
        description: null,
        displayName: '일일 Business 성능',
    },
    {
        key: '/statistics/monthlySystem',
        name: '월별 시스템 성능',
        type: 'statistics',
        url: '/statistics/monthlySystem',
        imageUrl:
            '/images/statistics.png',
        description: null,
        displayName: '월별 시스템 성능',
    },
    {
        key: '/statistics/monthlyBusiness',
        name: '월별 Business 성능',
        type: 'statistics',
        url: '/statistics/monthlyBusiness',
        imageUrl:
            '/images/statistics.png',
        description: null,
        displayName: '월별 Business 성능',
    },
    {
        key: '/statistics/periodSystem',
        name: '기간별 시스템 성능',
        type: 'statistics',
        url: '/statistics/periodSystem',
        imageUrl:
            '/images/statistics.png',
        description: null,
        displayName: '기간별 시스템 성능',
    },
    {
        key: '/statistics/periodBusiness',
        name: '기간별 Business 성능',
        type: 'statistics',
        url: '/statistics/periodBusiness',
        imageUrl:
            '/images/statistics.png',
        description: null,
        displayName: '기간별 Business 성능',
    },
];

export const menuSet = {
    dashboard: dashboardMenus,
    analysis: analysisMenus,
    statistics: statisticsMenus,
    report: [],
};

export const alarms = [
    {
        delay: 3000,
        sid: 7908,
        type: 'instance',
        level: 'normal',
        color: '',
        name: 'ENV-TEST, tom9_ojdk11',
        subject:
            'Custom Message - BAD_RESPONSE_TIME_APPLICATION , BAD_RESPONSE_TIME_APPLICATION',
        detail: '  value=62262.00 /simula.jsp+9',
        detailMessage: 'By business setting (name=T1, timeLimit=30,000ms)',
        txid: '-6876173620819575004',
        time: '2021-03-23 10:33:49',
        stime: 1616459629279,
        etime: 1616466829279,
        isNew: true,
        uuid: '35cfd035-e2b5-4d0d-87cf-55e9601393a0',
    },
    {
        delay: 5000,
        sid: 7908,
        type: 'instance',
        level: 'warning',
        color: 'warning',
        name: 'ENV-TEST, tom9_ojdk11',
        subject: 'SERVICE_EXCEPTION',
        detail: '  /simula.jsp+0',
        detailMessage:
            'org.apache.jasper.JasperException: javax.servlet.ServletException: java.lang.Exception: no message exception',
        txid: '8803365145821834586',
        time: '2021-03-23 10:33:49',
        stime: 1616459629116,
        etime: 1616466829116,
        isNew: true,
        uuid: '5d319e89-5a8d-40ac-9e6d-8dc4c63859e1',
    },
    {
        delay: 3000,
        sid: 7908,
        type: 'instance',
        level: 'normal',
        color: '',
        name: 'ENV-TEST, tom9_ojdk11',
        subject:
            'Custom Message - BAD_RESPONSE_TIME_APPLICATION , BAD_RESPONSE_TIME_APPLICATION',
        detail: '  value=30752.00 /simula.jsp+1',
        detailMessage: 'By business setting (name=T1, timeLimit=30,000ms)',
        txid: '-6545700049319790709',
        time: '2021-03-23 10:33:40',
        stime: 1616459620580,
        etime: 1616466820580,
        isNew: true,
        uuid: '418e2b3c-9b14-45b2-8de0-6c42bc618422',
    },
    {
        delay: 3000,
        sid: 1006,
        type: 'instance',
        level: 'normal',
        color: '',
        name: 'Demian console, 10437',
        subject: '힙 메모리 사용률 (%)',
        detail: ' value&gt;0 value=26.16 ',
        detailMessage: '',
        txid: '0',
        time: '2021-03-23 10:33:39',
        stime: 1616459619039,
        etime: 1616466819039,
        isNew: true,
        uuid: 'b90ae38b-f95b-4bfa-b84e-15a12cedff67',
    },
    {
        delay: 5000,
        sid: 7908,
        type: 'instance',
        level: 'warning',
        color: 'warning',
        name: 'ENV-TEST, tom9_jdk14',
        subject: 'REPETITIVE_CALL',
        detail: '  /simula.jsp',
        detailMessage: 'url=/simula.jsp, ip=192.168.64.1',
        txid: '6453206334747934683',
        time: '2021-03-23 10:33:38',
        stime: 1616459618267,
        etime: 1616466818267,
        isNew: true,
        uuid: 'd4f5f7d1-6add-4cfc-9768-32b46c4125b2',
    },
    {
        delay: 3000,
        sid: 1006,
        type: 'instance',
        level: 'normal',
        color: '',
        name: 'Demian console, 10436',
        subject: '힙 메모리 사용률 (%)',
        detail: ' value&gt;0 value=52.24 ',
        detailMessage: '',
        txid: '0',
        time: '2021-03-23 10:33:38',
        stime: 1616459618042,
        etime: 1616466818042,
        isNew: true,
        uuid: 'd748f29f-89d3-4c11-8235-2036b02720f5',
    },
    {
        delay: 3000,
        sid: 7908,
        type: 'business',
        level: 'normal',
        color: '',
        name: 'ENV-TEST, T1',
        subject: '응답시간 (ms)',
        detail: ' value&gt;123 value=8291.96 ',
        detailMessage: '',
        txid: '0',
        time: '2021-03-23 10:33:37',
        stime: 1616459617489,
        etime: 1616466817489,
        isNew: true,
        uuid: '299db2ea-888a-4b75-9f57-5a933d5e3d24',
    },
    {
        delay: 5000,
        sid: 7908,
        type: 'instance',
        level: 'warning',
        color: 'warning',
        name: 'ENV-TEST, tom8_ibm8',
        subject: 'SERVICE_EXCEPTION',
        detail: '  /simula.jsp+1',
        detailMessage:
            'org.apache.jasper.JasperException: javax.servlet.ServletException: java.lang.Exception: no message exception',
        txid: '4569228947096431758',
        time: '2021-03-23 10:33:36',
        stime: 1616459616499,
        etime: 1616466816499,
        isNew: true,
        uuid: '697484b0-732a-4268-8f78-8c131e8ac6eb',
    },
    {
        delay: 5000,
        sid: 7908,
        type: 'instance',
        level: 'warning',
        color: 'warning',
        name: 'ENV-TEST, tom7_jdk6',
        subject: 'SERVICE_EXCEPTION',
        detail: '  /simula.jsp+7',
        detailMessage:
            'org.apache.jasper.JasperException: javax.servlet.ServletException: java.lang.Exception: no message exception',
        txid: '-2825225037464209703',
        time: '2021-03-23 10:33:34',
        stime: 1616459614367,
        etime: 1616466814367,
        isNew: true,
        uuid: '4ae8f16a-3dff-4dfa-b513-197abd7ffd69',
    },
    {
        delay: 3000,
        sid: 1006,
        type: 'instance',
        level: 'normal',
        color: '',
        name: 'Demian console, 10437',
        subject: '힙 메모리 사용률 (%)',
        detail: ' value&gt;0 value=24.01 ',
        detailMessage: '',
        txid: '0',
        time: '2021-03-23 10:33:29',
        stime: 1616459609040,
        etime: 1616466809040,
        isNew: true,
        uuid: 'dcb1af80-884c-42be-a0b8-1f8e421d2b3f',
    },
];

export const userInfo = {
    id: 'admin',
    name: '어드민',
    email: 'admin@admin.com',
    groupId: 'admin',
    startPage: '/dashboard/realtimeAdmin',
};

export const metrics = [
    { label: '호출 건수', value: 'count' },
    { label: '총 CPU시간 (ms)', value: 'cpuSum' },
    { label: '응답시간 (ms)', value: 'averageResponseTime' },
    { label: '최대 응답시간 (ms)', value: 'maxResponseTime' },
    { label: '응답시간 표준편차 (ms)', value: 'responseTimeStandardDeviation' },
    { label: '총 응답시간 (ms)', value: 'elapseSum' },
    { label: '실패 건수', value: 'errCount' },
    { label: 'Bad Response 수', value: 'slowCount' },
    { label: '트랜잭션당 SQL 수', value: 'averageSqlCount' },
    { label: '트랜잭션당 SQL 시간 (ms)', value: 'averageSqlTime' },
    { label: 'SQL 수', value: 'sqlCount' },
    { label: '총 SQL 시간 (ms)', value: 'sqlSum' },
    { label: '트랜잭션당 External Call 수', value: 'averageTxcallCount' },
    { label: '트랜잭션당 External Call 시간 (ms)', value: 'averageTxcallTime' },
    { label: 'External Call 수', value: 'txcallCount' },
    { label: '총 External Call 시간 (ms)', value: 'txcallSum' },
    { label: '트랜잭션당 Fetch 수', value: 'averageFetchCount' },
    { label: '트랜잭션당 Fetch 시간 (ms)', value: 'averageFetchTime' },
    { label: '총 Fetch 수', value: 'fetchCount' },
    { label: '총 Fetch 시간 (ms)', value: 'fetchSum' },
    { label: 'Frontend 측정 수', value: 'frontEndMeasureCount' },
    { label: 'Frontend 시간 (ms)', value: 'averageFrontEndTime' },
    { label: 'Network 시간 (ms)', value: 'averageFrontEndNetworkTime' },
    { label: '트랜잭션당 CPU 시간 (ms)', value: 'averageCpuTime' },
    { label: '트랜잭션당 Method 시간 (ms)', value: 'averageMethodTime' },
];

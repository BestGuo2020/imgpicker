// --- START OF FILE script.js ---

// 多语言配置
const i18n = {
    'zh-CN': {
        'nav.home': '首页', 'nav.features': '功能', 'nav.faq': '常见问题', 'nav.scene': '场景',
        'title': '智能图片素材拆分工具',
        'subtitle': '一键将包含多个元素的图片自动拆分为单独的PNG文件，支持批量处理',
        
        // 演示流程
        'demo.step1': '📂 上传拼图/素材图',
        'demo.step2': '⚡ 自动识别拆分',
        'demo.step3': '💾 导出多个PNG',

        // 上传区域
        'upload.text': '点击或拖拽图片到此处上传',
        'upload.sub': '支持 Sprite Sheet, 贴纸拼图, 电商素材 (JPG/PNG)',
        'privacy.badge': '🔒 本地计算，图片不上传服务器',

        // 按钮
        'btn.smartCrop': '⚡ 智能拆分', 
        'btn.manualCrop': '🖐 手动拆分', 
        'btn.reset': '🔄 重置', 
        'btn.downloadAll': '📥 打包下载',
        'loading': '正在分析画布并拆分素材...',
        
        // 结果
        'results.title': '拆分结果',
        'result.size': '尺寸:', 
        'btn.download': '下载', 
        'btn.delete': '删除',

        // 功能特点
        'f.title.1': '智能素材提取', 'f.desc.1': '自动检测图片中互不相连的多个物体，将它们从画布中“抠”出来，并保存为独立的图片文件。',
        'f.title.2': '批量极速切图', 'f.desc.2': '非常适合处理游戏 Sprite Sheet（精灵图）或电商贴纸拼图。拖入一张大图，瞬间获得几十张小图。',
        'f.title.3': '隐私级安全', 'f.desc.3': '所有拆分计算均在浏览器端完成。您的素材图不需要上传到服务器，绝对安全，断网也能用。',

        // SEO 内容区 (新增)
        'seo.title': '为什么需要 ImgCrop 图片素材拆分工具?',
        'seo.p1': '在游戏开发、平面设计和电商运营中，我们经常遇到需要将“一张大图”里的“多个小元素”拆分出来的场景。手动用 PS 切图费时费力，而 ImgCrop 可以一键搞定。',
        'seo.h3.1': '游戏开发者的利器 (Sprite Slicer)',
        'seo.p2': '如果您手头有 Sprite Sheet（精灵图）资源，需要将角色动作分解为单帧图片，ImgCrop 可以自动识别透明区域间隔，精准切割每一帧，导出为透明 PNG。',
        'seo.h3.2': '手账与电商素材整理',
        'seo.p3': '对于电商美工或手账爱好者，经常需要从一张包含多个贴纸、标签或商品的拼图中提取素材。使用本工具，只需拖入图片，即可自动识别并分割所有独立商品图。',

        // FAQ
        'faq.title': '常见问题',
        'faq.q1': '这个工具能做什么？',
        'faq.a1': '它可以将一张包含多个独立元素（如贴纸、游戏角色、图标）的图片，自动识别并拆分成多个独立的 PNG 图片文件。',
        'faq.q2': '支持什么格式的导出？',
        'faq.a2': '无论您上传的是 JPG 还是 PNG，拆分后的素材默认导出为 PNG 格式，如果原图背景是透明的，拆分后也会保留透明背景。',
        'faq.q3': '图片元素靠得很近能拆分吗？',
        'faq.a3': '只要元素之间有像素间隔（即使只有 1px），工具就能识别为两个物体。如果元素重叠，建议使用“手动拆分”功能。',
        'faq.q4': '有文件大小限制吗？',
        'faq.a4': '没有硬性限制，但由于是本地浏览器处理，过大的图片（如超过 50MB）可能会受限于您设备的内存大小。',
        
        'copyright': '© 2025 智能图片素材拆分工具. 保留所有权利.',
        'alert.image': '请上传图片文件！'
    },
    'en': {
        'nav.home': 'Home', 'nav.features': 'Features', 'nav.faq': 'FAQ', 'nav.scene': 'Use Cases',
        'title': 'Smart Image Splitter - Auto Crop & Extract Sprites Online',
        'subtitle': 'Automatically split images containing multiple elements into separate PNG files.',
        
        'demo.step1': '📂 Upload Sprite/Image',
        'demo.step2': '⚡ Auto Split',
        'demo.step3': '💾 Export PNGs',

        'upload.text': 'Click or drag image here to upload',
        'upload.sub': 'Supports Sprite Sheet, Stickers, Assets (JPG/PNG)',
        'privacy.badge': '🔒 Local processing, images not uploaded',

        'btn.smartCrop': '⚡ Smart Split', 
        'btn.manualCrop': '🖐 Manual Split', 
        'btn.reset': '🔄 Reset', 
        'btn.downloadAll': '📥 Download All',
        'loading': 'Analyzing and splitting...',
        
        'results.title': 'Results',
        'result.size': 'Size:', 
        'btn.download': 'Download', 
        'btn.delete': 'Delete',

        'f.title.1': 'Smart Extraction', 'f.desc.1': 'Automatically detects disconnected objects in an image and extracts them as separate files.',
        'f.title.2': 'Batch Slicing', 'f.desc.2': 'Perfect for Game Sprite Sheets or Sticker packs. Drag in one image, get dozens of assets instantly.',
        'f.title.3': 'Privacy First', 'f.desc.3': 'All calculations happen in your browser. Your assets are never uploaded to any server.',

        'seo.title': 'Why use ImgCrop Image Splitter?',
        'seo.p1': 'In game dev and design, separating multiple elements from a single image is common. ImgCrop automates this tedious process instantly.',
        'seo.h3.1': 'For Game Developers (Sprite Slicer)',
        'seo.p2': 'Easily split Sprite Sheets into single frames. ImgCrop detects transparent gaps and cuts precisely, exporting as transparent PNGs.',
        'seo.h3.2': 'For Designers & Scrapbooking',
        'seo.p3': 'Extract individual stickers, labels, or products from composite images. Just drag and drop to identify and split all items.',

        'faq.title': 'FAQ',
        'faq.q1': 'What does this tool do?',
        'faq.a1': 'It automatically identifies and splits a single image containing multiple elements (like stickers, game sprites) into separate PNG files.',
        'faq.q2': 'What is the export format?',
        'faq.a2': 'It exports as PNG. Transparency is preserved if the original image has a transparent background.',
        'faq.q3': 'Can it split close objects?',
        'faq.a3': 'Yes, as long as there is at least 1px gap between elements. If they overlap, use "Manual Split".',
        'faq.q4': 'Is there a file size limit?',
        'faq.a4': 'No hard limit, but since it processes locally, very large images (50MB+) depend on your device memory.',
        
        'copyright': '© 2025 Smart Image Splitter. All Rights Reserved.',
        'alert.image': 'Please upload an image file!'
    },
    'ja': {
        'nav.home': 'ホーム', 'nav.features': '機能', 'nav.faq': 'FAQ', 'nav.scene': '利用シーン',
        'title': '画像自動分割ツール - スプライトシートや素材を一括切り抜き',
        'subtitle': '複数の要素を含む画像を自動的に個別のPNGファイルに分割します',
        
        'demo.step1': '📂 画像をアップロード',
        'demo.step2': '⚡ 自動分割',
        'demo.step3': '💾 PNGを保存',

        'upload.text': 'クリックまたはドラッグしてアップロード',
        'upload.sub': 'スプライトシート、ステッカー、素材 (JPG/PNG)',
        'privacy.badge': '🔒 ローカル処理、サーバーへのアップロードなし',

        'btn.smartCrop': '⚡ スマート分割', 
        'btn.manualCrop': '🖐 手動分割', 
        'btn.reset': '🔄 リセット', 
        'btn.downloadAll': '📥 一括DL',
        'loading': '解析中...',
        
        'results.title': '分割結果',
        'result.size': 'サイズ:', 
        'btn.download': 'DL', 
        'btn.delete': '削除',

        'f.title.1': 'スマート抽出', 'f.desc.1': '画像内の独立したオブジェクトを自動検出し、個別のファイルとして保存します。',
        'f.title.2': '一括スライス', 'f.desc.2': 'ゲームのスプライトシートやステッカー画像に最適。1枚の画像から多数の素材を瞬時に生成。',
        'f.title.3': 'プライバシー保護', 'f.desc.3': 'すべての処理はブラウザ内で行われます。素材がサーバーに送信されることはありません。',

        'seo.title': 'なぜ ImgCrop 画像分割ツールなのか？',
        'seo.p1': 'ゲーム開発やデザインにおいて、1枚の画像から複数の要素を切り出す作業は面倒です。ImgCropなら一瞬で完了します。',
        'seo.h3.1': 'ゲーム開発者向け (Sprite Slicer)',
        'seo.p2': 'スプライトシートを個別のフレームに分割。透明部分を認識し、正確にカットして透過PNGとして書き出します。',
        'seo.h3.2': 'デザイン・素材整理',
        'seo.p3': '複数の商品やステッカーが含まれる画像から、個々のアイテムを抽出します。ドラッグ＆ドロップするだけです。',

        'faq.title': 'よくある質問',
        'faq.q1': '何ができるツールですか？',
        'faq.a1': '複数の要素（ステッカー、キャラなど）を含む1枚の画像を、自動的に個別のPNG画像に分割します。',
        'faq.q2': '書き出し形式は？',
        'faq.a2': 'PNG形式で書き出されます。元画像が透過背景の場合、透明度も保持されます。',
        'faq.q3': '要素が近くても分割できますか？',
        'faq.a3': '1ピクセルでも隙間があれば分割可能です。重なっている場合は「手動分割」を使用してください。',
        'faq.q4': 'ファイルサイズ制限は？',
        'faq.a4': '制限はありませんが、ブラウザで処理するため、メモリ依存となります（50MB以上は注意）。',
        
        'copyright': '© 2025 Smart Image Splitter. All Rights Reserved.',
        'alert.image': '画像ファイルをアップロードしてください！'
    },
    'ko': {
        'nav.home': '홈', 'nav.features': '기능', 'nav.faq': 'FAQ', 'nav.scene': '사용 사례',
        'title': '스마트 이미지 분할 도구 - 스프라이트 및 사진 자동 자르기',
        'subtitle': '여러 요소가 포함된 이미지를 개별 PNG 파일로 자동 분할합니다.',
        
        'demo.step1': '📂 이미지 업로드',
        'demo.step2': '⚡ 자동 분할',
        'demo.step3': '💾 PNG 저장',

        'upload.text': '클릭하거나 드래그하여 업로드',
        'upload.sub': '스프라이트 시트, 스티커, 소재 (JPG/PNG)',
        'privacy.badge': '🔒 로컬 처리, 서버 업로드 없음',

        'btn.smartCrop': '⚡ 스마트 분할', 
        'btn.manualCrop': '🖐 수동 분할', 
        'btn.reset': '🔄 초기화', 
        'btn.downloadAll': '📥 전체 다운로드',
        'loading': '분석 중...',
        
        'results.title': '분할 결과',
        'result.size': '크기:', 
        'btn.download': '다운로드', 
        'btn.delete': '삭제',

        'f.title.1': '스마트 추출', 'f.desc.1': '이미지 내의 분리된 객체를 자동 감지하여 개별 파일로 저장합니다.',
        'f.title.2': '일괄 슬라이스', 'f.desc.2': '게임 스프라이트 시트나 스티커 이미지 처리에 최적. 한 장의 이미지에서 수십 개의 소재를 즉시 생성.',
        'f.title.3': '개인정보 보호', 'f.desc.3': '모든 계산은 브라우저에서 수행됩니다. 이미지는 서버로 전송되지 않습니다.',

        'seo.title': '왜 ImgCrop 이미지 분할 도구인가요?',
        'seo.p1': '게임 개발 및 디자인에서 하나의 이미지에서 여러 요소를 분리하는 작업은 번거롭습니다. ImgCrop으로 자동화하세요.',
        'seo.h3.1': '게임 개발자용 (Sprite Slicer)',
        'seo.p2': '스프라이트 시트를 개별 프레임으로 분할합니다. 투명 간격을 인식하여 정확하게 자르고 투명 PNG로 내보냅니다.',
        'seo.h3.2': '디자인 및 소재 정리',
        'seo.p3': '여러 상품이나 스티커가 포함된 이미지에서 개별 아이템을 추출합니다. 드래그 앤 드롭만 하세요.',

        'faq.title': '자주 묻는 질문',
        'faq.q1': '어떤 도구인가요?',
        'faq.a1': '여러 요소(스티커, 게임 캐릭터 등)가 포함된 하나의 이미지를 자동으로 식별하여 별도의 PNG 파일로 분할합니다.',
        'faq.q2': '내보내기 형식은?',
        'faq.a2': 'PNG 형식으로 내보냅니다. 원본 배경이 투명하면 투명도도 유지됩니다.',
        'faq.q3': '요소가 가까워도 분할되나요?',
        'faq.a3': '1픽셀이라도 간격이 있으면 분할 가능합니다. 겹쳐 있는 경우 "수동 분할"을 사용하세요.',
        'faq.q4': '파일 크기 제한이 있나요?',
        'faq.a4': '제한은 없지만 로컬 브라우저 처리이므로 장치 메모리에 따라 다릅니다 (50MB 이상 주의).',
        
        'copyright': '© 2025 Smart Image Splitter. All Rights Reserved.',
        'alert.image': '이미지 파일을 업로드해주세요!'
    }
};

let cropper = null;
let croppedImages = [];
let currentLang = 'zh-CN';

// 路径映射
const langToPath = { 'zh-CN': '/zh', 'en': '/en', 'ja': '/ja', 'ko': '/ko' };
const pathToLang = { '/zh': 'zh-CN', '/en': 'en', '/ja': 'ja', '/ko': 'ko' };

document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const uploadArea = document.getElementById('uploadArea');
    const cropBtn = document.getElementById('cropBtn');
    const manualCropBtn = document.getElementById('manualCropBtn');
    const resetBtn = document.getElementById('resetBtn');
    const downloadAllBtn = document.getElementById('downloadAllBtn');

    // 1. 初始化多语言
    initI18n();

    // 2. 上传逻辑 (防止双重触发)
    uploadArea.addEventListener('click', function(e) {
        fileInput.click();
    });
    
    fileInput.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // 拖拽上传
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#4f46e5';
        uploadArea.style.background = '#eef2ff';
    });
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = '';
        uploadArea.style.background = '';
    });
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '';
        uploadArea.style.background = '';
        if (e.dataTransfer.files.length > 0) handleFile(e.dataTransfer.files[0]);
    });

    fileInput.addEventListener('change', function() {
        if (this.files.length > 0) handleFile(this.files[0]);
    });

    // 按钮事件
    cropBtn.addEventListener('click', smartCrop);
    manualCropBtn.addEventListener('click', manualCrop);
    resetBtn.addEventListener('click', reset);
    downloadAllBtn.addEventListener('click', downloadAll);
});

// 文件处理函数
function handleFile(file) {
    if (!file.type.startsWith('image/')) {
        alert(i18n[currentLang]['alert.image']);
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const image = document.getElementById('image');
        image.src = e.target.result;
        
        // 强制显示预览容器
        const previewContainer = document.getElementById('previewContainer');
        previewContainer.style.display = 'block'; 

        if (cropper) cropper.destroy();
        
        cropper = new Cropper(image, {
            viewMode: 1,
            autoCropArea: 1,
            responsive: true,
            background: false // 不显示网格背景
        });

        // 启用按钮
        document.getElementById('cropBtn').disabled = false;
        document.getElementById('manualCropBtn').disabled = false;
        document.getElementById('resetBtn').disabled = false;
        
        // 隐藏上传提示，只留图
        // 注意：这里隐藏父元素中的文字部分，保留容器大小
        const hints = document.querySelectorAll('.upload-icon, .upload-hint, .upload-sub, .privacy-badge');
        hints.forEach(el => el.style.display = 'none');
    };
    reader.readAsDataURL(file);
}

// 从URL中获取语言
function getLanguageFromURL() {
    const path = window.location.pathname;
    const normalizedPath = path.endsWith('/') ? path.slice(0, -1) : path;
    
    if (pathToLang[normalizedPath]) {
        return pathToLang[normalizedPath];
    }
    
    const firstSegment = normalizedPath.split('/')[1] || '';
    const langPath = '/' + firstSegment;
    if (pathToLang[langPath]) {
        return pathToLang[langPath];
    }
    
    return null;
}

// 更新URL
function updateURL() {
    const path = langToPath[currentLang] || '';
    const url = window.location.origin + path + window.location.search + window.location.hash;
    history.pushState({ lang: currentLang }, '', url);
}

// 初始化多语言
function initI18n() {
    const urlLang = getLanguageFromURL();
    if (urlLang && i18n[urlLang]) {
        currentLang = urlLang;
        document.getElementById('language').value = urlLang;
        localStorage.setItem('language', urlLang);
    } else {
        const savedLang = localStorage.getItem('language');
        if (savedLang && i18n[savedLang]) {
            currentLang = savedLang;
            document.getElementById('language').value = savedLang;
        }
        updateURL();
    }
    applyI18n();
}

// 应用多语言
function applyI18n() {
    const t = i18n[currentLang];
    if (!t) return;

    const setText = (selector, key) => {
        const el = document.querySelector(selector);
        if (el && t[key]) el.textContent = t[key];
    };

    // 更新title标签
    if (t['title']) {
        let titleText = t['title'];
        let ogTitleText = t['title'];
        
        // 使用完整的标题（已在i18n对象中包含副标题）
        titleText = t['title'];
        ogTitleText = t['title'];
        
        // 更新页面title
        document.title = titleText;
        
        // 更新Open Graph和Twitter Card title
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', ogTitleText);
        
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle) twitterTitle.setAttribute('content', ogTitleText);
    }

    // 导航
    setText('.nav-home', 'nav.home');
    setText('.nav-features', 'nav.features');
    setText('.nav-faq', 'nav.faq');
    // 新增导航项
    const sceneNav = document.querySelector('a[href="#seo-content"]');
    if(sceneNav) sceneNav.textContent = t['nav.scene'];

    // 头部
    setText('.page-title', 'title');
    setText('.page-subtitle', 'subtitle');

    // 演示流程 (通过 nth-child 或 querySelectorAll 定位)
    const demoSteps = document.querySelectorAll('.demo-step');
    if (demoSteps.length >= 3) {
        demoSteps[0].textContent = t['demo.step1'];
        demoSteps[1].textContent = t['demo.step2'];
        demoSteps[2].textContent = t['demo.step3'];
    }

    // 上传区域
    setText('.upload-hint', 'upload.text');
    setText('.upload-sub', 'upload.sub');
    setText('.privacy-badge', 'privacy.badge');

    // 按钮
    const btns = {
        'cropBtn': 'btn.smartCrop',
        'manualCropBtn': 'btn.manualCrop',
        'resetBtn': 'btn.reset',
        'downloadAllBtn': 'btn.downloadAll'
    };
    for (let id in btns) {
        const btn = document.getElementById(id);
        if (btn) btn.textContent = t[btns[id]];
    }
    
    // 结果标题
    setText('.results-title', 'results.title');
    setText('.loading-text', 'loading');

    // Features
    setText('.f-title-1', 'f.title.1'); setText('.f-desc-1', 'f.desc.1');
    setText('.f-title-2', 'f.title.2'); setText('.f-desc-2', 'f.desc.2');
    setText('.f-title-3', 'f.title.3'); setText('.f-desc-3', 'f.desc.3');

    // SEO Content (新增区域)
    const seoContent = document.querySelector('.seo-content');
    if (seoContent) {
        const h2 = seoContent.querySelector('h2');
        if(h2) h2.textContent = t['seo.title'];

        // 获取该区域内的所有 h3 和 p
        const h3s = seoContent.querySelectorAll('h3');
        const ps = seoContent.querySelectorAll('p');

        if(ps[0]) ps[0].textContent = t['seo.p1'];
        
        if(h3s[0]) h3s[0].textContent = t['seo.h3.1'];
        if(ps[1]) ps[1].textContent = t['seo.p2'];
        
        if(h3s[1]) h3s[1].textContent = t['seo.h3.2'];
        if(ps[2]) ps[2].textContent = t['seo.p3'];
    }

    // 更新meta标签（描述和关键词）
    const descriptions = {
        'zh-CN': '免费在线图片素材拆分工具，自动识别一张图片中的多个独立元素并裁剪为单独的PNG文件。适合游戏Sprite精灵图拆分、贴纸素材提取、电商拼图切片。',
        'en': 'Free online tool to auto-split sprite sheets and scanned photos into separate PNG images. One-click batch extraction. Local processing, privacy safe.',
        'ja': 'スプライトシートやスキャンした写真を自動的に個別のPNG画像に分割・切り抜きできる無料オンラインツール。ブラウザ完結でプライバシーも安心。',
        'ko': '스프라이트 시트나 스캔한 사진에서 여러 이미지를 자동으로 감지하여 개별 PNG로 분할해 주는 무료 온라인 도구입니다. 100% 로컬 처리로 안전합니다.'
    };
    
    const ogDescriptions = {
        'zh-CN': '自动识别并拆分一张图片中的多个独立素材，一键导出为单独的PNG文件。纯本地处理，保护隐私。',
        'en': 'Automatically detect and split multiple objects from a single image. Export as separate PNGs. 100% local processing.',
        'ja': '一枚の画像に含まれる複数の要素を自動認識して分割し、個別のPNGとして保存します。インストール不要、完全無料。',
        'ko': '하나의 이미지에 포함된 여러 요소를 자동으로 인식하여 분할하고 저장합니다. 서버 업로드 없이 브라우저에서 바로 처리하세요.'
    };
    
    const keywords = {
        'zh-CN': '图片素材拆分,图片分割工具,Sprite切片,精灵图拆分,在线切图,图片素材提取,批量裁剪,PNG分割',
        'en': 'image splitter, sprite sheet cutter, auto crop multiple photos, extract images from image, sprite slicer, online image separator',
        'ja': '画像分割, スプライトシート分割, 画像切り抜き, 自動切り抜き, 一括保存, 素材抽出, オンラインツール',
        'ko': '이미지 분할, 스프라이트 자르기, 사진 자동 자르기, 이미지 추출, 누끼따기, 온라인 이미지 편집'
    };
    
    // 更新meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && descriptions[currentLang]) {
        metaDesc.setAttribute('content', descriptions[currentLang]);
    }
    
    // 更新meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords[currentLang]) {
        metaKeywords.setAttribute('content', keywords[currentLang]);
    }
    
    // 更新og:description和twitter:description
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (ogDesc && twitterDesc && ogDescriptions[currentLang]) {
        ogDesc.setAttribute('content', ogDescriptions[currentLang]);
        twitterDesc.setAttribute('content', ogDescriptions[currentLang]);
    }

    // FAQ
    setText('.faq-header', 'faq.title');
    setText('.q1', 'faq.q1'); setText('.a1', 'faq.a1');
    setText('.q2', 'faq.q2'); setText('.a2', 'faq.a2');
    setText('.q3', 'faq.q3'); setText('.a3', 'faq.a3');
    setText('.q4', 'faq.q4'); setText('.a4', 'faq.a4');

    // 页脚
    setText('.copyright', 'copyright');
}

// 切换语言
function changeLanguage() {
    const langSelect = document.getElementById('language');
    currentLang = langSelect.value;
    localStorage.setItem('language', currentLang);
    
    const path = langToPath[currentLang] || '/';
    window.history.replaceState(null, '', path);
    
    applyI18n();
}

// 智能拆分 (原 smartCrop)
function smartCrop() {
    const loading = document.getElementById('loading');
    loading.style.display = 'inline-block';
    document.getElementById('cropBtn').disabled = true;
    document.getElementById('manualCropBtn').disabled = true;
    
    // 延迟一点执行，让loading显示出来
    setTimeout(() => {
        const canvas = cropper.getCroppedCanvas();
        const ctx = canvas.getContext('2d');
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        
        // 核心检测算法
        const regions = detectRange(imageData);
        
        croppedImages = [];
        regions.forEach((region, index) => {
            const croppedCanvas = document.createElement('canvas');
            croppedCanvas.width = region.width;
            croppedCanvas.height = region.height;
            const croppedCtx = croppedCanvas.getContext('2d');
            
            croppedCtx.drawImage(canvas, region.x, region.y, region.width, region.height, 0, 0, region.width, region.height);
            
            const dataURL = croppedCanvas.toDataURL('image/png');
            croppedImages.push({
                id: index,
                dataURL: dataURL,
                width: region.width,
                height: region.height
            });
        });
        
        displayResults();
        loading.style.display = 'none';
        document.getElementById('cropBtn').disabled = false;
        document.getElementById('manualCropBtn').disabled = false;
        document.getElementById('downloadAllBtn').disabled = false;
    }, 50);
}

// 手动拆分
function manualCrop() {
    const croppedCanvas = cropper.getCroppedCanvas();
    const dataURL = croppedCanvas.toDataURL('image/png');
    
    croppedImages.push({
        id: croppedImages.length,
        dataURL: dataURL,
        width: croppedCanvas.width,
        height: croppedCanvas.height
    });
    
    displayResults();
    document.getElementById('downloadAllBtn').disabled = false;
}

/**
 * 优化后的检测算法：使用像素级连通域搜索（BFS）
 * 解决了素材垂直粘连和识别不全的问题
 */
function detectRange(imageData) {
    const { width, height, data } = imageData;
    // 使用 Uint8Array 标记已访问的像素，性能比 Set 快得多 (0:未访问, 1:已访问)
    const visited = new Uint8Array(width * height);
    const regions = [];
    
    // 获取背景色（取左上角第一个像素作为基准背景色）
    const bgR = data[0], bgG = data[1], bgB = data[2], bgA = data[3];
    
    // 颜色容差（防止轻微的噪点或压缩导致背景不纯）
    const tolerance = 15; 

    // 判断是否为背景像素的辅助函数
    function isBackground(r, g, b, a) {
        // 如果是完全透明，直接视为背景
        if (a === 0) return true;
        // 如果不透明，检查是否接近背景色
        return Math.abs(r - bgR) < tolerance &&
               Math.abs(g - bgG) < tolerance &&
               Math.abs(b - bgB) < tolerance &&
               Math.abs(a - bgA) < tolerance;
    }

    // 遍历所有像素
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const index = y * width + x;
            
            // 如果该像素已被访问过，跳过
            if (visited[index] === 1) continue;
            
            const pos = index * 4;
            const r = data[pos], g = data[pos+1], b = data[pos+2], a = data[pos+3];

            // 如果发现一个非背景像素，且未访问过，说明发现了一个新物体 -> 开始泛洪填充
            if (!isBackground(r, g, b, a)) {
                // 初始化包围盒
                let minX = x, maxX = x, minY = y, maxY = y;
                
                //以此像素为起点进行 BFS 广度优先搜索
                const queue = [index];
                visited[index] = 1; // 标记起点

                let pixelCount = 0; // 记录该物体包含的像素数，用于过滤噪点

                while (queue.length > 0) {
                    const currIndex = queue.shift(); // 取出队列头部
                    pixelCount++;

                    const cx = currIndex % width;
                    const cy = Math.floor(currIndex / width);

                    // 更新包围盒
                    if (cx < minX) minX = cx;
                    if (cx > maxX) maxX = cx;
                    if (cy < minY) minY = cy;
                    if (cy > maxY) maxY = cy;

                    // 检查 8 邻域 (上下左右 + 对角线)
                    // 如果希望分割得更细（不粘连对角线接触的物体），可以改成 4 邻域
                    const neighbors = [
                        [-1, -1], [0, -1], [1, -1],
                        [-1,  0],          [1,  0],
                        [-1,  1], [0,  1], [1,  1]
                    ];

                    for (let i = 0; i < neighbors.length; i++) {
                        const nx = cx + neighbors[i][0];
                        const ny = cy + neighbors[i][1];

                        // 边界检查
                        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                            const nIndex = ny * width + nx;
                            
                            if (visited[nIndex] === 0) {
                                const nPos = nIndex * 4;
                                const nr = data[nPos], ng = data[nPos+1], nb = data[nPos+2], na = data[nPos+3];
                                
                                // 如果邻居也不是背景，加入队列
                                if (!isBackground(nr, ng, nb, na)) {
                                    visited[nIndex] = 1; // 标记为已访问，防止重复加入
                                    queue.push(nIndex);
                                }
                            }
                        }
                    }
                }

                // 过滤极小的噪点（例如像素数小于10 或 宽高太小的）
                const w = maxX - minX + 1;
                const h = maxY - minY + 1;
                if (pixelCount > 20 && w > 4 && h > 4) {
                    regions.push({ 
                        x: minX, 
                        y: minY, 
                        width: w, 
                        height: h 
                    });
                }
            }
        }
    }
    
    return regions;
}

function isBackgroundColor(r, g, b, a, bgR, bgG, bgB, bgA) {
    const diff = Math.abs(r - bgR) + Math.abs(g - bgG) + Math.abs(b - bgB);
    return diff < 60 && Math.abs(a - bgA) < 50;
}

// 显示结果
function displayResults() {
    const resultsSection = document.getElementById('resultsSection');
    const grid = document.getElementById('resultsGrid');
    
    if (croppedImages.length > 0) resultsSection.style.display = 'block';
    else {
        resultsSection.style.display = 'none';
        return;
    }
    
    grid.innerHTML = '';
    const lang = i18n[currentLang];
    
    croppedImages.forEach((img, index) => {
        const div = document.createElement('div');
        div.className = 'result-item';
        div.innerHTML = `
            <img src="${img.dataURL}" alt="Result ${index + 1}">
            <div>${lang['result.size']} ${Math.round(img.width)}x${Math.round(img.height)}</div>
            <div style="display: flex; gap: 5px; margin-top: 5px; width: 100%;">
                <button class="btn btn-primary" style="flex:1; padding:6px; font-size:13px;" onclick="downloadImage(${index})">
                    ${lang['btn.download']}
                </button>
                <button class="btn btn-outline" style="padding:6px 12px; font-size:13px;" onclick="deleteImage(${index})">
                    ${lang['btn.delete']}
                </button>
            </div>
        `;
        grid.appendChild(div);
    });
}

function downloadImage(index) {
    const link = document.createElement('a');
    link.download = `split_${index + 1}.png`;
    link.href = croppedImages[index].dataURL;
    link.click();
}

function deleteImage(index) {
    croppedImages.splice(index, 1);
    displayResults();
    if (croppedImages.length === 0) document.getElementById('downloadAllBtn').disabled = true;
}

function downloadAll() {
    if (croppedImages.length === 0) return;
    const zip = new JSZip();
    croppedImages.forEach((img, index) => {
        const blob = base64ToBlob(img.dataURL.split(',')[1], 'image/png');
        zip.file(`split_${index + 1}.png`, blob);
    });
    zip.generateAsync({ type: 'blob' }).then(c => saveAs(c, 'split_images.zip'));
}

function base64ToBlob(base64, mime) {
    const byteChars = atob(base64);
    const byteArrays = [];
    for (let offset = 0; offset < byteChars.length; offset += 512) {
        const slice = byteChars.slice(offset, offset + 512);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) byteNumbers[i] = slice.charCodeAt(i);
        byteArrays.push(new Uint8Array(byteNumbers));
    }
    return new Blob(byteArrays, { type: mime });
}

function reset() {
    if (cropper) {
        cropper.destroy();
        cropper = null;
    }
    const image = document.getElementById('image');
    image.src = '';
    
    // 隐藏预览容器
    document.getElementById('previewContainer').style.display = 'none';
    
    // 恢复上传提示
    const hints = document.querySelectorAll('.upload-icon, .upload-hint, .upload-sub, .privacy-badge');
    hints.forEach(el => el.style.display = '');

    document.getElementById('cropBtn').disabled = true;
    document.getElementById('manualCropBtn').disabled = true;
    document.getElementById('resetBtn').disabled = true;
    document.getElementById('downloadAllBtn').disabled = true;
    
    clearResults();
    croppedImages = [];
    // 清空 input 允许重复上传同一文件
    document.getElementById('fileInput').value = '';
}

function clearResults() {
    document.getElementById('resultsGrid').innerHTML = '';
    document.getElementById('resultsSection').style.display = 'none';
}
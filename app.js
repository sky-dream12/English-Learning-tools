const AppState = {
    currentPage: 'home',
    isLoggedIn: false,
    user: null,
    courses: [],
    vocabulary: [],
    posts: [],
    achievements: [],
    learningRecords: [],
    currentWordIndex: 0,
    userAchievements: []
};

const Data = {
    courses: [
        { id: 1, title: '小学六年级英语', description: '适合小学六年级学生的基础英语课程', level: 'primary6', lessons: 24, image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400', color: '#3B82F6' },
        { id: 2, title: '初中英语入门', description: '初中七年级英语入门课程', level: 'junior7', lessons: 32, image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400', color: '#10B981' },
        { id: 3, title: '初中英语进阶', description: '初中八年级英语进阶课程', level: 'junior8', lessons: 36, image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9a1?w=400', color: '#F59E0B' },
        { id: 4, title: '初中英语提高', description: '初中九年级英语提高课程', level: 'junior9', lessons: 40, image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400', color: '#EF4444' },
        { id: 5, title: '高中英语预备', description: '高中一年级英语预备课程', level: 'senior1', lessons: 44, image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400', color: '#8B5CF6' },
        { id: 6, title: '高中英语进阶', description: '高中二年级英语进阶课程', level: 'senior2', lessons: 48, image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400', color: '#EC4899' },
        { id: 7, title: '高中英语冲刺', description: '高中三年级英语冲刺课程', level: 'senior3', lessons: 52, image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400', color: '#14B8A6' },
        { id: 8, title: '大学英语基础', description: '大学一年级英语基础课程', level: 'college1', lessons: 56, image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400', color: '#6366F1' },
        { id: 9, title: '大学英语进阶', description: '大学二年级英语进阶课程', level: 'college2', lessons: 60, image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400', color: '#F97316' },
        { id: 10, title: '大学英语提高', description: '大学三年级英语提高课程', level: 'college3', lessons: 64, image: 'https://images.unsplash.com/photo-1521545267122-7a2005e3b124?w=400', color: '#84CC16' },
        { id: 11, title: '大学英语精通', description: '大学四年级英语精通课程', level: 'college4', lessons: 68, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', color: '#0EA5E9' }
    ],
    vocabulary: [
        { id: 1, word: 'apple', meaning: '苹果', level: 'primary6', example: 'I like to eat apples.', phonetic: '/ˈæpl/' },
        { id: 2, word: 'book', meaning: '书', level: 'primary6', example: 'This is a good book.', phonetic: '/bʊk/' },
        { id: 3, word: 'computer', meaning: '电脑', level: 'junior7', example: 'I use computer every day.', phonetic: '/kəmˈpjuːtər/' },
        { id: 4, word: 'education', meaning: '教育', level: 'junior8', example: 'Education is important.', phonetic: '/ˌedʒuˈkeɪʃn/' },
        { id: 5, word: 'knowledge', meaning: '知识', level: 'junior9', example: 'Knowledge is power.', phonetic: '/ˈnɒlɪdʒ/' },
        { id: 6, word: 'university', meaning: '大学', level: 'senior1', example: 'I want to go to university.', phonetic: '/ˌjuːnɪˈvɜːsəti/' },
        { id: 7, word: 'technology', meaning: '技术', level: 'senior2', example: 'Technology is changing fast.', phonetic: '/tekˈnɒlədʒi/' },
        { id: 8, word: 'philosophy', meaning: '哲学', level: 'senior3', example: 'Philosophy makes us think.', phonetic: '/fɪˈlɒsəfi/' },
        { id: 9, word: 'literature', meaning: '文学', level: 'college1', example: 'I love English literature.', phonetic: '/ˈlɪtrətʃər/' },
        { id: 10, word: 'linguistics', meaning: '语言学', level: 'college2', example: 'Linguistics is interesting.', phonetic: '/lɪŋˈɡwɪstɪks/' },
        { id: 11, word: 'communication', meaning: '交流', level: 'college3', example: 'Good communication is key.', phonetic: '/kəˌmjuːnɪˈkeɪʃn/' },
        { id: 12, word: 'professional', meaning: '专业的', level: 'college4', example: 'Be professional in your work.', phonetic: '/prəˈfeʃənl/' }
    ],
    achievements: [
        { id: 1, name: '初学乍练', description: '完成首次课程学习', icon: '🏆', condition: 'complete_first_course' },
        { id: 2, name: '日积月累', description: '连续学习7天', icon: '📚', condition: 'streak_7_days' },
        { id: 3, name: '单词达人', description: '掌握20个单词', icon: '📖', condition: 'words_20' },
        { id: 4, name: '语法大师', description: '完成10道语法题', icon: '✏️', condition: 'grammar_10' },
        { id: 5, name: '口语新星', description: '完成5次口语练习', icon: '🎤', condition: 'speaking_5' },
        { id: 6, name: '听力能手', description: '完成10篇听力训练', icon: '🎧', condition: 'listening_10' },
        { id: 7, name: '社区活跃', description: '发布3篇帖子', icon: '💬', condition: 'posts_3' },
        { id: 8, name: '学业有成', description: '达到5级', icon: '⭐', condition: 'level_5' }
    ],
    grammarExercises: [
        { id: 1, question: 'What ___ your name?', options: ['is', 'are', 'am', 'be'], answer: 'is', level: 'primary6', explanation: '第二人称you用are，第三人称单数用is' },
        { id: 2, question: 'They ___ playing football.', options: ['is', 'are', 'am', 'be'], answer: 'are', level: 'primary6', explanation: '复数主语后面用are' },
        { id: 3, question: 'I ___ to school every day.', options: ['go', 'goes', 'going', 'went'], answer: 'go', level: 'junior7', explanation: '一般现在时，第一人称用动词原形' },
        { id: 4, question: 'She ___ English very well.', options: ['speak', 'speaks', 'speaking', 'spoke'], answer: 'speaks', level: 'junior7', explanation: '第三人称单数，动词加s' },
        { id: 5, question: '___ you finish your homework?', options: ['Did', 'Do', 'Does', 'Done'], answer: 'Did', level: 'junior8', explanation: '过去时用did提问' },
        { id: 6, question: 'The book ___ by me yesterday.', options: ['bought', 'was bought', 'were bought', 'buys'], answer: 'was bought', level: 'junior9', explanation: '被动语态，单数用was' },
        { id: 7, question: 'If I ___ you, I would study harder.', options: ['am', 'was', 'were', 'be'], answer: 'were', level: 'senior1', explanation: '虚拟语气，用were' },
        { id: 8, question: 'This is the best movie ___ I have ever seen.', options: ['which', 'that', 'what', 'who'], answer: 'that', level: 'senior2', explanation: '最高级修饰时用that' },
        { id: 9, question: 'Not only ___ study well, but also he is kind.', options: ['he does', 'does he', 'he did', 'did he'], answer: 'does he', level: 'senior3', explanation: 'not only置于句首时，句子要倒装' },
        { id: 10, question: '___, we went home.', options: ['The work was done', 'Done the work', 'The work done', 'Did the work'], answer: 'The work done', level: 'college1', explanation: '独立主格结构' }
    ],
    listeningMaterials: [
        { id: 1, title: 'Hello!', level: 'primary6', transcript: 'Hello! My name is Tom. I am 12 years old. I like apples.', questions: [{ q: 'What is his name?', a: 'Tom' }, { q: 'How old is he?', a: '12' }] },
        { id: 2, title: 'My School', level: 'junior7', transcript: 'This is my school. It is big and beautiful. We have many classrooms.', questions: [{ q: 'How is the school?', a: 'Big and beautiful' }] },
        { id: 3, title: 'A Trip', level: 'junior8', transcript: 'Last week, I went to Beijing with my family. We visited the Great Wall.', questions: [{ q: 'Where did they go?', a: 'Beijing' }] },
        { id: 4, title: 'Environmental Protection', level: 'senior1', transcript: 'Environmental protection is very important. We should plant more trees.', questions: [{ q: 'What should we do?', a: 'Plant more trees' }] }
    ],
    posts: [
        { id: 1, userId: 1, username: '小明', avatar: '👨‍🎓', title: '如何高效背单词？', content: '大家好，我最近在背单词，但总是记不住，请问有什么好方法吗？', likes: 23, comments: [{ user: '小红', avatar: '👩‍🎓', text: '可以用艾宾浩斯遗忘曲线来复习！' }, { user: '小李', avatar: '👨‍💼', text: '我也在找方法，同问' }], createdAt: '2024-01-15' },
        { id: 2, userId: 2, username: '英语达人', avatar: '🧑‍🏫', title: '分享我的英语学习经验', content: '学习英语最重要的是坚持，每天进步一点点，时间久了就会看到成果！', likes: 45, comments: [{ user: '小王', avatar: '🧑‍🎓', text: '说得太好了！' }], createdAt: '2024-01-14' }
    ]
};

function saveToLocalStorage() {
    localStorage.setItem('englishLearningApp', JSON.stringify({
        user: AppState.user,
        isLoggedIn: AppState.isLoggedIn,
        learningRecords: AppState.learningRecords,
        userAchievements: AppState.userAchievements
    }));
}

function loadFromLocalStorage() {
    const data = localStorage.getItem('englishLearningApp');
    if (data) {
        const parsed = JSON.parse(data);
        AppState.user = parsed.user;
        AppState.isLoggedIn = parsed.isLoggedIn;
        AppState.learningRecords = parsed.learningRecords || [];
        AppState.userAchievements = parsed.userAchievements || [];
    }
}

function initApp() {
    loadFromLocalStorage();
    AppState.courses = Data.courses;
    AppState.vocabulary = Data.vocabulary;
    AppState.achievements = Data.achievements;
    AppState.posts = Data.posts;
    renderApp();
}

function renderApp() {
    const app = document.getElementById('app');
    app.innerHTML = `
        ${renderNavbar()}
        <main class="pt-20 pb-10">
            ${renderCurrentPage()}
        </main>
    `;
    attachEventListeners();
}

function renderNavbar() {
    return `
        <nav class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center space-x-2 cursor-pointer" onclick="navigateTo('home')">
                        <div class="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                            <span class="text-white text-xl">📚</span>
                        </div>
                        <span class="font-bold text-xl text-gray-800">英语学习平台</span>
                    </div>
                    
                    <div class="hidden md:flex items-center space-x-8">
                        <a class="nav-link ${AppState.currentPage === 'home' ? 'active' : ''} text-gray-600 hover:text-gray-900 font-medium cursor-pointer" onclick="navigateTo('home')">首页</a>
                        <a class="nav-link ${AppState.currentPage === 'courses' ? 'active' : ''} text-gray-600 hover:text-gray-900 font-medium cursor-pointer" onclick="navigateTo('courses')">课程</a>
                        <a class="nav-link ${AppState.currentPage === 'vocabulary' ? 'active' : ''} text-gray-600 hover:text-gray-900 font-medium cursor-pointer" onclick="navigateTo('vocabulary')">单词</a>
                        <a class="nav-link ${AppState.currentPage === 'progress' ? 'active' : ''} text-gray-600 hover:text-gray-900 font-medium cursor-pointer" onclick="navigateTo('progress')">进度</a>
                        <a class="nav-link ${AppState.currentPage === 'community' ? 'active' : ''} text-gray-600 hover:text-gray-900 font-medium cursor-pointer" onclick="navigateTo('community')">社区</a>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        ${AppState.isLoggedIn ? `
                            <div class="flex items-center space-x-3">
                                <div class="text-right hidden sm:block">
                                    <p class="text-sm font-medium text-gray-900">${AppState.user.username}</p>
                                    <p class="text-xs text-gray-500">Lv.${AppState.user.level}</p>
                                </div>
                                <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl cursor-pointer" onclick="navigateTo('profile')">
                                    ${AppState.user.avatar || '👤'}
                                </div>
                            </div>
                        ` : `
                            <button onclick="navigateTo('login')" class="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium">登录</button>
                            <button onclick="navigateTo('register')" class="px-4 py-2 gradient-bg text-white rounded-xl font-medium hover:opacity-90 transition">注册</button>
                        `}
                    </div>
                </div>
            </div>
            
            <div class="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 flex justify-around z-50">
                <button onclick="navigateTo('home')" class="flex flex-col items-center py-2 ${AppState.currentPage === 'home' ? 'text-purple-600' : 'text-gray-500'}">
                    <span class="text-xl">🏠</span>
                    <span class="text-xs mt-1">首页</span>
                </button>
                <button onclick="navigateTo('courses')" class="flex flex-col items-center py-2 ${AppState.currentPage === 'courses' ? 'text-purple-600' : 'text-gray-500'}">
                    <span class="text-xl">📖</span>
                    <span class="text-xs mt-1">课程</span>
                </button>
                <button onclick="navigateTo('vocabulary')" class="flex flex-col items-center py-2 ${AppState.currentPage === 'vocabulary' ? 'text-purple-600' : 'text-gray-500'}">
                    <span class="text-xl">🔤</span>
                    <span class="text-xs mt-1">单词</span>
                </button>
                <button onclick="navigateTo('progress')" class="flex flex-col items-center py-2 ${AppState.currentPage === 'progress' ? 'text-purple-600' : 'text-gray-500'}">
                    <span class="text-xl">📊</span>
                    <span class="text-xs mt-1">进度</span>
                </button>
                <button onclick="navigateTo('profile')" class="flex flex-col items-center py-2 ${AppState.currentPage === 'profile' ? 'text-purple-600' : 'text-gray-500'}">
                    <span class="text-xl">👤</span>
                    <span class="text-xs mt-1">我的</span>
                </button>
            </div>
        </nav>
    `;
}

function renderCurrentPage() {
    switch (AppState.currentPage) {
        case 'home': return renderHomePage();
        case 'login': return renderLoginPage();
        case 'register': return renderRegisterPage();
        case 'courses': return renderCoursesPage();
        case 'vocabulary': return renderVocabularyPage();
        case 'grammar': return renderGrammarPage();
        case 'speaking': return renderSpeakingPage();
        case 'listening': return renderListeningPage();
        case 'progress': return renderProgressPage();
        case 'community': return renderCommunityPage();
        case 'achievements': return renderAchievementsPage();
        case 'profile': return renderProfilePage();
        default: return renderHomePage();
    }
}

function renderHomePage() {
    const levelNames = {
        primary6: '小学', junior7: '初一', junior8: '初二', junior9: '初三',
        senior1: '高一', senior2: '高二', senior3: '高三',
        college1: '大一', college2: '大二', college3: '大三', college4: '大四'
    };
    
    return `
        <div class="fade-in">
            <div class="gradient-bg text-white py-16 px-4">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center">
                        <h1 class="text-4xl md:text-5xl font-bold mb-4">开启你的英语学习之旅</h1>
                        <p class="text-lg md:text-xl opacity-90 mb-8">沉浸式学习体验，让英语学习更简单有趣</p>
                        ${!AppState.isLoggedIn ? `
                            <button onclick="navigateTo('register')" class="bg-white text-purple-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg">
                                立即开始学习
                            </button>
                        ` : `
                            <button onclick="navigateTo('courses')" class="bg-white text-purple-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg">
                                继续学习
                            </button>
                        `}
                    </div>
                </div>
            </div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                        <div class="text-3xl mb-3">📚</div>
                        <div class="text-2xl font-bold text-gray-800">${AppState.courses.length}</div>
                        <div class="text-gray-500">精品课程</div>
                    </div>
                    <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                        <div class="text-3xl mb-3">🔤</div>
                        <div class="text-2xl font-bold text-gray-800">${AppState.vocabulary.length}+</div>
                        <div class="text-gray-500">词汇学习</div>
                    </div>
                    <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                        <div class="text-3xl mb-3">🎯</div>
                        <div class="text-2xl font-bold text-gray-800">${AppState.achievements.length}</div>
                        <div class="text-gray-500">成就徽章</div>
                    </div>
                    <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                        <div class="text-3xl mb-3">👥</div>
                        <div class="text-2xl font-bold text-gray-800">${AppState.posts.length}+</div>
                        <div class="text-gray-500">社区互动</div>
                    </div>
                </div>
            </div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">快速开始</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div onclick="navigateTo('vocabulary')" class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white card-hover cursor-pointer">
                        <div class="text-4xl mb-3">🔤</div>
                        <div class="font-bold text-lg">单词记忆</div>
                        <div class="text-sm opacity-80">快速记忆单词</div>
                    </div>
                    <div onclick="navigateTo('grammar')" class="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white card-hover cursor-pointer">
                        <div class="text-4xl mb-3">✏️</div>
                        <div class="font-bold text-lg">语法练习</div>
                        <div class="text-sm opacity-80">巩固语法知识</div>
                    </div>
                    <div onclick="navigateTo('speaking')" class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white card-hover cursor-pointer">
                        <div class="text-4xl mb-3">🎤</div>
                        <div class="font-bold text-lg">口语跟读</div>
                        <div class="text-sm opacity-80">提升口语能力</div>
                    </div>
                    <div onclick="navigateTo('listening')" class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white card-hover cursor-pointer">
                        <div class="text-4xl mb-3">🎧</div>
                        <div class="font-bold text-lg">听力训练</div>
                        <div class="text-sm opacity-80">增强听力理解</div>
                    </div>
                </div>
            </div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">推荐课程</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${AppState.courses.slice(0, 6).map(course => `
                        <div class="bg-white rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer" onclick="navigateTo('courses')">
                            <div class="h-40 bg-cover bg-center" style="background-image: url('${course.image}'); background-color: ${course.color}20;"></div>
                            <div class="p-5">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-xs font-medium px-2 py-1 rounded-full" style="background-color: ${course.color}20; color: ${course.color};">
                                        ${levelNames[course.level]}
                                    </span>
                                    <span class="text-gray-500 text-sm">${course.lessons}课时</span>
                                </div>
                                <h3 class="font-bold text-gray-800 text-lg mb-2">${course.title}</h3>
                                <p class="text-gray-500 text-sm line-clamp-2">${course.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderLoginPage() {
    return `
        <div class="min-h-screen flex items-center justify-center px-4 py-20">
            <div class="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md fade-in">
                <div class="text-center mb-8">
                    <div class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span class="text-3xl">📚</span>
                    </div>
                    <h2 class="text-2xl font-bold text-gray-800">欢迎回来</h2>
                    <p class="text-gray-500 mt-2">登录您的英语学习账户</p>
                </div>
                
                <form id="loginForm" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
                        <input type="email" id="loginEmail" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition" placeholder="请输入邮箱">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">密码</label>
                        <input type="password" id="loginPassword" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition" placeholder="请输入密码">
                    </div>
                    <button type="submit" class="w-full gradient-bg text-white py-3 rounded-xl font-bold hover:opacity-90 transition">
                        登录
                    </button>
                </form>
                
                <p class="text-center mt-6 text-gray-500">
                    还没有账户？
                    <a onclick="navigateTo('register')" class="text-purple-600 font-medium cursor-pointer hover:underline">立即注册</a>
                </p>
            </div>
        </div>
    `;
}

function renderRegisterPage() {
    const avatars = ['👨‍🎓', '👩‍🎓', '🧑‍💼', '👨‍💻', '👩‍🔬', '🧑‍🏫', '👨‍🎨', '👩‍⚕️'];
    return `
        <div class="min-h-screen flex items-center justify-center px-4 py-20">
            <div class="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md fade-in">
                <div class="text-center mb-8">
                    <div class="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span class="text-3xl">📚</span>
                    </div>
                    <h2 class="text-2xl font-bold text-gray-800">创建账户</h2>
                    <p class="text-gray-500 mt-2">开始您的英语学习之旅</p>
                </div>
                
                <div class="flex justify-center gap-3 mb-6">
                    ${avatars.map((a, i) => `
                        <button type="button" onclick="selectAvatar('${a}')" class="avatar-btn w-10 h-10 rounded-full text-2xl hover:scale-110 transition ${i === 0 ? 'ring-2 ring-purple-500' : ''}" data-avatar="${a}">
                            ${a}
                        </button>
                    `).join('')}
                </div>
                
                <form id="registerForm" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">用户名</label>
                        <input type="text" id="registerUsername" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition" placeholder="请输入用户名">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
                        <input type="email" id="registerEmail" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition" placeholder="请输入邮箱">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">密码</label>
                        <input type="password" id="registerPassword" required class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition" placeholder="请输入密码">
                    </div>
                    <button type="submit" class="w-full gradient-bg text-white py-3 rounded-xl font-bold hover:opacity-90 transition">
                        注册
                    </button>
                </form>
                
                <p class="text-center mt-6 text-gray-500">
                    已有账户？
                    <a onclick="navigateTo('login')" class="text-purple-600 font-medium cursor-pointer hover:underline">立即登录</a>
                </p>
            </div>
        </div>
    `;
}

function renderCoursesPage() {
    const levels = [
        { id: 'all', name: '全部' },
        { id: 'primary6', name: '小学' },
        { id: 'junior7', name: '初一' },
        { id: 'junior8', name: '初二' },
        { id: 'junior9', name: '初三' },
        { id: 'senior1', name: '高一' },
        { id: 'senior2', name: '高二' },
        { id: 'senior3', name: '高三' },
        { id: 'college1', name: '大一' },
        { id: 'college2', name: '大二' },
        { id: 'college3', name: '大三' },
        { id: 'college4', name: '大四' }
    ];
    
    const levelNames = {
        primary6: '小学', junior7: '初一', junior8: '初二', junior9: '初三',
        senior1: '高一', senior2: '高二', senior3: '高三',
        college1: '大一', college2: '大二', college3: '大三', college4: '大四'
    };
    
    return `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-in">
            <h1 class="text-3xl font-bold text-gray-800 mb-2">课程中心</h1>
            <p class="text-gray-500 mb-8">选择适合你的英语课程</p>
            
            <div class="flex overflow-x-auto space-x-3 pb-4 scrollbar-hide mb-6">
                ${levels.map(level => `
                    <button onclick="filterCourses('${level.id}')" class="course-filter px-4 py-2 rounded-full whitespace-nowrap transition ${level.id === 'all' ? 'gradient-bg text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-purple-300'}" data-level="${level.id}">
                        ${level.name}
                    </button>
                `).join('')}
            </div>
            
            <div id="coursesGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${AppState.courses.map(course => `
                    <div class="bg-white rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer" onclick="startCourse(${course.id})">
                        <div class="h-40 bg-cover bg-center" style="background-image: url('${course.image}'); background-color: ${course.color}20;"></div>
                        <div class="p-5">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-xs font-medium px-2 py-1 rounded-full" style="background-color: ${course.color}20; color: ${course.color};">
                                    ${levelNames[course.level]}
                                </span>
                                <span class="text-gray-500 text-sm">${course.lessons}课时</span>
                            </div>
                            <h3 class="font-bold text-gray-800 text-lg mb-2">${course.title}</h3>
                            <p class="text-gray-500 text-sm line-clamp-2">${course.description}</p>
                            <button class="mt-4 w-full py-2 rounded-xl font-medium text-white" style="background-color: ${course.color};">
                                开始学习
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderVocabularyPage() {
    const currentWord = AppState.vocabulary[AppState.currentWordIndex % AppState.vocabulary.length];
    const levelNames = {
        primary6: '小学', junior7: '初一', junior8: '初二', junior9: '初三',
        senior1: '高一', senior2: '高二', senior3: '高三',
        college1: '大一', college2: '大二', college3: '大三', college4: '大四'
    };
    
    return `
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-in">
            <h1 class="text-3xl font-bold text-gray-800 mb-2">单词记忆</h1>
            <p class="text-gray-500 mb-8">点击卡片翻转查看释义</p>
            
            <div class="mb-8">
                <div class="flex justify-between items-center mb-3">
                    <span class="text-gray-600">进度</span>
                    <span class="text-gray-600">${(AppState.currentWordIndex % AppState.vocabulary.length) + 1} / ${AppState.vocabulary.length}</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="gradient-bg h-2 rounded-full transition-all duration-300" style="width: ${((AppState.currentWordIndex % AppState.vocabulary.length) + 1) / AppState.vocabulary.length * 100}%"></div>
                </div>
            </div>
            
            <div id="wordCard" class="word-card h-80 mb-8" onclick="flipCard()">
                <div class="word-card-inner relative w-full h-full">
                    <div class="word-card-front absolute w-full h-full bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-8">
                        <span class="text-xs font-medium px-3 py-1 rounded-full bg-purple-100 text-purple-600 mb-4">${levelNames[currentWord.level]}</span>
                        <span class="text-5xl font-bold text-gray-800 mb-4">${currentWord.word}</span>
                        <span class="text-xl text-gray-500 mb-6">${currentWord.phonetic}</span>
                        <button onclick="event.stopPropagation(); speakWord('${currentWord.word}')" class="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center hover:bg-purple-200 transition">
                            <span class="text-2xl">🔊</span>
                        </button>
                        <p class="text-gray-400 mt-4 text-sm">点击卡片查看释义</p>
                    </div>
                    <div class="word-card-back absolute w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl shadow-xl flex flex-col items-center justify-center p-8 text-white">
                        <span class="text-3xl mb-4">${currentWord.meaning}</span>
                        <p class="text-center opacity-90 mb-6">${currentWord.example}</p>
                        <span class="text-sm opacity-75">点击卡片翻转回来</span>
                    </div>
                </div>
            </div>
            
            <div class="flex justify-center gap-4">
                <button onclick="prevWord()" class="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition">
                    ← 上一个
                </button>
                <button onclick="markWordLearned()" class="px-6 py-3 gradient-bg text-white rounded-xl font-medium hover:opacity-90 transition">
                    已掌握 ✓
                </button>
                <button onclick="nextWord()" class="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition">
                    下一个 →
                </button>
            </div>
            
            <div class="mt-12">
                <h2 class="text-xl font-bold text-gray-800 mb-4">单词列表</h2>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                    ${AppState.vocabulary.map((word, i) => `
                        <div onclick="goToWord(${i})" class="bg-white p-4 rounded-xl shadow cursor-pointer hover:shadow-md transition ${i === AppState.currentWordIndex % AppState.vocabulary.length ? 'ring-2 ring-purple-500' : ''}">
                            <div class="font-bold text-gray-800">${word.word}</div>
                            <div class="text-sm text-gray-500">${word.meaning}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderGrammarPage() {
    const exercises = Data.grammarExercises;
    return `
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-in">
            <h1 class="text-3xl font-bold text-gray-800 mb-2">语法练习</h1>
            <p class="text-gray-500 mb-8">通过练习巩固语法知识</p>
            
            <div id="grammarContainer" class="space-y-6">
                ${exercises.map((ex, i) => `
                    <div class="bg-white rounded-2xl p-6 shadow-lg">
                        <div class="flex items-start justify-between mb-4">
                            <span class="text-sm font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-600">第 ${i + 1} 题</span>
                        </div>
                        <p class="text-lg font-medium text-gray-800 mb-4">${ex.question}</p>
                        <div class="grid grid-cols-2 gap-3 mb-4">
                            ${ex.options.map((opt, j) => `
                                <button onclick="checkGrammarAnswer(${i}, '${opt}', '${ex.answer}')" class="grammar-option-${i} px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-purple-400 transition font-medium">
                                    ${opt}
                                </button>
                            `).join('')}
                        </div>
                        <div id="grammarResult-${i}" class="hidden"></div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderSpeakingPage() {
    const sentences = [
        'Hello, how are you?',
        'Nice to meet you.',
        'I love learning English.',
        'The weather is nice today.',
        'Thank you very much.',
        'What is your name?',
        'Where are you from?',
        'I like reading books.'
    ];
    
    return `
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-in">
            <h1 class="text-3xl font-bold text-gray-800 mb-2">口语跟读</h1>
            <p class="text-gray-500 mb-8">跟着朗读，提升口语能力</p>
            
            <div class="bg-white rounded-3xl p-8 shadow-xl mb-8">
                <div class="text-center mb-8">
                    <div id="speakingSentence" class="text-3xl font-bold text-gray-800 mb-4">
                        ${sentences[0]}
                    </div>
                    <button onclick="speakWord(document.getElementById('speakingSentence').textContent)" class="px-6 py-3 bg-purple-100 text-purple-600 rounded-xl font-medium hover:bg-purple-200 transition">
                        🔊 听发音
                    </button>
                </div>
                
                <div class="flex justify-center gap-4">
                    <button id="recordBtn" onclick="toggleRecording()" class="px-8 py-4 bg-red-500 text-white rounded-full font-bold text-lg hover:bg-red-600 transition flex items-center gap-2">
                        <span id="recordIcon">🎤</span>
                        <span id="recordText">开始录音</span>
                    </button>
                </div>
                
                <div id="speakingResult" class="mt-8 text-center hidden">
                    <div class="text-6xl mb-4">🎉</div>
                    <p class="text-xl text-gray-700">发音评分: <span class="font-bold text-green-600">85分</span></p>
                    <p class="text-gray-500 mt-2">很好！继续保持！</p>
                </div>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                ${sentences.map((s, i) => `
                    <button onclick="selectSpeakingSentence('${s}')" class="bg-white p-4 rounded-xl shadow hover:shadow-md transition text-left">
                        <div class="text-gray-800 font-medium">${s}</div>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function renderListeningPage() {
    const materials = Data.listeningMaterials;
    return `
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-in">
            <h1 class="text-3xl font-bold text-gray-800 mb-2">听力训练</h1>
            <p class="text-gray-500 mb-8">提高你的英语听力理解能力</p>
            
            <div class="space-y-6">
                ${materials.map((material, i) => `
                    <div class="bg-white rounded-2xl p-6 shadow-lg">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-xl font-bold text-gray-800">${material.title}</h3>
                            <span class="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full">${material.level}</span>
                        </div>
                        
                        <div class="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                            <button onclick="playListening(${i})" class="w-14 h-14 rounded-full gradient-bg text-white flex items-center justify-center hover:opacity-90 transition">
                                <span class="text-2xl">▶️</span>
                            </button>
                            <div class="flex-1">
                                <div class="bg-gray-200 rounded-full h-2">
                                    <div id="progress-${i}" class="gradient-bg h-2 rounded-full w-0 transition-all"></div>
                                </div>
                            </div>
                        </div>
                        
                        <details class="group">
                            <summary class="cursor-pointer text-purple-600 font-medium hover:text-purple-700">
                                查看原文
                            </summary>
                            <p class="mt-3 p-4 bg-gray-50 rounded-xl text-gray-700">${material.transcript}</p>
                        </details>
                        
                        <div class="mt-4 space-y-3">
                            ${material.questions.map((q, j) => `
                                <div class="p-4 bg-gray-50 rounded-xl">
                                    <p class="font-medium text-gray-800 mb-2">${q.q}</p>
                                    <details>
                                        <summary class="cursor-pointer text-gray-500 text-sm hover:text-gray-700">查看答案</summary>
                                        <p class="mt-2 text-green-600 font-medium">${q.a}</p>
                                    </details>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderProgressPage() {
    return `
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-in">
            <h1 class="text-3xl font-bold text-gray-800 mb-2">学习进度</h1>
            <p class="text-gray-500 mb-8">查看你的学习统计数据</p>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="text-3xl mb-2">📅</div>
                    <div class="text-3xl font-bold text-gray-800">7</div>
                    <div class="text-gray-500">连续学习</div>
                </div>
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="text-3xl mb-2">⏱️</div>
                    <div class="text-3xl font-bold text-gray-800">12h</div>
                    <div class="text-gray-500">学习时长</div>
                </div>
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="text-3xl mb-2">🔤</div>
                    <div class="text-3xl font-bold text-gray-800">${AppState.vocabulary.length}</div>
                    <div class="text-gray-500">单词数量</div>
                </div>
                <div class="bg-white rounded-2xl p-6 shadow-lg card-hover">
                    <div class="text-3xl mb-2">📊</div>
                    <div class="text-3xl font-bold text-gray-800">5</div>
                    <div class="text-gray-500">完成课程</div>
                </div>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-gray-800 mb-4">学习时长统计</h3>
                    <canvas id="progressChart" height="250"></canvas>
                </div>
                
                <div class="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="text-xl font-bold text-gray-800 mb-4">能力雷达图</h3>
                    <canvas id="radarChart" height="250"></canvas>
                </div>
            </div>
            
            <div class="mt-8 bg-white rounded-2xl p-6 shadow-lg">
                <h3 class="text-xl font-bold text-gray-800 mb-4">学习日历</h3>
                <div class="grid grid-cols-7 gap-2">
                    ${['日', '一', '二', '三', '四', '五', '六'].map(d => `<div class="text-center text-gray-500 text-sm font-medium py-2">${d}</div>`).join('')}
                    ${Array.from({length: 30}, (_, i) => {
                        const studied = Math.random() > 0.4;
                        const intensity = studied ? Math.random() : 0;
                        let bgClass = 'bg-gray-100';
                        if (intensity > 0.75) bgClass = 'bg-purple-500';
                        else if (intensity > 0.5) bgClass = 'bg-purple-400';
                        else if (intensity > 0.25) bgClass = 'bg-purple-300';
                        else if (intensity > 0) bgClass = 'bg-purple-200';
                        return `<div class="aspect-square ${bgClass} rounded-lg flex items-center justify-center text-sm ${studied ? 'text-white' : 'text-gray-400'}">${i + 1}</div>`;
                    }).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderCommunityPage() {
    return `
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-in">
            <div class="flex items-center justify-between mb-8">
                <div>
                    <h1 class="text-3xl font-bold text-gray-800 mb-2">社区交流</h1>
                    <p class="text-gray-500">和其他学习者一起交流学习心得</p>
                </div>
                <button onclick="showCreatePost()" class="px-4 py-2 gradient-bg text-white rounded-xl font-medium hover:opacity-90 transition">
                    + 发布帖子
                </button>
            </div>
            
            <div id="createPostForm" class="hidden mb-6 bg-white rounded-2xl p-6 shadow-lg">
                <input type="text" id="postTitle" placeholder="帖子标题" class="w-full px-4 py-3 border border-gray-300 rounded-xl mb-4 focus:ring-2 focus:ring-purple-500 outline-none">
                <textarea id="postContent" placeholder="分享你的学习心得..." rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-xl mb-4 focus:ring-2 focus:ring-purple-500 outline-none resize-none"></textarea>
                <div class="flex justify-end gap-3">
                    <button onclick="hideCreatePost()" class="px-4 py-2 text-gray-600 hover:text-gray-800">取消</button>
                    <button onclick="createPost()" class="px-6 py-2 gradient-bg text-white rounded-xl font-medium">发布</button>
                </div>
            </div>
            
            <div class="space-y-6">
                ${AppState.posts.map(post => `
                    <div class="bg-white rounded-2xl p-6 shadow-lg">
                        <div class="flex items-start justify-between mb-4">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">${post.avatar}</div>
                                <div>
                                    <div class="font-bold text-gray-800">${post.username}</div>
                                    <div class="text-sm text-gray-500">${post.createdAt}</div>
                                </div>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">${post.title}</h3>
                        <p class="text-gray-600 mb-4">${post.content}</p>
                        <div class="flex items-center gap-6 text-gray-500">
                            <button class="flex items-center gap-2 hover:text-red-500 transition">
                                <span>❤️</span>
                                <span>${post.likes}</span>
                            </button>
                            <button class="flex items-center gap-2 hover:text-purple-500 transition">
                                <span>💬</span>
                                <span>${post.comments.length} 评论</span>
                            </button>
                        </div>
                        
                        ${post.comments.length > 0 ? `
                            <div class="mt-4 pt-4 border-t border-gray-100 space-y-3">
                                ${post.comments.map(comment => `
                                    <div class="flex items-start gap-3">
                                        <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-lg">${comment.avatar}</div>
                                        <div class="flex-1 bg-gray-50 rounded-xl p-3">
                                            <span class="font-medium text-gray-800">${comment.user}</span>
                                            <span class="text-gray-600">: ${comment.text}</span>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderAchievementsPage() {
    return `
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-in">
            <h1 class="text-3xl font-bold text-gray-800 mb-2">成就系统</h1>
            <p class="text-gray-500 mb-8">收集徽章，见证你的成长</p>
            
            <div class="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 mb-8 text-white">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-lg opacity-90">已获得徽章</p>
                        <p class="text-5xl font-bold">${AppState.userAchievements.length} / ${AppState.achievements.length}</p>
                    </div>
                    <div class="text-8xl badge-glow">🏆</div>
                </div>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                ${AppState.achievements.map(achievement => {
                    const earned = AppState.userAchievements.includes(achievement.id);
                    return `
                        <div class="bg-white rounded-2xl p-6 shadow-lg text-center card-hover ${earned ? '' : 'opacity-50'}">
                            <div class="text-5xl mb-3 ${earned ? '' : 'grayscale'}">${achievement.icon}</div>
                            <div class="font-bold text-gray-800 mb-1">${achievement.name}</div>
                            <div class="text-sm text-gray-500">${achievement.description}</div>
                            ${earned ? `
                                <div class="mt-3 text-sm text-green-600 font-medium">✓ 已获得</div>
                            ` : `
                                <div class="mt-3 text-sm text-gray-400">未获得</div>
                            `}
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function renderProfilePage() {
    if (!AppState.isLoggedIn) {
        return `
            <div class="max-w-md mx-auto px-4 py-20 text-center fade-in">
                <div class="text-6xl mb-4">👤</div>
                <h2 class="text-2xl font-bold text-gray-800 mb-4">请先登录</h2>
                <p class="text-gray-500 mb-6">登录后查看您的个人信息</p>
                <button onclick="navigateTo('login')" class="px-8 py-3 gradient-bg text-white rounded-xl font-bold">
                    立即登录
                </button>
            </div>
        `;
    }
    
    const user = AppState.user;
    const expNeeded = user.level * 100;
    
    return `
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-in">
            <div class="bg-white rounded-3xl p-8 shadow-xl mb-8">
                <div class="flex flex-col md:flex-row items-center gap-6">
                    <div class="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center text-5xl">
                        ${user.avatar || '👤'}
                    </div>
                    <div class="flex-1 text-center md:text-left">
                        <h1 class="text-2xl font-bold text-gray-800">${user.username}</h1>
                        <p class="text-gray-500">${user.email}</p>
                        <div class="flex items-center justify-center md:justify-start gap-4 mt-3">
                            <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full font-medium">Lv.${user.level}</span>
                            <span class="text-gray-500">经验: ${user.exp} / ${expNeeded}</span>
                        </div>
                        <div class="w-full max-w-xs mx-auto md:mx-0 mt-3">
                            <div class="bg-gray-200 rounded-full h-2">
                                <div class="gradient-bg h-2 rounded-full" style="width: ${user.exp / expNeeded * 100}%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mb-8">
                <button onclick="navigateTo('progress')" class="bg-white p-6 rounded-2xl shadow-lg card-hover text-left">
                    <div class="text-3xl mb-2">📊</div>
                    <div class="font-bold text-gray-800">学习进度</div>
                    <div class="text-gray-500 text-sm">查看统计数据</div>
                </button>
                <button onclick="navigateTo('achievements')" class="bg-white p-6 rounded-2xl shadow-lg card-hover text-left">
                    <div class="text-3xl mb-2">🏆</div>
                    <div class="font-bold text-gray-800">成就徽章</div>
                    <div class="text-gray-500 text-sm">查看获得的徽章</div>
                </button>
            </div>
            
            <div class="bg-white rounded-2xl p-6 shadow-lg mb-8">
                <h2 class="text-xl font-bold text-gray-800 mb-4">设置</h2>
                <div class="space-y-4">
                    <div class="flex items-center justify-between py-3 border-b border-gray-100">
                        <span class="text-gray-700">学习提醒</span>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" class="sr-only peer" checked>
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                    </div>
                    <div class="flex items-center justify-between py-3 border-b border-gray-100">
                        <span class="text-gray-700">每日目标</span>
                        <select class="bg-gray-100 px-3 py-1 rounded-lg outline-none">
                            <option>10个单词</option>
                            <option selected>20个单词</option>
                            <option>30个单词</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <button onclick="logout()" class="w-full py-4 bg-red-50 text-red-600 rounded-2xl font-medium hover:bg-red-100 transition">
                退出登录
            </button>
        </div>
    `;
}

function attachEventListeners() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.onsubmit = (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            login(email, password);
        };
    }
    
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.onsubmit = (e) => {
            e.preventDefault();
            const username = document.getElementById('registerUsername').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            register(username, email, password);
        };
    }
    
    if (AppState.currentPage === 'progress') {
        initCharts();
    }
}

function navigateTo(page) {
    AppState.currentPage = page;
    window.scrollTo(0, 0);
    renderApp();
}

function login(email, password) {
    AppState.user = {
        id: 1,
        username: email.split('@')[0],
        email: email,
        avatar: '👨‍🎓',
        level: 3,
        exp: 150
    };
    AppState.isLoggedIn = true;
    saveToLocalStorage();
    showToast('登录成功！');
    navigateTo('home');
}

function register(username, email, password) {
    AppState.user = {
        id: Date.now(),
        username: username,
        email: email,
        avatar: window.selectedAvatar || '👨‍🎓',
        level: 1,
        exp: 0
    };
    AppState.isLoggedIn = true;
    saveToLocalStorage();
    showToast('注册成功！欢迎加入！');
    navigateTo('home');
}

function logout() {
    AppState.user = null;
    AppState.isLoggedIn = false;
    saveToLocalStorage();
    showToast('已退出登录');
    navigateTo('home');
}

function selectAvatar(avatar) {
    window.selectedAvatar = avatar;
    document.querySelectorAll('.avatar-btn').forEach(btn => {
        btn.classList.remove('ring-2', 'ring-purple-500');
        if (btn.dataset.avatar === avatar) {
            btn.classList.add('ring-2', 'ring-purple-500');
        }
    });
}

function flipCard() {
    document.getElementById('wordCard').classList.toggle('flipped');
}

function prevWord() {
    AppState.currentWordIndex = Math.max(0, AppState.currentWordIndex - 1);
    renderApp();
}

function nextWord() {
    AppState.currentWordIndex++;
    renderApp();
}

function goToWord(index) {
    AppState.currentWordIndex = index;
    renderApp();
}

function markWordLearned() {
    showToast('已标记为掌握！');
    if (AppState.isLoggedIn) {
        AppState.user.exp += 10;
        saveToLocalStorage();
    }
    nextWord();
}

function speakWord(word) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
    }
}

function filterCourses(level) {
    const filters = document.querySelectorAll('.course-filter');
    filters.forEach(btn => {
        btn.classList.remove('gradient-bg', 'text-white');
        btn.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-200');
        if (btn.dataset.level === level) {
            btn.classList.add('gradient-bg', 'text-white');
            btn.classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-200');
        }
    });
    
    const grid = document.getElementById('coursesGrid');
    const filteredCourses = level === 'all' 
        ? AppState.courses 
        : AppState.courses.filter(c => c.level === level);
    
    const levelNames = {
        primary6: '小学', junior7: '初一', junior8: '初二', junior9: '初三',
        senior1: '高一', senior2: '高二', senior3: '高三',
        college1: '大一', college2: '大二', college3: '大三', college4: '大四'
    };
    
    grid.innerHTML = filteredCourses.map(course => `
        <div class="bg-white rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer" onclick="startCourse(${course.id})">
            <div class="h-40 bg-cover bg-center" style="background-image: url('${course.image}'); background-color: ${course.color}20;"></div>
            <div class="p-5">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-medium px-2 py-1 rounded-full" style="background-color: ${course.color}20; color: ${course.color};">
                        ${levelNames[course.level]}
                    </span>
                    <span class="text-gray-500 text-sm">${course.lessons}课时</span>
                </div>
                <h3 class="font-bold text-gray-800 text-lg mb-2">${course.title}</h3>
                <p class="text-gray-500 text-sm line-clamp-2">${course.description}</p>
                <button class="mt-4 w-full py-2 rounded-xl font-medium text-white" style="background-color: ${course.color};">
                    开始学习
                </button>
            </div>
        </div>
    `).join('');
}

function startCourse(courseId) {
    showToast('开始学习！');
    if (AppState.isLoggedIn) {
        AppState.user.exp += 20;
        checkAchievements();
        saveToLocalStorage();
    }
}

function checkGrammarAnswer(index, selected, correct) {
    const options = document.querySelectorAll(`.grammar-option-${index}`);
    const resultDiv = document.getElementById(`grammarResult-${index}`);
    
    options.forEach(opt => {
        opt.disabled = true;
        if (opt.textContent.trim() === correct) {
            opt.classList.remove('border-gray-200');
            opt.classList.add('border-green-500', 'bg-green-50');
        } else if (opt.textContent.trim() === selected && selected !== correct) {
            opt.classList.remove('border-gray-200');
            opt.classList.add('border-red-500', 'bg-red-50');
        }
    });
    
    resultDiv.classList.remove('hidden');
    if (selected === correct) {
        resultDiv.innerHTML = '<p class="text-green-600 font-medium">✓ 回答正确！</p>';
        if (AppState.isLoggedIn) {
            AppState.user.exp += 5;
            saveToLocalStorage();
        }
    } else {
        resultDiv.innerHTML = '<p class="text-red-600 font-medium">✗ 回答错误，正确答案是：' + correct + '</p>';
    }
}

let isRecording = false;
function toggleRecording() {
    isRecording = !isRecording;
    const btn = document.getElementById('recordBtn');
    const icon = document.getElementById('recordIcon');
    const text = document.getElementById('recordText');
    
    if (isRecording) {
        btn.classList.remove('bg-red-500', 'hover:bg-red-600');
        btn.classList.add('bg-green-500', 'hover:bg-green-600', 'pulse');
        icon.textContent = '⏹️';
        text.textContent = '停止录音';
        
        setTimeout(() => {
            isRecording = false;
            btn.classList.remove('bg-green-500', 'hover:bg-green-600', 'pulse');
            btn.classList.add('bg-red-500', 'hover:bg-red-600');
            icon.textContent = '🎤';
            text.textContent = '开始录音';
            document.getElementById('speakingResult').classList.remove('hidden');
        }, 3000);
    }
}

function selectSpeakingSentence(sentence) {
    document.getElementById('speakingSentence').textContent = sentence;
}

function playListening(index) {
    const progressBar = document.getElementById(`progress-${index}`);
    let progress = 0;
    const interval = setInterval(() => {
        progress += 2;
        progressBar.style.width = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 100);
}

function showCreatePost() {
    document.getElementById('createPostForm').classList.remove('hidden');
}

function hideCreatePost() {
    document.getElementById('createPostForm').classList.add('hidden');
}

function createPost() {
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;
    if (title && content) {
        const newPost = {
            id: Date.now(),
            userId: AppState.user?.id || 0,
            username: AppState.user?.username || '访客',
            avatar: AppState.user?.avatar || '👤',
            title: title,
            content: content,
            likes: 0,
            comments: [],
            createdAt: new Date().toLocaleDateString('zh-CN')
        };
        AppState.posts.unshift(newPost);
        showToast('发布成功！');
        renderApp();
    }
}

function checkAchievements() {
    if (AppState.user && AppState.userAchievements.length === 0) {
        AppState.userAchievements.push(1);
        showToast('🎉 获得新徽章：初学乍练！');
    }
}

function initCharts() {
    const progressCtx = document.getElementById('progressChart')?.getContext('2d');
    if (progressCtx) {
        new Chart(progressCtx, {
            type: 'bar',
            data: {
                labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                datasets: [{
                    label: '学习时长（分钟）',
                    data: [45, 60, 30, 75, 55, 90, 40],
                    backgroundColor: 'rgba(102, 126, 234, 0.8)',
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } }
            }
        });
    }
    
    const radarCtx = document.getElementById('radarChart')?.getContext('2d');
    if (radarCtx) {
        new Chart(radarCtx, {
            type: 'radar',
            data: {
                labels: ['词汇', '语法', '口语', '听力', '阅读'],
                datasets: [{
                    label: '当前水平',
                    data: [65, 55, 45, 50, 60],
                    backgroundColor: 'rgba(102, 126, 234, 0.2)',
                    borderColor: 'rgba(102, 126, 234, 1)',
                    pointBackgroundColor: 'rgba(102, 126, 234, 1)'
                }]
            },
            options: {
                responsive: true,
                scales: { r: { beginAtZero: true, max: 100 } }
            }
        });
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-24 md:bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-xl shadow-lg z-50 fade-in';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    });
}

initApp();

module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/apps/intranet-iq/src/lib/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addBookmark",
    ()=>addBookmark,
    "addChatMessage",
    ()=>addChatMessage,
    "createChatThread",
    ()=>createChatThread,
    "findSimilarArticles",
    ()=>findSimilarArticles,
    "getArticleBySlug",
    ()=>getArticleBySlug,
    "getArticles",
    ()=>getArticles,
    "getChatContext",
    ()=>getChatContext,
    "getChatMessages",
    ()=>getChatMessages,
    "getChatThreads",
    ()=>getChatThreads,
    "getDepartmentBySlug",
    ()=>getDepartmentBySlug,
    "getDepartments",
    ()=>getDepartments,
    "getEmbeddingStats",
    ()=>getEmbeddingStats,
    "getEmployees",
    ()=>getEmployees,
    "getKBCategories",
    ()=>getKBCategories,
    "getNewsPosts",
    ()=>getNewsPosts,
    "getOrgChart",
    ()=>getOrgChart,
    "getUpcomingEvents",
    ()=>getUpcomingEvents,
    "getUserBookmarks",
    ()=>getUserBookmarks,
    "getUserSettings",
    ()=>getUserSettings,
    "getWorkflowWithSteps",
    ()=>getWorkflowWithSteps,
    "getWorkflows",
    ()=>getWorkflows,
    "logActivity",
    ()=>logActivity,
    "removeBookmark",
    ()=>removeBookmark,
    "searchArticles",
    ()=>searchArticles,
    "searchArticlesSemantic",
    ()=>searchArticlesSemantic,
    "searchKnowledge",
    ()=>searchKnowledge,
    "searchKnowledgeHybrid",
    ()=>searchKnowledgeHybrid,
    "searchKnowledgeSemantic",
    ()=>searchKnowledgeSemantic,
    "supabase",
    ()=>supabase,
    "updateUserSettings",
    ()=>updateUserSettings
]);
/**
 * dIQ Supabase Client
 * Configured for the Intranet IQ project
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
// Environment variables
const supabaseUrl = ("TURBOPACK compile-time value", "https://fhtempgkltrazrgbedrh.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZodGVtcGdrbHRyYXpyZ2JlZHJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg3ODgzOTEsImV4cCI6MjA4NDM2NDM5MX0.6nESGQI48SWOfwBen2IRDStMMkOEKBKdAE6xCK7McQs");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
async function getArticles(options) {
    let query = supabase.schema('diq').from('articles').select(`
      *,
      author:author_id(id, full_name, avatar_url),
      category:category_id(id, name, slug, color)
    `).order('created_at', {
        ascending: false
    });
    if (options?.categoryId) {
        query = query.eq('category_id', options.categoryId);
    }
    if (options?.status) {
        query = query.eq('status', options.status);
    }
    if (options?.limit) {
        query = query.limit(options.limit);
    }
    if (options?.offset) {
        query = query.range(options.offset, options.offset + (options.limit || 10) - 1);
    }
    return query;
}
async function getArticleBySlug(slug) {
    return supabase.schema('diq').from('articles').select(`
      *,
      author:author_id(id, full_name, avatar_url),
      category:category_id(id, name, slug, color)
    `).eq('slug', slug).single();
}
async function getKBCategories(departmentId) {
    let query = supabase.schema('diq').from('kb_categories').select('*').order('sort_order', {
        ascending: true
    });
    if (departmentId) {
        query = query.eq('department_id', departmentId);
    }
    return query;
}
async function getEmployees(options) {
    let query = supabase.schema('diq').from('employees').select(`
      *,
      user:user_id(id, full_name, email, avatar_url),
      department:department_id(id, name, slug)
    `).order('user_id');
    if (options?.departmentId) {
        query = query.eq('department_id', options.departmentId);
    }
    if (options?.limit) {
        query = query.limit(options.limit);
    }
    return query;
}
async function getOrgChart(departmentId) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return supabase.rpc('diq.get_org_chart', {
        dept_id: departmentId || null
    });
}
async function getChatThreads(userId) {
    return supabase.schema('diq').from('chat_threads').select('*').eq('user_id', userId).neq('status', 'deleted').order('updated_at', {
        ascending: false
    });
}
async function getChatMessages(threadId) {
    return supabase.schema('diq').from('chat_messages').select('*').eq('thread_id', threadId).order('created_at', {
        ascending: true
    });
}
async function createChatThread(userId, title, llmModel = 'gpt-4') {
    return supabase.schema('diq').from('chat_threads').insert({
        user_id: userId,
        title,
        llm_model: llmModel,
        status: 'active',
        metadata: {}
    }).select().single();
}
async function addChatMessage(threadId, role, content, options) {
    return supabase.schema('diq').from('chat_messages').insert({
        thread_id: threadId,
        role,
        content,
        sources: options?.sources || [],
        confidence: options?.confidence || null,
        tokens_used: options?.tokensUsed || null,
        llm_model: options?.llmModel || null,
        metadata: {}
    }).select().single();
}
async function getWorkflows(options) {
    let query = supabase.schema('diq').from('workflows').select(`
      *,
      creator:created_by(id, full_name, avatar_url)
    `).order('updated_at', {
        ascending: false
    });
    if (options?.createdBy) {
        query = query.eq('created_by', options.createdBy);
    }
    if (options?.status) {
        query = query.eq('status', options.status);
    }
    if (options?.isTemplate !== undefined) {
        query = query.eq('is_template', options.isTemplate);
    }
    return query;
}
async function getWorkflowWithSteps(workflowId) {
    const [workflow, steps] = await Promise.all([
        supabase.schema('diq').from('workflows').select('*').eq('id', workflowId).single(),
        supabase.schema('diq').from('workflow_steps').select('*').eq('workflow_id', workflowId).order('step_number', {
            ascending: true
        })
    ]);
    return {
        workflow,
        steps
    };
}
async function getNewsPosts(options) {
    let query = supabase.schema('diq').from('news_posts').select(`
      *,
      author:author_id(id, full_name, avatar_url),
      department:department_id(id, name)
    `).order('pinned', {
        ascending: false
    }).order('published_at', {
        ascending: false
    });
    if (options?.departmentId) {
        query = query.eq('department_id', options.departmentId);
    }
    if (options?.type) {
        query = query.eq('type', options.type);
    }
    if (options?.limit) {
        query = query.limit(options.limit);
    }
    if (options?.offset) {
        query = query.range(options.offset, options.offset + (options.limit || 10) - 1);
    }
    return query;
}
async function getUpcomingEvents(options) {
    let query = supabase.schema('diq').from('events').select(`
      *,
      organizer:organizer_id(id, full_name, avatar_url),
      department:department_id(id, name)
    `).gte('start_time', new Date().toISOString()).order('start_time', {
        ascending: true
    });
    if (options?.departmentId) {
        query = query.eq('department_id', options.departmentId);
    }
    if (options?.limit) {
        query = query.limit(options.limit);
    }
    return query;
}
async function getUserBookmarks(userId, itemType) {
    let query = supabase.schema('diq').from('bookmarks').select('*').eq('user_id', userId).order('created_at', {
        ascending: false
    });
    if (itemType) {
        query = query.eq('item_type', itemType);
    }
    return query;
}
async function addBookmark(userId, itemType, itemId, options) {
    return supabase.schema('diq').from('bookmarks').insert({
        user_id: userId,
        item_type: itemType,
        item_id: itemId,
        notes: options?.notes || null,
        folder: options?.folder || null
    }).select().single();
}
async function removeBookmark(userId, itemType, itemId) {
    return supabase.schema('diq').from('bookmarks').delete().eq('user_id', userId).eq('item_type', itemType).eq('item_id', itemId);
}
async function getUserSettings(userId) {
    const { data, error } = await supabase.schema('diq').from('user_settings').select('*').eq('user_id', userId).single();
    // If no settings exist, return defaults
    if (error && error.code === 'PGRST116') {
        return {
            data: {
                notification_prefs: {
                    email_digest: true,
                    news_mentions: true,
                    article_updates: true,
                    event_reminders: true
                },
                appearance: {
                    theme: 'dark',
                    sidebar_collapsed: false,
                    density: 'comfortable'
                },
                ai_prefs: {
                    default_llm: 'gpt-4',
                    response_style: 'balanced',
                    show_sources: true
                },
                privacy: {
                    show_profile: true,
                    show_activity: true,
                    searchable: true
                }
            },
            error: null
        };
    }
    return {
        data,
        error
    };
}
async function updateUserSettings(userId, settings) {
    return supabase.schema('diq').from('user_settings').upsert({
        user_id: userId,
        ...settings
    }).select().single();
}
async function searchKnowledge(query, options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return supabase.rpc('search_knowledge', {
        search_query: query,
        project_codes: options?.projectCodes || null,
        item_types: options?.itemTypes || null,
        max_results: options?.maxResults || 20
    });
}
async function searchArticles(query, options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return supabase.rpc('diq.search_articles', {
        search_query: query,
        category_slug: options?.categorySlug || null,
        max_results: options?.maxResults || 20
    });
}
async function logActivity(userId, action, options) {
    // Get dIQ project ID
    const { data: projectData } = await supabase.from('projects').select('id').eq('code', 'dIQ').single();
    const projectId = projectData?.id;
    if (!projectId) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return supabase.from('activity_log').insert({
        user_id: userId,
        project_id: projectId,
        action,
        entity_type: options?.entityType || null,
        entity_id: options?.entityId || null,
        metadata: options?.metadata || {}
    });
}
async function getDepartments() {
    return supabase.schema('diq').from('departments').select(`
      *,
      manager:manager_id(id, full_name, avatar_url)
    `).order('name');
}
async function getDepartmentBySlug(slug) {
    return supabase.schema('diq').from('departments').select(`
      *,
      manager:manager_id(id, full_name, avatar_url)
    `).eq('slug', slug).single();
}
async function searchKnowledgeSemantic(queryEmbedding, options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return supabase.rpc('search_knowledge_semantic', {
        query_embedding: queryEmbedding,
        match_threshold: options?.matchThreshold || 0.7,
        match_count: options?.matchCount || 10,
        filter_project_codes: options?.projectCodes || null,
        filter_item_types: options?.itemTypes || null
    });
}
async function searchKnowledgeHybrid(searchQuery, queryEmbedding, options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return supabase.rpc('search_knowledge_hybrid', {
        search_query: searchQuery,
        query_embedding: queryEmbedding || null,
        match_count: options?.matchCount || 20,
        filter_project_codes: options?.projectCodes || null,
        filter_item_types: options?.itemTypes || null,
        semantic_weight: options?.semanticWeight || 0.5
    });
}
async function searchArticlesSemantic(queryEmbedding, options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return supabase.rpc('diq.search_articles_semantic', {
        query_embedding: queryEmbedding,
        match_threshold: options?.matchThreshold || 0.7,
        match_count: options?.matchCount || 10,
        filter_category_slug: options?.categorySlug || null,
        filter_status: options?.status || 'published'
    });
}
async function findSimilarArticles(articleId, matchCount = 5) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return supabase.rpc('diq.find_similar_articles', {
        article_id: articleId,
        match_count: matchCount
    });
}
async function getChatContext(queryEmbedding, options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return supabase.rpc('diq.get_chat_context', {
        query_embedding: queryEmbedding,
        max_tokens: options?.maxTokens || 4000,
        match_threshold: options?.matchThreshold || 0.7
    });
}
async function getEmbeddingStats() {
    return supabase.from('embedding_stats').select('*');
}
}),
"[project]/apps/intranet-iq/src/lib/embeddings.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateEmbedding",
    ()=>generateEmbedding,
    "generateEmbeddings",
    ()=>generateEmbeddings,
    "getEmbeddingDimensions",
    ()=>getEmbeddingDimensions
]);
/**
 * Local Embeddings using Transformers.js
 * Uses all-MiniLM-L6-v2 model (384 dimensions)
 * No API key required - runs locally
 */ // Dynamic import to avoid issues with server-side rendering
let pipeline = null;
let embeddingModel = null;
async function getEmbeddingPipeline() {
    if (embeddingModel) {
        return embeddingModel;
    }
    // Dynamically import transformers.js
    const { pipeline: createPipeline } = await __turbopack_context__.A("[externals]/@xenova/transformers [external] (@xenova/transformers, esm_import, [project]/node_modules/@xenova/transformers, async loader)");
    // Use all-MiniLM-L6-v2 - fast, small, and effective
    // Produces 384-dimensional embeddings
    embeddingModel = await createPipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    return embeddingModel;
}
async function generateEmbedding(text) {
    const model = await getEmbeddingPipeline();
    // Truncate text to avoid memory issues (max ~512 tokens)
    const truncatedText = text.substring(0, 2000);
    // Generate embedding
    const output = await model(truncatedText, {
        pooling: 'mean',
        normalize: true
    });
    // Convert to regular array
    return Array.from(output.data);
}
async function generateEmbeddings(texts) {
    const model = await getEmbeddingPipeline();
    const embeddings = [];
    for (const text of texts){
        const truncatedText = text.substring(0, 2000);
        const output = await model(truncatedText, {
            pooling: 'mean',
            normalize: true
        });
        embeddings.push(Array.from(output.data));
    }
    return embeddings;
}
function getEmbeddingDimensions() {
    return 384;
}
}),
"[project]/apps/intranet-iq/src/app/api/embeddings/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/intranet-iq/src/lib/supabase.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$embeddings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/intranet-iq/src/lib/embeddings.ts [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    try {
        const { action, articleId, text } = await request.json();
        // Generate embedding for specific article
        if (action === 'generate_article' && articleId) {
            const { data: article, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].schema('diq').from('articles').select('id, title, content, summary').eq('id', articleId).single();
            if (error || !article) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Article not found'
                }, {
                    status: 404
                });
            }
            // Combine title, summary, and content for embedding
            const textToEmbed = `${article.title}\n\n${article.summary || ''}\n\n${article.content || ''}`;
            const embedding = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$embeddings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateEmbedding"])(textToEmbed);
            // Store embedding
            const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].schema('diq').from('articles').update({
                embedding: embedding
            }).eq('id', articleId);
            if (updateError) {
                console.error('Failed to store embedding:', updateError);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Failed to store embedding'
                }, {
                    status: 500
                });
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                articleId,
                dimensions: embedding.length
            });
        }
        // Generate embedding for arbitrary text (for search queries)
        if (action === 'query' && text) {
            const embedding = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$embeddings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateEmbedding"])(text);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                embedding,
                dimensions: embedding.length
            });
        }
        // Batch generate embeddings for all knowledge_items without embeddings
        if (action === 'batch_knowledge_items') {
            const limit = 50; // Process 50 at a time
            // Get items needing embeddings from public.knowledge_items
            const { data: items, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('knowledge_items').select('id, title, content, summary, source_table').is('embedding', null).limit(limit);
            if (error) {
                console.error('Failed to fetch knowledge items:', error);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Failed to fetch items'
                }, {
                    status: 500
                });
            }
            if (!items || items.length === 0) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    processed: 0,
                    results: [],
                    message: 'All knowledge items already have embeddings'
                });
            }
            const results = [];
            for (const item of items){
                try {
                    const textToEmbed = `${item.title || ''}\n\n${item.summary || ''}\n\n${item.content || ''}`.trim();
                    if (!textToEmbed) {
                        results.push({
                            id: item.id,
                            source: item.source_table,
                            success: false,
                            error: 'No text content'
                        });
                        continue;
                    }
                    const embedding = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$embeddings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateEmbedding"])(textToEmbed);
                    // Store embedding directly
                    const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('knowledge_items').update({
                        embedding: embedding
                    }).eq('id', item.id);
                    if (updateError) {
                        results.push({
                            id: item.id,
                            source: item.source_table,
                            success: false,
                            error: updateError.message
                        });
                    } else {
                        results.push({
                            id: item.id,
                            title: item.title,
                            source: item.source_table,
                            success: true
                        });
                    }
                } catch (err) {
                    results.push({
                        id: item.id,
                        source: item.source_table,
                        success: false,
                        error: String(err)
                    });
                }
            }
            // Get remaining count
            const { count } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('knowledge_items').select('id', {
                count: 'exact',
                head: true
            }).is('embedding', null);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                processed: results.filter((r)=>r.success).length,
                failed: results.filter((r)=>!r.success).length,
                remaining: count || 0,
                results
            });
        }
        // Batch generate embeddings for all articles without embeddings
        if (action === 'batch_articles') {
            // Use direct SQL since diq schema might not be exposed
            const { data: articles, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].rpc('get_articles_without_embeddings');
            if (error) {
                // Fallback: try to create the function
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].rpc('create_get_articles_function').catch(()=>{});
                // Just return an empty result
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    processed: 0,
                    results: [],
                    message: 'No articles to process or function not available'
                });
            }
            if (!articles || articles.length === 0) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    processed: 0,
                    results: [],
                    message: 'All articles already have embeddings'
                });
            }
            const results = [];
            for (const article of articles){
                try {
                    const textToEmbed = `${article.title}\n\n${article.summary || ''}\n\n${article.content || ''}`;
                    const embedding = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$embeddings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateEmbedding"])(textToEmbed);
                    // Store using RPC function
                    await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].rpc('update_article_embedding', {
                        article_id: article.id,
                        embedding_vector: embedding
                    });
                    results.push({
                        id: article.id,
                        title: article.title,
                        success: true
                    });
                } catch (err) {
                    results.push({
                        id: article.id,
                        title: article.title,
                        success: false,
                        error: String(err)
                    });
                }
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                processed: results.length,
                results
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Invalid action. Use: generate_article, query, or batch_articles'
        }, {
            status: 400
        });
    } catch (error) {
        console.error('Embeddings API error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to generate embeddings',
            details: String(error)
        }, {
            status: 500
        });
    }
}
async function GET() {
    try {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('embedding_stats').select('*');
        if (error) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to fetch stats'
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            stats: data,
            embeddingModel: 'all-MiniLM-L6-v2',
            dimensions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$intranet$2d$iq$2f$src$2f$lib$2f$embeddings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEmbeddingDimensions"])(),
            provider: 'local (transformers.js)'
        });
    } catch (error) {
        console.error('Stats API error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch stats'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__05a7f0e5._.js.map
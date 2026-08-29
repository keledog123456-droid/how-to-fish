# How to Fish 建站施工日志 / SOP 母本

> 项目：How to Fish 游戏攻略 / Wiki 站  
> 域名：howtofish.win  
> 建档日期：2026-08-28  
> 用途：记录第一座网站从选题、研究、搭建、上线到数据验证的真实施工过程。以后以此反推 Game Wiki Starter、大模板、Codex Prompt 库和自动化 SOP。

## 1. 项目立项与关键词判断
先围绕 How to Fish 做关键词和竞争调查，而不是直接写代码。逐渐形成核心判断：**关键词不是产品，解决玩家的问题才是产品。**

以后评估项目要看搜索需求、用户意图、SERP 竞争、可超越性、内容扩展空间和商业化潜力。这将成为未来 SOP 的“项目立项模块”。

## 2. 网站内容结构
网站定位为 How to Fish 游戏资料 / 攻略站，而不是一堆孤立 AI 文章。核心内容结构：
- Fish
- Map
- Walkthrough
- Speedrun

Fish 可继续扩展 Regular、Bosses、Drip 和单个 Creature 详情页。基本信息架构为：**首页 → 分类/数据库页 → 具体详情页**。

## 3. 游戏资料研究与素材库
先研究再让 Codex 写页面。项目已有：
- README.md
- how-to-fish-map-material.md
- how-to-fish-speedrun-material.md
- how-to-fish-fish-material.md
- how-to-fish-walkthrough-material.md

Fish 数据库目前确认 **49 creatures = 38 regular + 11 bosses/minibosses**，并研究了 Rod、Lure、Boss bait、Drip，以及 Lighthouse → Forest → Desert → Rocks → Volcano 的推进关系。Map、Walkthrough、Speedrun 也完成基础研究。

未来可抽象为 **Research Pipeline / 素材生产模块**。

## 4. 参考站页面拆解
研究参考站时不只模仿颜色，而是拆页面组织方式。得到三类核心页面：
1. Home：首页，帮助玩家快速找到“卡在哪里”。
2. List / Database：高密度展示大量内容。
3. Detail：解决一个具体问题。

未来模板雏形：**Home Template + List Template + Detail Template**。

## 5. Codex 搭建网站
技术栈：**Next.js + TypeScript**。

Windows 项目位置：`桌面 > 出海网站 > HOW TO FISH`

网站已经能通过本地开发服务器在 `localhost:3000` 预览。第一次完整经历了：**代码 → Next.js 运行 → 浏览器中的真实网站**。

## 6. 首页完成并锁版
首页经过多轮调整和验收，最终视觉方向：
- 深海 navy 背景
- turquoise / aqua 主强调色
- 暖白文字
- 少量橙色辅助

首页包括 HOW TO FISH FIELD GUIDE、Where are you stuck?、搜索框、Quick Links、Guide Routes、Popular Searches 和顶部导航。

验收后执行重要原则：**首页 LOCKED，后续 Codex 不得因为修改其他页面而随意改动已验收首页。**

未来 SOP 应加入“已验收区域锁定机制”，避免 AI 改厨房时顺手把客厅也装修了。

## 7. Logo / Favicon 品牌资产
最终 Logo：低多边形、瞪大眼睛张嘴的人物 + 鱼 + 鱼钩 + 水面 + 深蓝背景。

已生成/配置：
- favicon.ico
- favicon-16x16.png
- favicon-32x32.png
- apple-touch-icon.png
- android-chrome-192x192.png
- android-chrome-512x512.png
- site.webmanifest

Codex 已将相关资产放入 `public/` 并配置 Next.js metadata。

未来可抽象为 **Brand Assets / 网站品牌资产接入模块**。

## 8. Fish 数据库页
已经完成 `/fish`，包含 Search、ALL、REGULAR、BOSSES、DRIP、密集数据库表格、统计数据和 Quick Answer。

已经实际测试搜索与过滤。例如搜索 Piranha 可以找到 Giant Piranha，并显示 Forest、Leech Bait / Modified Leech 等信息。

这一阶段实现：**结构化数据 → 可搜索 / 可筛选数据库页面**。

## 9. Giant Piranha 详情页
已经完成 `/fish/giant-piranha`，包含 Breadcrumb、Boss 标签、H1 与简介、Location / bait / type、Quick Answer、7 步 Forest quest flow、Story Progression 和 SEO metadata。

网站已经拥有教程要求的三层结构：
**首页 `/` → 列表 `/fish` → 详情 `/fish/giant-piranha`**。

## 10. 第一次真正理解“模板”
检查 `app/components/creature-detail.tsx` 后发现 `CreatureDetail` 已经是可复用 Creature 详情页外壳。

核心理解：
- **Data = 页面装进去的具体内容**
- **Component = 页面长什么样**
- **Dynamic Route = 不同内容共用的网址入口规则**

目前 Giant Piranha 仍然是 `app/fish/giant-piranha/page.tsx`，所以属于“半个模具”：可复用 Component 已有，但尚未完成 `app/fish/[slug]/page.tsx` 动态路由；内容仍主要是 TSX 数据对象，不是真正 MDX。

## 11. 暂时不做“大模板”
曾讨论立即重构为 Game Wiki Starter，但最终决定：**先把 How to Fish 第一站完整跑通，再反向提炼大模板。**

第一站完成后再判断哪些是 How to Fish 专属、哪些所有游戏通用、哪些 Prompt 可固定、哪些步骤可自动化、哪些必须人工判断。

之后再正式做：
**Game Wiki Starter + 建站 SOP + Codex Prompt 库 + 自动化流水线**。

## 12. 域名采购
结合批量建站真实案例，策略调整为：**实验站优先控制固定成本，不因为 .com 的心理高级感而无条件多花钱。**

在 Spaceship 实际比较过 howtofishhub、htfguide、howtofishplay，以及 .com、.wiki、.games、.fish、.guide、.stream、.link、.win 等。

最终购买：**howtofish.win**

购买时看到：
- 首年约 US$4.18
- 续费约 US$5.18 / 年

选择逻辑：完整保留 How to Fish、短、.win 与游戏语境可以成立、首年和续费成本低、适合第一站验证。不是因为 .win 有特殊 SEO 优势。

## 13. Cloudflare 接管域名
`howtofish.win` 已加入 Cloudflare。最初状态 Pending，之后 Nameserver 传播成功，出现绿色勾：
**Your domain is now protected by Cloudflare**

并显示 **DNS Setup: Full**。

当前确认：
- 域名购买：✅
- Cloudflare 添加域名：✅
- Nameserver 接管：✅
- Cloudflare 验证成功：✅
- DNS 指向最终网站：⏳ 尚未配置

重要理解：
**Nameserver = 告诉互联网“这个域名由谁负责管理 DNS”。**
**DNS Record = 告诉互联网“这个域名具体应该去哪个服务器 / 网站”。**

目前故意没有乱填 DNS。正确顺序：
**先确定网站部署位置 → 部署平台给出域名连接要求 → 再回 Cloudflare 配置 DNS。**

# 当前施工位置
**选项目 → 关键词判断 → 竞品研究 → 内容矩阵 → 游戏资料研究 → 页面架构 → Next.js 建站 → 首页 → Logo → 数据库页 → 详情页 → 可复用 Component → 域名 → Cloudflare →【当前】→ MDX / i18n 核查 → 部署 → DNS → GSC / GA → Sitemap / 索引 → 数据反馈 → 扩页面 → 商业化**

# 尚未完成 / 不能忘记
### MDX
教程要求 Next.js + 多语言 + MDX 写内容。目前 Next.js 已完成，但 Giant Piranha 内容主要还是 TSX 数据对象。**MDX 尚未真正接入。**

### 多语言 i18n
**尚未真正完成，需要检查和实现。**

### 部署与自定义域名
下一阶段：
1. 继续教程部署部分
2. 部署 How to Fish 网站
3. 在部署平台添加 `howtofish.win`
4. 按部署平台要求配置 Cloudflare DNS
5. 确认 `howtofish.win` 可以真正访问网站

### 数据与 SEO 上线闭环
之后继续 GSC、GA、Sitemap、请求索引/检查收录，并观察 Impressions、Position、Clicks、Queries、Pages，根据数据决定补哪些页面。

# 第一站完成后的目标
How to Fish 完整上线并获得第一批真实数据后，正式形成：
- 《游戏站建站 SOP v1.0》
- 《Game Wiki Starter v1.0》
- 固定 Codex Prompt
- Research Pipeline
- 内容 / MDX 生产规则
- QA 检查表
- 部署流程
- 域名 / DNS 流程
- GSC / GA 接入流程
- 自动化流水线

核心原则：
> **大模板不是凭空设计出来，而是从第一座真正盖完、通水、通电、上线并接受真实市场数据检验的网站里拆出来。**

# 更新规则
以后每完成一个重要步骤，就追加到本日志，至少记录：
- 日期
- 做了什么
- 为什么这么做
- 最终结果
- 遇到的坑
- 下次可复用的规则
- 是否应该进入未来 SOP / 大模板

这样 How to Fish 不只是第一座网站，也是未来批量建站生产线的 **母样本**。

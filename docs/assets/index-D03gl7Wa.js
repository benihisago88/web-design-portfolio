(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`en`,`ja`],t={en:{skip:`Skip to selected work`,navLabel:`Main navigation`,work:`WORK`,approach:`APPROACH`,contact:`CONTACT`,language:`Language`,available:`AVAILABLE`,eyebrow:`WEB DESIGNER / WEB DIRECTOR — JAPAN`,heroLead:`I turn complex business needs into clear, useful digital experiences.`,workHeading:`Selected work`,selectedWork:`SELECTED WORK`,concept:`CONCEPT PROJECT`,viewCase:`VIEW CASE`,howIWork:`HOW I WORK`,approachTitle:`Before visual design,<br>build the path to results.`,process:[[`Discover`,`Research the business, audience, and competition to define the problem worth solving.`],[`Structure`,`Organize information and journeys around the decisions users need to make.`],[`Design`,`Translate usability and brand character into a coherent visual system.`],[`Validate`,`Test prototypes and measurement plans, then improve after launch.`]],capabilityHeading:`Capabilities`,endToEnd:`END-TO-END`,capabilities:[`Web Direction`,`UX Strategy`,`Information Architecture`,`UI Design`,`Responsive Design`,`Accessibility`],commonBriefs:`COMMON CLIENT BRIEFS`,upworkReady:`UPWORK-READY`,marketTitle:`Designing beyond launch.`,marketIntro:`My process reflects recurring requirements in current Upwork briefs. I plan not only the interface, but also implementation, measurement, content operations, and handoff.`,demands:[[`Figma → Build`,`Responsive specifications, reusable components, and interaction states prepared for implementation.`,`HTML5 / CSS / JS / Webflow-ready`],[`CMS & Commerce`,`Content models and editor-friendly sections planned for WordPress, Shopify, and Webflow.`,`CMS schema / Shopify-ready / Blocks`],[`CRO & Analytics`,`CTA, form, product, and booking hypotheses mapped to measurable GA4 events.`,`GA4 events / Funnel / A/B hypotheses`],[`Launch Quality`,`SEO, speed, accessibility, and cross-device QA treated as launch requirements.`,`WCAG / Core Web Vitals / SEO`]],marketNote:`Platform labels describe implementation planning and handoff readiness for concept projects, not completed client deployments.`,contactPrompt:`HAVE A PROJECT IN MIND?`,contactTitle:`Let’s make it<br><em>clear & useful.</em>`,upwork:`CONTACT ON UPWORK`,github:`VIEW GITHUB`,footer:`Concept portfolio — Available worldwide`,allWork:`ALL WORK`,projectOverview:`Project overview`,role:`ROLE`,project:`PROJECT`,year:`YEAR`,selfInitiated:`Self-initiated concept`,conceptNotice:`SELF-INITIATED CONCEPT / NOT CLIENT WORK`,challengeLabel:`THE CHALLENGE`,challengeTitle:`Challenge`,responseLabel:`THE RESPONSE`,responseTitle:`Response`,responsiveSystem:`RESPONSIVE UI SYSTEM`,responsiveTitle:`A visual rhythm that<br>supports decisions.`,responsiveBody:`Content density, spacing, and CTA priority are restructured for each device. Responsive design is treated as a change in reading order, not simple scaling.`,getStarted:`GET STARTED`,designTargets:`DESIGN TARGETS`,targetDisclaimer:`Because this is a concept project, these are validation targets, not reported client results.`,deliverables:`DELIVERABLES`,colorSystem:`COLOR SYSTEM`,productionPlan:`PRODUCTION PLAN`,implementationReady:`IMPLEMENTATION-READY`,productionTitle:`Handoff designed<br>beyond the mockup.`,platform:`PLATFORM`,buildSystem:`BUILD SYSTEM`,growthData:`GROWTH & DATA`,handoff:`HANDOFF`,productionNote:`This is an implementation plan for a self-initiated concept, not a claim of a live client deployment.`,imageCreditHeading:`Image credit`,imageCredit:`Photo from`,imageLicense:`used under the Pexels License.`,nextCase:`NEXT CASE`,nextProjectLabel:`Next case study`,backToIndex:`BACK TO INDEX`,imageAlt:e=>`Concept visual for ${e}`,pageTitle:`KENCIH — Web Designer & Director`,pageDescription:`KENCIH NAKANO is a web designer and web director working across strategy, UX, responsive UI, CMS planning, and launch quality.`},ja:{skip:`制作事例へ移動`,navLabel:`メインナビゲーション`,work:`作品`,approach:`進め方`,contact:`連絡`,language:`言語`,available:`対応可能`,eyebrow:`WEB DESIGNER / WEB DIRECTOR — JAPAN`,heroLead:`複雑な事業課題を、明快で使いやすいデジタル体験へ変換します。`,workHeading:`制作事例`,selectedWork:`制作事例`,concept:`コンセプト案件`,viewCase:`詳細を見る`,howIWork:`進め方`,approachTitle:`見た目の前に、<br>成果への筋道をつくる。`,process:[[`Discover`,`事業、顧客、競合を調査し、本当に解くべき課題を定義します。`],[`Structure`,`ユーザーの判断順序に沿って、情報と導線の骨格をつくります。`],[`Design`,`ブランドの個性と使いやすさを両立する視覚言語へ落とします。`],[`Validate`,`プロトタイプと計測指標で検証し、公開後の改善につなげます。`]],capabilityHeading:`対応できる領域`,endToEnd:`一貫対応`,capabilities:[`Webディレクション`,`UX戦略`,`情報設計`,`UIデザイン`,`レスポンシブ設計`,`アクセシビリティ`],commonBriefs:`よくある依頼内容`,upworkReady:`UPWORK対応`,marketTitle:`公開後まで設計する。`,marketIntro:`直近のUpwork求人で頻出する要件を、制作工程とケーススタディへ反映しています。画面だけでなく、実装・計測・運用・引き継ぎまで設計します。`,demands:[[`Figma → 実装`,`デスクトップ・タブレット・モバイルの仕様、再利用コンポーネント、状態設計まで整理します。`,`HTML5 / CSS / JS / Webflow-ready`],[`CMS & EC`,`WordPress、Shopify、Webflowを想定したコンテンツモデルと編集しやすいセクション設計。`,`CMS schema / Shopify-ready / Blocks`],[`CRO & 分析`,`CTA、フォーム、商品・予約導線を仮説化し、GA4で検証できるイベントまで定義。`,`GA4 events / Funnel / A/B hypotheses`],[`公開品質`,`SEO、速度、アクセシビリティ、端末別QAを公開条件として扱います。`,`WCAG / Core Web Vitals / SEO`]],marketNote:`プラットフォーム表記はコンセプト案件の実装計画と引き継ぎ対応を示すもので、クライアント案件の公開実績を示すものではありません。`,contactPrompt:`プロジェクトのご相談`,contactTitle:`明快で、役立つものを<br><em>一緒につくる。</em>`,upwork:`UPWORKで連絡`,github:`GITHUBを見る`,footer:`コンセプトポートフォリオ — 世界各地に対応`,allWork:`作品一覧`,projectOverview:`プロジェクト概要`,role:`役割`,project:`案件`,year:`制作年`,selfInitiated:`自主制作コンセプト`,conceptNotice:`自主制作コンセプト / クライアント案件ではありません`,challengeLabel:`課題の背景`,challengeTitle:`課題`,responseLabel:`設計方針`,responseTitle:`設計`,responsiveSystem:`レスポンシブUIシステム`,responsiveTitle:`判断を前に進める<br>画面のリズム。`,responsiveBody:`情報量、余白、CTAの優先度をデバイスごとに再構成。単なる縮小ではなく、利用状況に合わせて読む順序を設計しています。`,getStarted:`はじめる`,designTargets:`設計目標`,targetDisclaimer:`架空案件のため、以下は実績値ではなく検証対象として設定した目標値です。`,deliverables:`制作範囲`,colorSystem:`カラーシステム`,productionPlan:`実装計画`,implementationReady:`実装・引き継ぎ対応`,productionTitle:`デザインで終わらせない<br>引き継ぎ設計。`,platform:`プラットフォーム`,buildSystem:`実装システム`,growthData:`計測・成長`,handoff:`引き継ぎ`,productionNote:`自主制作コンセプトの実装計画であり、稼働中のクライアント案件を示すものではありません。`,imageCreditHeading:`画像クレジット`,imageCredit:`写真:`,imageLicense:`Pexelsライセンスに基づき使用。`,nextCase:`次の作品`,nextProjectLabel:`次の制作事例`,backToIndex:`一覧へ戻る`,imageAlt:e=>`${e}のコンセプトビジュアル`,pageTitle:`KENCIH — Webデザイナー / Webディレクター`,pageDescription:`KENCIH NAKANOのWebデザイン・Webディレクションポートフォリオ。戦略、UX、レスポンシブUI、CMS設計、公開品質まで対応します。`}},n=[{id:`flow`,index:`01`,title:`Flowbase`,type:{en:`B2B SaaS / Product website`,ja:`B2B SaaS / プロダクトサイト`},role:{en:`Strategy, UX, UI`,ja:`戦略、UX、UI`},image:`./images/flow-saas.webp`,color:`#d8ff5f`,statement:{en:`A three-minute path to understanding a complex operations platform.`,ja:`複雑な業務管理を、3分で理解できる導入体験へ。`},challenge:{en:`Feature-heavy SaaS products often make it difficult for first-time visitors to identify what is relevant to their role. The site needed to advance evaluation without relying on a sales presentation.`,ja:`機能が多く、初見ユーザーが自分向けの価値を見つけにくい状態を想定。営業資料に頼らず、サイト単体で比較検討を前に進める必要がありました。`},solution:{en:`I structured entry points by industry, navigation around business problems, and progressive feature disclosure. Pricing, onboarding, and security were connected to the demo path to reduce uncertainty.`,ja:`業種別の入口、課題起点のナビゲーション、段階的な機能説明を設計。デモ予約までの心理的負担を下げるため、料金・導入工程・セキュリティ情報を同一導線に統合しました。`},targets:{en:[`Demo requests +28%`,`Bounce rate -18%`,`Sales explanation time -20%`],ja:[`デモ予約率 +28%`,`直帰率 -18%`,`営業説明時間 -20%`]},deliverables:{en:[`Competitive audit`,`Information architecture`,`Wireframes`,`UI design`,`Measurement plan`],ja:[`競合調査`,`情報設計`,`ワイヤーフレーム`,`UIデザイン`,`計測設計`]},production:{platform:`Webflow-ready`,build:{en:`Figma components / CMS collections / responsive specs`,ja:`Figmaコンポーネント / CMSコレクション / レスポンシブ仕様`},growth:{en:`GA4 demo events / SEO schema / Core Web Vitals budget`,ja:`GA4デモイベント / SEO構造化データ / Core Web Vitals予算`},handoff:{en:`Named components / interaction notes / QA checklist`,ja:`命名済みコンポーネント / 操作仕様 / QAチェックリスト`}},palette:[`#10130d`,`#d8ff5f`,`#f3f1e9`],source:`https://www.pexels.com/photo/person-using-a-laptop-6802042/`},{id:`nagi`,index:`02`,title:`NAGI`,type:{en:`Boutique hotel / Booking`,ja:`ブティックホテル / 予約`},role:{en:`Brand direction, UX, UI`,ja:`ブランドディレクション、UX、UI`},image:`./images/nagi-hotel.webp`,color:`#ff6b42`,statement:{en:`Booking stillness: a coastal stay shaped as a brand experience.`,ja:`静けさを予約する。海辺の宿のブランド体験。`},challenge:{en:`Hotel booking experiences easily collapse into price comparison. The challenge was to communicate the value of the stay beyond amenities and create a reason to book directly.`,ja:`価格比較に流れやすい宿泊予約で、設備情報だけでは伝わらない滞在価値を可視化し、公式予約を選ぶ理由をつくる課題です。`},solution:{en:`I organized the experience as a day-in-the-life narrative. Rooms, dining, and local activities become one stay plan, while date search remains consistently available throughout the journey.`,ja:`時間帯で変わる過ごし方を物語として構成。部屋・食事・周辺体験を一つの滞在プランとして見せ、日程検索を常に操作できる予約導線を設計しました。`},targets:{en:[`Direct bookings +15pt`,`Room-detail visits +35%`,`Mobile exits -22%`],ja:[`公式予約比率 +15pt`,`客室詳細到達 +35%`,`モバイル離脱 -22%`]},deliverables:{en:[`Brand framing`,`Customer journey`,`Content strategy`,`UI design`,`Booking flow`],ja:[`ブランド整理`,`カスタマージャーニー`,`コンテンツ設計`,`UIデザイン`,`予約導線`]},production:{platform:`WordPress-ready`,build:{en:`Reusable Gutenberg blocks / booking integration map`,ja:`再利用可能なGutenbergブロック / 予約連携設計`},growth:{en:`Search intent pages / booking funnel events / image budget`,ja:`検索意図別ページ / 予約ファネル計測 / 画像容量予算`},handoff:{en:`Block rules / content model / editor guide`,ja:`ブロック運用ルール / コンテンツモデル / 編集ガイド`}},palette:[`#24333a`,`#ff6b42`,`#ebe2d4`],source:`https://www.pexels.com/photo/resort-with-swimming-pool-261102/`},{id:`kissa`,index:`03`,title:`KISSA 04`,type:{en:`Coffee roaster / E-commerce`,ja:`コーヒーロースター / EC`},role:{en:`Art direction, E-commerce design`,ja:`アートディレクション、ECデザイン`},image:`./images/kissa-coffee.webp`,color:`#3b63ff`,statement:{en:`A coffee shop that makes differences in taste easy to understand.`,ja:`味の違いがわかる、迷わないコーヒー選び。`},challenge:{en:`Specialty coffee stores often rely on language that beginners cannot use to compare products, leaving packaging and price to drive the decision.`,ja:`専門用語が多いコーヒーECで、初心者が商品差を理解できず、価格やパッケージだけで選んでしまう状態を想定しました。`},solution:{en:`Product cards compare acidity, body, and aroma on intuitive scales. A usage-based finder supports discovery, followed by a contextual subscription upsell.`,ja:`酸味・コク・香りを直感的なスケールで比較できる商品カードを設計。飲む場面から選ぶ診断と、定期便への自然なアップセルを組み込みました。`},targets:{en:[`Product-detail visits +32%`,`Subscriptions +18%`,`Cart abandonment -12%`],ja:[`商品詳細遷移 +32%`,`定期便選択 +18%`,`カート離脱 -12%`]},deliverables:{en:[`Product taxonomy`,`Purchase flow`,`Art direction`,`UI design`,`E-commerce optimization`],ja:[`商品分類`,`購入フロー`,`アートディレクション`,`UIデザイン`,`EC改善案`]},production:{platform:`Shopify-ready`,build:{en:`Theme sections / product variants / cart flow`,ja:`テーマセクション / 商品バリエーション / カート導線`},growth:{en:`CRO hypotheses / GA4 ecommerce events / product SEO`,ja:`CRO仮説 / GA4 ECイベント / 商品SEO`},handoff:{en:`Section settings / Liquid notes / merchandising guide`,ja:`セクション設定 / Liquid仕様 / 商品運用ガイド`}},palette:[`#f3c44b`,`#3b63ff`,`#391f17`],source:`https://www.pexels.com/photo/close-up-of-coffee-cup-on-table-302899/`},{id:`michi`,index:`04`,title:`MICHI Clinic`,type:{en:`Healthcare / Service website`,ja:`ヘルスケア / サービスサイト`},role:{en:`Research, UX, Accessibility`,ja:`調査、UX、アクセシビリティ`},image:`./images/michi-clinic.webp`,color:`#79d7b4`,statement:{en:`A healthcare website designed for confident booking under stress.`,ja:`不安なときほど、迷わず予約できる医療サイト。`},challenge:{en:`People need to understand services, costs, and appointment options quickly even when they feel unwell. The experience also has to work across a wide range of ages and abilities.`,ja:`体調が悪い状況でも診療内容、費用、受診方法をすぐ判断でき、幅広い年齢層が無理なく操作できることが重要です。`},solution:{en:`Information can be explored by symptom, specialty, or consultation type. Text sizing, contrast, keyboard access, and error states are treated as WCAG 2.2 AA design requirements.`,ja:`症状・診療科・受診方法の3方向から探せる情報設計に再編。文字サイズ、コントラスト、キーボード操作を含むWCAG 2.2 AA準拠を設計条件にしました。`},targets:{en:[`Booking completion +24%`,`Phone inquiries -18%`,`Primary journeys at AA`],ja:[`予約完了率 +24%`,`電話問い合わせ -18%`,`主要導線 AA準拠`]},deliverables:{en:[`User research`,`Information architecture`,`Accessibility`,`Prototype`,`Operations guide`],ja:[`ユーザー調査`,`情報設計`,`アクセシビリティ`,`プロトタイプ`,`運用ガイド`]},production:{platform:`CMS-ready`,build:{en:`Accessible form states / reusable service templates`,ja:`アクセシブルなフォーム状態 / 再利用可能な診療テンプレート`},growth:{en:`Local SEO structure / form events / performance budget`,ja:`ローカルSEO構造 / フォーム計測 / パフォーマンス予算`},handoff:{en:`WCAG checklist / content rules / error-state specs`,ja:`WCAGチェックリスト / コンテンツ規則 / エラー状態仕様`}},palette:[`#173d35`,`#79d7b4`,`#fffaf0`],source:`https://www.pexels.com/photo/a-doctor-talking-to-a-patient-5452201/`},{id:`machi`,index:`05`,title:`MACHI/MA`,type:{en:`Design festival / Campaign`,ja:`デザインフェスティバル / キャンペーン`},role:{en:`Creative direction, Web direction`,ja:`クリエイティブディレクション、Webディレクション`},image:`./images/machi-festival.webp`,color:`#ffdf00`,statement:{en:`Turning a walk through the city into the event itself.`,ja:`街を歩くこと自体が、イベントになる。`},challenge:{en:`With venues distributed across a neighborhood, visitors need to discover relevant programs and build a realistic route for the day.`,ja:`会場が街中に分散するイベントで、来場者が興味に合う企画を発見し、当日の回遊計画まで立てられる体験が必要でした。`},solution:{en:`A saved-plan experience connects the map and schedule. Venue capacity, travel time, and current location inform a practical personal itinerary.`,ja:`地図とタイムテーブルを横断するお気に入り機能を中心に設計。会場の混雑・移動時間・現在地を考慮したマイプラン体験を提案しました。`},targets:{en:[`Program saves 40%`,`Venues visited +1.6`,`Social traffic +30%`],ja:[`企画保存率 40%`,`回遊会場数 +1.6`,`SNS流入 +30%`]},deliverables:{en:[`Experience strategy`,`Sitemap`,`Creative direction`,`UI design`,`Operations plan`],ja:[`企画設計`,`サイトマップ`,`クリエイティブ監修`,`UIデザイン`,`運用設計`]},production:{platform:`Headless CMS-ready`,build:{en:`Event collections / filters / reusable schedule cards`,ja:`イベントコレクション / 絞り込み / 再利用可能な日程カード`},growth:{en:`Campaign UTM plan / share events / technical SEO`,ja:`キャンペーンUTM設計 / シェアイベント / テクニカルSEO`},handoff:{en:`Content schema / component states / release checklist`,ja:`コンテンツスキーマ / コンポーネント状態 / 公開チェックリスト`}},palette:[`#191919`,`#ffdf00`,`#f0472e`],source:`https://www.pexels.com/photo/people-at-concert-1190297/`}],r=document.querySelector(`#app`),i=a();function a(){let t=new URLSearchParams(location.search).get(`lang`);if(e.includes(t))return t;let n;try{n=localStorage.getItem(`portfolio-language`)}catch{n=null}return e.includes(n)?n:`en`}function o(e){return typeof e==`object`&&e&&!Array.isArray(e)?e[i]:e}function s({lang:e=i,projectId:t,anchor:n}={}){let r=new URLSearchParams;return r.set(`lang`,e),t&&r.set(`case`,t),`?${r.toString()}${n?`#${n}`:``}`}function c(){return`
    <div class="language-switch" role="group" aria-label="${t[i].language}">
      ${e.map(e=>`
        <button type="button" data-language="${e}" aria-pressed="${i===e}">
          ${e.toUpperCase()}
        </button>`).join(``)}
    </div>`}function l(e){let n=t[i];return`
    <article class="project-card reveal" style="--accent:${e.color}">
      <a href="${s({projectId:e.id})}" class="project-link" data-route>
        <div class="project-image">
          <img src="${e.image}" alt="" loading="lazy">
          <span class="project-number">${e.index}</span>
          <span class="concept-label">${n.concept}</span>
          <span class="view-label">${n.viewCase} <span>↗</span></span>
        </div>
        <div class="project-meta">
          <div>
            <p>${o(e.type)}</p>
            <h3 lang="en">${e.title}</h3>
          </div>
          <p class="statement">${o(e.statement)}</p>
        </div>
      </a>
    </article>`}function u(e=!1){let n=t[i];return`
    <header class="site-header${e?` detail-header`:``}">
      <a class="brand" href="${s()}" data-route>KENCIH<span>®</span></a>
      ${e?`
        <a class="back-link" href="${s()}" data-route>← ${n.allWork}</a>
      `:`
        <nav aria-label="${n.navLabel}">
          <a href="${s({anchor:`work`})}" data-route>${n.work}</a>
          <a href="${s({anchor:`approach`})}" data-route>${n.approach}</a>
          <a href="${s({anchor:`contact`})}" data-route>${n.contact}</a>
        </nav>
        <span class="availability" role="status"><i aria-hidden="true"></i> ${n.available}</span>
      `}
      ${c()}
    </header>`}function d(){let e=t[i];return`
    <a class="skip-link" href="#work">${e.skip}</a>
    ${u()}
    <main>
      <section class="hero">
        <p class="eyebrow reveal" lang="en">${e.eyebrow}</p>
        <h1 class="reveal" lang="en">Structure the <em>why.</em><br>Design the <span>next.</span></h1>
        <div class="hero-bottom reveal">
          <p>${e.heroLead}</p>
          <a href="#work" class="round-link" aria-label="${e.skip}">↓</a>
        </div>
      </section>
      <section id="work" class="work-section">
        <h2 class="sr-only">${e.workHeading}</h2>
        <div class="section-heading">
          <p>${e.selectedWork}</p>
          <p>2025—2026</p>
        </div>
        <div class="project-grid">${n.map(l).join(``)}</div>
      </section>
      <section id="approach" class="approach">
        <div class="section-heading"><p>${e.howIWork}</p><p>01—04</p></div>
        <h2>${e.approachTitle}</h2>
        <div class="process-grid">
          ${e.process.map(([e,t],n)=>`
            <article><b>0${n+1}</b><h3>${e}</h3><p>${t}</p></article>`).join(``)}
        </div>
      </section>
      <section class="capabilities">
        <h2 class="sr-only">${e.capabilityHeading}</h2>
        <div class="section-heading"><p>${e.capabilityHeading}</p><p>${e.endToEnd}</p></div>
        <div class="cap-list">${e.capabilities.map(e=>`<span>${e}</span>`).join(``)}</div>
      </section>
      <section class="market-fit" aria-labelledby="market-fit-title">
        <div class="section-heading"><p>${e.commonBriefs}</p><p>${e.upworkReady}</p></div>
        <div class="market-intro">
          <h2 id="market-fit-title">${e.marketTitle}</h2>
          <p>${e.marketIntro}</p>
        </div>
        <div class="demand-grid">
          ${e.demands.map(([e,t,n],r)=>`
            <article><span>0${r+1}</span><h3>${e}</h3><p>${t}</p><b lang="en">${n}</b></article>`).join(``)}
        </div>
        <p class="market-note">${e.marketNote}</p>
      </section>
      <section id="contact" class="contact">
        <p>${e.contactPrompt}</p>
        <h2>${e.contactTitle}</h2>
        <div class="contact-links">
          <a href="https://www.upwork.com/" target="_blank" rel="noreferrer">${e.upwork} <span>↗</span></a>
          <a href="https://github.com/benihisago88" target="_blank" rel="noreferrer">${e.github} <span>↗</span></a>
        </div>
      </section>
    </main>
    <footer><p>KENCIH NAKANO © 2026</p><p>${e.footer}</p></footer>`}function f(e){let n=t[i];return`
    ${u(!0)}
    <main class="case">
      <section class="case-hero" style="--accent:${e.color}">
        <p>${e.index} / 05 — ${o(e.type)}</p>
        <span class="case-concept">${n.conceptNotice}</span>
        <h1 lang="en">${e.title}</h1>
        <p class="case-lead">${o(e.statement)}</p>
        <img src="${e.image}" alt="${n.imageAlt(e.title)}">
      </section>
      <section class="case-facts">
        <h2 class="sr-only">${n.projectOverview}</h2>
        <div><span>${n.role}</span><p>${o(e.role)}</p></div>
        <div><span>${n.project}</span><p>${n.selfInitiated}</p></div>
        <div><span>${n.year}</span><p>2026</p></div>
      </section>
      <section class="case-story">
        <div><span>${n.challengeLabel}</span><h2>${n.challengeTitle}</h2></div>
        <p>${o(e.challenge)}</p>
        <div><span>${n.responseLabel}</span><h2>${n.responseTitle}</h2></div>
        <p>${o(e.solution)}</p>
      </section>
      <section class="ui-showcase" style="--accent:${e.color}">
        <div class="ui-copy">
          <span>${n.responsiveSystem}</span>
          <h2>${n.responsiveTitle}</h2>
          <p>${n.responsiveBody}</p>
        </div>
        <div class="device-stage" aria-hidden="true">
          <div class="desktop-frame">
            <div class="browser-bar"><i></i><i></i><i></i></div>
            <div class="mock-nav"><b>${e.title}</b><span>ABOUT　SERVICE　CONTACT</span></div>
            <div class="mock-hero">
              <div><small>${o(e.type)}</small><strong>${o(e.statement)}</strong><span class="mock-button">${n.getStarted} →</span></div>
              <img src="${e.image}" alt="">
            </div>
            <div class="mock-cards"><i></i><i></i><i></i></div>
          </div>
          <div class="mobile-frame">
            <div class="mobile-top"><b>${e.title}</b><span>≡</span></div>
            <img src="${e.image}" alt="">
            <strong>${o(e.statement)}</strong>
            <span class="mock-button">${n.getStarted} →</span>
            <div class="mobile-lines"><i></i><i></i><i></i></div>
          </div>
        </div>
      </section>
      <section class="case-board" style="--accent:${e.color}">
        <h2 class="sr-only">${n.designTargets} / ${n.deliverables}</h2>
        <div>
          <span>${n.designTargets}</span>
          <p class="disclaimer">${n.targetDisclaimer}</p>
          ${o(e.targets).map(e=>`<strong>${e}</strong>`).join(``)}
        </div>
        <div>
          <span>${n.deliverables}</span>
          <ol>${o(e.deliverables).map(e=>`<li>${e}</li>`).join(``)}</ol>
        </div>
        <div class="palette">
          <span>${n.colorSystem}</span>
          <div>${e.palette.map(e=>`<i style="background:${e}" title="${e}"></i>`).join(``)}</div>
        </div>
      </section>
      <section class="production-plan">
        <div class="section-heading"><p>${n.productionPlan}</p><p>${n.implementationReady}</p></div>
        <h2>${n.productionTitle}</h2>
        <div class="production-grid">
          <article><span>${n.platform}</span><strong lang="en">${e.production.platform}</strong></article>
          <article><span>${n.buildSystem}</span><p>${o(e.production.build)}</p></article>
          <article><span>${n.growthData}</span><p>${o(e.production.growth)}</p></article>
          <article><span>${n.handoff}</span><p>${o(e.production.handoff)}</p></article>
        </div>
        <p class="production-note">${n.productionNote}</p>
      </section>
      <section class="case-credit">
        <h2 class="sr-only">${n.imageCreditHeading}</h2>
        <p>${n.imageCreditHeading}</p>
        <p>${n.imageCredit} <a href="${e.source}" target="_blank" rel="noreferrer">Pexels ↗</a>, ${n.imageLicense}</p>
      </section>
      <nav class="next-project" aria-label="${n.nextProjectLabel}">
        ${p(e)}
      </nav>
    </main>
    <footer><p>KENCIH NAKANO © 2026</p><a href="${s()}" data-route>${n.backToIndex} ↑</a></footer>`}function p(e){let r=t[i],a=n[(n.indexOf(e)+1)%n.length];return`<a href="${s({projectId:a.id})}" data-route><span>${r.nextCase}</span><strong lang="en">${a.title}</strong><i>→</i></a>`}function m(){let e=new URLSearchParams(location.search).get(`case`);return n.find(t=>t.id===e)}function h(e,t){let n=t?`link[rel="${e}"][hreflang="${t}"]`:`link[rel="${e}"]:not([hreflang])`,r=document.head.querySelector(n);return r||(r=document.createElement(`link`),r.rel=e,t&&(r.hreflang=t),document.head.append(r)),r}function g(n){let r=t[i],a=n?`${n.title} — KENCIH Portfolio`:r.pageTitle,c=n?`${o(n.statement)} ${r.pageDescription}`:r.pageDescription,l=new URL(s({projectId:n?.id}),location.href).href;document.documentElement.lang=i,document.title=a,document.querySelector(`meta[name="description"]`).content=c,document.querySelector(`meta[property="og:title"]`).content=a,document.querySelector(`meta[property="og:description"]`).content=c,document.querySelector(`meta[property="og:locale"]`).content=i===`en`?`en_US`:`ja_JP`,h(`canonical`).href=l,e.forEach(e=>{h(`alternate`,e).href=new URL(s({lang:e,projectId:n?.id}),location.href).href}),h(`alternate`,`x-default`).href=new URL(s({lang:`en`,projectId:n?.id}),location.href).href}function _({scrollToTop:e=!0}={}){let t=new URL(location.href);t.searchParams.set(`lang`,i);let n=m();t.searchParams.has(`case`)&&!n&&t.searchParams.delete(`case`),t.href!==location.href&&history.replaceState({},``,t),r.innerHTML=n?f(n):d(),g(n),e&&window.scrollTo({top:0,behavior:`instant`}),b()}function v(t){if(!e.includes(t)||t===i)return;let n=window.scrollY;i=t;try{localStorage.setItem(`portfolio-language`,i)}catch{}let r=new URL(location.href);r.searchParams.set(`lang`,i),history.replaceState({},``,r),_({scrollToTop:!1}),requestAnimationFrame(()=>window.scrollTo({top:n,behavior:`instant`}))}function y(e){let t=new URL(e,location.href);history.pushState({},``,t),i=a(),_(),t.hash&&requestAnimationFrame(()=>document.querySelector(t.hash)?.scrollIntoView())}function b(){let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`is-visible`)})},{threshold:.12});document.querySelectorAll(`.reveal`).forEach(t=>e.observe(t))}r.addEventListener(`click`,e=>{let t=e.target.closest(`[data-language]`);if(t){v(t.dataset.language);return}let n=e.target.closest(`[data-route]`);n&&(e.preventDefault(),y(n.href))}),window.addEventListener(`popstate`,()=>{i=a(),_()}),_();
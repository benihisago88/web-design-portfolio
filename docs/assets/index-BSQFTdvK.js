(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`flow`,index:`01`,title:`Flowbase`,type:`B2B SaaS / Product website`,role:`Strategy, UX, UI`,image:`./images/flow-saas.webp`,color:`#d8ff5f`,statement:`複雑な業務管理を、3分で理解できる導入体験へ。`,challenge:`機能が多く、初見ユーザーが自分向けの価値を見つけにくい状態を想定。営業資料に頼らず、サイト単体で比較検討を前に進める必要がありました。`,solution:`業種別の入口、課題起点のナビゲーション、段階的な機能説明を設計。デモ予約までの心理的負担を下げるため、料金・導入工程・セキュリティ情報を同一導線に統合しました。`,targets:[`デモ予約率 +28%`,`直帰率 -18%`,`営業説明時間 -20%`],deliverables:[`競合調査`,`情報設計`,`ワイヤーフレーム`,`UIデザイン`,`計測設計`],production:{platform:`Webflow-ready`,build:`Figma components / CMS collections / responsive specs`,growth:`GA4 demo events / SEO schema / Core Web Vitals budget`,handoff:`Named components / interaction notes / QA checklist`},palette:[`#10130d`,`#d8ff5f`,`#f3f1e9`],source:`https://www.pexels.com/photo/person-using-a-laptop-6802042/`},{id:`nagi`,index:`02`,title:`NAGI`,type:`Boutique hotel / Booking`,role:`Brand direction, UX, UI`,image:`./images/nagi-hotel.webp`,color:`#ff6b42`,statement:`静けさを予約する。海辺の宿のブランド体験。`,challenge:`価格比較に流れやすい宿泊予約で、設備情報だけでは伝わらない滞在価値を可視化し、公式予約を選ぶ理由をつくる課題です。`,solution:`時間帯で変わる過ごし方を物語として構成。部屋・食事・周辺体験を一つの滞在プランとして見せ、日程検索を常に操作できる予約導線を設計しました。`,targets:[`公式予約比率 +15pt`,`客室詳細到達 +35%`,`モバイル離脱 -22%`],deliverables:[`ブランド整理`,`カスタマージャーニー`,`コンテンツ設計`,`UIデザイン`,`予約導線`],production:{platform:`WordPress-ready`,build:`Reusable Gutenberg blocks / booking integration map`,growth:`Search intent pages / booking funnel events / image budget`,handoff:`Block rules / content model / editor guide`},palette:[`#24333a`,`#ff6b42`,`#ebe2d4`],source:`https://www.pexels.com/photo/resort-with-swimming-pool-261102/`},{id:`kissa`,index:`03`,title:`KISSA 04`,type:`Coffee roaster / E-commerce`,role:`Art direction, EC design`,image:`./images/kissa-coffee.webp`,color:`#3b63ff`,statement:`味の違いがわかる、迷わないコーヒー選び。`,challenge:`専門用語が多いコーヒーECで、初心者が商品差を理解できず、価格やパッケージだけで選んでしまう状態を想定しました。`,solution:`酸味・コク・香りを直感的なスケールで比較できる商品カードを設計。飲む場面から選ぶ診断と、定期便への自然なアップセルを組み込みました。`,targets:[`商品詳細遷移 +32%`,`定期便選択 +18%`,`カート離脱 -12%`],deliverables:[`商品分類`,`購入フロー`,`アートディレクション`,`UIデザイン`,`EC改善案`],production:{platform:`Shopify-ready`,build:`Theme sections / product variants / cart flow`,growth:`CRO hypotheses / GA4 ecommerce events / product SEO`,handoff:`Section settings / Liquid notes / merchandising guide`},palette:[`#f3c44b`,`#3b63ff`,`#391f17`],source:`https://www.pexels.com/photo/close-up-of-coffee-cup-on-table-302899/`},{id:`michi`,index:`04`,title:`MICHI Clinic`,type:`Healthcare / Service website`,role:`Research, UX, Accessibility`,image:`./images/michi-clinic.webp`,color:`#79d7b4`,statement:`不安なときほど、迷わず予約できる医療サイト。`,challenge:`体調が悪い状況でも診療内容、費用、受診方法をすぐ判断でき、幅広い年齢層が無理なく操作できることが重要です。`,solution:`症状・診療科・受診方法の3方向から探せる情報設計に再編。文字サイズ、コントラスト、キーボード操作を含むWCAG 2.2 AA準拠を設計条件にしました。`,targets:[`予約完了率 +24%`,`電話問い合わせ -18%`,`主要導線 AA準拠`],deliverables:[`ユーザー調査`,`情報設計`,`アクセシビリティ`,`プロトタイプ`,`運用ガイド`],production:{platform:`CMS-ready`,build:`Accessible form states / reusable service templates`,growth:`Local SEO structure / form events / performance budget`,handoff:`WCAG checklist / content rules / error-state specs`},palette:[`#173d35`,`#79d7b4`,`#fffaf0`],source:`https://www.pexels.com/photo/a-doctor-talking-to-a-patient-5452201/`},{id:`machi`,index:`05`,title:`MACHI/MA`,type:`Design festival / Campaign`,role:`Creative direction, Web direction`,image:`./images/machi-festival.webp`,color:`#ffdf00`,statement:`街を歩くこと自体が、イベントになる。`,challenge:`会場が街中に分散するイベントで、来場者が興味に合う企画を発見し、当日の回遊計画まで立てられる体験が必要でした。`,solution:`地図とタイムテーブルを横断するお気に入り機能を中心に設計。会場の混雑・移動時間・現在地を考慮したマイプラン体験を提案しました。`,targets:[`企画保存率 40%`,`回遊会場数 +1.6`,`SNS流入 +30%`],deliverables:[`企画設計`,`サイトマップ`,`クリエイティブ監修`,`UIデザイン`,`運用設計`],production:{platform:`Headless CMS-ready`,build:`Event collections / filters / reusable schedule cards`,growth:`Campaign UTM plan / share events / technical SEO`,handoff:`Content schema / component states / release checklist`},palette:[`#191919`,`#ffdf00`,`#f0472e`],source:`https://www.pexels.com/photo/people-at-concert-1190297/`}],t=document.querySelector(`#app`);function n(e){return`
    <article class="project-card reveal" style="--accent:${e.color}">
      <a href="#${e.id}" class="project-link">
        <div class="project-image">
          <img src="${e.image}" alt="" loading="lazy">
          <span class="project-number">${e.index}</span>
          <span class="concept-label">CONCEPT PROJECT</span>
          <span class="view-label">VIEW CASE <span>↗</span></span>
        </div>
        <div class="project-meta">
          <div>
            <p>${e.type}</p>
            <h3>${e.title}</h3>
          </div>
          <p class="statement">${e.statement}</p>
        </div>
      </a>
    </article>`}function r(){return`
    <a class="skip-link" href="#work">作品へ移動</a>
    <header class="site-header">
      <a class="brand" href="#">KENCIH<span>®</span></a>
      <nav aria-label="メインナビゲーション">
        <a href="#work">WORK</a>
        <a href="#approach">APPROACH</a>
        <a href="#contact">CONTACT</a>
      </nav>
      <span class="availability" role="status"><i aria-hidden="true"></i> AVAILABLE</span>
    </header>
    <main>
      <section class="hero">
        <p class="eyebrow reveal">WEB DESIGNER / WEB DIRECTOR — JAPAN</p>
        <h1 class="reveal">Structure the <em>why.</em><br>Design the <span>next.</span></h1>
        <div class="hero-bottom reveal">
          <p>課題を整理し、迷いのない体験へ。<br>戦略からUIまで一貫して設計します。</p>
          <a href="#work" class="round-link" aria-label="作品を見る">↓</a>
        </div>
      </section>
      <section id="work" class="work-section">
        <h2 class="sr-only">制作事例</h2>
        <div class="section-heading">
          <p>SELECTED WORK</p>
          <p>2025—2026</p>
        </div>
        <div class="project-grid">${e.map(n).join(``)}</div>
      </section>
      <section id="approach" class="approach">
        <div class="section-heading"><p>HOW I WORK</p><p>01—04</p></div>
        <h2>見た目の前に、<br>成果への筋道をつくる。</h2>
        <div class="process-grid">
          <article><b>01</b><h3>Discover</h3><p>事業、顧客、競合を調査し、本当に解くべき課題を定義します。</p></article>
          <article><b>02</b><h3>Structure</h3><p>ユーザーの判断順序に沿って、情報と導線の骨格をつくります。</p></article>
          <article><b>03</b><h3>Design</h3><p>ブランドの個性と使いやすさを両立する視覚言語へ落とします。</p></article>
          <article><b>04</b><h3>Validate</h3><p>プロトタイプと計測指標で検証し、公開後の改善につなげます。</p></article>
        </div>
      </section>
      <section class="capabilities">
        <h2 class="sr-only">対応できる領域</h2>
        <div class="section-heading"><p>CAPABILITIES</p><p>END-TO-END</p></div>
        <div class="cap-list">
          <span>Web Direction</span><span>UX Strategy</span><span>Information Architecture</span>
          <span>UI Design</span><span>Responsive Design</span><span>Accessibility</span>
        </div>
      </section>
      <section class="market-fit" aria-labelledby="market-fit-title">
        <div class="section-heading"><p>COMMON CLIENT BRIEFS</p><p>UPWORK-READY</p></div>
        <div class="market-intro">
          <h2 id="market-fit-title">依頼される仕事を、<br>公開後まで設計する。</h2>
          <p>直近のUpwork求人で頻出する要件を、制作工程とケーススタディへ反映しています。ツール名だけでなく、実装・計測・運用まで渡せる形を重視します。</p>
        </div>
        <div class="demand-grid">
          <article><span>01</span><h3>Figma → Build</h3><p>Desktop・tablet・mobileの仕様、再利用コンポーネント、状態設計まで実装可能な形で整理。</p><b>HTML5 / CSS / JS / Webflow-ready</b></article>
          <article><span>02</span><h3>CMS & Commerce</h3><p>WordPress、Shopify、Webflowを想定したコンテンツモデルと編集しやすいセクション設計。</p><b>CMS schema / Shopify-ready / Blocks</b></article>
          <article><span>03</span><h3>CRO & Analytics</h3><p>CTA、フォーム、商品・予約導線を仮説化し、GA4で検証できるイベントまで定義。</p><b>GA4 events / Funnel / A/B hypotheses</b></article>
          <article><span>04</span><h3>Launch Quality</h3><p>SEO、速度、アクセシビリティ、端末別QAを公開条件として扱い、検証結果を残します。</p><b>WCAG / Core Web Vitals / SEO</b></article>
        </div>
        <p class="market-note">Platform labels indicate implementation planning and handoff readiness for concept projects, not completed client deployments on those platforms.</p>
      </section>
      <section id="contact" class="contact">
        <p>HAVE A PROJECT IN MIND?</p>
        <h2>Let’s make it<br><em>clear & useful.</em></h2>
        <div class="contact-links">
          <a href="https://www.upwork.com/" target="_blank" rel="noreferrer">CONTACT ON UPWORK <span>↗</span></a>
          <a href="https://github.com/benihisago88" target="_blank" rel="noreferrer">VIEW GITHUB <span>↗</span></a>
        </div>
      </section>
    </main>
    <footer><p>KENCIH NAKANO © 2026</p><p>Concept portfolio — Available worldwide</p></footer>`}function i(e){return`
    <header class="site-header detail-header">
      <a class="brand" href="#">KENCIH<span>®</span></a>
      <a class="back-link" href="#">← ALL WORK</a>
    </header>
    <main class="case">
      <section class="case-hero" style="--accent:${e.color}">
        <p>${e.index} / 05 — ${e.type}</p>
        <span class="case-concept">SELF-INITIATED CONCEPT / NOT CLIENT WORK</span>
        <h1>${e.title}</h1>
        <p class="case-lead">${e.statement}</p>
        <img src="${e.image}" alt="${e.title}のコンセプトビジュアル">
      </section>
      <section class="case-facts">
        <h2 class="sr-only">プロジェクト概要</h2>
        <div><span>ROLE</span><p>${e.role}</p></div>
        <div><span>PROJECT</span><p>Self-initiated concept</p></div>
        <div><span>YEAR</span><p>2026</p></div>
      </section>
      <section class="case-story">
        <div><span>THE CHALLENGE</span><h2>課題</h2></div>
        <p>${e.challenge}</p>
        <div><span>THE RESPONSE</span><h2>設計</h2></div>
        <p>${e.solution}</p>
      </section>
      <section class="ui-showcase" style="--accent:${e.color}">
        <div class="ui-copy">
          <span>RESPONSIVE UI SYSTEM</span>
          <h2>判断を前に進める<br>画面のリズム。</h2>
          <p>情報量、余白、CTAの優先度をデバイスごとに再構成。単なる縮小ではなく、利用状況に合わせて読む順序を設計しています。</p>
        </div>
        <div class="device-stage">
          <div class="desktop-frame">
            <div class="browser-bar"><i></i><i></i><i></i></div>
            <div class="mock-nav"><b>${e.title}</b><span>ABOUT　SERVICE　CONTACT</span></div>
            <div class="mock-hero">
              <div><small>${e.type}</small><strong>${e.statement}</strong><span class="mock-button">GET STARTED →</span></div>
              <img src="${e.image}" alt="">
            </div>
            <div class="mock-cards"><i></i><i></i><i></i></div>
          </div>
          <div class="mobile-frame">
            <div class="mobile-top"><b>${e.title}</b><span>≡</span></div>
            <img src="${e.image}" alt="">
            <strong>${e.statement}</strong>
            <span class="mock-button">GET STARTED →</span>
            <div class="mobile-lines"><i></i><i></i><i></i></div>
          </div>
        </div>
      </section>
      <section class="case-board" style="--accent:${e.color}">
        <h2 class="sr-only">設計目標と制作範囲</h2>
        <div>
          <span>DESIGN TARGETS</span>
          <p class="disclaimer">架空案件のため、以下は実績値ではなく検証対象として設定した目標値です。</p>
          ${e.targets.map(e=>`<strong>${e}</strong>`).join(``)}
        </div>
        <div>
          <span>DELIVERABLES</span>
          <ol>${e.deliverables.map(e=>`<li>${e}</li>`).join(``)}</ol>
        </div>
        <div class="palette">
          <span>COLOR SYSTEM</span>
          <div>${e.palette.map(e=>`<i style="background:${e}" title="${e}"></i>`).join(``)}</div>
        </div>
      </section>
      <section class="production-plan">
        <div class="section-heading"><p>PRODUCTION PLAN</p><p>IMPLEMENTATION-READY</p></div>
        <h2>デザインで終わらせない<br>引き継ぎ設計。</h2>
        <div class="production-grid">
          <article><span>PLATFORM</span><strong>${e.production.platform}</strong></article>
          <article><span>BUILD SYSTEM</span><p>${e.production.build}</p></article>
          <article><span>GROWTH & DATA</span><p>${e.production.growth}</p></article>
          <article><span>HANDOFF</span><p>${e.production.handoff}</p></article>
        </div>
        <p class="production-note">This is an implementation plan for a self-initiated concept, not a claim of a live client deployment.</p>
      </section>
      <section class="case-credit">
        <h2 class="sr-only">画像クレジット</h2>
        <p>IMAGE CREDIT</p>
        <p>Photo from <a href="${e.source}" target="_blank" rel="noreferrer">Pexels ↗</a>, used under the Pexels License.</p>
      </section>
      <nav class="next-project" aria-label="次の作品">
        ${a(e)}
      </nav>
    </main>
    <footer><p>KENCIH NAKANO © 2026</p><a href="#">BACK TO INDEX ↑</a></footer>`}function a(t){let n=e[(e.indexOf(t)+1)%e.length];return`<a href="#${n.id}"><span>NEXT CASE</span><strong>${n.title}</strong><i>→</i></a>`}function o(){let n=location.hash.slice(1),a=e.find(e=>e.id===n);t.innerHTML=a?i(a):r(),document.title=a?`${a.title} — KENCIH Portfolio`:`KENCIH — Web Designer & Director`,window.scrollTo({top:0,behavior:`instant`}),s()}function s(){let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`is-visible`)})},{threshold:.12});document.querySelectorAll(`.reveal`).forEach(t=>e.observe(t))}window.addEventListener(`hashchange`,o),o();
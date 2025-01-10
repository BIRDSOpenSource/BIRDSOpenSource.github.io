---
title: はじめに
layout: ホーム
permalink: "/"
lang: jp
---

# はじめに
{: .no_toc }.

{: .caution }
私たちはこのリソースを可能な限り包括的なものにしようとしていますが、仕事を始める際に参照すべきリソースは決してこれだけではありません。

- 目次
{:toc}

## **1. はじめに
   九州工業大学（九工大）のリーン衛星企業・軌道上実験研究室で開発されたBIRDSプログラ ムは、宇宙開発および新興宇宙開発国の教育機会を促進することに重点を置いたグローバルイ ニシアティブを体現するものである。ミッションの成功を確実にするためには、衛星の各サブシステムに対して厳密な試験と検証プロセスが不可欠です。

   本ガイドは、BIRDS バスのサブシステム試験文書の使用方法を包括的に理解し、チームメンバーや協力者が信頼性の高いサブシステム性能を実現するための標準化された手順に従うことができるようにすることを目的としています。

   本書は、オンボードコンピュータ（OBC）、電力システム（EPS）、姿勢決定制御システム（ADCS）、通信（COM）、BIRDS衛星の構造部品などのサブシステムの試験プロセスおよび手順ガイドを使用する目的、構造、実践的な手順を概説しています。


### We are creating an environment for sharing knowledge and ideas.
{: .no_toc }
### 私たちは知識とアイデアを共有する環境を作っています。
{: .no_toc }.
オープンソースサテライトプラットフォームを、低コストで高キャパビリティの衛星ミッションの次の段階を進めるための手段として利用することで、次世代のミッションクリエイターやエンドユーザーを刺激するような情報への関心やアクセスを高めたいと考えています。

独自のオープンソース衛星ミッションの作成を支援するため、私たちは、ミッションの開始から終了までの全ライフタイムをカバーするリソースのライブラリを構築しています。

このソリューションの開発を支援するために、birds-project.comコミュニティに貢献したり、コミュニティと協力したりしたい場合は、[Github上の私たちのDiscussionsチャンネル] に貢献するか、[私たちと連絡を取ってください。]

## **2. 衛星のフェーズとは**
  衛星の開発と配備には、ミッションの成功を確実にするために、慎重に構成された一連のフェーズが含まれます。最初のコンセプトの議論から最終的な打ち上げ前の検証まで、これらのフェーズは、厳しい宇宙業界の基準を満たすために、衛星の設計、製造、試験を通してチームを導きます。
    
  各フェーズは、要求が満たされ、潜在的なリスクが軽減されていることを確認するためのチェックポイントとして機能します。ミッション定義レビュー（MDR）、予備設計レビュー（PDR）、クリティカル・デザイン・レビュー（CDR）、フライト・モデル・テスト（FMT）などの各フェーズを理解することは、衛星チームが衛星エンジニアリングの複雑さを管理し、ミッション目標を達成する可能性を高めるために不可欠です。

[![](https://mermaid.ink/img/pako:eNqNVU2PmzAQ_SuWDz3BCkPIB7dts6kqFbXaVQ-tuFh4QqyCTW2TNo32v3eApOySsLu5xGZmnt97M5gjzbUAmlDf9zOVa7WVRZIpQtwOKkiIAp2pLlZw5VwbwZh0JZAH7qAspQOSyhKs0wpsHxcY2WhTcUfId_z5aeqv133MQu6kxmUqrW0XeGYOtSMC9lDqGkSfl67v2z-SVGdwj-RGOo_w0CNhwGZ-wPww8MjsVHFLHLc_sYKzIYHFHlmJ50cPxHu9jeHdcwFWFqrP5UqjA-YE2fIYEAlp8UegZzk1P5SaixMY4oizsgqU6_YO9UhV9PVfTzqvCY3OOkI_GnSOqSWDGS2ziI2YvW_sUwoT-tC2rcMHnbuLEcSdKqQCMMiaVDgvJZHKQXHy7d1zRR8mO3cW87RrV4ic01jY6mHhZPus3rrf3MClvE36IoXID1ZvohBEnaXLEYVNKYude92KF5DDeScuHiF_NLrBEbEH66AaBBrYy3a8XmsejkkUXDRP-E77d6fJm4QYvMH3h0UjlC819Bp5SeqSt1IN7IAby8s3QM6uNHJj4FcDKj_ge6iNkKr38NPt_bdpxGFK42hyMLAtcg_mQJwmn3mj8h2pjd5LAeZ1rmzuXVDtQaZrWTBl1ws140PW0ta6s5N6tAK8P6XAm_nYZmW0u5AzmuBSwJY3pctoph4xlTdOPxxUThNnGvAojlCxo8mWlxZ3Td1ex2vJcUar_09BSKdN2t_93SfAozVXNDnSPzRhLL5ZzIJluFzF82AWLpYePdAEtzcsXsyiKF7NozAOHz36V2tEZV31j27dknj8B6oH7-0?type=png)](https://mermaid.live/edit#pako:eNqNVU2PmzAQ_SuWDz3BCkPIB7dts6kqFbXaVQ-tuFh4QqyCTW2TNo32v3eApOySsLu5xGZmnt97M5gjzbUAmlDf9zOVa7WVRZIpQtwOKkiIAp2pLlZw5VwbwZh0JZAH7qAspQOSyhKs0wpsHxcY2WhTcUfId_z5aeqv133MQu6kxmUqrW0XeGYOtSMC9lDqGkSfl67v2z-SVGdwj-RGOo_w0CNhwGZ-wPww8MjsVHFLHLc_sYKzIYHFHlmJ50cPxHu9jeHdcwFWFqrP5UqjA-YE2fIYEAlp8UegZzk1P5SaixMY4oizsgqU6_YO9UhV9PVfTzqvCY3OOkI_GnSOqSWDGS2ziI2YvW_sUwoT-tC2rcMHnbuLEcSdKqQCMMiaVDgvJZHKQXHy7d1zRR8mO3cW87RrV4ic01jY6mHhZPus3rrf3MClvE36IoXID1ZvohBEnaXLEYVNKYude92KF5DDeScuHiF_NLrBEbEH66AaBBrYy3a8XmsejkkUXDRP-E77d6fJm4QYvMH3h0UjlC819Bp5SeqSt1IN7IAby8s3QM6uNHJj4FcDKj_ge6iNkKr38NPt_bdpxGFK42hyMLAtcg_mQJwmn3mj8h2pjd5LAeZ1rmzuXVDtQaZrWTBl1ws140PW0ta6s5N6tAK8P6XAm_nYZmW0u5AzmuBSwJY3pctoph4xlTdOPxxUThNnGvAojlCxo8mWlxZ3Td1ex2vJcUar_09BSKdN2t_93SfAozVXNDnSPzRhLL5ZzIJluFzF82AWLpYePdAEtzcsXsyiKF7NozAOHz36V2tEZV31j27dknj8B6oH7-0)


### *ミッション定義レビュー（MDR）*
- ミッション定義レビュー（Mission Definition Review）は、衛星ミッションの主要目的と実現可能性を評価する初期段階である。ミッションコンセプトが利害関係者の目標に合致し、基本的な実現可能性の基準を満たしていることを確認する。
- **主な活動**
  - 要件定義 科学的データ収集、地球観測、通信など、ミッションの主な目的の設定。
  - コンセプト分析 様々なミッション・コンセプトを評価し、最も実行可能 なものを選択する。
  - 予備予算策定 初期コストの見積もりと必要なリソースを概説する。
  - リスク評価 潜在的な高レベルのリスクと課題を特定する。
- **成果 成果**：設計段階に進むための承認。MDRの成果は、初期のハイレベル要件とともに明確に定義されたミッションスコープである。

### *予備設計審査（PDR）*
- 予備設計審査（Preliminary Design Review: PDR）は、衛星の予備設計がミッションの要求と目的を満たしているかどうかを評価する重要なチェックポイントである。より詳細な設計作業に進む前に、基本的な設計アプローチが健全であることを確認する。
- **主な活動**
  - **サブシステム設計の概要**： OBC、EPS、ADCS、COM、ペイロード、構造などの主要サブシステムの初期設計計画を提示する。
  - **予備回路図**： 予備回路図、メカニカルレイアウト、ソフトウェアアーキテクチャを示す。
  - **インターフェース定義**: 異なるサブシステムがどのように相互作用し、統合されるかを概説する。
  - **検証計画**： 各要件が後のフェーズでどのようにテストされ、検証されるかの計画を立案する。
- **成果**：詳細設計と更なる開発に移行するための承認。PDRが成功すれば、プロジェクトチームは設計を洗練させ、深化させるための青信号を得る。

### *クリティカル・デザイン・レビュー(CDR)*
- クリティカル・デザイン・レビュー（Critical Design Review）とは、生産・組立に移行する前の最終設計を詳細に評価することである。その目的は、詳細設計がすべてのミッション要件を満たし、製造可能で試験可能であることを検証することである。
- **主な活動**
  - **詳細設計プレゼンテーション**： 詳細図面、CADモデル、回路レイアウト、ソフトウェア実装を披露する。
  - **コンプライアンスチェック**： 設計が業界標準、規制要件、社内仕様に準拠していることを確認する。
  - **リスク軽減計画**： 更新されたリスク登録とコンティンジェンシープランをレビューする。
  - **製造準備**： 製造施設、サプライチェーン、組立工程の準備状況を評価する。
- **成果 結果**：製造・統合段階に進むための承認。CDRの成功は、設計が最終とみなされ、チームがコンポーネントの製造と組み立てを開始できることを意味する。

### *フライトモデル試験（FM）*
- フライトモデルテストは、フライトモデル（FM）と呼ばれる実際の衛星が、宇宙環境をシミュレートした条件下で、その性能を検証するための一連の厳しいテストを受ける段階である。打ち上げ前の最終確認となる。
- **主な活動**
  - **機能試験**： 各サブシステムおよび衛星全体が期待通りに機能することを検証する。
  - **環境試験**
    - **熱真空（TVAC）試験**： 衛星が宇宙の極端な温度と真空状態に耐えられることを確認する。
    - **振動試験** 打上げ振動に耐えられることを確認するため、打上げ条件下での構造的完全性を試験する。
    - **電磁両立性（EMC）試験**： 衛星の電子システムが互いに干渉せず、通信規格に準拠していることを確認する。
  - **展開試験**： アンテナ、ソーラーパネル、その他の可動部品が適切に配置されていることを確認する。
- **成果** 衛星が打上げ準備完了であることを確認する。この段階で不具合が発生した場合、問題が解決され、衛星がすべての運用基準を満たすまで、再設計、手直し、追加試験が必要となる場合がある。

### **結論**
{: .no_toc }.
これらのフェーズは、概念化から打ち上げまでの構造化された経路を作り出し、各レビューとテスト段階が重要なチェックポイントとして機能する。ミッション定義レビュー（Mission Definition Review）**ではスコープを設定し、予備設計レビュー（Preliminary Design Review）**では初期設計の実現可能性をチェックし、重要設計レビュー（Critical Design Review）**では詳細設計を最終決定し、飛行モデル試験（Flight Model Testing）**では衛星がロバストでミッションに対応できることを確認する。この構造化されたアプローチは、リスクを軽減し、品質を確保し、ミッションを成功に導くのに役立つ。

## **3. BIRDSバスには何が含まれるか？**
- バスには以下の主要コンポーネントが含まれる：
     - **オンボード・コンピュータ（OBC）**： 衛星のコアコンピューティングのニーズを処理する。
     - **電力システム（EPS）**： 発電、蓄電、配電を管理する。
     - **姿勢決定制御システム（ADCS）**：衛星の姿勢と安定性を制御する： 衛星の姿勢と安定性を制御する。
     - **通信（COM）**： 衛星とのデータ通信を統括する。
     - **構造**： 衛星の物理フレームを設計・構築する。
     - **ペイロード（Payload）**： ミッションに特化した機器やセンサーの管理。
     - **バックプレーン（BPB）**： バックプレーン（BPB）**：全てのサブシステムを統合し、各サブシステムへの電力とデータの伝送を可能にする。

## *組織図*
{: .no_toc }
[![](https://mermaid.ink/img/pako:eNp1kTtrwzAURv_KRVMK8ZD0BR4K8YP05cbgbrIH1bq2BbYUZIkSovz3qmkIbXE0Sd85izh7UiuOJCRNrz7rjmkD70kpwZ8VLZjBvhcGKwiCB4hma62s5FBgO6A0Vxe8eFZsWY3_tPjIEpqzXa8Yr36vKc2YkBDZ8TQnx9llOHyghjsHa5qJcRRKBotJ5d7B41lZnpT0j7Jw8EQLo21trMZJZengmcabbBJeO3ihqyQuJumNg1ea5tPw1kFGN1F8Cb7RKI8qMicD6oEJ7nvsv9WSmA4HLEnorxwbZntTklIevMqsUcVO1iT0X8I58WnajoQN60f_slvuoySCtZoN5xW5MEpnP8WP4Q9f4pycZg?type=png)](https://mermaid.live/edit#pako:eNp1kTtrwzAURv_KRVMK8ZD0BR4K8YP05cbgbrIH1bq2BbYUZIkSovz3qmkIbXE0Sd85izh7UiuOJCRNrz7rjmkD70kpwZ8VLZjBvhcGKwiCB4hma62s5FBgO6A0Vxe8eFZsWY3_tPjIEpqzXa8Yr36vKc2YkBDZ8TQnx9llOHyghjsHa5qJcRRKBotJ5d7B41lZnpT0j7Jw8EQLo21trMZJZengmcabbBJeO3ihqyQuJumNg1ea5tPw1kFGN1F8Cb7RKI8qMicD6oEJ7nvsv9WSmA4HLEnorxwbZntTklIevMqsUcVO1iT0X8I58WnajoQN60f_slvuoySCtZoN5xW5MEpnP8WP4Q9f4pycZg)


## **3. 開発にはどのようなツールを使っていますか？**
   - ソフトウェア
     - **設計用コンピュータ支援設計（CAD）ツール**： Fusion 360
     - **シミュレーションツール シミュレーション・ツール**： サーマル・デスクトップ、ミッション解析用STK
     - **プログラミング言語**： C/C++, Python 
     - **プログラミング環境**： CCS Compiler, MPLAB IDE
     - **通信プロトコル**： UART、SPI
   - ハードウェア
     - **マイクロコントローラー/ボード**： PIC MCU、カスタムPCB
     - **電源システム**： ソーラーパネル、バッテリーパック
     - **感知装置**： 磁力計、ADCS用ジャイロスコープ
   - **バージョン管理**： Git/ [GitHub] 

## **4. スタートステップ**
1. **ドキュメントを読む**：
   - 詳細なガイドやサブシステムの概要については、[プロジェクトのドキュメントサイトリンク]をご覧ください。
2. **プロジェクト・リポジトリにアクセスする：
   - リンク**： [GitHub/GitLabのリンクを挿入]。
   - クローンする方法**： git clone [リポジトリリンク]` を実行します。
3. **開発環境のセットアップ**：
   - ソフトウェアの場合
     - 必要なIDEやソフトウェア、例えばVisual Studio CodeやKeil uVisionなどをインストールする。
     - クローンを作成し、関連するプロジェクト・ディレクトリに移動します。
   - ハードウェアの場合
     - ラボ施設またはプロトタイピングステーションへのアクセスに関する詳細。
4. **Join Communication Channels**：
   - メインチャンネル**： メインチャンネル**： [例：Slack、Discord リンク] 4.
   - サブシステムグループ**： [例えば、EPSチームのSlackチャンネル].


## **5. プロジェクトのワークフローとガイドライン**
   - 開発プロセス**： [例えば、アジャイルワークフローの記述、スプリントプランニング]。
   - タスクの割り当て**： タスクのトラッキングには[ツール、例：Jira、Trello]を使用する。
   - コード貢献ガイドライン**：
     - 貢献ガイドへのリンクに概説されているプロジェクトの標準をコードが満たしていることを確認してください。
     - プルリクエストを[ブランチ、例えば `develop` ブランチ]に提出し、レビューを受けてください。
   - テスト手順**：
     - 各サブシステムには、[テストドキュメントへのリンク] にあるテストプロトコルがあります。
   - ドキュメント**：
     - ドキュメントフォルダへのリンクにあるテンプレートに従ってください。

## **6. 規格とコンプライアンス**
   - 業界標準**：
     - 例：キューブサット設計仕様書、NASA 標準への準拠を確保すること。
   - 安全性と品質保証**：
     - QA ガイドへのリンクの品質保証計画に従う。
   - 規制ガイドライン**：
     - 規制ガイドライン**：打上げ提供者の要件と国内/国際宇宙規制に留意すること。

## **8. よくある質問**
   - プロジェクトに参加するには？
     - 連絡先[該当するEメール/連絡先リンク]にご連絡ください。
   - プロジェクトのタイムラインはどこで確認できますか？
     - プロジェクトのロードマップを見る [ガントチャートまたはスケジュールへのリンク]。
   - どのように私は問題やバグを報告するのですか？
     - [GitHub Issues.]を使用してください。

----

[GitHub Issues.]: https://github.com/BIRDSOpenSource/Build-A-Satellite/issues
[GitHub]: https://github.com/BIRDSOpenSource

[Github上の私たちのDiscussionsチャンネル]: https://github.com/orgs/BIRDSOpenSource/discussions/categories/ideas
[私たちと連絡を取ってください]: info@kyutech-laseine.net
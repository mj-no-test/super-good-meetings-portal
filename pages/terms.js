import Head from "next/head";
import Link from "next/link";
import styles from "./styles/policy.module.scss";

import Layout from "../components/layout";

export default function Terms() {
  return (
    <>
      <Head>
        <title>利用規約 - SuperGoodMeetings</title>
      </Head>
      <Layout>
        <div className={styles.policy}>
          <nav>
            <ul>
              <li>
                <Link href="/privacy">プライバシーポリシー</Link>
              </li>
              <li className={styles.active}>
                <Link href="/terms">利用規約</Link>
              </li>
              <li>
                <Link href="/law">特定商取引法に基づく表示</Link>
              </li>
              <li>
                <Link href="/security">セキュリティホワイトペーパー</Link>
              </li>
            </ul>
          </nav>

          <h1>利用規約</h1>
          <p>
            本利用規約（以下「本規約」と言います。）には、本サービスの提供条件及び運営者と登録ユーザーの皆様との間の権利義務関係が定められています。本サービスの利用に際しては、本規約の全文をお読みいただいたうえで、本規約に同意いただく必要があります。
          </p>

          <dl>
            <dt>第1条（適用）</dt>
            <dd>
              <dl>
                <dd>
                  本規約は、本サービスの提供条件及び本サービスの利用に関する運営者と登録ユーザーとの間の権利義務関係を定めることを目的とし、登録ユーザーと運営者との間の本サービスの利用に関わる一切の関係に適用されます。
                </dd>
                <dd>
                  本規約の内容と、前項のルールその他の本規約外における本サービスの説明等とが異なる場合は、本規約の規定が優先して適用されるものとします。
                </dd>
              </dl>
            </dd>
            <dt>第2条（定義）</dt>
            <dd>
              本規約において使用する以下の用語は、各々以下に定める意味を有するものとします。
              <dl className={styles.parentheses}>
                <dt>
                  「サービス利用契約」とは、本規約及び運営者と登録ユーザーの間で締結する、本サービスの利用契約を意味します。
                </dt>
                <dt>
                  「知的財産権」とは、著作権、特許権、実用新案権、意匠権、商標権その他の知的財産権（それらの権利を取得し、またはそれらの権利につき登録等を出願する権利を含みます。）を意味します。
                </dt>
                <dt>
                  「ユーザーデータ」とは、登録ユーザーが本サービス上に送信する情報（文章、画像、動画その他のデータを含みますがこれらに限りません。）を意味します。
                </dt>
                <dt>
                  「運営者」とは、本サービスを運営する株式会社コパイロツトを意味します。
                </dt>
                <dt>
                  「運営者ウェブサイト」とは、そのドメインが「https://supergoodmeetings.com」「https://sgms.app」である、運営者が運営するウェブサイト（理由の如何を問わず、運営者のウェブサイトのドメインまたは内容が変更された場合は、当該変更後のウェブサイトを含みます。）を意味します。
                </dt>
                <dt>
                  「登録ユーザー」とは、第3条（登録）に基づいて本サービスの利用者としての登録がなされた個人または法人を意味します。
                </dt>
                <dt>
                  「オーナーユーザー」とは、登録ユーザーのうち当社からプロジェクトのオーナーとして承認された者をいいます。なお、登録ユーザーが法人の場合の当該法人に帰属する個人を含むものとします。
                </dt>
                <dt>
                  「一般ユーザー」とは、登録ユーザーのうちオーナーユーザー以外の者をいいます。なお、登録ユーザーが法人の場合の当該法人に帰属する個人を含むものとします。
                </dt>
                <dt>
                  「本サービス」とは、運営者が提供するミーティング活用クラウドサービス「SuperGoodMeetings」（理由の如何を問わずサービスの名称または内容が変更された場合は、当該変更後のサービスを含みます。）を意味します。
                </dt>
                <dt>
                  「プロジェクト」とは、登録ユーザーが本サービスを利用して管理・遂行する特定の計画、課題解決をいいます。登録ユーザーは、本サービス上のダッシュボード画面においてプロジェクトを管理・遂行することができます。
                </dt>
                <dt>
                  「有料プラン」とは、本サービスに関し登録ユーザーが月額の利用料金を支払って利用するプランをいいます。有料プランの機能、内容、第6条に定める利用料金及び有効期間等の詳細は運営者が別途定め、登録ユーザーに通知するところに従うものとします。
                </dt>
              </dl>
            </dd>
            <dt>第3条（登録）</dt>
            <dd>
              <dl>
                <dd>
                  本サービスの利用を希望する者（以下「登録希望者」といいます。）は、本規約を遵守することに同意し、かつ運営者の定める一定の情報（以下「登録事項」といいます。）を運営者の定める方法で運営者に提供することにより、運営者に対し、本サービスの利用の登録を申請することができます。登録ユーザーが法人の場合、登録申請手続を行う個人は、当社に対し、当該法人から登録申請手続に必要な権限を付与されていることを保証するものとします。
                </dd>
                <dd>
                  運営者は、運営者の基準に従って、第１項に基づいて登録申請を行った登録希望者（以下「登録申請者」といいます。）の登録の可否を判断し、運営者が登録を認める場合にはその旨を登録申請者に通知します。登録申請者の登録ユーザーとしての登録は、運営者が本項の通知を行ったことをもって完了したものとします。なお、登録申請者が法人の場合、登録申請手続を実際に行う個人は、登録申請者から登録申請手続に関する権限を付与されていることを表明し、これを保証するものとします。
                </dd>
                <dd>
                  前項に定める登録の完了時に、サービス利用契約が登録ユーザーと運営者の間に成立し、登録ユーザーは本サービスを本規約に従い利用することができるようになります。
                </dd>
                <dd>
                  運営者は、登録申請者が、以下の各号のいずれかの事由に該当する場合は、登録及び再登録を拒否することがあり、またその理由について一切開示義務を負いません。
                  <dl className={styles.parentheses}>
                    <dt>
                      運営者に提供した登録事項の全部または一部につき虚偽、誤記または記載漏れがあった場合
                    </dt>
                    <dt>
                      未成年者、成年被後見人、被保佐人または被補助人のいずれかであり、法定代理人、後見人、保佐人または補助人の同意等を得ていなかった場合
                    </dt>
                    <dt>
                      反社会的勢力等（暴力団、暴力団員、右翼団体、反社会的勢力、その他これに準ずる者を意味します。以下同じ。）である、または資金提供その他を通じて反社会的勢力等の維持、運営もしくは経営に協力もしくは関与する等反社会的勢力等との何らかの交流もしくは関与を行っていると運営者が判断した場合
                    </dt>
                    <dt>
                      登録希望者が過去運営者との契約に違反した者またはその関係者であると運営者が判断した場合
                    </dt>
                    <dt>第10条に定める措置を受けたことがある場合</dt>
                    <dt>運営者が登録を適当でないと判断した場合</dt>
                  </dl>
                </dd>
              </dl>
            </dd>
            <dt>第4条（登録事項の変更）</dt>
            <dd>
              登録ユーザーは、登録事項に変更があった場合、運営者の定める方法により当該変更事項を遅滞なく運営者に通知するものとします。
            </dd>
            <dt>
              第5条（パスワード及びユーザーIDの管理並びに本サービスの利用）
            </dt>
            <dd>
              <dl>
                <dd>
                  登録ユーザーは、自己の責任において、本サービスに関するパスワード及びユーザーIDを適切に管理及び保管するものとし、これを第三者に利用させ、または貸与、譲渡、名義変更、売買等をしてはならないものとします。なお、登録ユーザーが法人の場合、登録ユーザーは、オーナーユーザー及び一般ユーザーをして本利用規約に基づき登録ユーザーが負う義務を理解させ、これを遵守させるものとします。
                </dd>
                <dd>
                  パスワードまたはユーザーIDの管理不十分、使用上の過誤、第三者の使用等によって生じた損害に関する責任は登録ユーザーが負うものとし、運営者は一切の責任を負いません。
                </dd>
                <dd>
                  オーナーユーザーは、当社が特に認めた管理者として、一般ユーザーとは異なる以下の権限を有します。一般ユーザーは以下の権限の行使又は不行使につき、当社に対し異議を申し立てることはできません。なお、当社は、以下の権限の内容を変更する場合があり、登録ユーザーはこれに従い、当社に対し異議を申し立てることはできないものとします。
                  <dl className={styles.parentheses}>
                    <dt>プロジェクトに招待された登録ユーザーの除外</dt>
                    <dt>プロジェクトの公開設定の変更</dt>
                    <dt>プロジェクトのアーカイブ及び解除</dt>
                    <dt>プロジェクトの削除 </dt>
                    <dt>プロジェクトオーナーの譲渡申請</dt>
                    <dt>プロジェクトの有料プランを変更</dt>
                    <dt>プロジェクトの支払方法の指定</dt>
                    <dt>プロジェクトの領収書のダウンロード</dt>
                  </dl>
                </dd>
              </dl>
            </dd>
            <dt>第6条（料金及び支払方法）</dt>
            <dd>
              <dl>
                <dd>
                  登録ユーザーは、本サービス利用の対価として、別途運営者が定め、運営者ウェブサイトに表示する対価（有料プランの月額利用料金（以下「月額利用料金」といいます。）を含みますが、運営者が有料オプション等を追加する場合はこれらを含むものとします。以下同じ。）を、運営者が指定する支払方法により運営者に支払うものとします。
                </dd>
                <dd>
                  登録ユーザーが対価の支払を遅滞した場合、当社は、本サービスの全部又は一部の提供を停止又は中断できるほか、登録ユーザーは年3％の割合による遅延損害金を運営者に支払うものとします。
                </dd>
              </dl>
            </dd>
            <dt>第7条（有料プランの申込、変更）</dt>
            <dd>
              <dl>
                <dd>
                  登録ユーザーは、サービス利用契約締結後、いつでも、任意に、当社所定の手続により、有料プランの利用を申し込むことができる（申込が完了した日を「申込日」といいます。）ものとします。この場合の手続は、第3条第1項、第2項及び第3項が準用されるものとします。
                </dd>
                <dd>
                  月額料金は申込日から1ヶ月間を単位（以下「購読期間」といいます。）とし、当社は登録ユーザーに対し、申込日に当購読期間の月額料金を請求します。当社は、当購読期間の末日に翌購読期間の月額料金を請求するものとし、以降は同様とします。
                </dd>
                <dd>
                  有料プランが複数存在する場合、登録ユーザーは、いつでも、任意に、当社所定の手続により、他の有料プランに変更することができる（なお、変更手続を完了した日を「変更日」といいます。）ものとします。
                </dd>
                <dd>
                  前項の場合、登録ユーザーは、変更前及び変更後の有料プランの月額利用料金については変更日を基準とする日割り計算により支払うものとします。当社において返金すべき受領済みの月額利用料金が生じる場合、当社は、別途当社が定める日時、方法により登録ユーザーに返金します。
                </dd>
                <dd>
                  登録ユーザーは有料プランのみを中途解約することができます。この場合、登録ユーザーは、購読期間が満了するまでは引き続き当該有料プランを利用することができ、その後も有料プラン以外の機能につき、本サービスを継続的にご利用いただけます。
                </dd>
                <dd>
                  前項の場合、当該有料プランにかかる月額利用料金につき、当社は返金を一切要しないものとします。
                  予めご了承ください。なお、購読期間中は当該中途解約を取り消すことはできますが、他の有料プランへの変更はできません。
                </dd>
              </dl>
            </dd>
            <dt>第8条（禁止事項）</dt>
            <dd>
              登録ユーザーは、本サービスの利用にあたり、以下の各号のいずれかに該当する行為または該当すると運営者が判断する行為をしてはなりません。
              <dl className={styles.parentheses}>
                <dt>法令に違反する行為または犯罪行為に関連する行為</dt>
                <dt>
                  運営者、本サービスの他の利用者またはその他の第三者に対する詐欺または脅迫行為
                </dt>
                <dt>公序良俗に反する行為</dt>
                <dt>
                  運営者、本サービスの他の利用者またはその他の第三者の知的財産権、肖像権、プライバシーの権利、名誉、その他の権利または利益を侵害する行為
                </dt>
                <dt>
                  本サービスを通じ、以下に該当し、または該当すると運営者が判断する情報を運営者または本サービスの他の利用者に送信すること
                  <dl className={styles.bullet}>
                    <dd>過度に暴力的または残虐な表現を含む情報</dd>
                    <dd>
                      コンピューター・ウィルスその他の有害なコンピューター・プログラムを含む情報
                    </dd>
                    <dd>
                      運営者、本サービスの他の利用者またはその他の第三者の名誉または信用を毀損する表現を含む情報
                    </dd>
                    <dd>過度にわいせつな表現を含む情報</dd>
                    <dd>差別を助長する表現を含む情報</dd>
                    <dd>自殺、自傷行為を助長する表現を含む情報</dd>
                    <dd>薬物の不適切な利用を助長する表現を含む情報</dd>
                    <dd>反社会的な表現を含む情報</dd>
                    <dd>チェーンメール等の第三者への情報の拡散を求める情報</dd>
                    <dd>他人に不快感を与える表現を含む情報</dd>
                    <dd>面識のない異性との出会いを目的とした情報</dd>
                  </dl>
                </dt>
                <dt>
                  本サービスのネットワークまたはシステム等に過度な負荷をかける行為
                </dt>
                <dt>本サービスの運営を妨害するおそれのある行為</dt>
                <dt>
                  運営者のネットワークまたはシステム等に不正にアクセスし、または不正なアクセスを試みる行為
                </dt>
                <dt>第三者に成りすます行為</dt>
                <dt>
                  本サービスの他の利用者のIDまたはパスワードを利用する行為
                </dt>
                <dt>
                  運営者が事前に許諾しない本サービス上での宣伝、広告、勧誘、または営業行為
                </dt>
                <dt>本サービスの他の利用者の情報の収集</dt>
                <dt>
                  運営者、本サービスの他の利用者またはその他の第三者に不利益、損害、不快感を与える行為
                </dt>
                <dt>反社会的勢力等への利益供与</dt>
                <dt>面識のない異性との出会いを目的とした行為</dt>
                <dt>
                  前各号の行為を直接または間接に惹起し、または容易にする行為
                </dt>
                <dt>その他、運営者が不適切と判断する行為</dt>
              </dl>
            </dd>
            <dt>第9条（本サービスの停止等）</dt>
            <dd>
              <dl>
                <dd>
                  運営者は、以下のいずれかに該当する場合には、登録ユーザーに事前に通知することなく、本サービスの全部または一部の提供を停止または中断することができるものとします。
                  <dl className={styles.parentheses}>
                    <dt>
                      本サービスに係るコンピューター・システムの点検または保守作業を緊急に行う場合
                    </dt>
                    <dt>コンピューター、通信回線等が事故により停止した場合</dt>
                    <dt>
                      地震、落雷、火災、風水害、停電、天災地変などの不可抗力により本サービスの運営ができなくなった場合
                    </dt>
                    <dt>その他、運営者が停止または中断を必要と判断した場合</dt>
                  </dl>
                </dd>
                <dd>
                  運営者は、本条に基づき運営者が行った措置に基づき登録ユーザーに生じた損害について一切の責任を負いません。
                </dd>
              </dl>
            </dd>
            <dt>第10条（権利帰属）</dt>
            <dd>
              <dl>
                <dd>
                  運営者ウェブサイト及び本サービスに関する知的財産権は全て運営者または運営者にライセンスを許諾している者に帰属しており、本規約に基づく本サービスの利用許諾は、運営者ウェブサイトまたは本サービスに関する運営者または運営者にライセンスを許諾している者の知的財産権の使用許諾を意味するものではありません。
                </dd>
                <dd>
                  登録ユーザーは、ユーザーデータについて、自らが投稿その他送信することについての適法な権利を有していること、及びユーザーデータが第三者の権利を侵害していないことについて、運営者に対し表明し、保証するものとします。
                </dd>
                <dd>
                  運営者は、ユーザーデータの内容については一切関知せず、またその作成・送信主体となるものではありません。登録ユーザーは、自己の責任においてユーザーデータを本サービスに投稿その他送信するものとします。
                </dd>
                <dd>
                  以下の場合、運営者は、その裁量により、当該ユーザーデータを非公開とし、または削除すること（以下「本措置」といいます。）ができるものとします。この場合、運営者は、当該ユーザーデータを投稿した登録ユーザーに対し、本措置の事前に通知をしたうえ適切な対応を取ることを求めるよう努めますが、当社の義務を構成するものではありません。
                  <dl className={styles.parentheses}>
                    <dt>
                      ユーザーデータが第三者の権利を侵害しているとの通報を受けた場合
                    </dt>
                    <dt>第10条第1項の場合</dt>
                    <dt>
                      その他運営者において本措置を取ることが合理的かつ相当であると判断した場合
                    </dt>
                  </dl>
                </dd>
                <dd>
                  登録ユーザーは、ユーザーデータについて、運営者に対し、世界的、非独占的、無償、撤回不能、サブライセンス可能かつ譲渡可能な閲覧、使用、複製、配布、派生著作物の作成、表示及び実行に関するライセンスを付与します。ただし、運営者は、当該ユーザーデータについては統計的な情報として利活用するほか、サービス及び運営者が提供する他のサービスの提供・維持・改善を目的として利活用するものとし、また、当該ユーザーデータが利用者情報を含む場合、運営者は、第15条に従い適切にこれを取り扱うものとします。
                </dd>
                <dd>
                  登録ユーザーは、運営者及び運営者から権利を承継しまたは許諾された者に対して著作者人格権を行使しないことに同意するものとします。
                </dd>
                <dd>
                  運営者は、本条4項に基づき運営者が行った行為により登録ユーザーに生じた損害について一切の責任を負いません
                </dd>
              </dl>
            </dd>
            <dt>第11条（登録抹消等）</dt>
            <dd>
              <dl>
                <dd>
                  運営者は、登録ユーザーが、以下の各号のいずれかの事由に該当する場合は、事前に通知または催告することなく、ユーザーデータを削除しもしくは当該登録ユーザーについて本サービスの利用を一時的に停止し、または登録ユーザーとしての登録を抹消、もしくはサービス利用契約を解除することができます。
                  <dl className={styles.parentheses}>
                    <dt>
                      本規約のいずれかの条項に違反したと運営者が判断した場合
                    </dt>
                    <dt>登録事項に虚偽の事実があることが判明した場合</dt>
                    <dt>
                      支払停止もしくは支払不能となり、または破産手続開始、民事再生手続開始、会社更生手続開始、特別清算開始もしくはこれらに類する手続の開始の申立てがあった場合
                    </dt>
                    <dt>6ヶ月以上本サービスの利用がない場合</dt>
                    <dt>
                      運営者からの問い合わせその他の回答を求める連絡に対して30日間以上応答がない場合
                    </dt>
                    <dt>第3条第4項各号に該当する場合</dt>
                    <dt>
                      その他、運営者が本サービスの利用、登録ユーザーとしての登録、またはサービス利用契約の継続を適当でないと判断した場合
                    </dt>
                  </dl>
                </dd>
                <dd>
                  前項各号のいずれかの事由に該当した場合、登録ユーザーは、運営者に対して負っている債務の一切について当然に期限の利益を失い、直ちに運営者に対して全ての債務の支払を行わなければなりません。
                </dd>
                <dd>
                  運営者は、本条に基づき運営者が行った行為により登録ユーザーに生じた損害について一切の責任を負いません。
                </dd>
              </dl>
            </dd>
            <dt>第12条（退会等）</dt>
            <dd>
              <dl>
                <dd>
                  登録ユーザーは、運営者所定の方法で運営者に通知することにより、本サービスから退会し、自己の登録ユーザーとしての登録を抹消することができます。登録抹消が完了した場合、登録ユーザーは本サービスのご利用が一切できなくなりますので、ご注意ください。{" "}
                </dd>
                <dd>
                  退会にあたり、運営者に対して負っている債務が有る場合は、登録ユーザーは、運営者に対して負っている債務の一切について当然に期限の利益を失い、直ちに運営者に対して全ての債務の支払を行わなければなりません。
                </dd>
                <dd>
                  退会後の利用者情報の取扱いについては、第15条の規定に従うものとします。
                </dd>
              </dl>
            </dd>
            <dt>第13条（本サービスの内容の変更、終了）</dt>
            <dd>
              <dl>
                <dd>
                  運営者は、運営者の都合により、本サービスの内容を変更し、または提供を終了することができます。運営者が本サービスの提供を終了する場合、運営者は登録ユーザーに事前に通知するものとします。
                </dd>
                <dd>
                  運営者は、本条に基づき運営者が行った措置に基づき登録ユーザーに生じた損害について一切の責任を負いません。
                </dd>
              </dl>
            </dd>
            <dt>第14条（保証の否認及び免責）</dt>
            <dd>
              <dl>
                <dd>
                  運営者は、本サービスを現状有姿で提供します。運営者は、本サービスが登録ユーザーの特定の目的に適合すること、期待する機能・商品的価値・正確性・有用性を有すること、登録ユーザーによる本サービスの利用が登録ユーザーに適用のある法令または業界団体の内部規則等に適合すること、及び不具合が生じないことについて、何ら保証するものではありません。
                </dd>
                <dd>
                  運営者は、運営者による本サービスの提供の中断、停止、終了、利用不能または変更、登録ユーザーが本サービスに送信したメッセージまたは情報の削除または消失、登録ユーザーの登録の抹消、本サービスの利用による登録データの消失または機器の故障もしくは損傷、その他本サービスに関して登録ユーザーが被った損害（以下「ユーザー損害」といいます。）につき、賠償する責任を一切負わないものとします。
                </dd>
                <dd>
                  本サービスまたは運営者ウェブサイトに関連して登録ユーザーと他の登録ユーザーまたは第三者との間において生じた取引、連絡、紛争等については、運営者は一切責任を負いません。
                </dd>
                <dd>
                  本規約の諸規定にかかわらず運営者が何らかの損害賠償責任を負う場合であっても、運営者は、登録ユーザーに発生した通常の損害についてのみ責任を負うものとし、かつ、登録ユーザーが過去12ヶ月内に支払った利用料金の総額を上限とします。ただし、当該損害賠償責任が運営者の故意又は重過失により生じた場合はこの限りではありません。
                </dd>
              </dl>
            </dd>
            <dt>第15条（秘密保持）</dt>
            <dd>
              登録ユーザーは、本サービスに関連して運営者が登録ユーザーに対して秘密に取り扱うことを求めて開示した非公知の情報について、運営者の事前の書面による承諾がある場合を除き、秘密に取り扱うものとします。
            </dd>
            <dt>第16条（利用者情報の取扱い）</dt>
            <dd>
              <dl>
                <dd>
                  運営者による登録ユーザーの利用者情報の取扱いについては、
                  <Link href="/privacy">別途運営者プライバシーポリシー</Link>
                  の定めによるものとし、登録ユーザーはこのプライバシーポリシーに従って運営者が登録ユーザーの利用者情報を取扱うことについて同意するものとします。
                </dd>
                <dd>
                  運営者は、登録ユーザーが運営者に提供した情報、データ等を、個人を特定できない形での統計的な情報として、運営者の裁量で、利用及び公開することができるものとし、登録ユーザーはこれに同意するものとします。
                </dd>
                <dd>
                  登録ユーザーが退会した場合、運営者は、ただちに当該登録ユーザーの利用者情報を削除することができるものとします。本項に基づく運営者の措置及び判断により登録ユーザーに損害又は不利益が生じた場合であっても、運営者はその責任を負わないものとします。
                </dd>
              </dl>
            </dd>
            <dt>第17条（本規約等の変更）</dt>
            <dd>
              <dl>
                <dd>
                  運営者は、その裁量において本規約を変更できるものとします。運営者は、本規約を変更する場合、運営者所定の方法によりした場合には、登録ユーザーに事前に変更の効力発生日及びその内容を周知するものとし、効力発生日の到来をもって本規約は変更され、登録ユーザーと運営者の法律関係に適用されるものとします。
                </dd>
                <dd>
                  前項の周知後、登録ユーザーが本サービスを利用した場合または運営者の定める期間内に登録抹消の手続をとらなかった場合には、登録ユーザーは、本規約の変更に同意したものとみなします。
                </dd>
              </dl>
            </dd>
            <dt>第18条（連絡／通知）</dt>
            <dd>
              本サービスに関する問い合わせその他登録ユーザーから運営者に対する連絡または通知、及び本規約の変更に関する通知その他運営者から登録ユーザーに対する連絡または通知は、運営者の定める方法で行うものとします。
            </dd>
            <dt>第19条（サービス利用契約上の地位の譲渡等)</dt>
            <dd>
              <dl>
                <dd>
                  登録ユーザーは、運営者の書面による事前の承諾なく、サービス利用契約上の地位または本規約に基づく権利もしくは義務につき、第三者に対し、譲渡、移転、担保設定、その他の処分をすることはできません。
                </dd>
                <dd>
                  運営者は本サービスにかかる事業を他社に譲渡した場合には、当該事業譲渡に伴いサービス利用契約上の地位、本規約に基づく権利及び義務並びに登録ユーザーの登録事項その他の顧客情報を当該事業譲渡の譲受人に譲渡することができるものとし、登録ユーザーは、かかる譲渡につき本項において予め同意したものとします。なお、本項に定める事業譲渡には、通常の事業譲渡のみならず、会社分割その他事業が移転するあらゆる場合を含むものとします。
                </dd>
              </dl>
            </dd>
            <dt>第20条（分離可能性）</dt>
            <dd>
              本規約のいずれかの条項またはその一部が、消費者契約法その他の法令等により無効または執行不能と判断された場合であっても、本規約の残りの規定及び一部が無効または執行不能と判断された規定の残りの部分は、継続して完全に効力を有するものとします。
            </dd>
            <dt>第21条（準拠法及び管轄裁判所）</dt>
            <dd>
              <dl>
                <dd>本規約及びサービス利用契約の準拠法は日本法とします。</dd>
                <dd>
                  本規約またはサービス利用契約に起因し、または関連する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                </dd>
              </dl>
            </dd>
          </dl>

          <p className={styles.caption}>2020年9月30日制定</p>
          <p className={styles.caption}>2021年5月31日改定</p>
          <p className={styles.caption}>2021年11月5日改定</p>
        </div>
      </Layout>
      <style jsx>{`
        dl:first-of-type > dd {
          margin-bottom: 8px;
        }
        dl:first-of-type > dd > dl > dd {
          margin-left: 24px;
        }
        @media screen and (max-width: 1000px) {
          dl:first-of-type > dd > dl > dd {
            margin-left: 16px;
          }
        }
        dl:first-of-type > dd > dl {
          counter-reset: number;
          position: relative;
        }
        dl:first-of-type > dd > dl > dd::before {
          position: absolute;
          left: 0;
          counter-increment: number;
          content: counter(number) "　";
        }
      `}</style>
    </>
  );
}

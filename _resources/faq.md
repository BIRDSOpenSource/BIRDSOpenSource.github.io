---
title: FAQ
layout: default
permalink: "/resources/faq"
lang: en
---

# Frequently Asked Questions

Answers to questions we often get about the BIRDS bus and its integration into custom projects


{: .text-purple-100} 
Question | Answer | Reference


{: .label} 
eps 

In designing the mission circuit of the Birds system, what are the conditions for the supplied voltages and signal inputs and outputs? | Depending on the design of the BUS system, the BIRDS satellite can use 3.3 V, 5 V and Battery line for the mission system, while the Battery line voltage will vary between 3.8 V and 4.2 V, depending on the satellite. The maximum current value that can be used by the mission system depends on the design of the satellite. |         |


Does the mission board need an A/D converter for digital output? Is an analogue output of the measurement results sufficient? | In the case of BIRDS, two methods are used: digital data is sent from the Mission system via UART or to the Flash Memory on the OBC board using SPI. |       |

How is the discharge test conducted, and are there other ground tests necessary for the EPS system? | The battery is the most critical component for satellite safety. Testing the battery and verifying the operation of the deployment switch after satellite assembly are key ground tests for the EPS system. However, safety reviews may result in changes, so specific test items need to be confirmed in consultation with JAXA. | Attached are materials summarizing the types and flow of battery tests conducted at Kyushu University.     |


How is the electronic load used in the cell screening test? Should CV mode be used to prevent overcharging above 1.6V? Why does the voltage in the attached graph change above 1.6V when using CV mode?| Battery screening requires an electronic load, multi-range power supply, data acquisition system, LabVIEW-based test control software, and test batteries. The electronic load is used in CC mode during battery discharge and is controlled by LabVIEW software. The program also controls the DC power supply. For NiMH batteries, the -dv/dt method is used to safely end charging, taking 10 minutes to detect full charge and stop.
Screening tests at room temperature in CC mode are recommended. The maximum voltage can be controlled at 1.6V. Conduct charge/discharge tests at a rate of 1C. |   |

In the LabVIEW diagram for the battery screening test of BIRDS-III, the DAQ Assistant was used to control voltage and current values. Was the digital conversion module of the DAQ used?
Instead of using a digital conversion module, I’m considering controlling the electronic load device via VISA communication from LabVIEW. Has this method of control been used at Kyutech?
It is possible. It was done this way in the past. Kikusui's electronic load device was controlled using VISA communication.

What types of batteries were used in the BIRDS-III satellite, and how was their performance monitored?
The BIRDS-III satellite used lithium-ion batteries. The battery performance was monitored in orbit using telemetry data, which included voltage, current, and temperature measurements.



{: .label}
obc


Is it correct to understand that the analogue signal input system (ADC) is not in the OBC? | BIRDS uses digital communication between the Mission and Bus systems. |      |


I would like to know the maximum permissible power on the Birds-3 mission board, and the position of circuits such as temperature, speed and acceleration sensors on the Birds-3 mission board. | The documents should only be used as a reference, as they vary greatly depending on the design of the satellite; page 3 shows the power consumption of each Mission and pages 4 and 5 show the measured power consumption from the satellite in orbit. | See: 4_BIRDS3_Power Budget.pdf

Is it possible to perform eight temperature measurements in the BIRDS-5 FAB? | Yes, the eight terminals are mainly used to measure the panel board temperature in the BIRDS satellite. TEMP1–TEMP6 are on a 50-pin connector, and TEMP7–TEMP8 are on the +Z panel board connector. |     |

How were software updates and patches handled for BIRDS satellites after launch?
Software updates were not possible after launch due to hardware constraints. Therefore, robust testing of the satellite software was performed prior to launch to ensure reliability and minimize potential issues in orbit.


{: .label}
com


For the antenna fixture (a white POM resin part for fixing the antenna), the design will be drawn and processed. Are there any recommended processing companies? | These were likely created in the Kyushu University workshop. Since it is not particularly difficult to process, you can also commission companies that manufacture metal structures. |      |


For the antenna wire, considering placing an order with Osaka Heat Treatment Co., Ltd., should the hole drilling be requested as well, or should it be commissioned to another company? | For BIRDS-4, only materials were purchased, and hole drilling was done in the laboratory. However, this process is labor-intensive and not recommended (wires often break). Osaka Heat Treatment Co., Ltd. likely cannot process the holes. It's better to contact a company specializing in metal structure manufacturing, similar to the antenna fixture. |     |


For the nichrome wire inside the deployment mechanism, is outsourcing necessary for processing it into a coil? Or can the nichrome wire be processed in the university? | Aluminum structures are ordered from HMD. Nichrome wire coil processing does not require outsourcing as the work is relatively simple and can be done in the laboratory.|     |  


What types of antennas were used for communication in the BIRDS project, and what were their specifications?
The BIRDS satellites typically used monopole or dipole antennas for communication in the UHF and VHF frequency bands. Detailed specifications are available in the communications subsystem design document.

{: .label}
adcs

How were the orbital parameters of the BIRDS-III satellites determined after deployment?
The orbital parameters were initially provided by the launch provider. These were then refined using ground station data and TLE data from organizations like NORAD.

Is it possible to know the current location of the BIRDS-III satellite using TLE data?
Yes, you can track the satellite using TLE (Two-Line Element) data. There are free tools available online, such as GPredict and Orbitron, that allow you to input TLE data and calculate the satellite's position.

How were the deorbiting strategies implemented for BIRDS satellites?
The deorbiting strategies relied on natural orbital decay due to atmospheric drag. The satellites were designed with a low orbital altitude to ensure they would re-enter the Earth’s atmosphere and burn up within a few years, complying with international space debris mitigation guidelines.


{: .label}
testing

What were the specific conditions during the thermal-vacuum test for BIRDS-III?
The thermal-vacuum test conditions differ depending on the launch provider and the launch vehicle. It is important to confirm the test conditions with the launch service provider. In the case of BIRDS-III, the test specifications were discussed based on the requirements from ISRO and coordinated accordingly.


What kind of testing was done to ensure that the BIRDS satellites could withstand vibration during launch?
Vibration tests were conducted to simulate the launch environment. These included sine vibration tests, random vibration tests, and shock tests. The tests were performed based on the launch provider's specifications to ensure the satellite could withstand the dynamic loads during launch.


{: .label}
payload

For the camera system used in BIRDS-III, was there a specific manufacturer or a custom-built component?
The camera system was purchased as a ready-made module. For more details on the specifications and performance, refer to the attached documents.

Were there any specific challenges faced during the integration of the payloads into the BIRDS satellites?
Yes, payload integration presented challenges such as managing limited space, ensuring thermal management, and avoiding electromagnetic interference between payloads and other subsystems. Close collaboration between subsystem teams helped resolve these issues.


{: .label}
structure

How was the radiation shielding designed for the electronic components in the BIRDS satellites?
The radiation shielding was achieved primarily by leveraging the structural components of the satellite. In addition, critical electronic components were carefully selected for their radiation tolerance based on available data sheets. For more severe radiation environments, additional shielding can be added using materials like aluminum or tantalum.

What precautions were taken to ensure the thermal stability of the BIRDS-III satellite during its mission?
Thermal stability was achieved by designing the satellite with appropriate thermal coatings, using passive thermal control methods, and conducting thermal simulations. The thermal-vacuum tests also verified the satellite’s ability to maintain thermal stability within operational limits.

What simulation tools were used to analyze the structural integrity of the BIRDS-III satellite?
ANSYS was the primary tool used for structural analysis, including simulations for vibration and thermal loads. In some cases, SolidWorks Simulation was also used for preliminary analysis.


What are the allowable tolerance levels for the structural components of BIRDS-IV?
The allowable tolerances for structural components depend on the requirements of the deployment mechanism and the launch provider's specifications. Detailed information can be found in the structure design documents.


{: .label}
ground station

How was the ground station software for BIRDS-IV developed? Was open-source software used?
The ground station software was custom-developed based on open-source frameworks. Additional functionalities were integrated to meet the specific needs of the BIRDS project.


{: .label}
hardware

Were any commercial-off-the-shelf (COTS) components used in the BIRDS project?
Yes, many components, including the microcontroller, camera modules, and electronic components, were COTS to reduce development time and costs. Each COTS component was carefully evaluated for performance and reliability in the space environment.

{: .label}
lessons learned


What were the main lessons learned from the BIRDS-III project that influenced the development of BIRDS-IV?
Key lessons included:

Improved subsystem integration and testing processes.
Enhanced documentation to streamline development.
Better payload management strategies to optimize space utilization and functionality.
Strengthened collaboration between team members from diverse backgrounds.



EPS61
テストの詳細、特にセ
ルをチャンバーにセッ
トする方法についてで
あるが、
・下の写真では、セル
はキャプトンテープで
まとめられているよう
に見えるが、セルを個
別にセットすることは
できないのだろうか。
たとえば、2枚目の写真
のように、eneloopのプ
ラスチックケースを使
用することを考えてい
る。この場合、セルを
同じ圧力に保つために
ケースの上部を開けた
ほうがよいと考える
が、どうか。
・セルを設定する際、
セルのラベルが見える
・セルを圧力下に保つためにケースの上
部を開ける必要がある。
・すべてのバッテリーを1つのプラス
チックケースに入れる方が良い。
EPS62
セルのグループ化につ
いて、
3サイクル目のDC抵抗
を確認する。
3サイクル目の容量を確
認する。
3サイクル目のOCVを確
認する。
データの要約を作成し
た後、3サイクル目の質
量を確認する。
ただし、グループ化の
詳細な基準が不明であ
る。
まず、同じDC抵抗のセ
ルを選択した後、容量
が大きいグループを優
EPS
63
セルスクリーニングに
おいて、振動テストの
前に真空リークテスト
を行った理由は、スケ
ジュール調整のためだ
けであるのか。
はい、最初に振動テストを行い、その後
に真空テストを行うことも可能であり、
問題はない。ただし、これまでのBIRDS
プロジェクトの手順に従う必要がある。
EPS64
私の理解では、熱テス
トでは以下の条件でセ
ルをチャンバー内に放
置する。
温度: +60度以上
テスト時間: 2時間以上
これで問題ないか。
また、何個のセルをテ
ストすればよいのか。
さらに、テストはいつ
実施すればよいのか。
いつでも大丈夫である
のか。
はい、NiMHバッテリー（セル）に対し
て+60度の熱テストまたは高温テストを
行う必要がある。最低2つのバッテリー
が必要であり、これはバッテリーロット
のサンプリングテストである。
EPS
65
熱試験の前後で、容
量、充放電特性、放電
温度をどのように測定
したのか。
真空テストの前後に行っているのと同様
に、熱テストの前後にもバッテリースク
リーニングを行うことができる。
この場合、2つのバッテリーをディス
パッチチャンバー内に2時間、+60度で
置くだけである。バッテリーホルダーの
Kタイプ熱電対を介してバッテリーの温
度プロファイルを保存すること。また、
温度プロファイルデータを取得してグラ
フを作成することもできる。
ただし、+80度を超えると問題が発生す
る可能性がある。
EPS66
充放電サイクルは行わ
なかったのか。それで
は、容量はどのように
測定したのか。
まず、室温で2つのセルのみのバッテ
リー（セルスクリーニング）を行う必要
がある。その前に、すべてのOCV、質
量、バッテリーの寸法、およびバッテ
リーの⾧さを測定する。
熱テスト
ディスパッチチャンバーで+60度の高温
で2時間行う。
これも1と同じ手順である。
熱チャンバー内では、充電と放電のサイ
クルは行わなかった。ただし、チャン
バー内で充電と放電を行う場合も問題は
ない。
熱テストの前後に室温でバッテリー（セ
ル）スクリーニングを行うことで、デー
タを取得することができる。以前お送り
したMATLABを使用して、充電容量と放
電容量、およびDC抵抗値を取得するこ
とができる。
EPS67
振動テスト用のバッテ
リーボックスの内部を
知りたいが、写真はあ
るか。または、可能で
あれば、ボックスの内
部のサイズを知りた
い。
また、振動テストの手
順についても再度確認
したい。
・振動の前後にOCVと
質量を測定し、セルの
外観を確認する。デジ
タルマルチメーターを
使用して、小数点以下4
桁でOCVを測定する
が、九工大で同じ精度
でOCVを測定できる
か。
・振動機に電池ボック
バッテリーボックスの写真を1枚メール
に添付した
振動テスト中は測定できないが、振動テ
ストの開始前と終了後には測定できる。
マルチメーターやその他のものをお渡し
する予定である。
はい、我々も測定することができる。問
題はない。
バッテリー認定時間には2つの軸のみを
実行する必要があり、その軸はX軸とZ
軸である。
EPS68
まず、振動テスト用の
バッテリーボックスに
ついてであるが、セル
の正確な容量を知りた
い。また、バッテリー
ボックスのサイズは
BIRDSのバッテリー
ボックスの2倍である
か。そうであるなら、
容量は12個のセルであ
ると考える。
次に、デジタルマルチ
メーターについてであ
るが、添付の写真のよ
うにOCVを測定してい
る。当社と同じ精度
（小数点以下4桁）で
OCVを測定できる機器
はあるか。マルチメー
ターが小数点以下3桁の
値を示している場合
は、当社のマルチメー
以前のバッテリーボックスの容量は12で
あったが、BIRDS-5では18バッテリー容
量のボックスを使用した。同じバッテ
リーボックスを使用する予定である。
そのような電源メーターはあるが、現在
BIRDS-5はFM段階にあり、使用してい
るため、マルチメーターをご持参いただ
く必要がある。
EPS
69
九工大で重量測定機を
借りることはできるか
（質量は小数点以下3桁
で測定する）
貸し出すことが出来る。 その他
70
宇宙環境向けの接着剤
の試験の詳細について
教えて欲しい。
参照：70_18350913佐々木悠二_修論_趙
孟佑.pdf 環境試験 〇71
バッテリーのセルのグ
ループ化方法について
確認したい。
3つのセル（3Sまたは
3S2P）をグループ化し
たのは、主にDC抵抗値
の違いによるものと考
えているが、3つのセル
の2つのグループ（2Pま
たは3S2P）をどのよう
に組み合わせたのか。
DC抵抗値についても深
く検討したのか、それ
とも容量も考慮したの
か。
バッテリーのスクリーニングテストを完
了した後、前回のメールとZoomで話し
合ったバッテリーセルのマッチング作業
は完了していると思われる。まず、シ
リーズセットのDC抵抗値（ほぼ同等
<0.1%）を考慮する必要がある。次に、
容量値（5%）とOCV値（0.1%）も考慮
するべきである。
EPS
72
バッテリー用セル選定
を行っているが、参考
にするためにBIRDS5
バッテリー用セル選択
に関する資料を共有し
て欲しい。
Ni-MH充電池のセルスクリーニングにつ
いての資料を添付している EPS
73
BIRDSでは、アップリ
ンク検出コード（ASCII
コード）が1つのようで
あるが、COMMボード
に2つ設定することは可
能であるか。アップリ
ンクのセキュリティを
確保するために、複数
のASCIIコードを設定で
きれば良いのではない
かという案が出てい
る。
もし、アップリンク検
出コードを複数設定で
きる場合、どのように
それらをコントロール
し、使い分けするのか
について、何か情報等
があれば伺いたい。
可能であるが、現状のもので十分だと考
えている。
COM74
以前、九工大が開発に
携わった衛星の中で、
太陽光パネルの接着を
業者に発注したものが
あるとのお話をしてい
ただいた記憶がある
が、該当する衛星の名
前を教えていただけな
いだろうか。
また、発注した業者の
会社名も併せて教えて
いただけないだろう
か。
太陽電池の貼り付けについてであるが、
鳳龍四号で依頼した先はマレーシアの会
社であり、現在も発注できるかどうかは
不明であるようだ。
相模通信が最近トレーニングを行ったと
のことであるため、まずは相模通信に問
い合わせていただきたい。
EPS
75
太陽光パネル基板の温
度センサの出力部に関
して質問がある。
添付写真1枚目はBirds4
の+X面のソーラーパネ
ルの温度センサの回路
である。出力（out）の
部分に1kΩの抵抗が接
続されている。
添付写真2枚目のよう
に、データシートで
は、出力部に800Ωの抵
抗が推奨されている。
Birds4で1kΩの抵抗を
使用した理由をご教授
いただきたい。
データシートでのRs推奨値は最低値の
みの定義であるため、1kΩを使用してい
ることは問題ない。
なぜ800Ωでなくても問題ないかについ
てであるが、RsはADCの前段に置く
ローパスフィルタを構成する抵抗であ
る。ADCの入力抵抗に対して十分小さい
値であれば、ほとんど誤差なく伝達され
る。（接続先のADCのデータシートを参
照すると、入力抵抗は規定されていない
が、DC Leakage Current±1uA maxと
されており、1kΩなら電圧換算で最大±
1mV相当で、他の誤差要因より小さいと
考える。）
また、800Ωちょうどの抵抗は基本的に
市販品にはない。（E12やE24系列で検
索いただきたい。）800Ωちょうどの抵
抗を入手しようとすると高価であるた
め、手頃な1kΩを選定しているものと思
われる。
EPS76
BIRDSプラットフォー
ムでは「ResetPICと
COMPICはUARTにて通
信をする」とされてい
る。実際に、BIRDS5回
路図でも2つのPICをつ
なぐUARTが確認でき
る。
しかし、ResetPICでは
COMPIC用のUARTは定
義されておらず、コー
ド内でもCOMPICとの
UARTを利用する内容は
一度も出てこない。こ
の違いについてご説明
いただきたい。
なお、COMPICでは定
義されているが、使わ
れてはいない。
また、ResetPICのコー
COM PIC – Reset PIC間のUARTについ
て
まず、COM PIC – Reset PICのUART通
信は機能として付けてあるだけである。
現状のデザインでは使用することがな
い。そのため、回路図上ではUARTとし
て使用できるように記載されているが、
プログラムには含まれていない。
Reset PIC (RB6とRB7)について
次に、このRB6とRB7をUARTラインと
して定義した目的についてであるが、
Reset PICのプログラムを構築する際
に、直接デバッグしてプログラムの確認
を行いたかったからだと考えられる。
FAB上のアクセスポートからデバッグを
行う際には、Main PICを介する必要が
ある。しかし、デバッグに失敗した場
合、Main PICに誤りがあるのか、Reset
PICが予想通りの動きをしていないのか
がわからない。そのため、Reset PICか
ら直接データをPCに送れるようにした
のだと思われる。
OBC
77
バッテリーヒーターの
部分について
RD0 = 1 がバッテリー
ヒーターON、0がOFF
という認識で合ってい
るか。
バッテリーボックス内
温度センサが出力する
電圧値は、温度が高い
ほど小さくなるのか。
- OBC78
地上局のプログラムを
扱う統合開発環境は
Visual Studioであると
伺っているが、無償版
のVisual Studio
Communityを用いてい
るか。それとも、有料
版のVisual Studio
Professionalを用いてい
るか。
Visual Studio Communityで特に問題な
く開発できると思われる。
地上局
79
コマンド等のチェック
の際にアルミボックス
の中にアンテナを入れ
て試験を行っていると
のことですが、どの
ボックスを購入された
か、もしくは写真等が
あれば共有して欲し
い。
- 統合試験
80
、宇宙での木材の帯電
現象についてどのよう
に考えられるか。
宇宙での木材の帯電現象というのは考え
たこともないですが、基本は抵抗率（導
電率）によります。
乾燥木材はそれなりに抵抗率が高いこと
がわかる。
Wikipediaの上限値の10^13 Ω·mを取る
と、これはカプトン(10^14程度)より少
し低いくらいである。
となると、電荷が溜まる可能性はある。
帯電対策は、普通のプラスチックなどの
絶縁体と同じ考えで良いのではないか。
Mission81
熱サイクル試験の1サイ
クルの時間はどれくら
いであるか。
熱サイクル試験のサイ
クル間隔はどれくらい
であるか。
サイクル数は100サイク
ル行ったか。
しっかり試験するなら100サイクル程度 環境試験
82
熱サイクル試験はよく-
15℃あるいは-20℃～
60℃で行われていると
聞いたが、外面パネル
以外の試験を行う際に
もこの温度設定にする
のか。
熱サイクルの温度範囲についてである
が、太陽電池の接着剤に関する卒論の一
部を添付する。
表4-1に示す通り、-80℃から60℃で試
験を行っている。
参考までに、BIRDS-4の最近の軌道上
データを確認したところ、外面パネルは
-30℃から50℃の範囲内で変化してい
た。
環境試験
83
太陽電池の卒論の中で
行っていた熱サイクル
試験で用いた試験機の
名前を教えてほしい。
LaSEINEで所有している恒温槽の資料
参照：
83_小型恒温槽機取説20200521_shortversion.pdf
83_大型恒温槽_参考資料_2018.pdf
環境試験 〇
84
熱サイクル試験の実施
を行うにあたり参考に
したいので、ひずみ測
定と熱サイクルの関係
の論文の全体を提供し
て欲しい。
参照：84_20220307_熱サイクル試
験.pdf 環境試験 〇
85
Eagleで作成した基板
データをP板に発注した
い。
6層以上のガーバーデー
タを出力するためには
どうしたらよいか。
ガーバデータ出力ライブラリを添付して
いる。
参照：85_BIRDS_6layer (1).cam
Mission 〇86
新しく開発する衛星
に、パッチアンテナと
磁気トルカを載せるこ
とを考えている。
九工大のBIRDS衛星で
使用している磁気トル
カの情報（制作会社、
品名など）を教えて欲
しい。
BIRDS-4のADCSの設計を行なった久継
の修士論文に磁気トルカコイルの詳細が
記載されているので、参考にしてほし
い。
磁気トルカの設計については90ページか
ら11.6章の「磁気トルカ設計」に記載が
ある。
設計値等については95ページのTable
11.19にまとめている。
BIRDS-4ではこれらの磁気トルカを搭載
して打ち上げたが、他の優先するミッ
ションがあったために結局軌道上では動
かしていない。
Mission
87
添付回路図のように
FAB内でDEPSW4信号
はJ15で途切れてしまっ
ており、
信号がQ9,Q10に伝わら
ないように思える。
これは仕様なのか。
それとも九州工業大の
方で後にはんだ付けな
どして導通させている
のか。
このような仕様である。
ジャンパピンを取り付けている。
参照：
87_BIRDS BUS基板_ジャンパピン.png
OBC 〇
88
RTVを真空引きするた
めのポンプについて、
添付図のポンプおよび
圧力計の品番について
教えていただいた。ま
た、これに合わせて
Valve A、B、Valveを繋
ぐホースの品番、もし
くは品番を確認できる
ような写真が欲しい。
- EPS89
CDRに添付写真のよう
な、地磁気センサの
キャリブレーションに
関する記述があった。
もし、地磁気センサの
キャリブレーションに
関して、より詳しい資
料があれば頂きたい。
BIRDS-4の姿勢制御系担当の修士論文を
添付している
Mission








90
太陽光パネルの接着練
習用に九工大で用いて
いるガラスについて
松浪硝子工業株式会社
の製品
サイズは80 × 40 mmで
厚さ 0.25mm
であることを理解し
た。
ただ、ネット検索では
同様の商品が見つから
なかった。
サイズの関係で特注し
たのか、また過去に発
注した際の注文票など
あれば教えて欲しい。
BIRDS-5プロジェクトで購入したカバー
ガラスについての見積書を添付している
参照：
90_24-07007-21-153 九州工業大学 角カ
バーグラス 80×40×0.25t 210414.pdf
EPS 〇
91
BIRDS-3, BIRDS-4の地
磁気センサの地上試験
データとフライトデー
タを共有して欲しい。
資料を共有する。
参照：
91_magnetometer.c
91_GLEX-2021,7,1,14,x62750[16].pdf
Mission 〇
92
PCからUARTでCOM基
板を動かしているが、
地上局側でデータの受
信ができていない。パ
ケットの形式やデータ
の中身を教えて欲し
い。
データの中身については、COM PICの
プログラムを確認する。
COM基板の制御はPCではなく、OBC基
板を用いて行うことをお勧めする。
統合試験93
太陽光パネル使用して
いるはんだはネットで
販売されている一般的
な無鉛はんだである。
ウィスカの対策として
鉛入りのはんだを使用
するなどしているかど
うか確認したい。ま
た、外注する際に指定
しているはんだの種類
についてもお伺いした
い。
有鉛はんだと言えば、通常、融点の低い
スズ60%鉛40%程度の共晶はんだを指
す。モノタロウの製品で問題ないと思わ
れる。
※太さやメーカーについては作業者の好
みによって選んでください。練り込まれ
たフラックスの違いが作業性に多少影響
する場合もあります。
また、太陽電池の角やフチも同様の理由
でRTVで覆うようにしてください
EPS
94
ヘルムホルツコイルの
有効制御空間内が±
70mmであるため、1U
サイズで±100mmの衛
星はこの有効制御空間
内に収まるという認識
で良いか。
ヘルムホルツコイルの有効制御空間は±
70mmであるため、1UのCubeSat内部に
搭載された磁力計であれば問題なく試験
できると思われる。担当者によれば、
2Uの衛星で測定を行ったことがあると
のことだ。
磁気センサーが有効制御空間内に位置し
ているかどうかは、センサーの搭載位置
によるため、センサーの搭載位置を確認
する必要がある
ミッション
95
チャンバーの変換子の
タイプは、内側と外側
でそれぞれSMAである
のか、それともNである
のか。
接続はSMAである 環境試験
96
・BIRDSで計測された
外面パネルの最低温度
および最高温度につい
て教えて欲しい。
・BIRDSでのTVT（熱
真空試験）の設定温度
に関する参考資料を共
有して欲しい。
- 環境試験97
① 地上での試験で得ら
れたデータを自動で
Excelなどに保存するプ
ログラムがあれば、共
有して欲しい。現在、
Tera Termの表示を逐一
コピーアンドペースト
している。
② 衛星運用時のダウン
リンクで得たデータ
は、地上局アプリの
Saveボタンを押す以外
の方法でも保存してい
るか。Saveボタンの押
し忘れに備え、自動保
存も必要ではないかと
いう意見が出ている。
①ない。
②現在、九工大で使用しているソフト
ウェアには、データ受信時・コマンド送
信時に自動で保存する機能がついてい
る。
Git hubを参照して欲しい。
地上局
98
先ほど太陽光パネルの
半田付けを行ったが、
添付した画像のように
ハンダの表面にフラッ
クスが黄色く変色して
出てきている。これは
そのままでも問題ない
か。
そのままでも特に問題ないようである。
気になるようであれば、アルコールで湿
らせたキムワイプで簡単に除去できる。
EPS
99
①太陽光パネルの接着
後の気泡確認は真空で
行うのか、熱真空で行
うのか、どちらである
か。
②太陽光パネル接着の
際の、最後のRTVでの
縁取りで、添付した写
真のように剥がれてし
まうことがあると発覚
した。九工大でも似た
ような事例があったか
どうか。
①真空で行う
②その際は、上からRTVを追加で塗布し
た。
EPS
100
OBC/EPSボードにおけ
る消費電力量の測定
で、定電源を使用した
と思われるが、電流値
は定電源に表示される
値から計算を行ったの
か、それともプログラ
ムから電流値を取得し
て計算したのか、どち
らであるか。
開発初期には安定化電源を使用し、最後
にはプログラムから確認を行った。安定
化電源を使用する際は、アクセスポート
ではなくRaw Powerに接続するべきで
ある。
EPS




101
ITUの手続きで書状が届
いた。対応方法を教え
て欲しい。
総務省に手続きの流れを確認する。 周波数申請
102
バッテリーを10%ほど
充電した状態で、アン
テナ展開を行った直後
にバッテリーの電圧を
測定した際、3.2V程度
と表示されるとのこと
である。BIRDS衛星で
も同様の状況で電圧を
測定したことがあるか
どうかお伺いしたい。
- 統合試験
103
太陽光パネル接着の
際、最後に行うRTVに
よるパネルの保護の剥
がれを防ぐためには、
RTV硬化後に真空引き
を行うべきであると聞
いた。具体的にどの程
度の時間待つべきか。
説明が間違っていた。真空引きをする理
由は、熱真空試験・振動試験時に剥がれ
るのを防ぐため。(早期発見が目的)
剥がれている箇所があれば上からRTVを
塗布。
EPS104
地上局とチャンバーを
繋ぐケーブルについ
て、BIRDSではどのよ
うなケーブルを使用し
たか教えて欲しい。
チャンバー内で通信を
行う際、アンテナは展
開した状態でチャン
バーに入れるのか。
木造構体にあいている
穴に熱電対が通るか確
認するため、可能であ
ればTVTで使用する熱
電対を9セットお借りし
たいが、可能か。
SMAのケーブルを使用していた。簡単
に言えば、COM基板を地上局に接続す
るようなイメージである。チャンバーの
インターフェイスには、SMAのメスコ
ネクタが装備されている。
はい。その通りである。(もしくは展開
させる)
熱電対のコネクタではなくケーブルを通
せばよいのでそこまで大きな穴は必要な
い。テグスを束ねて模擬できる。
環境試験
105
BIRDS衛星の運用にお
いて、HKデータをダウ
ンリンクする際には、
専用のコマンドを使用
していたか。あるい
は、フラッシュメモリ
のアドレス領域を指定
してダウンリンクして
いたのか。
アドレス領域を指定してダウンリンクし
ていた。
統合試験
106
BIRDS-4のCDR資料の
中で、Total Power
Generation from solar
sourceが1120mWに対
して、Average Energy
consumption per Orbit
が1143mWhとなってい
る。この状態では電力
が枯渇してしまってい
るように見える。どの
ような解釈をすればよ
いか。
「Total Power Generation from solar
source」は単位が[mW]であるが、
「Average Energy consumption per
orbit」の単位は[mWh]である。太陽発
電電力を1.5倍して比較すると、電力量
マージンが約800mWhとなる。
EPS107
ここ数日、すべての基
板（バッテリーを除
く）を動作させ、
MainPICからのUART通
信でログを確認してい
たところ、2度ほど
ResetPICのみ反応しな
くなる事象が発生し
た。
オープンソースで公開しているプログラ
ムを入れて試験を行う。
→同様の症状があれば、基板に問題があ
りそう。
統合試験
108
・BIRDS-4とBIRDS-5
で使用している太陽セ
ルは同じものか。
・BIRDS-4とBIRDS-5
の資料でダイオードの
エネルギーロス量が異
なる。どちらが正しい
か。
・COM基板もBIRDS-4
とBIRDS-5で同じか。
・同じものである。
・確認する。
・同じものである。
EPS
109
・FM用プログラムを最
後に入れる前や、30分
タイマー試験の前に、
衛星のフラッシュメモ
リのデータを全削除し
ておく必要があると考
えられる。そのため、
BIRDSではデータ削除
用のプログラムを作成
しているか。
・オープンソース内のプログラムを確認
するように。
Main PICのanalyze_command.cを確
認。
OBC110
具体的には
「mainpic_function.c」
において、
「MAKE_CW1_FORMA
T()」と
「MAKE_CW2_FORMA
T()」の2種類が用意さ
れており、
「MAKE_CW_FORMAT
()」内で変数
「CW_IDENTIFIER」の
値をもとに通信が制御
されていると見受けら
れる。通信方法として
は、1と2の内容を交互
に定期送信していると
いう理解で正しいか。
地磁気や温度などの
MISSIONデータを追加
で地上局に送信するた
めに、
「MAKE_CW3_FORMA
はい。その通りである。
プログラムの変更がどこまで波及するか
調べてみるように。
自作のプログラムが必要だと思う。
OBC111
Q1. 過放電および外部
短絡のハザード制御に
使用しているSepSW1
（MOSFET）について
であるが、ボディダイ
オード特性を考慮する
と、ニッケル水素電池
から太陽電池の方向に
電流が流れてしまう可
能性がある。SepSW1
はP-channel MOSFET
と思われるが、ボディ
ダイオード特性につい
てはどのように対策さ
れているのであろう
か。
Q2. 型番からSepSW2は
N-channel MOSFETで
あると考えられるが、
回路スケマを見ると
DepSW2を介してゲー
Q1. FETスイッチは一方の方向を遮断す
るが、ボディーダイオードにより逆流が
発生する。そのため、SepSW1は過放電
や短絡故障のインヒビットにはならな
い。SepSW1とバッテリの間にはDCDC
コンバータがあり、こちらには内部に
FETが組み合わされており、逆流を防ぐ
ことができる。
Q2. Q1に関連して、インヒビット図を送
付する。バッテリヒーターを使用しない
場合は、この図で対応可能である。さら
に、UNQ-2でリークによる過放電をハ
ザード要因として識別し、リーク解析の
結果を反映させている。また、DepSW
の故障時にはGND側のDepSWのハーネ
スにリーク電流が流れるため、ハーネス
の評価が必要である。そのため、STDAttachment3として解析したリーク電流
に対して、使用するハーネスが十分に対
応できることを評価した結果を示す。
安全審査112
チャンバーシュラウド
の内面の黒色塗装に
は、どのような塗料が
使用されているのか。
チャンバーシュラウド
の寸法と素材を教えて
いただきたい。
チャンバーシュラウド
にはMLIで蓋をしてい
ると思われるが、衛星
が見る面はどのような
素材であるのか。
ヒーターとチャンバー
シュラウドは直接接触
しているのであろう
か。
チャンバーシュラウドの内面の黒色塗装
には、以下の黒色スプレーが使用されて
いる。詳細は次のリンクを参照された
い: 黒色スプレー。放射率は0.94で、吸
収率も同じ程度である。
チャンバーシュラウドの寸法と素材は、
シュラウドは銅でできており、直径は約
28cmの円筒である。
チャンバーシュラウドにはMLIで蓋をし
ていると思われるが、衛星が見る面は
MLIのアルミ蒸着ポリイミドフィルムの
銀色の面である。
ヒーターとチャンバーシュラウドは直接
接触している。
https://www.monotaro.com/g/002533
17/?t.q=%E9%BB%92%E8%89%B2%E3
%82%B9%E3%83%97%E3%83%AC%E3
%83%BC
EPS
113
太陽光吸収率および全
半球放射率の測定につ
いて質問がある。イン
ターフェース要件など
がある場合、それらを
教えていただきたい。
- EPS114
衛星局開設に係る落成
検査について質問があ
る。総通局に工事完了
届を提出するにあた
り、落成検査に必要な
データの事前提出が求
められている。測定項
目は空中線電力、周波
数の偏差、占有周波数
帯幅、スプリアス強度
である。これらの測定
について、九州工業大
学で行われた際の手順
などの資料はないであ
ろうか。もし落成検査
に関わる資料があれば
いただきたい。
地方総合通信局もしくは、測定事業者に
確認する。
事前の確認で、購入時に同封されている
COM基板の試験報告書のある写真の通
りの設定値で測定をしておいた方が良
い。
周波数申請
115
E2Eの評価基準を記した
書類や手順書を共有し
て欲しい。
放出からアンテナ展開、30分タイマー機
能、OBC機能（定期リセット等）、通常
運用（HKデータのダウンリンク（アッ
プリンク）、CWの取得）、ミッション
運用、サンシミュレーターとローテー
ターを使用した発電量の計測を実施し
た。実施期間は5日間程度である。な
お、衛星に接続するケーブルは充電ケー
ブルのみである。
すべての項目が合格することが評価基準
である。
記録表については、添付の写真を参照。
また、ダウンリンクデータについては地
上局運用ソフトウェアで別に保存してい
る。
参照：115_E2E test.png
統合試験 〇116
EMを用いた地上試験
中に、FAB基板DEP
SW4の回路に損傷が発
生した。地上試験では
バッテリーヒーターの
試験も実施したが、正
確にいつ損傷が発生し
たのかは不明である。
この基板はBIRDS衛星
のものであり、基板と
回路は同一である。九
州工業大学では、この
ような事象が発生した
ことはないであろう
か。
Dep-SW4は、バッテリーのGNDとシス
テムのGNDを接続するスイッチであ
る。そのため、このスイッチは必要であ
り、安全審査のスリーインヒビットにも
含まれていると考えられる。
U25とU26の許容電流値を調査したが、
問題はないようである。他のプロジェク
トで同様の問題が発生したという報告は
聞いていない。
統合試験
117
太陽光パネルのRTVの
接着強度を検証するた
めに、汎用チャンバー
を接着手順に従って使
用しようと考えてい
る。手順ではチャン
バーのマニュアルに従
うと記載されている
が、具体的にどのよう
な条件で実施するべき
か。特に、圧力をどの
程度まで下げる必要が
あるかなどの詳細な条
件を教えていただきた
い。
圧力は低圧（1×10^-3 Pa）まで下げ、
常温で1～2時間の間保持する必要があ
る。
EPS
118
小型チャンバーにはど
のような端子が付いて
いるか
参照：118_小型チャンバー取説
_Ver2019.pdf
環境試験 〇119
BIRDSのリンクバ
ジェット計算に関する
Excelファイルや手引き
などがあれば共有して
欲しい
BIRDS-5の回線計算ファイルを添付して
いる。
3行目に周波数を入力すること。また、
31行目には衛星通信機（COM基板）感
度試験で取得したデータを入力するこ
と。
参照：119_120_121_BIRDS-5
LinkMargin.xlsx
COM 〇
120
地上局に31 dBのプリア
ンプ（preamp）を設け
ているが、共有いただ
いたエクセルファイル
にはその項目が含まれ
ていなかった。
添付ファイルのとお
り、Downlink
Summary comments
シートの28行目に
preamp[dB]の項目を追
加し、Signal Power at
Ground Station LNA
Inputの計算式に
preampの値を加えるこ
とで修正を行った。
この修正方法で問題な
いか、
プリアンプは信号だけでなくノイズも増
幅するため、プリアンプが31dBの利得
を持っていても、回線マージンが31dB
増えるわけではない。
33行目のLNA（Low Noise Amplifier）
がいわゆるプリアンプである。プリアン
プの役目は、アンテナ直下に設置して
ケーブル損失（29行目）を減らすこと、
および受信機よりノイズの少ない増幅器
を前に置くことで、受信系全体の実効ノ
イズ温度（30行目）を減らすことであ
る。
プリアンプの効果を考慮に入れる場合、
プリアンプの入力雑音温度を30行目に入
力し、アンテナからプリアンプまでの
ケーブル損失として設定することで反映
させることができる。これにより、約
3dB程度の改善が見込まれる。
参照：119_120_121_BIRDS-5
LinkMargin.xlsx
COM 〇121
多段に接続したPre
ampの総合雑音指数
（NF）は、初段の増幅
率が大きい場合、初段
の雑音指数とほぼ同じ
となる。そのため、Pre
ampのNFが0.2dBであ
る場合、このNFの雑音
温度を入力すればよい
と考えられる。
受信Pre ampを使用し
た場合の総合NFは
0.2dBとなり、この時の
雑音温度は1.272Kとな
る。計算サイト「雑音
温度計算」（リンクは
こちら）を使用し、リ
ファレンス温度を室温
27度で計算した。
https://www.pasternac
k.jp/t-calculatornoisefigureNF=0.2dBは非常に高性能であり、この
時の雑音温度は約14K程度となる。非常
に感度が高いため、運用時にはアップリ
ンクの回り込みで破損しないよう注意が
必要である。
なお、計算サイトのリファレンス温度の
単位はケルビンであるため、室温を入力
すること。例えば、290Kや300Kなどで
ある。
この場合、宇宙雑音の方が見える可能性
が高い。銀河方向では最大で約200K程
度となる。詳細については、以下のリン
クを参照されたい: 銀河方向の雑音。
https://www.jstage.jst.go.jp/article/nic
tkenkyuhoukoku/6/22/6_23/_pdf
エクセルシートの30行目の単位はケルビ
ンであるため、そのまま200と記載する
こと。
参照：119_120_121_BIRDS-5
COM 〇
122
申請書に添付する「人
工衛星の構造に係る基
準適合性評価」のう
ち、再突入時の第三者
損害の防止に関する項
目として要求されてい
る「超小型衛星の落下
危険度評価のための構
成品の物理特性リス
ト」の作成を進めてい
る。このリストには、
物理特性や材料につい
て記載する必要がある
が、BIRDS衛星の申請
文書ではどのような項
目が記述されていた
か、教えていただきた
い。
- 宇宙活動法123
Eneloop BK-3KCCの
メーカーカタログによ
れば、使用温度範囲は
放電時が-5～50℃、充
電時が0～40℃、保存時
が-20～35℃である。監
視の閾値を-20～60℃と
している理由として、
低温側は「-20℃まで保
証」、高温側は「過去
の試験実績」としてい
るが、その根拠はどの
ようになっているか。
バッテリーセルの安全
弁、およびFAB基板上
のキルスイッチ実機の
健全性をどのように担
保しているか。
Eneloop BK-3KCCのメーカーカタログ
によれば、使用温度範囲は、放電時が-5
～50℃、充電時が0～40℃、保存時が-
20～35℃となっている。監視の閾値を-
20～60℃としている理由について、低
温側は「-20℃まで保証」、高温側は
「過去の試験実績」としているが、その
根拠については、九州工業大学が人工衛
星に使用するバッテリーと同じものを
60℃以上の熱環境に曝す試験を実施し、
その後正常に動作することを確認してい
る。また、九州工業大学の過去の衛星プ
ロジェクトの運用データからも、60℃で
の動作が確認されている。
バッテリーセルの安全弁およびFAB基板
上のキルスイッチ実機の健全性について
は、EM（エンジニアリングモデル）を
FM（フライトモデル）と同等品として
試験を行うことで担保できると考えられ
る。
宇宙活動法
124
宇宙活動法の申請に関
して、太陽電池パネル
に使用されているガラ
スの融点情報が必要と
なっている。
添付ファイルの太陽電
池パネルを使用してお
り、CMX100というカ
バーガラスが使われて
いる。このガラスの融
点に関する情報を共有
して欲しい。
正確な融点情報は有していない。CMX
はQioptiq社のカバーガラスであり、セ
リウムを添加したホウケイ酸ガラスであ
ると考えられる。ホウケイ酸ガラスの軟
化は850～900度付近、融点は高いもの
で1650度付近であり、これはチタンよ
りは低いと思われる。正確な情報につい
ては、Azurまたはその代理店に問い合わ
せることを推奨する。
124_0003401-01-01_DB_3G30A (1).pdf
宇宙活動法 〇
125
BIRDSの熱真空試験に
おいて、バッテリー温
度が許容範囲を超えた
ことはあるか。もし超
えたことがない場合、
最高何度まで上がった
か教えて欲しい。
BIRDS-5の時は、-2～55℃だった。 環境試験126
アコモデーションハン
ドブックには、熱環境
の欄に-15℃～60℃との
記述があるのみであ
り、-15℃および60℃を
どれくらいの時間維持
するのか、また温度変
化率の指定などはない
と認識している。
BIRDS-5の熱真空試験
での温度プロファイル
を決定する際に、どの
ような判断材料があっ
たか
- 安全審査
127
BIRDS-5におけるアン
テナ展開試行回数は4回
とされているが、この
回数に決定した理由は
何か。
また、BIRDS-5で発生
した通信不能の原因
は、アンテナが展開さ
れなかったことによる
ものと理解してよい
か。
その場合、アンテナ展
開試行回数を5回以上に
設定していた場合、通
信が回復できた可能性
があるのか。
BIRDS-3からの引継ぎである。各プロ
ジェクトでアンテナ展開試験を実施して
おり、問題なく展開していたため、その
ままの手順を引き継いだ。BIRDS-4も同
様である。
また、BIRDS-5で起こった通信不能の原
因について、アンテナが展開されなかっ
たことが原因の1つである可能性はあ
る。ただし、アンテナ展開ができなかっ
た原因を特定することができなかったこ
とや、3機とも同時に失敗する可能性が
低いことから、通信不能の原因をアンテ
ナ展開に断定することはできていない。
アンテナ展開試行回数を5回以上にして
いた場合については、結果は変わらな
かったと考えられる。アンテナが展開で
きない原因として、焼き切れた後にス
タックすることが挙げられるためであ
る。
COM128
一昨日からE2E試験を
行っている。約24時間
経過した昨夜に、パ
ケット通信（ダウンリ
ンク）ができなくなる
事象が発生した。その
時はバッテリー駆動を
しており、バッテリー
の電圧は3.8Vを下回っ
ていたと推定される。
そのため、パケット通
信に必要な電流量が供
給されなかったのでは
ないかと考えられる。
九州工業大学のBIRDS
衛星における定常運用
が可能なバッテリーの
最低電圧を教えていた
だきたい。また、
BIRDS衛星の地上試験
において、このように
ダウンリンクができな
衛星として組み上がっており、アクセス
ポートには安定化電源からのケーブルの
みが接続されている状態で試験を行って
いるのか。また、どのような基準で電源
をオンにしているのか。
約24時間経過した昨夜にパケット通信
（ダウンリンク）ができなくなる事象が
発生したとのことだが、ダウンリンクの
みができない状況であり、CW送信や
ミッションは運用できているという理解
でよいか。
過去の試験ログを確認したところ、バッ
テリーが3.6Vの状態でもダウンリンクに
は成功していた。
ダウンリンクができなくなった後、アク
セスポートから電源供給を行うと通信は
復活したのか。
一度、これまでのE2E試験データを解析
してみることを提案する。フラッシュメ
統合試験129
FMは、衛星として完全
に組み上げられてお
り、FABのアクセス
ポートに外部電源から
電流を供給している。
ただし、パケット通信
時には外部電源から必
要な電流量を供給でき
ないため、バッテリー
駆動に切り替えてい
る。ダウンリンクの異
常は、この切り替え時
に発生したものであ
る。
質問にある「どのよう
な基準で電源をオンに
していますか」という
点については、具体的
にどのような意味であ
るのか教えていただき
たい。
統合試験130
バッテリー駆動による
FM-E2E試験を行ってき
た。パケット通信（ダ
ウンリンク）の回数を
増やすことでバッテ
リー電圧を3.6V近くま
で低下させたが、それ
でもFMは正常に動作し
ている。このことか
ら、昨日のシャットダ
ウンはパケット通信不
能のせいではないとい
うことになる。
昨日のシャットダウン
は開始からちょうど24
時間経過した時に発生
しているため、Reset
PICによるシャットダウ
ンが起きたのではない
かと考えている。ただ
し、シャットダウン後
に10分程度放置した
九工大のE2E試験時には、問題なく24時
間リセットができていた。
プログラムに問題がある可能性が考えら
れる。
E2E前の24時間機能試験では、正常に動
いていたか。
統合試験
131
EM-E2E時には、1週間
問題なく24時間リセッ
トが動作していた。
FABのJ5から定電源に
よる電力供給を行い、
RBF2を挿してバッテ
リーと回路を分離して
いる際には、FABの
DCDCコンバーターの
制限電流のためにダウ
ンリンクができない、
との認識を持っている
が、この理解は正しい
だろうか。
はい。そうだと思う。
J5から電力供給をする際に、RBF2を使
う理由は何か。
統合試験132
J5から電力を供給する
際にRBF2を挿している
のは、充放電による
バッテリーへの負荷を
防ぐためである。
BIRDSのFMを用いた試
験では、バッテリーの
充電をしながら通常の
運用実験（ダウンリン
クなど）も行われてい
るのであろうか。
実際に衛星が飛行している際に、RBF2
の抜き差しを行うことは可能であるか。
安定化電源を接続している理由は、太陽
電池からの発電を模擬するためではない
か。実際に宇宙空間で、衛星はどのよう
に動作するのか。
BIRDS教科書にあるE2E試験方法につい
て確認するように。
統合試験
133
SAR 6.1に関する情報を
共有して欲しい。
Baseline Flight Safety Assessment
Report(SAR) for Safety Review Phase
IIIを参照
https://birds-project.com/opensource/
安全審査
134
SAR 3.2.4に関する情報
を共有して欲しい。
Baseline Flight Safety Assessment
Report(SAR) for Safety Review Phase
IIIを参照
https://birds-project.com/opensource/
参照：
134_j3119f.pdf
134_PDTA144E_SER.pdf
安全審査 〇
135
FAB基板のポッディン
グ箇所を教えて欲し
い。
提出資料に示した場所をポッディングす
る必要がある。提出資料を要確認。 安全審査
136
最終充電時の作業環
境・内容について教え
て欲しい。
安全審査資料UHRに記載したとおりに
実施する。 安全審査
137
安全審査に関して、
BIRDS５のInhibit
Function Test Reportを
参考にさせていただき
たい。
これまで提出してきた安全審査資料を基
にどのような試験(検証)をする必要があ
るか要確認。
安全審査
138
組立後のバッテリー電
圧と容量の測定はどの
ようにおこなうか。
アクセスポートから電圧を測定する。電
圧データを基に、バッテリースクリーニ
ング試験結果から容量を計算する。
安全審査139
「人工衛星の構造に係
る基準適合性評価」の
「再突入時の第三者損
害の防止」の項におい
て、アンテナエレメン
ト（磨焼入鋼帯（鋼
種：SK85））の落下危
険度を推定したい。し
かし、融点や密度など
のデータを入手できて
いないため、参考にし
たデータソースがあれ
ば教えていただきた
い。
2点目であるが、以前も
質問した事項であるも
のの、バッテリーの安
全弁の健全性を試験す
る方法が見当たらな
い。そこで、試験手順
や試験の原理について
教示いただきたい。
宇宙活動法
140
九州工業大学ではこの
ファスナーをどのよう
に分類し、管理（解析
の有無など）していた
かを教示いただきた
い。
宇宙活動法
141
安全審査資料として
Antenna Storage
Procedure Manualを作
成し、テグスの縛り方
を説明することになっ
た。
九工大でJAXA安全審査
資料としてAntenna
Storage Procedure
Manualに相当するもの
を作成している場合、
共有いただきたい。
APの中で、示している。 安全審査142
九工大でバッテリー
ヒーターの温度上昇に
ついての解析について
教えて欲しい。
バッテリーヒーターの安全機能の検証と
して、ヒーター下流のFETの検証試験を
行っているため、特に解析は行っていな
い。
安全審査
143
安全審査IIIについて、
FABに搭載されている
DCDCコンバータ試験
の逆流防止機能の試験
は行っていたか。
行っていた場合、試験
内容を教示いただきた
い。
バッテリーの代わりに安定化電源を取り
付け、DCDCに対して逆方向に電圧をか
ける。DCDC前後のキャパシタの電圧を
測定すればよい
安全審査
144
FAB-FMのDCDCコン
バータの逆電圧特性が
正常に働いていること
を、組立て後のFABFMの試験で検証する方
法があるか。RBF2ピン
を抜いてバッテリを稼
働させた後に、FABの
SRCV（ソース電圧）を
測定すれば、DCDCコ
ンバータの逆電圧特性
が正常に働いていると
言えるのではないか。
部屋を暗くして測定す
るため、太陽光パネル
からの起電力は0Vと仮
定できると思う。
室内の電気では大して発電しないと思わ
れるため、一応暗めにすれば太陽電池の
影響は省けると考える。
SRC_Vの値でバッテリ電圧がかかってい
ないことを検証できたと思う。
安全審査
145
SepSW1の健全性を再
度証明することはでき
ないか。
SepSW1の逆流防止の
検証法について教えて
欲しい。
充電ポートに外部電源を接続してバイア
スをかけ、SepSW1のON-OFF時の
SRC_Vをモニターすれば、逆流するかど
うかを確認できると思う。
健全であれば、ボディーダイオードが存
在するため、逆流するはずである。
SepSW1の健全性については、太陽電池
からバッテリへの順方向のON-OFF確認
で問題はない。
安全審査
146 TNCが動作しない TNC が KISS モードではなく、
TERMINAL モードになっている。
地上局147
USB無線機および無指
向性アンテナ、これら
のケーブルなどを購入
するにあたり、メー
カー名および型名の情
報を提供いただきた
い。
参照：147_学生実験部品リスト.xlsx 地上局 〇
148
キューブサットがポッ
ドから放出される際に
ΔVが発生するかと思わ
れるが、その影響はど
の程度あるのか。
また、放出される軌道
は固定されているの
か。それとも、ある程
度ユーザー側でパラ
メータを与えることが
可能であるのか。
添付資料では、1.1～1.7 m/secと記載さ
れている。
https://humans-in-space.jaxa.jp/bizlab/experiment/ef/jssod/
ISSの放出時の高度380～420kmによっ
て変わってきます。
ユーザー側で軌道を指定することは出来
ない。
その他
149
Birds4において、一日
あたり地上に落とせる
データ量は全体で
1MByte/dayであると考
えるが、HKやオーバー
ヘッドの影響により、
ミッションで使用でき
る実際のデータ量はど
の程度であるか。
ミッションのダウンリンク容量は1回の
運用で約20kBである。
この中にはエラーも含まれるため、再度
ダウンリンクする必要があるデータも含
まれる。
運用はISS軌道で行われ、一日あたり約4
パスがあるが、そのうち2パスは深夜の
場合が多いため、日中のみでは一日2パ
スとなる。
したがって、1日に約40kBとなると考え
られる。
COM
150
GPSの使用の検討を
行っている。Mass、
Size、消費電力、デー
タ容量
（[byte/format/sec]）
のICD情報があれば提供
いただきたい。
Fireantを使用している。
GPS受信機のICとして、SkyTraqの
S1722F8-GLを搭載している。
モジュールの質量は約45g、サイズは
45mm x 35mm、消費電力は0.3W以下で
ある。データフォーマットはNMEA
フォーマットであり、ASCIIテキスト
データを最大900キャラクタ/秒で送信す
る。NMEAデータは0.9秒以内で1秒ごと
に送られる。
ミッション
151
BIRDS-4のパワーバ
ジェット表を共有して
欲しい。
参照：
151_Power_consumption_generation_B
IRDS4.pdf
EPS 〇152
RTVの発注先を教えて
欲しい。
Aを0.9キロ、Bを0.1キ
ロ買って混ぜて使うと
いう理解で良いか。
早川商事株式会社
RTV S-691A (0.9kg)：600,000円/kg
RTV S-691B (0.1kg)：600,000円/kg
計600,000円(+税)
毎回使う分だけ9:1の割合で混ぜて使う
EPS
153
キューブサットにおい
て、最も電流を流すの
はスクリーニングであ
ると想定している。
充電は1C、つまり4Aで
行っていると認識して
いるが、それで合って
いるか。
その場合、安定化電源
は5A、18Vで、プログ
ラマブル（SCPIのよう
なもの）であればなお
良いと考えているが、
この考え方は適切であ
るか。
負荷についても90W程
度でよいか。
1Cは最大4Aであるが、九工大での試験
ではバッテリー容量が3500mAhであ
り、したがって1Cは3.5Aである。
5A、18V、90Wの安定化電源であれば、
問題なくスクリーニング試験が可能であ
る。プログラマブルの方がなお良い。
EPS154
シールドボックス
my1515ではUHF帯の
シールドができず、中
山さんの特注品は100万
円を超えると聞いた。
そこで、過去に取引し
た経験のある会社で以
下の製品を見つけた
が、評価をいただけな
いか。
https://www.tokyokeik
i.jp/products/tka/detai
l.html?pdid=149
my1515がGHz帯で
20dBのシールド性能を
持つのに対し、こちら
はUHF帯で60dBの減衰
が可能である。しか
し、自由空間損失が約
120dBに対しては減衰
量が低いので、十分で
メーカーとのテレコンで使用した調整資
料（シールドボックス諸元v2.pptx）
と、メーカーからいただいた見積書、発
注時の仕様書を添付する。
一般的に、シールド1層では60dB程度が
限界とされているようである。この特注
品も二重構造にすることで、要求仕様の
96dB以上を確保する設計となってい
た。 （要求仕様96dBについては、
20201022_微弱電波.pptxを参照された
い。大抵のCubeSat側の送信機は0.8W
以下であるため、29dBm - (-66.5dBm)
= 95.5dBを整数に繰り上げたものであ
る。）
シールド性能が500kHz～10GHzで明記
されているため、my1515よりもこちら
の東京計器のシールドボックスの方が
UHF回線の試験用には適している。取引
経験があるのであれば、スムーズに導入
できると考える。
COM 〇
155
BIRDS-3からBIRDS-5
への変更点を教えて欲
しい。
参照：
155_Birds5_FAB_rev04_20201016
(1).pdf
155_BIRDS5_OBC_rev06_20201225.pdf
155_FAB_OBC Update RevA.pdf
OBC 〇
156
BPB上のCPLDについて
型番を教えて欲しい。
参照：
156_BIRDS4_BOM_Testbed_v2.0.xlsx
156_Testbed v2.3.zip
OBC 〇
157
周波数調整の手引きを
共有して欲しい。
国内調整についてはAPIを総務省に提出
するのとほぼ同時にスタートする。地方
総合通信局にも事前連絡をしておいた方
が良い。
https://www.tele.soumu.go.jp/resourc
e/j/freq/process/freqint/001.pdf
周波数申請
158
宇宙活動法のハンド
ブックを共有して欲し
い。
https://www8.cao.go.jp/space/applica
tion/space_activity/application.html 安全審査159
熱設計にはNASTRANを
使用しているが、放射
のデータについての論
文およびデータを提供
いただきたい。
伝導については、STM
を製造し、熱真空試験
でモデルの妥当性を検
証すべきであるか。
NASTRANを使って詳細に解析するのも
良いが、1Uキューブサットで姿勢制御
を行わないため、2ノード（内部と外
部）または3ノード（内部、外部、バッ
テリー）で簡略化して解析しても良いと
考える。
細かい熱モデルを作成するのであれば、
接触熱伝導の値は熱平衡試験で取得する
必要があるため、どこかで試験を行う必
要がある。
今回は発熱するコンポーネントがあると
いうことなので、試験ではその熱がどの
程度こもり、何度くらいまで上がるかが
分かると思う。STMはダミー基板で行
うこともあるが、熱源を配置した方が温
度勾配が出るため、より正確な熱モデル
が作れると考える。試験と解析を行うこ
とは熱設計の勉強にも良いと思う。
しかし、STMの段階である程度の基板
が揃う必要があるため、電気系との開発
その他 〇160
phase0,1,2,3の期限はど
れくらいか
これは安全審査に要する期間であるか。
民間会社を通す場合、書類作成後、業者
側の審査書類確認および修正作業に半月
から1ヶ月、その後の構造審査および修
正に2週間、安全審査および修正に2週間
を要し、すべてクローズした後に議⾧承
認会が行われるため、全体で1ヶ月半か
ら2ヶ月かかる。
Phase012からPhase3までのFMの開発
期間についてであるなら、BIRDS-2は
Phase012が9月に終了し、10月と11月
で開発、12月にFM環境試験、審査書類
提出、そして2月にPhase3審査となる。
BIRDS-3はPhase0123の一発審査、
BIRDS-4はPhase012が10月、Phase3は
翌年9月である。Phase012の審査でFM
の設計や試験方法が固まっているため、
製造に1ヶ月、組み立て・確認試験に1ヶ
月から1ヶ月半、環境試験に1ヶ月、終了
後に審査書類提出という流れである。
安全審査
161
MIULを記載する時の参
考文献である[CR-
99117 JAXA 宇宙ステー
ションプログラム材料
及び工程要求書], [CR-
99218 JEM 材料選定リ
スト]を送ってもらえる
か
参考文献はあくまでJAXAと事業者内で
保有しているものであり、非公開文献で
ある。JAXAと何らかの契約を結び、審
査を受けなければ入手・閲覧はできな
い。基本的には、参考文献に基づいて
JAXAもしくは事業者が開発者に個別に
指摘を行うだけである。
安全審査
162
もしくはMIULは
MSFC-HDBK-527F や
MAPTIS2に記載されて
いるものでも適正だと
言えるのか
CubeSatの場合、MIULは衛星を1つの物
体として記載する。個別の材料について
の記載は行わない。特殊な構造材料を使
用したい場合は、JAXAもしくは事業者
側に確認を取り、そちらが参考資料など
に基づいて使用の可否を判断する。
安全審査
163
MIULは衛星に使用され
るすべての材料に対し
てリストを作成するの
か、例えばカメラ内部
の部品や半導体なども
含めるのか。
1つの衛星として記載する。 安全審査164
全ての材料に対して材
料証明を集めないとい
けないのか
材料証明が必ず必要なのは、外面にFR4
基板を使用する場合である。FR4の材料
証明が必要なのは、FR4が外面に使用さ
れる場合、この外面パネルがFracture
Critical Partに識別されるためである
（FCEのN-2参照）。Fracture Critical
Partに識別されると、構造解析で十分な
強度を持つことを確認し、適切なプロセ
スおよび材料で製造され、適切なプロセ
スで組み立て管理されることを材料証明
および組み立て手順、記録で確認する必
要がある。また、フライト品が健全に作
成されていることと振動試験で確認する
ことも必要である。
ロードパスにあるファスナーについても
材料証明が必要である。材料証明がない
場合は、MWLを加えたレベルでの振動
試験を行うことで対処することも可能で
ある（FCEのL-2-1、L-5参照）。
安全審査
165
phase1 09~12のハザー
ドレポートの雛形が公
開されていないが、書
き方は個人で決めてよ
いのか
09-12はSHRおよびUHRである。これら
はJAXAおよびNASAのフォーマットであ
り、非公開である。契約後に取得でき
る。SHRは基本的なハザードの内容、制
御、検証方法がリスト化されており、対
応するものにチェックを入れ、検証文書
を当てはめる形になる。SHRは最近の
NASAの安全文書の改定に伴い、新しい
フォーマットにアップデートされている
ため、過去のものを参考にしない方が良
いかもしれない。UHRも構造破壊、
バッテリ破裂、展開物の誤展開、RF放
射などのフォーマットが決まっており、
事業者などからフォーマットをもらうこ
とができる。SHRと同様に、ハザード原
因、制御方法、検証方法、検証文書を記
載し、審査員に分かりやすくするため
に、ハザード検証に関する図や表も
Attachmentとして載せるが、これもド
ラフトが用意されている。
安全審査166
ハザードについて、JXESPC-101132-Dの
4.2.2.1項では標準ハ
ザードが4つしか記載さ
れていないが、こちら
の資料には14つが記載
されている。これは、
超小型衛星とその他の
衛星で必要なハザード
が異なっているという
認識であっているか。
https://www.mext.go.j
p/kaigisiryo/content/2
0210127-
mxt_uchukai01-
000012384_8.pdf
JX-ESPC-101132-Dの4.2.2.1項には標準
ハザードが文中に「対応例」として記載
されており、14個が含まれている。
安全審査
167
ハザードレポートは
FTAを用いて明確に記
載するほうが良いの
か。
BIRDS Open SourceにあるSARを参
考。 安全審査
168
バンドパスフィルタと
いうガラス製のフィル
タとカメラが使用され
ているが、これは標準
ハザード「ガラス等の
飛散防止」項目に該当
するか。また、BIRDS-
4はレンズにカバーを付
けていないように見受
けられるが、実際には
どのようにして許可が
下りたのか。
ガラスを使用する場合、以下の3つの方
法で対応が分かれる。1つは、ガラスが
封入されていること、2つ目は負荷が掛
からない設計にすること、3つ目はその
他の方法で制御することが挙げられる。
カバーを付けて封じ込め、万が一割れた
場合でも外部に飛散しない設計であれ
ば、SHRでその構造を検証文書に示す必
要がある。負荷が掛からない場合も、
SHRでその状態を検証文書に示すべきで
ある。BIRDSの場合は、他の検証方法を
用いてUHRの構造破壊に関する
Shatterable materialとして制御を記載
し、振動試験で壊れないことを確認して
いる。ただし、振動試験後には破損など
が確認される必要がある。
安全審査
169
SARの資料を共有して
欲しい。
BIRDS Open SourceにあるSARを参
考。
事業者から提供されるフォーマットに合
わせて記載する。
安全審査170
ADS(姿勢決定サブシス
テム)
永久磁石とヒステリシ
スダンパはどのように
調達していたか。
 ・メーカー名
 ・スペックの項目
ヒステリシスダンパの方はサイズを指定
する必要がある。
・ALNICO 5
https://www.digikey.jp/productdetail/ja/standex-mederelectronics/ALNICO500-
19X3.2X3.2MM/374-1130-ND/695282
・HYmu80 Hystersis damper (length
4cm diameter 0.2cm radius 0.1cm)
https://www.alibaba.com/productdetail/Super-Nickel-Alloy-Permalloy-
80-
HyMu80_1600059517184.html?spm=a
2700.galleryofferlist.normal_offer.d_titl
e.23fb7c92CLIl7N
ミッション
171
TCS(熱制御系)
 ・これまでのバーズ
で熱制御素子は使用し
てきたか(ヒータ、ペル
チェ阻止など)
・TCS
BIRDSシリーズではバッテリーヒーター
を搭載していたが、軌道上の温度データ
よりヒーターはオンにはならないことが
わかっているので、BIRDS-5からは使用
していない。
ヒーターの型番は以下の通り。
KHLVA-102/10
https://www.jp.omega.com/pptst/KHR
A-KHLVA-KHA-SERIES.html
その他
172
・Birds4でフレームに
アルミ以外の素材を
使っているが、
  どのような素材で
目的を教えて欲しい。
・STR
BIRDS-4では構造フレームをアンテナと
するミッションがあったためところどこ
ろを絶縁体にする必要があった。
PEEK材を使用したが、こちらは気にし
なくてよい。BIRDS-5ではすべて同じア
ルミ材。
構造173
総務省への提出資料は
JARL資料よりも先に作
るべきか。
ARLへの申請書類が先で問題ない。既存
の地上局がない場合、IARUの書類に地
上局コールサインは必要ない。ただし、
FM開発時には地上局コールサインが必
要になると思われる（ダウンリンクのパ
ケットに相手先コールサインとして地上
局コールサインを指定するため）。その
場合は、総合通信局に事情を説明すれ
ば、コールサインだけ先に確保してもら
うことも可能である。
周波数申請
174
以下のパラメータは何
を入力する必要がある
か。
・周波数調整書より
 ・衛星送信機の有効
等方性放射電力
 ・衛星通信気の調整
範囲の詳細(UHF通信
機)
 ・衛星に搭載された
通信機のノイズ温度
(UHF通信機）
・回線設計書(8.2.4）
 ・参照帯域幅
 ・変調損失
 ・雑音帯域
・衛星送信機の有効等方性放射電力
有効等方性放射電力（EIRP）は、通信
機の送信電力（Ptx）、ケーブル損失
（L）、アンテナ利得（G）を用いて、
以下の式で表される。
EIRP[dBm]
=
Ptx[dBm]
－
L[dB]
+
G[dBi]
EIRP[dBm]=Ptx[dBm]－L[dB]+G[dBi]
この式から分かるように、EIRPは送信
側の能力を総合的に評価した値であり、
仮想的な等方性アンテナ（0[dBi]）にロ
スがないケーブルで送信機を接続した場
合のEIRP[dBm]の出力を持つ送信機と同
等の放射を意味する。EIRPに使用する
アンテナ利得は基本的にアンテナの最大
周波数申請 〇
175
九工大のアンテナパ
ターン図が欲しい。
436CP42UGのアンテナパターンについ
て、1スタックおよび2スタックの両方の
ケースに関する情報は、添付ファイルに
載せている。各スタック構成におけるア
ンテナパターンを確認するためには、添
付ファイルをご参照いただきたい。
参照：175_BIRDS_GS_Antenna_M2.pdf
地上局 〇176
• バッテリスクリーニン
グ試験について JEM
4.2.2.2（４）項でJSC-
20793文書に則ることが
要求されているが、
JSC-20793文書に記載
されている試験を全て
手順通りに実施する必
要があるか。また、九
工大のEM試験ではどの
ように実施したかにつ
いても教えていただき
たい。
• 磁気力について 衛星
に搭載する予定の永久
磁石、磁気センサにつ
いて、9月の合宿時に磁
力は解析によって証明
するとのことだった
が、磁力測定は不要と
いう理解で間違いない
か。
・バッテリスクリーニングに関して
安全審査の対象は基本的にFM品であ
る。FMの健全性を示すために、EMの試
験結果が必要な場合のみEMの結果が要
求される。バッテリスクリーニングで
は、多くのバッテリセルを試験するが、
提出する結果はFMに使用するセルの結
果のみで問題ない。
スクリーニングの試験はJSC-20793が
ベースであり、真空晒しと振動試験が要
求される。試験の前後で、外観目視、臭
気確認、質量計測、セル解放電圧計測、
充放電プロファイル・放電温度プロファ
イル・放電容量計測を行う。OCVと質量
の変化が0.1%以下、容量の変化が5%以
下であることが求められる。
スクリーニングしたセルから、FM、
バックアップ、EM、テーブルサットな
どを選べば良いが、EMはスクリーニン
グをしたものでなければならないわけで
安全審査177
[振動試験]
・振動試験後に筐体に
対してトルクマーク
チェック、ガラスに対
して破壊検査を行う
が、FM試験の場合は機
体を分解できない。そ
の場合、九州工業大学
ではどのように検査し
ているのか教えていた
だきたい。
[バッテリースクリーニ
ング]
・バッテリースクリー
ニング手順において、
JSC-20793 Rev D 4.2.3
項とこのメールに添付
した24_Battery
Verification Reportの文
書 p24(5) Test method
・振動試験
BIRDS5では、主構造の締結ボルトにつ
いてはトルクマークが確認できるように
外面パネルに穴加工などが施されてい
る。他の衛星では、ボルト頭が外面パネ
ル内面に接触している前提で、「ボルト
が緩むと外面パネルを押すため、パネル
に変形が生じる、または隙間が広がる。
振動試験後に外面パネルと構造の隙間を
確認し、パネルに変形が生じていないこ
とを確認する」といった検証が行われて
いる。別の衛星では、「主構造を締結す
るボルトのトルクマークを確認するため
に、外面パネルを振動試験後に外す。ト
ルクマークを確認後、組み立て手順書通
りに外面パネルを再組み立てする。組み
立て手順書に基づいて再組み立てを行っ
ているため、振動試験前のコンディショ
ンに戻っている」といった検証が行われ
ている。
・バッテリスクリーニング
安全審査178
太陽電池基板に使用す
るバイパスダイオード
について探しており、
最短でも来年の2月入荷
となっている。現在、
候補としている部品は
以下の通りである：
MBR120VLSFT1 -
Schottky Power
Rectifier, Surface
Mount, 1.0 A, 20 V,
SOD-123 Package
(onsemi.com)
代替品として検討して
いる部品は以下であ
る：
MBR1020LL.p65
(panjit.com.tw)
この代替品の温度範囲
は-55℃であり、通常品
は-65℃である。また、
問題ない。 EPS
179
実験計画書の占有周波
数帯幅についてである
が、BIM1Hの実測値を
まだ測定できていな
い。また、スペクトラ
ムアナライザが故障し
ているため、九州工業
大学の測定結果をいた
だくことは可能であろ
うか。
参照：179_BIRDS-4 ダウンリンク測定
データ.pdf COM 〇180
資料の6ページ目では、
2021年6月1日のベータ
角は0度と示されてい
る。しかし、STKは
TSURU TLEデータに基
づいて、私の資料とは
異なるベータ角を示し
ている。この違いを確
認できるか。
資料の6ページ目と7
ページ目に示されてい
る発電量は、同じ条件
（ベータ角0度、日照時
間3,230秒）である。し
かし、発電量はそれぞ
れ1,790と2,507となっ
ている。この違いを確
認できるか。
参照：180_Power-Budget-Analysisfor-1U-satellite_Final.pdf
EPS 〇
181
他のBIRDS5バスを使用
している衛星で、制御
が不足していることが
判明し、九工大を含め
て調整を行っている。
設計の変更が必要にな
るかもしれない。
太陽電池側のFETを過
放電のコントロールと
して使用していたが、
FETの寄生ダイオード
を介して電流が流れる
ため、FETが回路を遮
断しないことがわかっ
た。なお、他の衛星で
はダイオードを追加す
ることが検討されてい
る。
Dep.SW4がクローズす
るだけで、トランジス
タのエミッタとベース
間の抵抗を介して電流
が流れ出ることがわ
BIRDSでは太陽電池セル側の過放電ハ
ザードに対するインヒビットとして、以
下の3つをカウントして構成している。
Inhibit#1: バッテリーリターン側のFET
スイッチ (SepSW2)
Inhibit#2: 太陽電池入力側のFETスイッ
チ (SepSW1)
Inhibit#3: ブロッキングダイオード
(FAB上に実装されているもの)
このインヒビット構成に関して、上図の
電流の向きにおいて、Pch MOSFET
(Inhibit#2) の寄生ダイオードを介して、
DrainからSourceに電流が流れるため、
Inhibit#2がインヒビットとして機能しな
い可能性があるという議論がある。
また、GND側のDep SW2がクローズす
ると、トランジスタの内部抵抗を介して
赤いラインに電流が流れる（下図）。こ
れにより、この赤いラインで過放電が発
生するため、適切な制御が必要となる。
安全審査 〇182
GND側のDep SW2を
Closedすると、トラン
ジスタの内部抵抗を介
して赤いラインに電流
が流れる（下図）。こ
れに関して、結論とし
て「漏れ電流が十分に
小さいこと」が確認さ
れているという認識で
良いか。
そのような方針で進めている。
参照：182_DepSW_電流.png
安全審査 〇
183
QTではペルチェチャン
バーのDsub25ピンを使
用する方向で検討して
いる。チャンバー外側
はDsub25オスであるこ
とが確認できたが、
チャンバー内側の
Dsub25はメスである
か、オスであるかを確
認したい。
ペルチェチャンバー内
のDsub25の極性につい
て確認をお願いした
い。チャンバー外側が
オスであることは承知
している。内側がメス
かオスかをご確認願い
たい。
チャンバー内の接続はメスであり、外側
はオスである
環境試験
184
九工大外の振動試験機
を使用予定である。ス
ペックに問題がないか
確認ひて欲しい。
JAXAの要求文書と照らし合わせる。 環境試験
185
バッテリースクリーニ
ング試験で使用してい
る黒色の紙のようなも
のの素材は何か。
参照：185_Battery Screening .jpg EPS 〇186
Phase 3のBVRの作成を
行っており、Final
Checkout after
Assembling CubeSatの
項で、衛星を組み立て
た状態での充放電特性
の計測方法とその結果
の記載を行う必要があ
る。九州工業大学様で
は、どのように充放電
特性を計測している
か。
FM組み立て後は、充放電特性の計測は
行っていない。OCV計測のみである。 安全審査
187
現在、JAXAとMIUL評
価の調整を行ってお
り、アンテナエレメン
トとリード線（Cu線に
Sn溶融めっきを施した
もの）の異種金属の組
み合わせについて申告
したところ、錫が制限
材料であるため、Cu線
を使用することとし
た。しかし、アンテナ
エレメントの材料であ
るSK85が腐食しやすい
ものであり、異種金属
の組み合わせがさらに
腐食しやすくなること
を指摘された。
Birdsと同様に、SK85
の焼入れ鋼帯を使用し
ているが、FCEにて焼
き入れを使用していな
いものとしている。
また、安全審査に関して事業者と契約さ
れていると思うので、
まずそちらと対策に関して話し合うべき
だと思う。
安全審査
188
梱包手順書 Delivery
Procedure について、
BIRDS-5の資料を共有
してほしい
BIRDS-5 梱包手順書を参照。 安全審査189
1号機衛星YOMOGIにカ
ザフスタンとタイから
衛星網に干渉を与える
との申し出があった。
その際の返信内容や対
処方針について教えて
ほしい
- 周波数申請
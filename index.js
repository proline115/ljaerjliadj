function copyAnswer(){
    const old = document.getElementById("old").value;
    const grade = document.getElementById("grade").value;
    const classNumber = document.getElementById("classNumber").value;
    const number = document.getElementById("number").value;
    const firstname = document.getElementById("firstname").value;
    const secondname =document.getElementById("secondname").value;
    const homework = document.getElementById("homework").value;
    if(old===""||grade===""||classNumber===""||number===""||firstname===""||secondname===""||homework===""){
        document.getElementById("answer").style.display="none";
    }else{
        document.getElementById("answer").style.display="block";
        if(homework==="index.html"||homework==="style.css"||homework==="kotonara.html"){
            document.getElementById("answer").style.wordBreak="break-all";
            document.getElementById("answer").style.overflowX="visible";
            document.getElementById("answer").style.whiteSpace="normal";
        }else if(homework==="表計算"||homework==="表計算統計"){
            document.getElementById("answer").style.wordBreak="normal";
            document.getElementById("answer").style.overflowX="scroll";
            document.getElementById("answer").style.whiteSpace="nowrap";
        }
        if(homework==="index.html"){
            document.getElementById("answer").innerHTML=
            `
            &lt;!DOCTYPE html&gt;<br>
&lt;html&gt;<br>
    &lt;head&gt;<br>
        &lt;title&gt;${grade}年${classNumber}組${number}番${firstname}${secondname}&lt;/title&gt;<br>
        &lt;meta charset="utf-8"&gt;<br>
        &lt;link rel="stylesheet" type="text/css" href="${firstname}${secondname} - style${old}.css"&gt;<br>
    &lt;/head&gt;<br>
    &lt;body&gt;<br>
        &lt;h1&gt;日本にある世界遺産&lt;/h1&gt;<br>
        &lt;p&gt;このサイトでは, 日本にある世界遺産を紹介します。世界遺産とは, 世界中の人たちの宝物として守っていく必要のある貴重な文化財や自然のことです。世界遺産には, &lt;span class="yellow_marker"&gt;自然遺産と文化遺産, そして複合遺産&lt;/span&gt;があります。&lt;/p&gt;<br>
        &lt;h2&gt;世界遺産の登録&lt;/h2&gt;<br>
        &lt;p&gt;世界遺産は, 国が世界遺産としてユネスコに推薦して, ユネスコが認めることによって登録されます。&lt;/p&gt;<br>
        &lt;h2&gt;日本の世界遺産&lt;/h2&gt;<br>
        &lt;table&gt;<br>
            &lt;tr&gt;&lt;th&gt;世界遺産の名前&lt;/th&gt;&lt;th&gt;登録年&lt;/th&gt;&lt;/tr&gt;<br>
            &lt;tr&gt;&lt;td&gt;法隆寺地域の仏教建造物&lt;/td&gt;&lt;td&gt;1993年&lt;/td&gt;&lt;/tr&gt;<br>
            &lt;tr&gt;&lt;td&gt;姫路城&lt;/td&gt;&lt;td&gt;1993年&lt;/td&gt;&lt;/tr&gt;<br>
            &lt;tr&gt;&lt;td&gt;古都京都の文化財&lt;/td&gt;&lt;td&gt;1994年&lt;/td&gt;&lt;/tr&gt;<br>
            &lt;tr&gt;&lt;td&gt;白川郷・五箇山の合掌造り集落&lt;/td&gt;&lt;td&gt;1995年&lt;/td&gt;&lt;/tr&gt;<br>
            &lt;tr&gt;&lt;td&gt;原爆ドーム&lt;/td&gt;&lt;td&gt;1996年&lt;/td&gt;&lt;/tr&gt;<br>
            &lt;tr&gt;&lt;td&gt;厳島神社&lt;/td&gt;&lt;td&gt;1996年&lt;/td&gt;&lt;/tr&gt;<br>
            &lt;tr&gt;&lt;td&gt;&lt;a href="${firstname}${secondname} - kotonara${old}.html"&gt;古都奈良の文化財&lt;/a&gt;&lt;/td&gt;&lt;td&gt;1998年&lt;/td&gt;&lt;/tr&gt;<br>
        &lt;/table&gt;<br>
    &lt;/body&gt;<br>
&lt;/html&gt;
`;
        }else if(homework==="style.css"){
            document.getElementById("answer").innerHTML=
            `
            body {background-color: #fffcdb;}<br>
h1{<br>
    padding: 0.5em;<br>
    color: #494949;<br>
    background: #fffaf4;<br>
    border-left: solid 5px #ffaf58;<br>
}<br>
h2{<br>
    border-bottom: double 5px #ffd778;<br>
}<br>
table {<br>
    border-collapse:  collapse;<br>
}<br>
th,td {<br>
    border: solid 1px;<br>
    padding: 10px; <br>
}<br>
th {<br>
    background-color:  #e6e6fa;<br>
    color:  #000080; <br>
}<br>
.yellow_marker{background: linear-gradient(to bottom,transparent 60%, #ffff66 60%);}<br>
`;
        }else if(homework==="kotonara.html"){
            document.getElementById("answer").innerHTML=
            `&lt;!DOCTYPE html&gt;<br>
&lt;html lang="ja"&gt;<br>
&lt;head&gt;<br>
    &lt;meta charset="utf-8"&gt;<br>
    &lt;title&gt;${grade}年${classNumber}組${number}番${firstname}${secondname}&lt;/title&gt;<br>
    &lt;link rel="stylesheet" type="text/css" href="${firstname}${secondname} - style${old}.css"&gt;<br>
&lt;/head&gt;<br>
&lt;body&gt;<br>
    &lt;h1&gt;古都奈良の文化財&lt;/h1&gt;<br>
    &lt;p&gt;「古都奈良の文化財」は, 東大寺,春日大社, 春日山原始林, 興福寺, 元興寺, 薬師寺, 唐招提寺, 平城宮跡の８資産のことであり, 1998年に世界遺産として認定されました。<br>
    &lt;/p&gt;<br>
    &lt;h2&gt;東大寺&lt;/h2&gt;<br>
    &lt;p&gt;東大寺は, 奈良時代（8世紀）に聖武天皇が国力を尽くして建立した寺です。奈良の大仏として知られる盧舎那仏を本尊とし, 大仏が鎮座する大仏殿は, 木造建築としては世界最大級のものです。&lt;/p&gt;<br>
    &lt;img src="toudaiji.jpg" alt="東大寺"&gt;<br>
    &lt;h2&gt;東大寺二月堂お水取り&lt;/h2&gt;<br>
    &lt;p&gt;奈良に春の訪れを告げる東大寺のお水取りは, 修二会といわれる伝統行事の一つで, 1260年以上一度も休むことなく続けられています。&lt;/p&gt;<br>
    &lt;video src="omizutori.mp4" controls&gt;&lt;/video&gt;<br>
    &lt;h2&gt;東大寺界隈の地図&lt;/h2&gt;<br>
    &lt;iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13124.100398501267!2d135.83538269607382!3d34.67931598832443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600139907a0876dd%3A0xf890ac3f9dd53c8f!2z5p2x5aSn5a-6!5e0!3m2!1sja!2sjp!4v1579585459103!5m2!1sja!2sjp"width="600"height="450"frameborder="0"style="border:0;"allowfullscreen=""&gt;&lt;/iframe&gt;<br>
&lt;/body&gt;<br>
&lt;/html&gt;
`;
        }else if(homework==="表計算"){
            document.getElementById("answer").innerHTML=
            `<h2 style="color:red">絶対にコピペしないでください。参考にする程度にとどめてください。</h2>
            <h3>字体や枠線などが変更され非常にめんどくさくなります。</h3>
            <table>
                <tr><td class="empty"></td><td class="empty"></td><td>クラス：</td><td>${classNumber}</td><td>氏名（性）</td><td colspan="4">${firstname}</td></tr>
                <tr><td class="empty"></td><td class="empty"></td><td>出席番号：</td><td>${number}</td><td>氏名（名）</td><td colspan="4">${secondname}</td></tr>
                <tr><td class="empty"></td><td class="empty"></td><td>番号指名：</td><td colspan="6">=E1*100+E2&G1&G2</td></tr>
                <tr></tr>
                <tr><td colspan="2">受験番号</td><td>筆記試験</td><td>実技試験</td><td>合計</td><td>平均</td><td>合否</td><td></td><td></td><td class="empty"></td><td>千の位</td><td>百の位</td><td>十の位</td><td>一の位</td><td>和</td><td>和自乗</td><td>26余り</td></tr>
                <tr><td>9776</td><td>=hlookup(R6,H$24:AG$25,2)</td><td>16</td><td>24</td><td>=D6+E6</td><td>=int(F6/2)</td><td>=if(F6>=140,"◯","✕")</td><td></td><td></td><td class="empty"></td><td>=int(B6/1000)</td><td>=int((B6-L6*1000)/100)</td><td>=int((B6-L6*1000-M6*100)/10)</td><td>=B6-L6*1000-M6*100-N6*10</td><td>=sum(L6:O6)</td><td>=P6^2</td><td>=Q6-int(Q6/26)*26</td></tr>
                <tr><td>9793</td><td>=hlookup(R7,H$24:AG$25,2)</td><td>47</td><td>76</td><td>=D7+E7</td><td>=int(F7/2)</td><td>=if(F7>=140,"◯","✕")</td><td></td><td></td><td class="empty"></td><td>=int(B7/1000)</td><td>=int((B7-L7*1000)/100)</td><td>=int((B7-L7*1000-M7*100)/10)</td><td>=B7-L7*1000-M7*100-N7*10</td><td>=sum(L7:O7)</td><td>=P7^2</td><td>=Q7-int(Q7/26)*26</td></tr>
                <tr><td>9810</td><td>=hlookup(R8,H$24:AG$25,2)</td><td>89</td><td>47</td><td>=D8+E8</td><td>=int(F8/2)</td><td>=if(F8>=140,"◯","✕")</td><td></td><td></td><td class="empty"></td><td>=int(B8/1000)</td><td>=int((B8-L8*1000)/100)</td><td>=int((B8-L8*1000-M8*100)/10)</td><td>=B8-L8*1000-M8*100-N8*10</td><td>=sum(L8:O8)</td><td>=P8^2</td><td>=Q8-int(Q8/26)*26</td></tr>
                <tr><td>9827</td><td>=hlookup(R9,H$24:AG$25,2)</td><td>18</td><td>57</td><td>=D9+E9</td><td>=int(F9/2)</td><td>=if(F9>=140,"◯",if(F9>=120,"△","✕"))</td><td></td><td></td><td class="empty"></td><td>=int(B9/1000)</td><td>=int((B9-L9*1000)/100)</td><td>=int((B9-L9*1000-M9*100)/10)</td><td>=B9-L9*1000-M9*100-N9*10</td><td>=sum(L9:O9)</td><td>=P9^2</td><td>=Q9-int(Q9/26)*26</td></tr>
                <tr><td>9844</td><td>=hlookup(R10,H$24:AG$25,2)</td><td>25</td><td>42</td><td>=D10+E10</td><td>=int(F10/2)</td><td>=if(F10>=140,"◯",if(F10>=120,"△","✕"))</td><td></td><td></td><td class="empty"></td><td>=int(B10/1000)</td><td>=int((B10-L10*1000)/100)</td><td>=int((B10-L10*1000-M10*100)/10)</td><td>=B10-L10*1000-M10*100-N10*10</td><td>=sum(L10:O10)</td><td>=P10^2</td><td>=Q10-int(Q10/26)*26</td></tr>
                <tr><td>9861</td><td>=hlookup(R11,H$24:AG$25,2)</td><td>16</td><td>87</td><td>=D11+E11</td><td>=int(F11/2)</td><td>=VLOOKUP(F11,D$24:E$26,2)</td><td></td><td></td><td class="empty"></td><td>=int(B11/1000)</td><td>=int((B11-L11*1000)/100)</td><td>=int((B11-L11*1000-M11*100)/10)</td><td>=B11-L11*1000-M11*100-N11*10</td><td>=sum(L11:O11)</td><td>=P11^2</td><td>=Q11-int(Q11/26)*26</td></tr>
                <tr><td>9878</td><td>=hlookup(R12,H$24:AG$25,2)</td><td>33</td><td>82</td><td>=D12+E12</td><td>=int(F12/2)</td><td>=VLOOKUP(F12,D$24:E$26,2)</td><td></td><td></td><td class="empty"></td><td>=int(B12/1000)</td><td>=int((B12-L12*1000)/100)</td><td>=int((B12-L12*1000-M12*100)/10)</td><td>=B12-L12*1000-M12*100-N12*10</td><td>=sum(L12:O12)</td><td>=P12^2</td><td>=Q12-int(Q12/26)*26</td></tr>
                <tr><td>9895</td><td>=hlookup(R13,H$24:AG$25,2)</td><td>73</td><td>97</td><td>=D13+E13</td><td>=int(F13/2)</td><td>=VLOOKUP(F13,D$24:E$26,2)</td><td></td><td></td><td class="empty"></td><td>=int(B13/1000)</td><td>=int((B13-L13*1000)/100)</td><td>=int((B13-L13*1000-M13*100)/10)</td><td>=B13-L13*1000-M13*100-N13*10</td><td>=sum(L13:O13)</td><td>=P13^2</td><td>=Q13-int(Q13/26)*26</td></tr>
                <tr><td>9912</td><td>=hlookup(R14,H$24:AG$25,2)</td><td>78</td><td>57</td><td>=D14+E14</td><td>=int(F14/2)</td><td>=VLOOKUP(F14,D$24:E$26,2)</td><td></td><td></td><td class="empty"></td><td>=int(B14/1000)</td><td>=int((B14-L14*1000)/100)</td><td>=int((B14-L14*1000-M14*100)/10)</td><td>=B14-L14*1000-M14*100-N14*10</td><td>=sum(L14:O14)</td><td>=P14^2</td><td>=Q14-int(Q14/26)*26</td></tr>
                <tr><td>9929</td><td>=hlookup(R15,H$24:AG$25,2)</td><td>39</td><td>67</td><td>=D15+E15</td><td>=int(F15/2)</td><td>=VLOOKUP(F15,D$24:E$26,2)</td><td></td><td></td><td class="empty"></td><td>=int(B15/1000)</td><td>=int((B15-L15*1000)/100)</td><td>=int((B15-L15*1000-M15*100)/10)</td><td>=B15-L15*1000-M15*100-N15*10</td><td>=sum(L15:O15)</td><td>=P15^2</td><td>=Q15-int(Q15/26)*26</td></tr>
                <tr><td>9946</td><td>=hlookup(R16,H$24:AG$25,2)</td><td>88</td><td>79</td><td>=D16+E16</td><td>=int(F16/2)</td><td>=VLOOKUP(F16,D$24:E$26,2)</td><td></td><td></td><td class="empty"></td><td>=int(B16/1000)</td><td>=int((B16-L16*1000)/100)</td><td>=int((B16-L16*1000-M16*100)/10)</td><td>=B16-L16*1000-M16*100-N16*10</td><td>=sum(L16:O16)</td><td>=P16^2</td><td>=Q16-int(Q16/26)*26</td></tr>
                <tr><td colspan="2">平均</td><td>=int(average(D6:D16)+0.5)</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td colspan="2">最大値</td><td>=MAX(D6:D16)</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td colspan="2">最小値</td><td>=MIN(D6:D16)</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td colspan="2">受験者数</td><td>=count(D6:D16)</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td colspan="2"></td><td></td><td>合格者平均</td><td>=AVERAGEIF(H6:H16,"◯",F6:F16)</td><td>合格者数</td><td>=COUNTIF(H6:H16,"◯")</td><td></td><td></td></tr>
                <tr></tr>
                <tr><td class="empty"></td><td class="empty"></td><td>合計</td><td>合否</td></tr>
                <tr><td class="empty"></td><td class="empty"></td><td>0</td><td>✕</td><td class="empty"></td><td>数字</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td></tr>
                <tr><td class="empty"></td><td class="empty"></td><td>120</td><td>△</td><td class="empty"></td><td>ABC</td><td>Z</td><td>A</td><td>B</td><td>C</td><td>D</td><td>E</td><td>F</td><td>G</td><td>H</td><td>I</td><td>J</td><td>K</td><td>L</td><td>M</td><td>N</td><td>O</td><td>P</td><td>Q</td><td>R</td><td>S</td><td>T</td><td>U</td><td>V</td><td>W</td><td>X</td><td>Y</td></tr>
                <tr><td class="empty"></td><td class="empty"></td><td>140</td><td>◯</td></tr>
            </table>`;
        }else if(homework==="表計算統計"){
            document.getElementById("answer").innerHTML=
            `<h2 style="color: red;">筆記偏差²等のタイトルは適当につけています。一人一人違うはずなので少しでもいいので変えてください。</h2>
            <h3>完全に一致したときにバレます。</h3>
            <h2 style="color:red">絶対にコピペしないでください。参考にする程度にとどめてください。</h2>
            <h3>字体や枠線などが変更され非常にめんどくさくなります。</h3>
            <table>
                <tr><td class="empty"></td><td class="empty"></td><td>クラス：</td><td>${classNumber}</td><td>氏名（性）</td><td colspan="4">${firstname}</td><td class="empty"></td><td>0</td><td colspan="3">点はいないとした分布</td><td>筆記</td><td>実技</td></tr>
                <tr><td class="empty"></td><td class="empty"></td><td>出席番号：</td><td>${number}</td><td>氏名（名）</td><td colspan="4">${secondname}</td><td class="empty"></td><td>91</td><td>〜</td><td>100</td><td>点</td><td>=countif(D$6:D$16,">="&L2)</td><td>=countif(E$6:E$16,">="&L2)</td></tr>
                <tr><td class="empty"></td><td class="empty"></td><td>番号氏名：</td><td colspan="6">=E1*100+E2&G1&G2</td><td class="empty"></td><td>81</td><td>〜</td><td>90</td><td>点</td><td>=countif(D$6:D$16,">="&L3)-countif(D$6:D$16,">="&L2)</td><td>=countif(E$6:E$16,">="&L3)-countif(E$6:E$16,">="&L2)</td></tr>
                <tr><td class="empty"></td><td class="empty"></td><td class="empty"></td><td class="empty"></td><td class="empty"></td><td class="empty"></td><td class="empty"></td><td class="empty"></td><td class="empty"></td><td class="empty"></td><td>71</td><td>〜</td><td>80</td><td>点</td><td>=countif(D$6:D$16,">="&L4)-countif(D$6:D$16,">="&L3)</td><td>=countif(E$6:E$16,">="&L4)-countif(E$6:E$16,">="&L3)</td></tr>
                <tr><td colspan="2">受験番号</td><td>筆記試験</td><td>実技試験</td><td>筆記偏差²</td><td>実技²</td><td>偏差の積</td><td>筆偏差値</td><td>実偏差値</td><td class="empty"></td><td>61</td><td>〜</td><td>70</td><td>点</td><td>=countif(D$6:D$16,">="&L5)-countif(D$6:D$16,">="&L4)</td><td>=countif(E$6:E$16,">="&L5)-countif(E$6:E$16,">="&L4)</td></tr>
                <tr><td>9776</td><td>I</td><td>16</td><td>24</td><td>=(D6-D$17)^2</td><td>=E6^2</td><td>=(D6-D$17)*(E6-E$17)</td><td>=round(10*(D6-D$17)/D$26+50,1)</td><td>=round(10*(E6-E$17)/E$26+50,1)</td><td class="empty"></td><td>51</td><td>〜</td><td>60</td><td>点</td><td>=countif(D$6:D$16,">="&L6)-countif(D$6:D$16,">="&L5)</td><td>=countif(E$6:E$16,">="&L6)-countif(E$6:E$16,">="&L5)</td></tr>
                <tr><td>9793</td><td>D</td><td>47</td><td>76</td><td>=(D7-D$17)^2</td><td>=E7^2</td><td>=(D7-D$17)*(E7-E$17)</td><td>=round(10*(D7-D$17)/D$26+50,1)</td><td>=round(10*(E7-E$17)/E$26+50,1)</td><td class="empty"></td><td>41</td><td>〜</td><td>50</td><td>点</td><td>=countif(D$6:D$16,">="&L7)-countif(D$6:D$16,">="&L6)</td><td>=countif(E$6:E$16,">="&L7)-countif(E$6:E$16,">="&L6)</td></tr>
                <tr><td>9810</td><td>L</td><td>89</td><td>47</td><td>=(D8-D$17)^2</td><td>=E8^2</td><td>=(D8-D$17)*(E8-E$17)</td><td>=round(10*(D8-D$17)/D$26+50,1)</td><td>=round(10*(E8-E$17)/E$26+50,1)</td><td class="empty"></td><td>31</td><td>〜</td><td>40</td><td>点</td><td>=countif(D$6:D$16,">="&L8)-countif(D$6:D$16,">="&L7)</td><td>=countif(E$6:E$16,">="&L8)-countif(E$6:E$16,">="&L7)</td></tr>
                <tr><td>9827</td><td>Z</td><td>18</td><td>57</td><td>=(D9-D$17)^2</td><td>=E9^2</td><td>=(D9-D$17)*(E9-E$17)</td><td>=round(10*(D9-D$17)/D$26+50,1)</td><td>=round(10*(E9-E$17)/E$26+50,1)</td><td class="empty"></td><td>21</td><td>〜</td><td>30</td><td>点</td><td>=countif(D$6:D$16,">="&L9)-countif(D$6:D$16,">="&L8)</td><td>=countif(E$6:E$16,">="&L9)-countif(E$6:E$16,">="&L8)</td></tr>
                <tr><td>9844</td><td>A</td><td>25</td><td>42</td><td>=(D10-D$17)^2</td><td>=E10^2</td><td>=(D10-D$17)*(E10-E$17)</td><td>=round(10*(D10-D$17)/D$26+50,1)</td><td>=round(10*(E10-E$17)/E$26+50,1)</td><td class="empty"></td><td>11</td><td>〜</td><td>20</td><td>点</td><td>=countif(D$6:D$16,">="&L10)-countif(D$6:D$16,">="&L9)</td><td>=countif(E$6:E$16,">="&L10)-countif(E$6:E$16,">="&L9)</td></tr>
                <tr><td>9861</td><td>D</td><td>16</td><td>87</td><td>=(D11-D$17)^2</td><td>=E11^2</td><td>=(D11-D$17)*(E11-E$17)</td><td>=round(10*(D11-D$17)/D$26+50,1)</td><td>=round(10*(E11-E$17)/E$26+50,1)</td><td class="empty"></td><td>1</td><td>〜</td><td>10</td><td>点</td><td>=countif(D$6:D$16,">="&L11)-countif(D$6:D$16,">="&L10)</td><td>=countif(E$6:E$16,">="&L11)-countif(E$6:E$16,">="&L10)</td></tr>
                <tr><td>9878</td><td>J</td><td>33</td><td>82</td><td>=(D12-D$17)^2</td><td>=E12^2</td><td>=(D12-D$17)*(E12-E$17)</td><td>=round(10*(D12-D$17)/D$26+50,1)</td><td>=round(10*(E12-E$17)/E$26+50,1)</td><td class="empty"></td><td colspan="4">合計（受験者数）</td><td>=sum(P2:P11)</td><td>=sum(Q2:Q11)</td></tr>
                <tr><td>9895</td><td>Y</td><td>73</td><td>97</td><td>=(D13-D$17)^2</td><td>=E13^2</td><td>=(D13-D$17)*(E13-E$17)</td><td>=round(10*(D13-D$17)/D$26+50,1)</td><td>=round(10*(E13-E$17)/E$26+50,1)</td><td class="empty"></td><td class="empty"></td><td class="empty"></td><td class="empty"></td><td class="empty"></td><td class="empty"></td><td class="empty"></td></tr>
                <tr><td>9912</td><td>Y</td><td>78</td><td>57</td><td>=(D14-D$17)^2</td><td>=E14^2</td><td>=(D14-D$17)*(E14-E$17)</td><td>=round(10*(D14-D$17)/D$26+50,1)</td><td>=round(10*(E14-E$17)/E$26+50,1)</td><td class="empty"></td><td colspan="3"></td><td colspan="3">相関関係の有無</td></tr>
                <tr><td>9929</td><td>I</td><td>39</td><td>67</td><td>=(D15-D$17)^2</td><td>=E15^2</td><td>=(D15-D$17)*(E15-E$17)</td><td>=round(10*(D15-D$17)/D$26+50,1)</td><td>=round(10*(E15-E$17)/E$26+50,1)</td><td class="empty"></td><td>-1.0</td><td>〜</td><td>-0.7</td><td colspan="3">強い負の相関関係</td></tr>
                <tr><td>9946</td><td>D</td><td>88</td><td>79</td><td>=(D16-D$17)^2</td><td>=E16^2</td><td>=(D16-D$17)*(E16-E$17)</td><td>=round(10*(D16-D$17)/D$26+50,1)</td><td>=round(10*(E16-E$17)/E$26+50,1)</td><td class="empty"></td><td>-0.7</td><td>〜</td><td>-0.4</td><td colspan="3">負の相関関係</td></tr>
                <tr><td colspan="2">平均点</td><td>=AVERAGE(D6:D16)</td><td>=AVERAGE(E6:E16)</td><td>=AVERAGE(F6:F16)</td><td>=average(G6:G16)</td><td>=average(H6:H16)</td><td>=AVERAGE(I6:I16)</td><td>=AVERAGE(J6:J16)</td><td class="empty"></td><td>-0.4</td><td>〜</td><td>-0.2</td><td colspan="3">弱い負の相関関係</td></tr>
                <tr><td colspan="2">最大値</td><td>=large(D6:D16,1)</td><td>=quartile.inc(E6:E16,4)</td><td></td><td></td><td></td><td></td><td></td><td class="empty"></td><td>-0.2</td><td>〜</td><td>0.2</td><td colspan="3">相関関係はない</td></tr>
                <tr><td colspan="2">最小値</td><td>=small(D6:D16,1)</td><td>=QUARTILE.INC(E6:E16,0)</td><td></td><td></td><td></td><td></td><td></td><td class="empty"></td><td>0.2</td><td>〜</td><td>0.4</td><td colspan="3">弱い正の相関関係</td></tr>
                <tr><td colspan="2"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td class="empty"></td><td>0.4</td><td>〜</td><td>0.7</td><td colspan="3">正の相関関係あり</td></tr>
                <tr><td colspan="2">最頻値</td><td>=mode(D6:D16)</td><td>=mode(E6:E16)</td><td></td><td></td><td></td><td></td><td></td><td class="empty"></td><td>0.7</td><td>〜</td><td>1.0</td><td colspan="3">強い正の相関関係</td></tr>
                <tr><td colspan="2">中央値</td><td>=median(D6:D16)</td><td>=QUARTILE.INC(E6:E16,2)</td><td></td><td></td><td></td><td></td><td></td><td class="empty"></td><td colspan="3" class="empty"></td><td colspan="3" class="empty"></td></tr>
                <tr><td colspan="2">第一四分位数</td><td>=quartile.inc(D6:D16,1)</td><td>=quartile.inc(E6:E16,1)</td><td></td><td></td><td></td><td></td><td></td><td class="empty"></td><td colspan="3"></td><td colspan="3">相関関係の有無</td></tr>
                <tr><td colspan="2">第三四分位数</td><td>=quartile.inc(D6:D16,3)</td><td>=quartile.inc(E6:E16,3)</td><td></td><td></td><td></td><td></td><td></td><td class="empty"></td><td>0.0</td><td>〜</td><td>0.2</td><td colspan="3">相関関係はない</td></tr>
                <tr><td colspan="2">分散</td><td>=varp(D6:D16)</td><td>=G17-E17^2</td><td></td><td></td><td></td><td></td><td></td><td class="empty"></td><td>0.2</td><td>〜</td><td>0.4</td><td colspan="3">弱い</td></tr>
                <tr><td colspan="2">標準偏差</td><td>=round(sqrt(D25),1)</td><td>=round(Stdev.p(E6:E16),1)</td><td></td><td></td><td></td><td></td><td></td><td class="empty"></td><td>0.4</td><td>〜</td><td>0.7</td><td colspan="3"></td></tr>
                <tr><td colspan="2">相関係数</td><td>=H17/(D25^0.5*E25^0.5)</td><td>=correl(D6:D16,E6:E16)</td><td colspan="2">=vlookup(D27,L15:Q21,4)</td><td colspan="2">=if(E27>0.2,vlookup(E27,L24:Q27,4)&"正の相関関係",if(E27<-0.2,vlookup(-E27,L24:Q27,4)&"負の相関関係",O24))</td><td></td><td class="empty"></td><td>0.7</td><td>〜</td><td>1.0</td><td colspan="3">強い</td></tr>
            </table>`;
        }
    }
}

let button = document.getElementById("button");
button.onclick=copyAnswer;

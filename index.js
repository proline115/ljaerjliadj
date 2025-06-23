function copyAnswer(){
    const old = document.getElementById("old").value;
    const grade = document.getElementById("grade").value;
    const classNumber = document.getElementById("classNumber").value;
    const number = document.getElementById("number").value;
    const name = document.getElementById("name").value;
    const homework = document.getElementById("homework").value;
    if(old===""||grade===""||classNumber===""||number===""||name===""||homework===""){
        document.getElementById("answer").style.display="none";
    }else{
        document.getElementById("answer").style.display="block";
        if(homework==="index.html"){
            document.getElementById("answer").innerHTML=
            `
            &lt;!DOCTYPE html&gt;<br>
&lt;html&gt;<br>
    &lt;head&gt;<br>
        &lt;title&gt;${grade}年${classNumber}組${number}番${name}&lt;/title&gt;<br>
        &lt;meta charset="utf-8"&gt;<br>
        &lt;link rel="stylesheet" type="text/css" href="${name} - style${old}.css"&gt;<br>
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
            &lt;tr&gt;&lt;td&gt;&lt;a href="${name} - kotonara${old}.html"&gt;古都奈良の文化財&lt;/a&gt;&lt;/td&gt;&lt;td&gt;1998年&lt;/td&gt;&lt;/tr&gt;<br>
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
`
        }else if(homework==="kotonara.html"){
            document.getElementById("answer").innerHTML=
            `&lt;!DOCTYPE html&gt;<br>
&lt;html lang="ja"&gt;<br>
&lt;head&gt;<br>
    &lt;meta charset="utf-8"&gt;<br>
    &lt;title&gt;${grade}年${classNumber}組${number}番${name}&lt;/title&gt;<br>
    &lt;link rel="stylesheet" type="text/css" href="${name} - style${old}.css"&gt;<br>
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
`
        }else if(homework==="表計算D17（自分で考えるところ）"){
            document.getElementById("answer").innerHTML=
            `=if(AVERAGE(D6:D16)-int(average(D6:D16))<0.5,int(average(D6:D16)),int(average(D6:D16))+1)<br>
            不等号の部分は移行しても成り立つため、差別化したい場合は移行した式を書いてください。`
        }
    }
}

let button = document.getElementById("button");
button.onclick=copyAnswer;

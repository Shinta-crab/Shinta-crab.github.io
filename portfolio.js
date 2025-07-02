// navを押すとその記載部までオートスクロール
  const track = document.getElementById('slider-track');
  const images = Array.from(track.querySelectorAll('img'));
  const imageWidth = 600;

  // 1. 最初と最後の画像をクローンして追加
  const firstClone = images[0].cloneNode(true);
  const lastClone = images[images.length - 1].cloneNode(true);
  track.appendChild(firstClone);
  track.insertBefore(lastClone, images[0]);

  let currentIndex = 1; // クローンの後ろ（本物の1枚目）
  const totalSlides = images.length + 2; // クローン込み

  // 2. 初期位置をセット（1番目に）
  track.style.transform = `translateX(-${imageWidth * currentIndex}px)`;

  function nextSlide() {
    currentIndex++;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${imageWidth * currentIndex}px)`;

    // 3. 最後のクローンに到達したら、瞬時に本物の最初へ巻き戻し
    setTimeout(() => {
      if (currentIndex === totalSlides - 3) {
        track.style.transition = 'none';
        currentIndex = 1;
        track.style.transform = `translateX(-${imageWidth * currentIndex}px)`;
      }
    }, 510);
  }

  setInterval(nextSlide, 3000);

// 全ての nav 内のリンクを取得（配列としてデータ取得）
const navLinks = document.querySelectorAll('nav a');
//各リンクにクリックイベント付与
const headerOffset = 80; // 固定ヘッダーの高さなど

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const top = targetElement.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    }
  });
});

// Document取得
const profile = document.getElementById('profileDetail');
// changeProfileで表示を切り替えたい内容を変数として定義
const profileText = [
    `名前：シンタ
    性別：男
    年齢：31歳
    出身地：埼玉県
    家族構成：妻、子(2才、0才)、2匹の亀
    職業：(現)自動車機械設計エンジニア → web開発系エンジニアへの転職に向け活動中
    
    さらなる詳細経歴 / なぜ未経験エンジニア転職するのか？気になった方は`,
    `経歴：
    
     2016年_芝浦工業大学_工学部卒業
     2018年_東京工業大学（現東京科学大学）_材料工学専攻卒業
     2025年(現在)まで自動車会社の機械設計エンジニアとして自動車の部品の設計開発に従事。

    なぜ未経験エンジニア転職にチャレンジするのか？：

     入社2、3年経ってもスキルUPの実感が得られない。
     かつ、なりたいキャリアビジョンが現職でイメージできない。
     これらを常に感じながらも生活のために、そのためだけに仕事をしていた。

     そんな特別モチベが特に上がらない働き方をしていた中で、
     一人目の子供が生まれ子育て＋仕事の両立を迫られ、二人目も生まれた。
     場所時間に縛られながらの働き方では自分のなりたい夫、父親になれないと感じ、転職を考えた。
     
     妻の何気ない『SEとかどうなの？』から一回見てみるかという軽い気持ちで調べ出し、
     プログラミングというものに目を向けるようになった。
     （それまでは存在は知っているけど自分には縁のないものくらいに思ってた）
     
     実際にHTML＆CSS＆Javasciptのコーディングをしていくと
     実際に自分の作ったものが動作することに面白さを感じた。
     何より、できるできないがすぐ見てわかるというのが自己成長を実感できるのを感じた。
     (自動車部品だと構想→設計製図した後に実際のものができるまでは３ヶ月とか長いと６〜９ヶ月かかる。
     自分の作ったものの良し悪しの検証できる状態になるまでに時間がかかる。
     自動車という形で世に製品として出るまで３〜５年かかる。
     成長を実感できるようになるまでにものすごい時間かかる。）
     
     またエンジニアという職業は場所に対しての縛りがほぼない。
     働き方の自由度が高い（私事都合によるリモートワークへの理解度が高い。）
     
     そんな『自己成長実感』＋『働き方自由度』の観点から自分の理想に最も近い職業だということがわかった。
     理想の自分、夫、父親を目指して頑張ります。！！！
`];
// Profileの内容をクリック回数に応じて表示内容を変更
const $clickBtn = document.getElementById('clickBtn');
let count = 1;
$clickBtn.addEventListener('click', () => {
    count ++; 
// クリック回数が奇数ではtext[0]を表示。クリック回数が偶数ならtext[1]を表示する。
    if (count % 2 === 0){
        profile.innerHTML = profileText[1].replace(/\n/g, '<br>');
    }else{
        profile.innerHTML = profileText[0].replace(/\n/g, '<br>');
    }
}); 
const Discord = require("discord.js");
const { Client, Attachment } = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
  // 간다드래프트 소환
  if (msg.content === "/간다드래프트") {
    if (!msg.guild) return;
        if (msg.member.voiceChannel) {
          msg.member.voiceChannel.join()
            .then(connection => {
              msg.reply("오오오오오오!!! 간다아!!! 드래프트!!!!!!!!");
              const dispatcher = connection.playFile("드래프트.mp3");
              dispatcher.on('end', reason => {
                   connection.disconnect();
              });
            })
            .catch(console.log);
        } else {
          msg.reply("널 따라갈건데 너가 보이스채널에 없어.");
        }
    }
  if (msg.content === '!명령어') {
      somelib.somefunc();
    msg.reply('\n!조합\n!버전');
    // 이미지출력
    // const attachment = new Attachment('주소');
    // msg.channel.send(attachment);
  }
  if (msg.content === '!조합') {
    msg.reply('\n히든 / 초월 / 불멸 / 영원 / 제한 \n랜덤유닛 / 특수유닛');
  } else if (msg.content === '!버전') {
    msg.reply('2019-09-16 (버전 1.1) 간다드래프트 추가');
  }

  // 원랜디 흔한조합식
  if (msg.content === '!히든') {
    msg.reply('\n피셔타이거\n반더데켄\n이완코브\n킨에몬\n사보\n레베카\n코알라\n캐럿\n \n아카이누\n아오키지\n베르고\n \n검호 미호크\n킬러\n봉쿠레\n류마\n시류\n페로나\n \n써니호\n모비딕호\n발라티에\n방주맥심\n레드포스호');
  } else if (msg.content === '!초월') {
    msg.reply('\n루피\n조로\n나미\n우솝\n상디\n쵸파\n로빈\n프랑키\n브룩\n시라호시\n아카이누\n아오키지\n키자루\n검은수염\n샹크스\n로우\n도플라밍고\n사보\n후지토라\n타시기\n빅맘\n루치');
  } else if (msg.content === '!불멸') {
    msg.reply('\n로져\n레일리\n스코퍼 가반\n거프\n흰수염\n센고쿠\n시키\n드래곤\n제트');
  } else if (msg.content === '!영원') {
    msg.reply('\n에이스\n핸콕\n카번딧슈\n버기\n비비\n미호크');
  } else if (msg.content === '!제한') {
    msg.reply('\n크로커다일\n에넬 G.O.D\n레드필드\n레베카\n아인\n카타쿠리');
  }

// 히든 기타
  if (msg.content === '!피셔타이거') {
      somelib.somefunc();
      msg.reply('피셔타이거조합(tiger):	반더데켄 / 핸콕 / 파이러츠도킹5 / 레일리');
      msg.reply('⇒총갯수 : 루피 x8 / 나미 x7 / 총병 x5 / 조로 x3 / 우솝 x2 / 칼병 x2 / 상디 / 쵸파 / 버기');

  } else if (msg.content === '!반더데켄') {
      const attachment = new Attachment('./원랜디/히든/반더데켄.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('반더데켄조합(decken):	반더데켄 / 검은수염 / 아론 / 해적선');
      msg.reply('⇒총갯수 : 총병 x8 / 루피 x6 / 나미 x5 / 칼병 x5 / 쵸파 x4 / 조로 x2 / 우솝 x2 / 상디 / 버기');

  } else if (msg.content === '!이완코브') {
      const attachment = new Attachment('./원랜디/히든/이완코브.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('이완코브조합(ivankov):	이완코브 / 크로커다일 MR.0 / 버기 마기탄 / 봉쿠레');
      msg.reply('⇒총갯수 : 상디 x8 / 나미 x6 / 우솝 x6 / 버기 x6 / 조로 x4 / 루피 x3 / 칼병 x2 / 쵸파 / 총병');

  } else if (msg.content === '!킨에몬') {
      const attachment = new Attachment('./원랜디/히든/킨에몬.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('킨에몬조합(kinemon):	킨에몬 / 조로 현상금 사냥꾼 / 키드 초신성');
      msg.reply('⇒총갯수 : 조로 x7 / 총병 x5 / 쵸파 x4 / 루피 x3 / 나미 x3 / 칼병 x3 / 버기 x3 / 상디 x2 / 우솝');

  } else if (msg.content === '!사보') {
      const attachment = new Attachment('./원랜디/히든/사보.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('사보조합(sabo):	마인 오즈 / 로우 / 사보');
      msg.reply('⇒총갯수 : 루피 x9 / 조로 x8 / 쵸파 x8 / 상디 x6 / 총병 x4 / 우솝 x3 / 버기 x2 / 나미 / 칼병');

  } else if (msg.content === '!레베카') {
      const attachment = new Attachment('./원랜디/히든/레베카.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('레베카조합(rebecca):	바제스 / 루피 기어써드 / 로빈 + 확장팩');
      msg.reply('⇒총갯수 : 루피 x5 / 상디 x5 / 총병 x5 / 나미 x4 / 버기 x4 / 우솝 x3 / 조로 / 쵸파');

  } else if (msg.content === '코알라') {
      const attachment = new Attachment('./원랜디/히든/코알라.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('코알라조합(koala):	징베 / 비비 / 로빈 + 확장팩');
      msg.reply('⇒총갯수 : 루피 x9 / 우솝 x9 / 총병 x8 / 나미 x7 / 조로 x5 / 상디 x5 / 쵸파 x5 / 칼병 x5 / 버기 x5');

  } else if (msg.content === '!캐럿') {
      const attachment = new Attachment('./원랜디/히든/캐럿.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('캐럿조합(carrot): 가드포인트 / 에넬 / 압살롬 x2 / 레일리');
      msg.reply('⇒총갯수 :상디 x5 / 쵸파 x5 / 조로 x3 / 루피 x2 / 우솝 x2 / 칼병 x2 / 총병 / 버기');
  }
// 히든 해군
  if (msg.content === '!아카이누') {
      const attachment = new Attachment('./원랜디/히든/아카이누.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('아카이누조합(akainu): 아카이누 / 반더데켄 / 캡틴 키드');
      msg.reply('⇒총갯수 : 루피 x6 / 나미 x6 / 총병 x6 / 조로 x5 / 버기 x5 / 우솝 x4 / 상디 x3 / 쵸파 x3 / 칼병 x3');

  } else if (msg.content === '!아오키지') {
      const attachment = new Attachment('./원랜디/히든/아오키지.png');
      msg.channel.send(`${msg.author},`, attachment);
      msg.reply('아오키지조합(aokiji): 아오키지 / 다이아몬드 죠즈 / 모몬가');
      msg.reply('⇒총갯수 : 쵸파 x7 / 나미 x6 / 칼병 x6 / 상디 x5 / 루피 x4 / 우솝 x4 / 총병 x4 / 조로 x3 / 버기 x2');

  } else if (msg.content === '!베르고') {
      msg.reply('베르고조합(vergo): 상디 디아블잠브 / 킨에몬 / 바르톨로메오 / 타시기');
      msg.reply('⇒총갯수 : 총병 x8 / 루피 x6 / 나미 x6 / 조로 x5 / 상디 x5 / 칼병 x5 / 쵸파 x4 / 우솝 x3 / 버기 x3');
  }

  // 히든 해적
});

client.login(process.env.BOT_TOKEN);


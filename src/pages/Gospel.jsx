// Gospel.jsx - Complete with rich content from PDF

import Section from '../components/Section';
import adamAndEve from '../assets/images/adamAndEve.png'; // Update path as needed
import jesusPicture from '../assets/images/jesusPicture.png'; // Update path as needed
import itIsFinished from '../assets/images/itIsFinished.png'; // Update path as needed
import jerusalem from '../assets/images/jerusalem.jpg'; // Update path as needed
import gospelAudio from '../assets/audio/Gospel.wav';

const subtopics = [
  {
    title: 'Adam\'s Sin - Our Problem',
    intro: 'Before we can understand the Good News, we first need to understand the bad news—the problem that makes the Gospel necessary.',
    sections: [
      {
        type: 'paragraph',
        content: 'Humanity wasn\'t created broken. In the beginning, everything God made was good. But something happened that changed everything—The Fall.'
      },
      {
        type: 'heading',
        content: 'The Fall - When Everything Broke'
      },
      {
        type: 'paragraph',
        content: 'In the Garden of Eden, God gave Adam and Eve everything they needed—life, love, purpose, and fellowship with Him. He gave them one command: not to eat from the tree of the knowledge of good and evil (Genesis 2:16-17).'
      },
      {
        type: 'paragraph',
        content: 'But tempted by the serpent, they chose to disobey.'
      },
      {
        type: 'verse',
        text: 'When you eat from it, you will certainly die.',
        reference: 'Genesis 2:17'
      },
      {
        type: 'paragraph',
        content: 'Their act of disobedience wasn\'t just breaking a rule—it was breaking trust with the God who made them. Sin entered the world, and with it came death, pain, and separation from God.'
      },
      {
        type: 'verse',
        text: 'Therefore, just as sin came into the world through one man, and death through sin, and so death spread to all men because all sinned.',
        reference: 'Romans 5:12'
      },
      {
        type: 'heading',
        content: 'Human Nature - We Are All Affected'
      },
      {
        type: 'paragraph',
        content: 'From that moment on, every person has been born into sin. We don\'t become sinners because we sin—we sin because we are sinners by nature.'
      },
      {
        type: 'verse',
        text: 'Surely I was sinful at birth, sinful from the time my mother conceived me.',
        reference: 'Psalm 51:5'
      },
      {
        type: 'paragraph',
        content: 'And this isn\'t just a few bad actions—it\'s a condition of the heart. We want our own way. We resist God\'s rule.'
      },
      {
        type: 'verse',
        text: 'For all have sinned and fall short of the glory of God.',
        reference: 'Romans 3:23'
      },
      {
        type: 'paragraph',
        content: 'Sin touches everything—our thoughts, desires, relationships, and even our best intentions.'
      },
      {
        type: 'heading',
        content: 'Separation from God - The Greatest Loss'
      },
      {
        type: 'paragraph',
        content: 'The worst consequence of sin isn\'t pain or death—it\'s separation from God.'
      },
      {
        type: 'verse',
        text: 'Your iniquities have separated you from your God; your sins have hidden his face from you so that he will not hear.',
        reference: 'Isaiah 59:2'
      },
      {
        type: 'paragraph',
        content: 'Sin creates a barrier between us and the One who is life itself. We are spiritually dead—unable to save ourselves or bridge the gap.'
      },
      {
        type: 'reflection',
        content: 'No amount of good works, religion, or self-improvement can undo the fall. Humanity\'s deepest problem is not lack of knowledge or progress—it\'s a broken relationship with our Creator.'
      },
      {
        type: 'callout',
        content: 'Before anyone can truly grasp the joy of salvation, they must first understand their need for it. The story of Adam\'s sin isn\'t just ancient history—it\'s the story of every human heart. But the story doesn\'t end there. Into this darkness, God Himself stepped in.'
      }
    ],
    image: adamAndEve,
    audio: null
  },
  {
    title: 'Jesus\' Sacrifice - God\'s Solution',
    intro: 'When humanity sinned, we broke something we could never fix. But God, rich in mercy, refused to leave us lost. Instead, He came Himself to rescue, redeem, and restore.',
    sections: [
      {
        type: 'paragraph',
        content: 'This is the story of Jesus Christ, the center of all history and the center of our hope.'
      },
      {
        type: 'heading',
        content: 'The Incarnation - God Became Man'
      },
      {
        type: 'paragraph',
        content: 'The rescue began not with a warrior or a law, but with a baby in a manger.'
      },
      {
        type: 'verse',
        text: 'The Word became flesh and made his dwelling among us.',
        reference: 'John 1:14'
      },
      {
        type: 'paragraph',
        content: 'Jesus—God the Son—stepped into human history. He didn\'t stay distant, shouting instructions from heaven. He entered our pain, walked among sinners, and showed us what perfect love looks like.'
      },
      {
        type: 'bullets',
        items: [
          'He healed the sick.',
          'He forgave the guilty.',
          'He revealed the Father\'s heart to a world that had forgotten Him.'
        ]
      },
      {
        type: 'paragraph',
        content: 'God became one of us so He could save us.'
      },
      {
        type: 'heading',
        content: 'The Atoning Death - The Price of Sin Paid in Full'
      },
      {
        type: 'paragraph',
        content: 'Though Jesus lived a perfect, sinless life, He was betrayed, mocked, beaten, and nailed to a cross. But none of it was an accident. It was God\'s plan from the beginning—a sacrifice made out of love.'
      },
      {
        type: 'verse',
        text: 'He was pierced for our transgressions, He was crushed for our iniquities; the punishment that brought us peace was on Him, and by His wounds we are healed.',
        reference: 'Isaiah 53:5'
      },
      {
        type: 'paragraph',
        content: 'Jesus took our place. He bore the penalty our sins deserved—the righteous wrath of God against evil—so that we could be forgiven.'
      },
      {
        type: 'verse',
        text: 'For Christ also suffered once for sins, the righteous for the unrighteous, to bring you to God.',
        reference: '1 Peter 3:18'
      },
      {
        type: 'reflection',
        content: 'At the cross, justice and mercy met. Sin was punished, and sinners were offered grace.'
      },
      {
        type: 'heading',
        content: 'The Resurrection - Victory Over Sin and Death'
      },
      {
        type: 'paragraph',
        content: 'But the story didn\'t end in a tomb. Three days later, the stone was rolled away—and Jesus rose.'
      },
      {
        type: 'verse',
        text: 'Death has been swallowed up in victory. Where, O death, is your victory? Where, O death, is your sting?',
        reference: '1 Corinthians 15:54-55'
      },
      {
        type: 'paragraph',
        content: 'The resurrection is proof that:'
      },
      {
        type: 'bullets',
        items: [
          'Jesus truly defeated sin, death, and Satan.',
          'His sacrifice was accepted by God.',
          'There is real, unshakable hope for eternal life.'
        ]
      },
      {
        type: 'paragraph',
        content: 'Through Jesus, death no longer has the final word.'
      },
      {
        type: 'callout',
        content: 'Jesus didn\'t just die for the world—He died for you. He took your place so you could take His righteousness. At the cross, God shouted to the world: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future"'
      }
    ],
    image: jesusPicture,
    audio: null
  },
  {
    title: 'Saved by Grace Through Faith - Our Response',
    intro: 'God has done everything necessary for our salvation through Jesus Christ. Now, He invites us to respond—not with payment or performance, but with trust and surrender.',
    sections: [
      {
        type: 'paragraph',
        content: 'The Gospel is not a list of things to do; it\'s the announcement of what\'s already done. Our part is to receive it by faith.'
      },
      {
        type: 'heading',
        content: 'Grace - Salvation Is a Gift, Not a Reward'
      },
      {
        type: 'paragraph',
        content: 'Grace means undeserved favor. It\'s God giving us what we could never earn—forgiveness, love, and eternal life—simply because of His mercy.'
      },
      {
        type: 'verse',
        text: 'For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.',
        reference: 'Ephesians 2:8-9'
      },
      {
        type: 'paragraph',
        content: 'No amount of good deeds, rituals, or religious effort can make us right with God. Salvation is 100% His work, given freely to anyone who will receive it.'
      },
      {
        type: 'reflection',
        content: 'It humbles the proud and lifts the broken.'
      },
      {
        type: 'heading',
        content: 'Faith - Trusting Jesus Personally'
      },
      {
        type: 'paragraph',
        content: 'Grace is God\'s gift; faith is how we open our hands to receive it.'
      },
      {
        type: 'paragraph',
        content: 'Faith means more than believing facts about Jesus—it means trusting Him personally:'
      },
      {
        type: 'bullets',
        items: [
          'Trusting that His death was enough to pay for your sins.',
          'Trusting that His resurrection gives you new life.',
          'Turning from your old way (repentance) and placing your full hope in Him.'
        ]
      },
      {
        type: 'verse',
        text: 'If you confess with your mouth, "Jesus is Lord," and believe in your heart that God raised him from the dead, you will be saved.',
        reference: 'Romans 10:9-10'
      },
      {
        type: 'reflection',
        content: 'Faith is not about perfection—it\'s about direction. It\'s a daily choice to lean on Jesus, not ourselves.'
      },
      {
        type: 'heading',
        content: 'New Life - Transformed by the Holy Spirit'
      },
      {
        type: 'paragraph',
        content: 'When we put our faith in Jesus, something miraculous happens: God gives us a new heart, a new identity, and a new power to live differently.'
      },
      {
        type: 'verse',
        text: 'Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.',
        reference: '2 Corinthians 5:17'
      },
      {
        type: 'paragraph',
        content: 'The Holy Spirit comes to dwell in us, guiding, convicting, and empowering us to grow in love, truth, and holiness. We\'re no longer defined by our past—we belong to God\'s family.'
      },
      {
        type: 'callout',
        content: 'Grace means you don\'t have to try to earn what Jesus already bought for you. Faith means you can finally stop running and rest in what He\'s done. Salvation is not about working your way up to God—it\'s about God coming down to you, and inviting you to trust Him completely.'
      }
    ],
    image: itIsFinished,
    audio: null
  },
  {
    title: 'The Promised Land - Our Hope',
    intro: 'Every story of redemption points forward to the day when God\'s plan is complete and His people dwell with Him forever. That is the believer\'s ultimate hope—not just survival after death, but eternal life in the full presence of God.',
    sections: [
      {
        type: 'heading',
        content: 'Eternal Life - Dwelling with God Forever'
      },
      {
        type: 'paragraph',
        content: 'Jesus promised that for all who trust in Him, death is not the end—it\'s the doorway home.'
      },
      {
        type: 'verse',
        text: 'In my Father\'s house are many rooms... I go to prepare a place for you. And if I go and prepare a place for you, I will come again and will take you to myself, that where I am you may be also.',
        reference: 'John 14:2-3'
      },
      {
        type: 'paragraph',
        content: 'Heaven is not clouds and harps—it\'s the reality of being forever united with God in perfect love and peace. There will be no more fear, shame, or separation—only joy that never fades.'
      },
      {
        type: 'heading',
        content: 'A New Heaven and a New Earth - All Things Made New'
      },
      {
        type: 'paragraph',
        content: 'The Bible ends with a breathtaking vision: God doesn\'t abandon His creation—He renews it.'
      },
      {
        type: 'verse',
        text: 'Then I saw a new heaven and a new earth... He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.',
        reference: 'Revelation 21:1-5'
      },
      {
        type: 'paragraph',
        content: 'Evil, sorrow, and decay will be gone forever. The curse will be reversed. And God\'s people will live in a world made perfect—free, whole, and holy.'
      },
      {
        type: 'heading',
        content: 'Living with Purpose Now - Citizens of Heaven on Earth'
      },
      {
        type: 'paragraph',
        content: 'Our hope isn\'t just for "someday." Eternal life begins the moment we trust in Jesus.'
      },
      {
        type: 'verse',
        text: 'But our citizenship is in heaven, and we eagerly await a Savior from there, the Lord Jesus Christ.',
        reference: 'Philippians 3:20'
      },
      {
        type: 'paragraph',
        content: 'Because our future is secure, we live differently today—with purpose, peace, and compassion. We become ambassadors of the coming Kingdom:'
      },
      {
        type: 'bullets',
        items: [
          'Loving others as Christ loved us.',
          'Sharing the Gospel so others can know the same hope.',
          'Living as light in a dark world, pointing forward to the day when light will fill everything.'
        ]
      },
      {
        type: 'callout',
        content: 'The story ends—and begins again—with God dwelling with His people. That\'s the heartbeat of the Gospel: we were made for Him, redeemed by Him, and destined to be with Him forever. Every trial, every tear, and every act of faith is leading toward that day. Until then, we walk in hope—knowing the best is yet to come.'
      }
    ],
    image: jerusalem,
    audio: null
  }
];

function Gospel() {
  return (
    <Section 
      title="The Good News"
      intro="A Message of Hope and Redemption"
      subtopics={subtopics}
      audioFiles={[gospelAudio]}

    />
  );
}

export default Gospel;
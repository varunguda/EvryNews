import React from 'react'

import FirstSegment from '../elements/element-structures/first-segment'
import TenthSegment from '../elements/element-structures/tenth-segment'
import FooterSegment from '../elements/element-structures/footer'

export default function Sports({ category }) {

  const elements=[
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Barney Ronay",
      "title": "England’s Existential Cricket is not fun and carefree but therapy for years of cruelty | Barney Ronay",
      "description": "Bazball has been hailed as a joyous reinvention of how Test cricket is played but in reality it is an angry reaction to past painThis week I watched, in covert late night instalments, the entire day-by-day extended highlights of England’s 1994 five-Test tour …",
      "url": "https://www.theguardian.com/sport/blog/2023/jun/09/englands-existential-cricket-is-not-fun-and-carefree-but-therapy-for-years-of-cruelty",
      "urlToImage": "https://i.guim.co.uk/img/media/5d5acd2a76eda49c2fd8356cf1c7a0282d5af9ab/33_0_2307_1384/master/2307.png?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=b3f90acc46c034cb0be16163e2702b53",
      "publishedAt": "2023-06-09T17:00:58Z",
      "content": "This week I watched, in covert late night instalments, the entire day-by-day extended highlights of Englands 1994 five-Test tour of the West Indies. This wasnt meant to happen. But as Rick James famo… [+11829 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Nick Miller explains it to Caitlin Cassidy",
      "title": "Bluey’s cricket episode: why did it leave Australians in tears and Americans puzzled?",
      "description": "The latest episode hits cricket fans with a wave of back yard nostalgia. But will kids (and international viewers) understand it?Nick, cricketers everywhere are losing their collective minds over a Bluey episode. What is going on?It’s the third season of Blue…",
      "url": "https://www.theguardian.com/culture/2023/jun/15/blueys-cricket-episode-why-did-it-leave-australians-in-tears-and-americans-puzzled",
      "urlToImage": "https://i.guim.co.uk/img/media/d51ae723fb2dc36a648b313d7ad530de02edd285/0_0_1653_992/master/1653.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f13a63b37b2027f2d0a20d60372a893f",
      "publishedAt": "2023-06-15T02:46:41Z",
      "content": "Nick, cricketers everywhere are losing their collective minds over a Bluey episode. What is going on?\r\nIts the third season of Bluey, the wonderful Australian childrens cartoon show about a Queenslan… [+5262 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Brendan Griffiths",
      "title": "How to watch The Ashes live stream online for free from anywhere",
      "description": "The long-running cricket feud between England and Australia is back. Find out how to watch The Ashes live stream for free with our guide.",
      "url": "https://www.businessinsider.com/guides/streaming/how-to-watch-the-ashes-live-stream-free-online-1st-test-2023",
      "urlToImage": "https://i.insider.com/648c0f2820f78100189fb91c?width=1200&format=jpeg",
      "publishedAt": "2023-06-16T08:03:12Z",
      "content": "The Ashes competition started way back in 1882.Getty Images\r\nWhen you buy through our links, Insider may earn an affiliate commission. Learn more.One of the biggest rivalries in cricket begins again … [+2812 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Geoff Lemon at Trent Bridge",
      "title": "Australia in good hands as Annabel Sutherland picks up Perry’s baton | Geoff Lemon",
      "description": "Annabel Sutherland had advantages early in life but her first Test century shows she has never stopped learningIn terms of sporting provenance stories, having a national cricket board CEO for a father doesn’t hit the inspirational high notes. James Sutherland…",
      "url": "https://www.theguardian.com/sport/2023/jun/23/australian-women-sutherland-picks-up-perrys-baton",
      "urlToImage": "https://i.guim.co.uk/img/media/5bc20468a3c98edf500352e69ad5b9fed8c0f9b6/0_95_2348_1409/master/2348.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c3a8b5f55df7e6a9545c380faea00f35",
      "publishedAt": "2023-06-23T18:04:54Z",
      "content": "In terms of sporting provenance stories, having a national cricket board CEO for a father doesnt hit the inspirational high notes. James Sutherland spent two decades at the top for Cricket Australia … [+9794 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Guardian Staff",
      "title": "Cricket test: the right questions to ask about Jonny Bairstow’s stumping | Letters",
      "description": "Readers reflect on the rights and wrongs of the English player’s dismissal by AustraliaThe debate on Jonny Bairstow’s dismissal rages on (In the best cricket tradition, Bairstow v Carey turned on a man saying ‘over’, 2 July). The viewpoint on this is simple, …",
      "url": "https://www.theguardian.com/sport/2023/jul/05/cricket-test-the-right-questions-to-ask-about-jonny-bairstow-stumping",
      "urlToImage": "https://i.guim.co.uk/img/media/8c69b3788cad10808e4cd00667f7e72ab514de12/0_116_4052_2431/master/4052.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e02d2455f8b87b96bca774f5e09bf44e",
      "publishedAt": "2023-07-05T17:38:15Z",
      "content": "The debate on Jonny Bairstows dismissal rages on (In the best cricket tradition, Bairstow v Carey turned on a man saying over, 2 July). The viewpoint on this is simple, provided one asks the right qu… [+3646 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "James Wallace",
      "title": "Jack Russell: ‘Cricket and art, you can never crack either – you’re always learning’",
      "description": "The former England wicketkeeper on Ashes mistakes, the battle between Bairstow and Foakes, the return of bucket hats and his art exhibition opening in London next week“Missed chances weigh on the mind and they dent your confidence no matter who you are.” Jack…",
      "url": "https://www.theguardian.com/sport/2023/jun/23/jack-russell-ashes-2023-mistakes-magnified-jonny-bairstow-ben-foakes-cricket-interview",
      "urlToImage": "https://i.guim.co.uk/img/media/18e2f5a87e6bc647142097e2f00498a5a0b4238a/0_124_4000_2401/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b3698c1ced74ac4f7d7a176125b8aaa4",
      "publishedAt": "2023-06-23T12:00:38Z",
      "content": "Missed chances weigh on the mind and they dent your confidence no matter who you are. Jack Russell knows how Jonny Bairstow must be feeling. Well, sort of. I missed Brian Lara a couple of times in th… [+11708 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Guardian sport",
      "title": "‘Poms’ great Ashes hypocrisy’: Australia reacts to second Test controversy",
      "description": "<ul><li>Alex Carey’s stumping of Jonny Bairstow causes storm</li><li>Ugly scenes in Lord’s Long Room branded ‘disgraceful’</li></ul>Australia woke up on Monday morning to an Ashes storm blowing from the other side of the world after Alex Carey’s controversial…",
      "url": "https://www.theguardian.com/sport/2023/jul/03/poms-great-ashes-hypocrisy-australia-reacts-to-second-test-controversy",
      "urlToImage": "https://i.guim.co.uk/img/media/5b23b03dcefeb17ff906e5a9273d1601b3c3dd2d/0_120_3788_2272/master/3788.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7091d403af153dd52faab24a83a730b0",
      "publishedAt": "2023-07-03T03:09:31Z",
      "content": "Australia woke up on Monday morning to an Ashes storm blowing from the other side of the world after Alex Careys controversial stumping of Jonny Bairstow led to acrimony, recriminations, finger-point… [+11349 chars]"

    }
  ]

  return (
    <>
      <FirstSegment elements={elements}/>
      <TenthSegment top='180px' category={category}/>
      <FooterSegment top='250px'/>
    </>
  )
}

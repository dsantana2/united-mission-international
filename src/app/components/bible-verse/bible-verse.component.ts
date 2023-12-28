import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bible-verse',
  templateUrl: './bible-verse.component.html',
  styleUrls: ['./bible-verse.component.scss']
})
export class BibleVerseComponent implements OnInit {
  randomNumber = Math.floor(Math.random() * 4);
  bibleVerseOfTheDay: { verse: string, text: string, textTwo?: string };
  bibleVersesArr: { verse: string, text: string, textTwo?: string }[] = [
    {
      verse: '- Isaiah 6:8', text: 'Then I heard the voice of the Lord saying, “Whom shall I send? And who will go for us?”',
      textTwo: 'And I said, “Here am I. Send me!”'
    },
    { verse: '- Colossians 3:14', text: 'And over all these virtues put on love, which binds them all together in perfect unity.' },
    { verse: '- Proverbs 19:17', text: 'Whoever is kind to the poor lends to the LORD, and he will reward them for what they have done.' },
    { verse: '- 1 Timothy 1:5', text: 'The goal of this command is love, which comes from a pure heart and a good conscience and a sincere faith.' }

  ];

  constructor() { }

  ngOnInit(): void {
    this.bibleVerseOfTheDay = this.bibleVersesArr[this.randomNumber];
  }


}

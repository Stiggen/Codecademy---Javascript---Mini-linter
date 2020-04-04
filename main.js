let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
//original story word count
console.log(storyWords.length);
//filter out unnecessary words
const betterWords=storyWords.filter(word => ! unnecessaryWords.includes(word));
//create array of overused words
const overusedCount = storyWords.filter(word=> overusedWords.includes(word));
//count the number of times each overused word is used
const badGrammar = (wordTally) => {let rCount =0;
let bCount=0; let vCount=0;
  for (i=0; i< wordTally.length; i++){
    if(wordTally[i]==='really'){
      rCount++;
    }
    else if(wordTally[i]==='basically'){
      bCount++;
  }
   else if(wordTally[i]==='very'){
     vCount++;
   }
  }
 console.log(`really appears ${rCount} times`);
console.log(`basically appears ${bCount} times`);
console.log(`very appears ${vCount} times`);
}
//count the number of sentences in the story
const sentenceCount=(wholeStory) => { let sentenceCount=0;
  for(i=0;i<wholeStory.length;i++){
    if(wholeStory[i].includes('.') || wholeStory[i].includes('!')) {
     sentenceCount++;
  }
  }
console.log('Your sentence count is ' +sentenceCount);
}
//filtered story
//console.log(betterWords);
//filtered story word count
console.log(betterWords.length);
console.log(overusedCount);
console.log(overusedCount.length);
//call the badGrammar function on overusedCount array
badGrammar(overusedCount);
//log the number of sentences in the story
sentenceCount(storyWords);
//log betterWords array as a string
console.log(betterWords.join(' '));

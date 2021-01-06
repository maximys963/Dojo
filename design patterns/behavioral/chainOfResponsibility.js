class SentenceGlue{
    constructor(sentence = '') {
        this.sentance = sentence;
    }

    concat(word){
        this.sentance = this.sentance.concat(' ' + word);
        return this
    }
}

const glue = new SentenceGlue();

const quote = glue.concat('Hey').concat('I').concat('am').concat('chain').sentance

console.log('quote', quote);

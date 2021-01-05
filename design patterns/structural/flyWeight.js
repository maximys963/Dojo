class Question{
    constructor(text, answer){
        this.text = text;
        this.answer = answer
    }
}

class QuestionFactory{
    constructor(){
        this.questions = []
    }

    getAllQuestion(){
        return this.questions
    }

    getQuestionsWithAnswer(text){
        if (this.questions.length !== 0) {
            const userQuestion = this.questions.find((question) => question.text === text)

            if(userQuestion){
                return userQuestion
            }
        }

        const newQuestion = this.longRequestForQuestion(text);

        this.questions.push(newQuestion)
        return newQuestion
    }

    longRequestForQuestion(text){
        return new Question(text, 'this is answer')
    }
}

const factory = new QuestionFactory();


const question1 = factory.getQuestionsWithAnswer('lorem');
const question2 = factory.getQuestionsWithAnswer('ipsum');
const question3 = factory.getQuestionsWithAnswer('lorem');

console.log(question1);
console.log(question2);
console.log(question3);

const allQuestion = factory.getAllQuestion();
console.log('allQuestion', allQuestion);



//https://leetcode.com/problems/rearrange-spaces-between-words/


function reorderSpaces(text: string): string {
    let returnString:string = "";
    let spaceCount = countSpace(text);
    let wordListwoutSpace = removeLeadingWhitespace(text);
    let wordList:string[]= wordListwoutSpace.split(" ");
    let wordCount:number= wordList.length;
    let spacePerWord =  spaceCount/(wordCount-1);
    let fixedWord = parseInt(spacePerWord.toString());
    let lastspace = generateSpace(spaceCount - (fixedWord*(wordCount-1)))

    for (let index = 0; index < wordList.length; index++) {
        const element = wordList[index];
        let spaceString:string = generateSpace(fixedWord);
        if(index == wordList.length-1){
            returnString = returnString+element;
        }
        else{
            returnString = returnString+ element+spaceString;
        }
    }

    return returnString+lastspace;
};

function countSpace(text: string):number {
    let spaceCount: number = 0
    for (let index = 0; index < text.length; index++) {
        const element = text[index];
        if (element == " ") {
            spaceCount++
        }
    }

    return spaceCount;

}

function generateSpace(spaceNum : number): string{
    let text:string ="";
    for (let index = 0; index < spaceNum; index++) {
        text= text+" ";
    }
    return text;
}

let myString = "  daslkşf  daflm  sklanf lddd"; 

function removeLeadingWhitespace(sentence: string): string {
    return sentence.replace(/^\s+/g, "");
  }


console.log(reorderSpaces("   sadkofsafasf dokwaşdn w dwaqdqw  "))
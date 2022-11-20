export const cleanText = (text) => {
    let tweetText = text;

    if(tweetText.includes('&amp;')){
       tweetText = tweetText.replaceAll('&amp;', '&');
    }
    
    return tweetText;
}
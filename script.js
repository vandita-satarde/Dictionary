const dictionary = {
    red: "Symbolizes passion, energy, love, and danger.",
    blue: "Represents calm, trust, loyalty, and stability.",
    green: "Associated with nature, growth, harmony, and freshness.",
    yellow: "Conveys happiness, optimism, warmth, and caution.",
    orange: "Symbolizes creativity, enthusiasm, success, and vibrancy.",
    purple: "Represents luxury, creativity, wisdom, and spirituality.",
    pink: "Conveys softness, compassion, romance, and calmness.",
    black: "Associated with elegance, mystery, power, and formality.",
    white: "Represents purity, simplicity, peace, and cleanliness.",
    gray: "Symbolizes neutrality, balance, professionalism, and practicality.",
    brown: "Conveys warmth, reliability, stability, and comfort.",
    beige: "Represents calmness, simplicity, neutrality, and elegance.",
    turquoise: "Associated with tranquility, energy, and balance.",
    gold: "Symbolizes wealth, luxury, success, and achievement.",
    silver: "Represents sophistication, modernity, and technology.",
    indigo: "Conveys intuition, wisdom, and perception.",
    lavender: "Symbolizes elegance, grace, calmness, and healing.",
    teal: "Represents serenity, sophistication, and balance.",
    magenta: "Conveys creativity, innovation, and harmony.",
    crimson: "Associated with strong emotions, love, and power.",
    aqua: "Represents freshness, clarity, and calmness.",
    ivory: "Symbolizes elegance, purity, and timeless beauty.",
    peach: "Represents warmth, sweetness, and approachability.",
    cyan: "Associated with clarity, peace, and freshness.",
    scarlet: "Conveys passion, courage, and love."
};


function search(){
    const searchBarInput = document.getElementById("search-bar");
    const query = searchBarInput.value.toLowerCase(); 

    const color = dictionary[query]  

    const theWord = document.getElementById("the-word");

    if(color){
        theWord.innerText = `${query} - ${color}`;
    }
    else{
        theWord.innerText =  `Color not found`;
    }
}

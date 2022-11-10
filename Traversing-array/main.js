//results
let results = ["yes", "no", "no", "yes", "maybe", "maybe"];
let CountYes = 0;
let CountNo = 0;
let CountMaybe = 0;
for(i = 0; i < results.length; i++){
    if(results[i] === "yes"){
        CountYes += 1;
    }else if(results[i] === "no"){
        CountNo += 1;
    }else{
        CountMaybe += 1;
    }
}
console.log("Yes: " + CountYes, "No: " + CountNo,"Maybe: " + CountMaybe);

//ages
let ages = [18, 10, 50, 1, 760, 230, -1];
let Over18  = 0;
let Under18 = 0;
let Under0 = 0;
for(i = 0; i < ages.length; i++){
    if(ages[i] >= 18){
        Over18 += 1;
    }else if(ages[i] < 18 && ages[i] > 0){
        Under18 += 1;
    }else{
        Under0 += 1;
    }
}
console.log("Over 18: " + Over18 + ", ", "Under 18: " + Under18 + ", ", "Are you from the future?: " + Under18);

//Prices
let prices = [15,12, 25, 35, 46, 51, 700];
let Over20 = 0;
let Under20 = 0;
let Over50 = 0;
for(i = 0; i < prices.length; i++){
    prices[i] += 2;
    prices[i] += prices[i] * 0.05;
    prices[i] += prices[i] * 0.20;
    if(prices[i] < 20){
        Under20 += 1;
    }else if(prices[i] >= 20 && prices[i] <= 49){
        Over20 += 1;
    }else{
        Over50 += 1;
    }
}
console.log("Under20: " + Under20, "Over 20 Under 49: " + Over20, "Over 50: " + Over50);
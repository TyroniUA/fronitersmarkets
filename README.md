# Cow price calculator

## This is a short test project for the Frontiers Market
---
The solution provides simple index.js that should be executed with:

* `node index.js` command in the terminal

---
### Explanation
I've left the original formula of calculation by KG, but added enhanced calculation that takes into account body, age and breed factor. 

It can be expressed in the following formula:

`P = BreedPerKgFactor * Weight * BodyFactor * AgeFactor * BreedMonthFactor`

The body factor consist of the matrix for the conformation and fat gradation, having the numbers in form of parabola that represents best proportions of fat/structure of the cow. References if the following information book by the british studies: https://www.fas.scot/downloads/better-returns-programme-understanding-cattle-carcases/

I've adjusted their data to the factor itself.

Age and Breeding (Pregnancy) data adjustment take roots from the following formula: 
`k = (R - A) * C`

Where: 
* k - adjustment factor
* R - reference age (months)
* A - age of the cow (months)
* C - constant of adjustment per month (%)


MonthsFactor is an important constant that I've calculated from the following research: https://www.cambridge.org/core/services/aop-cambridge-core/content/view/B86DA932FD2E964ECF4FFD31680C0EB9/S1074070817000207a.pdf/price_determinants_of_bred_cows.pdf

Specifically on the page of the PDF document itself:
* 12 - Breeding factor
* 10 - Age factor

---

### References

I've used other references for "studies" (I've spent few hours reading docs and understanding topic more deeply):
* https://www.cambridge.org/core/services/aop-cambridge-core/content/view/B86DA932FD2E964ECF4FFD31680C0EB9/S1074070817000207a.pdf/price_determinants_of_bred_cows.pdf
* https://www.igbzpan.pl/uploaded/FSiBundleContentBlockBundleEntityTranslatableBlockTranslatableFilesElement/filePath/97/str257-266.pdf
* https://agriculture.ec.europa.eu/system/files/2023-03/beef-weekly-prices_en_3.pdf
* file:///Users/uatyroni/Desktop/PRICE_DETERMINANTS_of_BRED_COWS.pdf - here on page 6 specifically another example of formula, that I've took as a main reference.
* https://www.ams.usda.gov/sites/default/files/media/USDA_LMPRS_API_User_Guide.pdf - just as a data reference sources for cattle sold, but not so much of useful data
* https://extension.okstate.edu/fact-sheets/ranch-calculator.html - didn't use the extension, but checked the charts and tables
* https://www.agriland.ie/factory-prices/beef-price-calculator/ - another online approach was also source of confidance that enhanced formula makes sense.

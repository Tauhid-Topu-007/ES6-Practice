const ages=[11,22,33,44,55,66];
const ages2=[23,34,54,65,7,6];
const ages3=[256,34564,5464,6546,746,664];
const allages= ages.concat(ages2).concat(ages3);
const allages2=[...ages,...ages2,5,...ages3];
console.log(allages);
console.log(allages2);

const business=654;
const minister=988;
const sochib=123;

const takaPoysa=[645,646,876];
const maximum= Math.max(business,minister,sochib);
const maximum2=Math.max(...takaPoysa);
console.log(maximum);
console.log(maximum2);
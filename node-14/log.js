//Use console methods to complete the challenges in this script:

// Challenge 1:
//
// Use 2 different techniques to output the value of this variable with
// a label, so we can easily identify it in the script output.

const surprisingFact = "The bumblebee bat is the world's smallest mammal";
console.log({ surprisingFact });
console.dir({ surprisingFact });

//
// Challenge 2:
//
// Use 2 different techniques to output a formatted version
// of this complete object.

const familyTree = [
  {
    name: "Person 1",
    children: [
      {
        name: "Person 2",
        children: [
          {
            name: "Person 3",
            children: [
              {
                name: "Person 4",
              },
            ],
          },
        ],
      },
    ],
  },
];

const regex = /("name":"[a-zA-Z])\w+\s*(\w+)"/g;
const found = JSON.stringify(familyTree).match(regex);
const children = [];
const regfilter = /("name":)*(\")/g;
const name = found.map((el) => {
  children.push(el.replace(regfilter, ""));
});
console.table(children);

console.log(JSON.stringify(familyTree, null, 2));
const { count } = require("console");
//console.dir(familyTree, { depth: null });

const util = require("util");
//inspect(): Inspects the specified object and returns the object as a string
//console.log(util.inspect(familyTree, { showHidden: false, depth: null }));

//
// Challenge 3:
//
// Output a count value every time the importantTask function is called.
// Reset the count value after 4 function calls.

function importantTask() {
  console.count();
}

importantTask();
importantTask();
importantTask();
importantTask();
console.countReset();
importantTask();
importantTask();

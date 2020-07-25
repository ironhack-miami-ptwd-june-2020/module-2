const carObj = {
    doors: 4,
    color: "blue",
    make: "mini",
    model: "clubman",
    turbo: true,
    maxSpeed: 190,
    mpg: 30,
};

const { doors, make, model, mpg } = carObj;

// spread operator
console.log({ ...carObj, driver: "Marocs" });

// console.log(carObj.doors, carObj.make, carObj.model, carObj.mpg);

// console.log({doors, make, model, mpg});

// thePrimaryShipper.shippingVehicle.boat.shipNumber

const theCarArray = ["mini", "honda", "toyota", "lexus"];

// console.log({firstCar});

theCarArray.push("mazarratti");
// console.log(theCarArray[theCarArray.length-1]);

const [firstCar] = theCarArray;
const [lastCar] = theCarArray.reverse();

// console.log({firstCar, lastCar});

const getCarInfo = (driver, carObjInput) => {
    const { doors, make, model, color, blah, exhaust = mpg } = carObjInput;
    // const exhaust = 'single'

    console.log({ carObjInput, blah });
    console.log(
        `${driver} is the driver of the the ${color} colored ${make} ${model}, and it has ${doors} doors and it has a ${exhaust} exhaust`
    );
};

// getCarInfo('Marcos', carObj);

// `Marcos is a student in Miami and loves the Dolphins`;

const carPriceInfo = (carObjInput) => {
    return new Promise((resolve, reject) => {
        typeof carObjInput === "object"
            ? resolve(carObjInput)
            : reject("No Object Passed");
    });
};

carPriceInfo(carObj)
    .then((result) => {
        console.log({ result });

        const { mpg, doors } = result;

        console.log(Math.floor((4000 * doors) / mpg));
        return Math.floor((4000 * doors) / mpg);
    })
    .catch((err) => console.log(err));

// router.get('/myEndpoint', (req, res, next) => {
//   // you get some return value which means that the call was resolved
//   axios.get('http//:blahblah.com/api')
//   .then(result => {
//     // after call is resolved you set a variable to hold the returned information and do with it what you need
//     res result.data
//   }).catch(err => res err);
//   // if there is an error with the information that should be returned, create variable to store the error information and display or return
// })

// angular format (cant use for react or express);
// carPriceInfo.toPromise().then(result => return result).catch(err => return err);

// ============================================================================
// ============================================================================

//                                  Examples

// ============================================================================
// ============================================================================

// ------------------ CallBack Function with parameters ----------------------

// essentially a callback is a function within a function that gets called

const sumOfNumbers = (int1, int2) => {
    alert(int1 + int2);
};

const callBackFunction = (callback, param1, param2) => {
    callback(param1, param2);
};

callBackFunction(sumOfNumbers, 15, 30);

{
    /* <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><> */
}

function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        // process the picture once it is completed
        callback(url);
    }, 3000);
}

const url1 = "https://media.giphy.com/media/RLPb3uuQFGLQdDjfkk/giphy.gif";
const url2 =
    "https://www.https://media.giphy.com/media/fBGlnzGjFL3dSdvTBo/giphy.gif.net/pic2.jpg";
const url3 =
    "https://www.https://media.giphy.com/media/U2960jb4625Zdz0yt8/giphy.gif.net/pic3.jpg";

download(url1, function (picture) {
    console.log(`Processing ${picture}`);
    // download the second picture
    download(url2, function (picture) {
        console.log(`Processing ${picture}`);
        // download the third picture
        download(url3, function (picture) {
            console.log(`Processing ${picture}`);
        });
    });
});

// ------------------ New Promise with parameters ---------------------
// this is like creating a validator for the info that your sending in and allowing the use of then and catch which can be used to make functions run as if they were synchronous

const addTheNumbers = (intArray) => {
    return new Promise((resolve, reject) => {
        console.log(intArray);

        Array.isArray(intArray) ? resolve(intArray) : reject("No Array Passed");
    });
};

addTheNumbers([10, 20])
    .then((result) => {
        console.log({ result, type: typeof result });

        // return result.reduce((a, b) => a + b, 0);
        addTheNumbers([result.reduce((a, b) => a + b, 0), 34, 65, 89])
            .then((secondResult) => {
                console.log({ result, secondResult });

                data = {
                    firstResult: result,
                    secondResult,
                    finalTally: secondResult.reduce((a, b) => a + b, 0),
                };

                return data;
            })
            .catch((err) => console.log({ err }));
    })
    .catch((err) => console.log({ err }));

// -------------------------- Async Function ----------------------------
// this is similar to a promise but you can cause the functions within the async function to run in a synchronous manner by using await

const asyncAddNumbers = async (arrayOfInt) => {
    const sumOfArray = await arrayOfInt.reduce((a, b) => a + b, 0);

    console.log({ sumOfArray });

    return sumOfArray;
};

asyncAddNumbers([20, 40]);

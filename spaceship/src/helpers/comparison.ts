let compareTwoArrayOfObjects = (
    firstArrObjs: any[],
    secondArrObjs: any[]
) => {
    return (
        firstArrObjs.length === secondArrObjs.length &&
        firstArrObjs.every((element1) =>
            secondArrObjs.some((element2) =>
                Object.keys(element1).every((key) => element1[key] === element2[key])
            )
        )
    );
};

export { compareTwoArrayOfObjects }
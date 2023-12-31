export const mapOrder = (originalArray, orderArray, key) => {
    // check if any of the three parameters (originalArray, orderArray, or key) is falsy (undefined, null, false, 0, etc.). If any of them is falsy, the function returns an empty array ([])
    if (!originalArray || !orderArray || !key) return []

    // clean code:
    return [...originalArray].sort((a, b) => orderArray.indexOf(a[key]) - orderArray.indexOf(b[key]))

    // explaination:
    // copy of the originalArray
    // const clonedArray = [...orginalArray]
    // const orderedArray = clonedArray.sort((a, b) => {
    //     return orderedArray.indexOf(a[key]) - orderArray.indexOf(b[key])
    // })

    // return orderedArray
}

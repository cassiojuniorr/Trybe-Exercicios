function myFylter(item: any[]): void {
    item.filter((elm) => elm === item[elm])
}
const array = [1, 2, 3, 4]
console.log(myFylter(array));

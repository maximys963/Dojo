import * as O from 'fp-ts/lib/Option'

enum DiscountType {
    Premium = 'premium',
    Common = 'common',
}


function getOrderDiscountPercentage (discountType: string): O.Option<number> {
    if(discountType === DiscountType.Premium) {
        return O.some(10)
    }

    if(discountType === DiscountType.Common) {
        return O.some(5)
    }

    return O.none
}


const discountOption = getOrderDiscountPercentage("premium")

const discount = O.fold(
    () => "No discount",
    (discount) => `Discount is ${discount}%`
)




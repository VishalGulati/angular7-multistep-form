interface AddressObj {
    name: string,
    street: string,
    city: string,
    state: string,
    zip: string
}

export interface ShippingInfoObj {
    from: AddressObj,
    to: AddressObj,
    weight: number,
    shippingOption: number
}
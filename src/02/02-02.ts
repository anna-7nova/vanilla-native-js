export type HousesType = {
    {
        buildedAt: number
        repaired: boolean
        address: {
            number: number
            street: {
                title: string
            }
        }
    }
}

export type LocalCityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array[]
    cityzensNumbers: number 
};
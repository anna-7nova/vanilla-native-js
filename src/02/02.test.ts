import { LocalCityType } from "./02-02"
import { HousesType } from "./02-02"

let city: LocalCityType

beforeEach(() => {
    city: {
        title: "New York"
        houses:<HousesType> [
            {
                buildedAt: 1,
                repaired: false,
                address: {
                    number: 24,
                    street: {
                        title: "Main Street"
                    }
                }
            },
            {
                buildedAt: 2,
                repaired: true,
                address: {
                    number: 33,
                    street: {
                        title: "Second Street"
                    }
                }
            },
            {
                buildedAt: 3,
                repaired: true,
                address: {
                    number: 28,
                    street: {
                        title: "Third Street"
                    }
                }
            },
        ]
        governmentBuildings: []
        cityZonesNumbers: 1000000
        }
    
})

//1. Создайте тип CityType
//2. Заполните объект city, чтобы тесты прошли
test("city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe();
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe();
    expect(city.houses[0].address.street.title).toBe();

    expect(city.houses[1].buildedAt).toBe();
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe();
    expect(city.houses[1].address.street.title).toBe();

    expect(city.houses[2].buildedAt).toBe();
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe();
    expect(city.houses[2].address.street.title).toBe();
})

// 3. Дополните тип GovernmentBuildingsType
// 4. Заполните объект city, чтобы тесты прошли
test.skip("city should contains hospital and fire station", () => {
    expect(city.governmentBuildings.length).toBe();

    expect(city.governmentBuildings[0].type).toBe("HOSPITAL")
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].staffCount).toBe(1000)
    expect(city.governmentBuildings[0].address.street.title).toBe()

    expect(city.governmentBuildings[1].type).toBe("FIRE-STATION")
    expect(city.governmentBuildings[1].budget).toBe(500000)
    expect(city.governmentBuildings[1].staffCount).toBe(1000)
    expect(city.governmentBuildings[1].address.street.title).toBe()
})
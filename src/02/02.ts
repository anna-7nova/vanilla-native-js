type TechnologiesType = {
    id: number
    title: string
}

type CityType = {
    title: string
    countryTitle: string
};

type AddressType = {
    streetTitle: string
    city: CityType
};

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
};

const student: StudentType = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
    city: {
        title: "Minsk",
        countryTitle: "Belarus",
        },
    },
    technologies: [
    {
        id: 1,
        title: "HTML",
    },
    {
        id: 2,
        title: "CSS",
    },
    {
        id: 3,
        title: "React",
    },
    ],
};

const initialState = [
    {
        id: 1,
        name: "Temperature",
        description: "",
        icon: "cloud.svg",
        selected: false
    },
    {
        id: 2,
        name: "Water temperature",
        description: "",
        icon: "sun-full.svg",
        selected: false
    },
    {
        id: 3,
        name: "Cloud temperature",
        description: "",
        icon: "thermometer.svg",
        selected: false
    },
    {
        id: 4,
        name: "Temperature",
        description: "",
        icon: "cloud.svg",
        selected: false
    },
    {
        id: 5,
        name: "Water temperature",
        description: "",
        icon: "sun-full.svg",
        selected: false
    },
    {
        id: 6,
        name: "Cloud temperature",
        description: "",
        icon: "thermometer.svg",
        selected: false
    },
    {
        id: 7,
        name: "Temperature",
        description: "",
        icon: "cloud.svg",
        selected: false
    },
    {
        id: 8,
        name: "Water temperature",
        description: "",
        icon: "sun-full.svg",
        selected: false
    },
    {
        id: 9,
        name: "Cloud temperature",
        description: "",
        icon: "thermometer.svg",
        selected: false
    },
    {
        id: 10,
        name: "Cloud temperature",
        description: "",
        icon: "thermometer.svg",
        selected: false
    },
    {
        id: 11,
        name: "Water temperature",
        description: "",
        icon: "sun-full.svg",
        selected: false
    },
    {
        id: 12,
        name: "Cloud temperature",
        description: "",
        icon: "thermometer.svg",
        selected: false
    },
    {
        id: 13,
        name: "Cloud temperature",
        description: "",
        icon: "thermometer.svg",
        selected: false
    }
  ];

const options = (state = initialState, action) => {
    let newArr = [];
    switch (action.type) {
        case 'SELECT_OPTION':
            newArr = [...state].map((option) => {
                if (option.id === action.id) {
                    option.selected = !option.selected;
                }
                return option;
            });
            return newArr;
        default:
            return state
    }
}

export default options;
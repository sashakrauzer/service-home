const initialState = [
    {
        id: 1,
        name: "XBee",
        description: "",
        icon: "xbee.png",
        icon_white: "xbee-white.png",
        selected: false
    },
    {
        id: 2,
        name: "ZWave",
        description: "",
        icon: "zwave.png",
        icon_white: "zwave-white.png",
        selected: false
    },
    {
        id: 3,
        name: "XBee",
        description: "",
        icon: "xbee.png",
        icon_white: "xbee-white.png",
        selected: false
    },
    {
        id: 4,
        name: "ZWave",
        description: "",
        icon: "zwave.png",
        icon_white: "zwave-white.png",
        selected: false
    },
    {
        id: 5,
        name: "WiFi Gratis",
        description: "",
        icon: "gratis-wifi.png",
        icon_white: "gratis-wifi-white.png",
        selected: false
    },
    {
        id: 6,
        name: "M-Bus",
        description: "",
        icon: "mbus.png",
        icon_white: "mbus-white.png",
        selected: false
    },
    {
        id: 7,
        name: "WiFi Gratis",
        description: "",
        icon: "gratis-wifi.png",
        icon_white: "gratis-wifi-white.png",
        selected: false
    },
    {
        id: 8,
        name: "M-Bus",
        description: "",
        icon: "mbus.png",
        icon_white: "mbus-white.png",
        selected: false
    }
  ];

const connection = (state = initialState, action) => {
    let newArr = [];
    switch (action.type) {
        case 'CHOOSE_CONNECTION':
            newArr = [...state].map((option) => {
                if (option.id === action.id) {
                    option.selected = !option.selected;
                } else if (option.selected) {
                    option.selected = !option.selected;
                }
                return option;
            });
            return newArr;
        default:
            return state
    }
}

export default connection;
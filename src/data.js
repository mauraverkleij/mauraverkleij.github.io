const root = process.env.PUBLIC_URL;

const data = {
    info: {
        name: "Maura Verkleij",
        city: "Rotterdam",
        email: "info@mauraverkleij.nl",
        tel: "+31 6 52882663",
        bio: "Lorem ipsu eiusmod tempor incididunt uion uit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    projects: [
        {
            id: "test-1",
            title: "Test 1",
            image: {
                src: root + "img/steeds-minder-gaten-in-kaas-schone-melk.jpg",
                alt: "Kaas"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            images: [
                {
                    src: root + "img/steeds-minder-gaten-in-kaas-schone-melk.jpg",
                    alt: "Kaas",
                    content: "asdflkjsdfkl lkasdklsadflk lklasdklsdf lklkasdflkkasdflkk klasdfflkasdfflkkl"
                },
                {
                    src: root + "img/Funny-Weird-Photoshopped-Pictures-14.jpg",
                    alt: "Weird"
                },
                {
                    src: root + "img/graham-crashes-hed-2016.jpg",
                    alt: "asdf"
                }
            ]
        },
        {
            id: "test-2",
            title: "Test 2",
            image: {
                src: root + "img/Funny-Weird-Photoshopped-Pictures-14.jpg",
                alt: "Weird"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: "test-3",
            title: "Test 3",
            image: {
                src: root + "img/graham-crashes-hed-2016.jpg",
                alt: "asdf"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
    ]
};

export default data;

// data/database.js


const messages = [
    {
        id: 1,
        user: "Hamada",
        text: "Let's build something!!!",
        added: new Date()
    },
    {
        id: 2,
        user: "Benny",
        text: "What are your thoughts about Nvidia drivers???",
        added: new Date()
    },
    {
        id:3,
        user: "Jasmine",
        text: "Ai should be more common",
        added: new Date()
    }
];

module.exports = messages;

// messages is exported to both of the routes

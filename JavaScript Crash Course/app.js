let users = [{
    username: "David",
    email: "david@gmail.com",
    password: "David01",
    subscriptionStatus: "VIP",
    discordID: "David01",
    lessonsCompleted: [0, 1],
},
{
    username: "Liam",
    email: "liam@gmail.com",
    password: "Liam01",
    subscriptionStatus: "VIP",
    discordID: "Liam01",
    lessonsCompleted: [0, 1, 2],
},
{
    username: "Elliot",
    email: "elliot@gmail.com",
    password: "Elliot01",
    subscriptionStatus: "VIP",
    discordID: "Elliot01",
    lessonsCompleted: [0, 1, 2, 3],
},
]

function login(email, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            if (users[i].password === password) {
                console.log("log the user in - the details are correct")
            }
            else {
                console.log("password is incorrect - try again")
            }
            return;
        }
    }
    console.log("could not find an email or password that matches")
}

login("elliot@gmail.com", "Elliot01")

function register(user) {
    users.push(user)
}

register({
    username: "Dionne",
    email: "dionne@gmail.com",
    password: "Dionne01",
    subscriptionStatus: "VIP",
    discordID: "Dionne01",
    lessonsCompleted: [0, 1, 2]
});

console.log(users);
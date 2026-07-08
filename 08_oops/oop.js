const user = {
    username: "sahil",
    loginCount: 8,
    signedIn: true,

    getuserDetails: function() {
        //  console.log("Got user details from databases");
        // console.log(`username: ${this.username}`);
        console.log(this)

    }
}

console.log(user.username);
console.log(user.getuserDetails());
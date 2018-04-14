function User(props) {
    this.id = props.id;
        this.name = props.name;
        this.username = props.username;
        this.email = props.email;

        this.phone = props.phone;
        this.website = props.website;
}
User.getKeys = function () {
    return Object.keys(new User({}));
};

function Users(props) {
    var users = [];

    props.forEach(function (userDate) {
        users.push(new User(userDate))
    });

    this.getUserById = function (id) {

        alert(JSON.stringify(users[id]))
    };

    this.getData = function () {
        return props;
    };
}
enum Role {
    admin = 1,
    user
}

class User {
    private _name: string;
    private _email: string;
    private _role: Role;

    constructor(name: string, email: string, role: Role) {
        this._name = name;
        this._email = email;
        this._role = role;
    }

    getInfor() {
        console.log(`name: ${this._name}`);
        console.log(`email: ${this._email}`);
        console.log(`role: ${this._role}`);
    }

    isAdmin() {
        if (this._role == 1) {
            console.log('admin');
        } else {
            console.log('user');
        }
    }

    setName(value: string) {
        this._name = value;
    }

    setEmail(value: string) {
        this._email = value;
    }

    setRole(value: Role) {
        this._role = value;
    }
}

let user1 = new User('Tran Kim A', 'trankima@gmail.com', Role.admin);
user1.getInfor();
user1.isAdmin();

let user2 = new User('Tran Thanh B', 'tranthanhb@gmail.com', Role.user);
user2.getInfor();
user2.isAdmin();

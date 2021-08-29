const book1 = {
    name: 'i love js',
    auth: 'some one',
    year: '2015'
};

const book2 = {
    name: 'i love react',
    auth: 'some one else',
    year: '2020'
};

const book3 = {
    name: 'i love veu',
    auth: 'other auth',
    year: '2019'
};



class Library {

    ourLib = [];
    construktor(book) {
        this.ourLib.push(book);
    }

    showBooks() {
        console.log(this.ourLib);
    };

    addBook(book) {
        this.ourLib.push(book);
    };

    delBook(book) {
        this.ourLib.shift(book);
    };
    findBook(name) {

        for (let i = 0; i < this.ourLib.length; i += 1) {

            for (let key in this.ourLib) {

                console.log(key[0]);

                // if (this.ourLib[key] === `${name}`) {
                //     console.log('your book' `${name}`)
                // } else {
                //     console.log('there is not it book')
                // }
            }
        }


        // this.ourLib.find(item => item.key === `${key}`);
    };
    sortBook(field) {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    };
};

const Lib = new Library;

Lib.addBook(book1);
Lib.addBook(book2);
Lib.addBook(book3);
Lib.delBook(book3);
Lib.findBook('i love react');
Lib.showBooks();

console.log(Lib);

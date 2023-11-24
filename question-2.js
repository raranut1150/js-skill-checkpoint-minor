// Question #2: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => (res.json()))
    .then(data => {
        const newUsers = user(data)
        const longName = [];
        for (const lName of newUsers) {
            if (lName.length > 17) {
                longName.push(lName)
            }
        }
        console.log(longName);
    })


const user = (name) => {
    const resName = []
    name.forEach(res => {
        const userName = res.name
        resName.push(userName)
    });
    return (resName);
}

var user = {
    name: 'Sung',
    gender: 'male'
    };
    var changeName = function (user, newname) {
    return {
    name: newname,
    gender: user.gender
    };
    }
    
var user2 = changeName(user, 'Sung-Dong');
if (user !== user2) {
console.log('유저 정보가 변경되었음!');
}
console.log(user.name, user2.name);
console.log(user === user2);
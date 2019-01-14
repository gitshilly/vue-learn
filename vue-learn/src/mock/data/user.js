import Mock from 'mockjs'

const LoginUsers = [
    {
        id:1,
        user:'admin',
        password:'123456',
        name:'张某某'
    }
];

const Users = [];

for (let i = 0; i < 86; i++) {
    Users.push(Mock.mock({
        admin:'@name',
        id:Mock.Random.guid(),
        name:Mock.Random.cname(),
        addr:Mock.mock('@county(true)'),
        'age|18-60':1,
        birth:Mock.Random.date(),
        sex:Mock.Random.integer(0,1),
        email:Mock.mock('@EMAIL()'),
        'mobile|1':/^1[0-9]{10}$/,
        'num1|1-100.2':1,
        'num2|100-300.2':1,
        'classroom|1':['精品语文班','精品作文班','数学班'],
        'from|1':['到店咨询','微点'],
        time:Mock.Random.date('yyyy-MM-dd')

    }));
}
export {LoginUsers,Users}
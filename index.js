// 1、第一步 npm init 初始化项目
// 2、第二步 npm i scanf 安装scanf插件
const scanf=require('scanf');
//console.log('123');

// let a=20,b=10;
// let c=a+b;
// let d=a*b;
// let e=a/b;
// let f=a%b;
// console.log('a='+a,'b='+b);
// console.log('c=a+b='+c);
// console.log('d=a*b='+d);
// console.log('e=a/b='+e);
// console.log('f=a%b='+f);
// console.log('请输入两个数，计算两个数的和：请按回车继续');
// scanf('%d');
// console.log('输入a:');
// let a=scanf('%d');
// console.log('输入b:');
// let b=scanf('%d');
// console.log('a+b='+a+b);

// ******if...else 语句******
// console.log('输入两个数，判断两个数，并输出最大值');
// console.log('输入a:');
// let a=scanf('%d');
// console.log('输入b:');
// let b=scanf('%d');
// if(a>b){
//     console.log('最大值是a：'+a);
// }else if(b>a){
//     console.log('最大值是b：'+b);
// }else{
//     console.log('a=b='+a);
// }

// *******数组*******
// let arr=[1,2,3];
// console.log('数组arr:长度为'+arr.length+'\n分别是:'+arr);

// *******for循环*******
// let arr=[1,2,3,4,5,6];
// // 循环遍历数组
// for(let i=0;i<arr.length;i++){
//     let xinlong = arr[i];
//     console.log(xinlong);
// }
//运行node index.js

// 任务一：欢迎进入XXX系统
// console.log('欢迎进入幸运数字系统');
// while(1){
//     console.log('1---添加一个幸运数字');
//     console.log('2---显示全部幸运数字');
//     console.log('3---删除最后一个数字');
//     console.log('4---退出');
//     let con=scanf('%d');
//     if(con===1){
//         console.log('1---添加一个幸运数字');
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===2){
//         console.log('2---显示全部幸运数字');
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===3){
//         console.log('3---删除最后一个数字');
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===4){
//         console.log('退出');
//         break;
//     }
// }

// 任务二：幸运数字系统
// console.log('欢迎进入幸运数字系统');
// 定义数组
// let arr=[];
// while(1){
//     console.log('1---添加一个幸运数字');
//     console.log('2---显示全部幸运数字');
//     console.log('3---删除最后一个数字');
//     console.log('4---退出');
//     let con=scanf('%d');  //输入一个数字
//     if(con===1){
//         console.log('1---添加一个幸运数字');
//         let x=scanf('%d');
//         arr.push(x);  //往数组中添加一个数字
//         console.log('添加成功');
//         scanf('%d');
//     }
//     if(con===2){
//         console.log('2---显示全部幸运数字');
//         for(let i=0;i<arr.length;i++){
//             let syk=arr[i];
//             console.log(syk);
//         }
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===3){
//         console.log('3---删除最后一个数字');
//         arr.pop();  //删除数组中最后一个数字
//         console.log('删除成功');
//         scanf('%d');
//     }
//     if(con===4){
//         console.log('退出');
//         break;
//     }
// }
// 作业：敏感字符
// 任务三：坐标管理系统
// let a=1;
// a=2;
// console.log(a);
// 对象：存储多个数值,键值对存储多个值，每个值有自己名字
// let xinlong={
//     a:1,  //横坐标
//     b:2,  //纵坐标
// }
// console.log(xinlong.a);
// console.log('坐标：('+xinlong.a+','+xinlong.b+')');

// console.log('欢迎进入坐标系统');
// // 定义数组
// let arr=[];
// while(1){
//     console.log('1---添加一个坐标');
//     console.log('2---显示全部坐标');
//     console.log('3---删除最后一个坐标');
//     console.log('4---退出');
//     let con=scanf('%d');  //输入一个数字
//     if(con===1){
//         console.log('1---添加一个坐标');
//         console.log('请输入横坐标：');
//         let x=scanf('%d');
//         console.log('请输入纵坐标：');
//         let y=scanf('%d');
//         let zuobiao={
//             'x':x,
//             'y':y
//         };
//         arr.push(zuobiao);  //往数组中添加一个数字
//         console.log('添加坐标成功');
//         scanf('%d');
//     }
//     if(con===2){
//         console.log('2---显示全部坐标');
//         for(let i=0;i<arr.length;i++){
//             let syk=arr[i];
//             // console.log(syk);
//             console.log(`第${i+1}坐标为(${syk.x},${syk.y})`);
//         }
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if(con===3){
//         console.log('3---删除最后一个坐标');
//         arr.pop();  //删除数组中最后一个数字
//         console.log('删除坐标成功');
//         scanf('%d');
//     }
//     if(con===4){
//         console.log('退出');
//         break;
//     }
// }
// 任务四：学生成绩管理系统
console.log('欢迎进学生成绩系统');
// 定义数组
let arr=[];
while(1){
    console.log('1---添加一个学生学科成绩');
    console.log('2---显示全部学生学科成绩');
    console.log('3---删除最后一个学生学科成绩');
    console.log('4---退出');
    console.log('请输入');
    let con=scanf('%d');  
    if(con===1){
        console.log('1---添加一个学生学科成绩');
        console.log('请输入学生姓名：');
        let xingming=scanf('%s');
        console.log('请输入语文成绩：');
        let yuwen=scanf('%d');
        console.log('请输入数学成绩：');
        let shuxue=scanf('%d');
        let student={
            'xingming':xingming,
            'yuwen':yuwen,
            'shuxue':shuxue
        };
        arr.push(student);  //往数组中添加一个数字
        console.log('添加成绩成功，点击回车继续');
        scanf('%d');
    }
    if(con===2){
        console.log('2---显示全部学生学科成绩');
        for(let i=0;i<arr.length;i++){
            let syk=arr[i];
            // console.log(syk);
            console.log(`学生：${syk.xingming}\n语文：${syk.yuwen}\n数学：${syk.shuxue}`);
        }
        console.log('点击回车继续');
        scanf('%d');
    }
    if(con===3){
        console.log('3---删除最后一个学生学科成绩');
        arr.pop();  //删除数组中最后一个数字
        console.log('删除最后一名学生成绩成功');
        scanf('%d');
    }
    if(con===4){
        console.log('退出');
        break;
    }
}
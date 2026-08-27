const repeatString = function(str,n) {
    if (n<0){
        return 'ERROR'
    } else if (n==0){
        return ''
    }

    let a=str.split();
    for(let i=1;i<n;i++)
        a.push(str);

    return a.join('');
};

// Do not edit below this line
module.exports = repeatString;

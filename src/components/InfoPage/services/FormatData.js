function dataInfo(key,title,value,tip) {
    this.key = key;
    this.title = title;
    this.value = value; 
    this.tip = tip; 
}

function FormatData(dataPack,dictionary){
    const dataInfoArray=[];
    for (let i in dictionary){
        const value = dataPack[dictionary[i].key]; 
        let item = undefined;
        if(typeof value === 'object'){
            item = new dataInfo( dictionary[i].key,dictionary[i].title,value.fullName,dictionary[i].tip);
            console.log(value); 
        }
        else{
            item = new dataInfo( dictionary[i].key,dictionary[i].title,value,dictionary[i].tip);
        }
        dataInfoArray.push(item); 
    }
    return dataInfoArray;
}

export default FormatData;
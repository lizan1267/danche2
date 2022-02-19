export default{
    formateDate(time){
        if(!time) return '';
        let date=new Date(time);
        let timeDate=date.getFullYear()+"-"+(date.getMonth()+1)+"-"
            +date.getDay()+" "+date.getHours()+":"
            +(date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes())+":"
            +(date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds());
        return timeDate;
    }
}
const helpers = {
    getDateInfo: (dateInfo) => {
        var day = dateInfo.getDate();
        var month = dateInfo.getMonth() + 1;
        let fromYear = dateInfo.getFullYear();
        let subYear = fromYear % 100;

        let date = `${fromYear}-${month}-${day}`;
        let dateText = `${month}/${day}/${subYear}`;

        return {date,dateText}
    },
    formateDate: (date) => {
        let dateArray = date.split('-');
        let year = dateArray[0].substring(2);
        let dateText = `${dateArray[1]}-${dateArray[2]}-${year}`;
        return dateText;
    }
}



export default helpers;
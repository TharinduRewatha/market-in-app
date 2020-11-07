
export class tools {



    public getToday() {

        let today = new Date()
        let dd = String(today.getDate()).padStart(2, '0')
        let mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
        let yyyy = today.getFullYear()

        let today_ = yyyy + '-' + mm + '-' + dd
        return today_
    }

    public getFirstDay() {
        let today = new Date()
        let dd = String(today.getDate()).padStart(2, '0')
        let mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
        let yyyy = today.getFullYear()
        let today_ = yyyy + '-' + mm + '-' + '01'
        return today_
    }

    public getLastMonthFistDay() {
        let dte = new Date()
        let month = dte.getMonth()
        month++

        if (month === 1) {
            let y = dte.getFullYear()
            let m = dte.getMonth()
            y--

            let lastmonth = y + "-" + "12-01"
            return lastmonth
        } else {
            let y = dte.getFullYear()
            let m = dte.getMonth()
            let d = dte.getDate()
            m++
            m--
            let lastmonth = y + "-" + m + "-01"
            return lastmonth
        }
    }

    public getLastMonthLastDay() {
       
        let today = new Date()
        let lastDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 0)
        let lastDay = this.formatDate(lastDayOfMonth)
        
        return lastDay
    }

    public getYear() {
        let dte = new Date()
        let yyyy = dte.getFullYear()
        return yyyy
    }


    getquarterFirstDay() {
        let dte = new Date()
        let mm = dte.getMonth()
        let re
        if (mm < 4) {
            re = dte.getFullYear() + '-01-01'
        } else if (mm < 8) {
            re = dte.getFullYear() + '-04-01'
        } else if (mm < 8) {
            re = dte.getFullYear() + '-07-01'
        } else {
            re = dte.getFullYear() + '-10-01'
        }
        return re
    }
    getquarterLastDay() {
        let dte = new Date()
        let mm = dte.getMonth()
        let re
        if (mm < 4) {
            re = dte.getFullYear() + '-03-31'
        } else if (mm < 8) {
            re = dte.getFullYear() + '-06-31'
        } else if (mm < 8) {
            re = dte.getFullYear() + '-09-30'
        } else {
            re = dte.getFullYear() + '-12-31'
        }
        return re
    }

    getMonday(d) {
        d = new Date(d)
        let day = d.getDay(),
            diff = d.getDate() - day + (day == 0 ? -6 : 1) // adjust when day is sunday
        let date_ob = new Date(d.setDate(diff))

        // adjust 0 before single digit date
        let date = ("0" + date_ob.getDate()).slice(-2)

        // current month
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2)

        // current year
        let year = date_ob.getFullYear()

        // prints date in YYYY-MM-DD format
        let a = year + "-" + month + "-" + date
        return a
    }

    getWeekStartday() {
        let dt = new Date() // current date of week
        let currentWeekDay = dt.getDay()
        let lessDays = currentWeekDay == 0 ? 6 : currentWeekDay - 1
        let weekStart = new Date(new Date(dt).setDate(dt.getDate() - lessDays))
        let returndate = this.formatDate(weekStart)
        return returndate
    }


    getWeekEndDate() {
        let dt = new Date() // current date of week
        let currentWeekDay = dt.getDay()
        let lessDays = currentWeekDay == 0 ? 6 : currentWeekDay - 1
        let wkStart = new Date(new Date(dt).setDate(dt.getDate() - lessDays))
        let wkEnd = new Date(new Date(wkStart).setDate(wkStart.getDate() + 6))
        let returndate = this.formatDate(wkEnd)
        return returndate
    }

    formatDate(date) {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear()

        if (month.length < 2)
            month = '0' + month
        if (day.length < 2)
            day = '0' + day

        return [year, month, day].join('-')
    }


   getNumberFormt(value){
    value = value + ''
    let numberArray = value.split(',')
    let fixedNumberstring = ''
    for(let i = 0; i < numberArray.length; i++){
      fixedNumberstring = fixedNumberstring + numberArray[i];
    }
    let numberValue = Number(fixedNumberstring)
    let result =new Intl.NumberFormat().format(numberValue)
    return result
   }

   RemoveSymbol(value,symbol){
    let numberArray = value.split(symbol)
    let fixedNumberstring = ''
    for(let i = 0; i < numberArray.length; i++){
      fixedNumberstring = fixedNumberstring + numberArray[i]
    }
    return fixedNumberstring
   }


   setIndex(dataArray,otherAttributes:string){
    let fulldataArray = []
    for (var i = 0; i < dataArray.length; i++) {
      let newArray = [];
      for (const [key, value] of Object.entries(dataArray[i])) {
        newArray[key] =value
      }
  
      newArray['index_'] = i + 1
      newArray['element'] = i
      
      let otherAttributesArray = otherAttributes.split(',')
      for(let a = 0; a < otherAttributesArray.length; a++){
        newArray[otherAttributesArray[a]] = ''
      }
      fulldataArray.push(newArray)
    }
  
  return fulldataArray
  }

  arrayToString(dataArray){
      let prefix = ''
      let returnText = ''
      for(let i = 0; i < dataArray.length; i++){
        let text = prefix + dataArray[i]
        returnText = returnText +  text;
        prefix = ','
      }
      return returnText
  }

  StringToArray(stringData,symbol){
    return stringData.split(symbol)
}
  



}
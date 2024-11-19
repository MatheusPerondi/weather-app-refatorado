export function formatDate(dateString: string){
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "long",
    }

    const formatedDate = new Intl.DateTimeFormat("pt-BR", options).format(date);

    return formatedDate.replace("de", "de");
}

export function formateDate3(dateTime: string){
    return dateTime.split(" ")[1];
}

export function formateDate4(dateString: Date){
    const year = dateString.getFullYear();
    const month = String(dateString.getMonth() + 1).padStart(2, "0");
    const day = String(dateString.getDate()).padStart(2, "0");
  
    return `${year}-${month}-${day}`;
    
  }
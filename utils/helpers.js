module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    format_date_time: (event) => {
      
      return event.toLocaleString('en-US');
    },
    jsonSerialize: (obj) => {
     
      return JSON.stringify(obj);
    },
    format_amount: (amount) => {
      
      return parseInt(amount).toLocaleString();
    },
};
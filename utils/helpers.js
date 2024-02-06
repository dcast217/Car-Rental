module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },

    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        new Date(date).getFullYear()
      }`;
    },
    form_date: (date) => {
      return new Date(date).toISOString().substr(0, 10);
    },
    //Add additional helpers if needed for handlebars.js
    have_cars: (data) => {
      console.log(data);
      data > 0 ? true : false;
    },

    lower_case: (data) => {
      return data.toLowerCase();
    }
    
};
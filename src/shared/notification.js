
import $ from 'jquery';
const notifications = {
 
     showInfo:function(message) {
        let infoBox = $('#infoBox');
        infoBox.find('span').text(message);
        infoBox.fadeIn();
        setTimeout(() => infoBox.fadeOut(), 3000)
    },

     showError:function(message) {
        let errorBox = $('#errorBox');
        errorBox.find('span').text(message);
        errorBox.fadeIn();
        setTimeout(() => errorBox.fadeOut(), 3000)
    },

   

}
export default notifications;
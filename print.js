$('#print').click(function(){
   let n =  new Date();
   let y = n.getFullYear();
   let m = n.getMonth() + 1;
   let d = n.getDate();

   const keys = Object.keys(list_of_items);
   let printable_list= '';
   keys.forEach((key, index) => {
      if(key != undefined){
              let id  = '#' + key;
              let item_name = $(id).attr('list_area');
           let unit = $(id).attr('unit');
           let value = $(id).val();
           const price = new Intl.NumberFormat().format(list_of_items[key]);
           printable_list += '<p class="list_item">' + (index +1) + '.' + item_name + ' ' + value + " " + unit + ' @ $' + price + '</p>';
   }});

     
   
   let total = Number($('.bathroom_cost').text().replace(/[\$,]/g,''));
    total  = new Intl.NumberFormat().format(total);
    
   var mywindow = window.open('', 'PRINT');
   mywindow.document.write('<html><head><title></title><style>body{margin:0; font-family: Montserrat; -webkit-print-color-adjust: exact;}.p_margin {margin-bottom: 0;display: inline-block; color:#ffffff; margin-top:10px; font-size: 14px;} hr {width: 30vw;border-top: 3px solid #D4AF36; color: #D4AF36; border-bottom: none; border-right: none;} .list_item{font-weight: 600;color: #707070;}');
   if (keys.length > 6) {
           mywindow.document.write('#list { page-break-after: always;');
   };

   
   mywindow.document.write('</style></head><body id="element-to-print">');
   mywindow.document.write('<div style="margin-top: 20px; text-align: center;">');
   mywindow.document.write('<img style="height: 100px; width: auto;" src="https://uploads-ssl.webflow.com/6194dddee4eb342971cd408e/61eb1c86fc85a6646ba2bf2f_HQR-logo-white-BG.png" alt="">');
   mywindow.document.write('<h2 style="font-weight: 400; color: #707070; font-family: Montserrat;">Bathroom Remodel Estimate</h2>');
   mywindow.document.write('</div><div style="margin-left: 50px; margin-top: 10px; padding: 0;">');
   mywindow.document.write('<p style="font-size: 18px; margin-bottom: 0;">Prepared For: Project address</p>');
   mywindow.document.write('<div style="display: flex; "> <p>Date:</p><p> ' + m + "/" + d + "/" + y + '</p></div></div>');
   mywindow.document.write('<div style="display:flex;justify-content: center;"><hr style="width: 40vw;border-top: 1px solid #D4AF36;"/></div>');
   mywindow.document.write('<div style="margin-left: 50px; margin-top: 10px; padding: 0;"><p style="font-size: 18px; margin-bottom: 0;">Scope of work</p></div>');
   mywindow.document.write('<div id="list" style="margin-left: 50px;margin-right: 50px; height: 200px;">' + printable_list +'</div>');
   mywindow.document.write('<div style="background-color: #707070; "><div style="display:flex ;align-items: center; flex-direction: column;"><h2 style="font-weight: 600; color: #ffffff;; margin-bottom: 0;">Total project investment</h2><h1 style="margin-top: 10px; color:#ffffff;;">$' + total + '</h1><hr/><h3 style="font-weight: 600; color:#ffffff;; margin-bottom: 0;">Considerations</h3></div>');
   mywindow.document.write('<div style="margin-left: 50px;">');
   mywindow.document.write('<p class="p_margin" style=" font-weight: bold; ">General Notes:</p>');
   mywindow.document.write('<p class="p_margin" style=""> Tax, labor, rough material, and permit acquisition services are included.</p><br/>');
   mywindow.document.write('<p class="p_margin" style=" font-weight: bold;">General Exclusions:</p> ');
//    mywindow.document.write('<p class="p_margin" style=""> Engineering, deisgn, permits and associated fees are not included (if applicable)</p><br/>');
//    mywindow.document.write('<p class="p_margin" style=" font-weight: bold;">Clarifications:</p>');
//    mywindow.document.write('<p class="p_margin" style=""> If allowances are set, the client is responsible for any overages beyond the allowed amount</p><br/>');
//    mywindow.document.write('<p class="p_margin" style=" font-weight: bold; margin-bottom: 10px">Concealed/Hidden conditions:</p> ');
//    mywindow.document.write('<p class="p_margin" style="margin-bottom:15px;"> Concealed conditions exposed by demolition during project may affect this estimate</p><br/></div></div>');
//    mywindow.document.write('<div style="margin-top: 0;display:flex ;align-items: center; flex-direction: column;"><h3 style="font-weight: 600; color: #707070; margin-bottom: 0;">Ready to move Forward?</h3>');
//    mywindow.document.write('<p style="font-weight: 600; color: #707070; margin-bottom: 0;">Book an on-site meeting for one of our project managers to meet with</p>');
//    mywindow.document.write('<p style="font-weight: 600; color: #707070; margin-bottom: 10px; margin-top:0;">you to verify the estimate\'s accuracy and plan the construction phase.</p></div>');
//    mywindow.document.write('<div style="display: flex; justify-content: space-around;"><div style="display:flex; flex-direction: column; align-items: center;"><h3 style=" margin-bottom: 5px; font-weight: 400">Call us</h3> <div style="background-color: #D4AF36; width: 150px; height: 35px; display:flex; justify-content: center; align-items: center; border-radius: 30px; margin-top: 0;"><p style="font-weight: bold; font-size: 20px;color: #fff">510-890-0551</p> </div></div> <div style="display:flex; flex-direction: column; align-items: center;"><h3 style="font-weight: 400; margin-bottom: 5px">Visit</h3> <div style="margin-top: 0;background-color: #D4AF36; width: 250px;height: 35px; display:flex; justify-content: center; align-items: center; border-radius: 30px;"><p style="font-weight: bold; font-size: 20px;color: #fff">www.hqrpro.com/book</p> </div> </div> </div>');
    
    //var element = mywindow.document.getElementById('element-to-print');
  	//html2pdf(element);
    
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/
    mywindow.print();

});
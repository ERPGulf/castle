// Copyright (c) 2020, ERPGulf . visit our website www.ERPGulf.com for more details
// License: MIT. See LICENSE

//calculating year of service from joining date , and age from date of birth DOB

frappe.ui.form.on("Employee", "refresh", function(frm) {

  var today = new Date();

    // this is how you get data from form
    var dateOfBirth = new Date(frm.doc.date_of_birth);
    

    var duration = today.getFullYear() - dateOfBirth.getFullYear(); 
    var m = today.getMonth() - dateOfBirth.getMonth(); 
    if (m < 0 || (m === 0 && today.getDate() < dateOfBirth.getDate())) { 
      duration--; 
    } 
    frm.set_value('age', duration);

    var dateOfJoining = new Date(frm.doc.date_of_joining); 
    var yearOfSservice = today.getFullYear() - dateOfJoining.getFullYear(); 
    var m = today.getMonth() - dateOfJoining.getMonth(); 
    if (m < 0 || (m === 0 && today.getDate() < dateOfJoining.getDate())) { 
      yearOfSservice--; 
    frm.set_value('number_of_years_in_service', yearOfSservice);
    }

});

frappe.ui.form.on('Employee', {

    "date_of_birth": function(frm) {
      var today = new Date();
        var dateOfBirth = new Date(frm.doc.date_of_birth); 
        
        var duration = today.getFullYear() - dateOfBirth.getFullYear(); 
        var m = today.getMonth() - dateOfBirth.getMonth(); 
        if (m < 0 || (m === 0 && today.getDate() < dateOfBirth.getDate())) { 
          duration--; 
        } 
        frm.set_value('age', duration);        
    }

});

frappe.ui.form.on('Employee', {

  "date_of_joining": function(frm) {
    var today = new Date();
      var dateOfJoining = new Date(frm.doc.date_of_joining); 
      
      var yearOfSservice = today.getFullYear() - dateOfJoining.getFullYear(); 
      var m = today.getMonth() - dateOfJoining.getMonth(); 
      if (m < 0 || (m === 0 && today.getDate() < dateOfJoining.getDate())) { 
        yearOfSservice--; 
      } 
      frm.set_value('number_of_years_in_service', yearOfSservice);        
  }

});

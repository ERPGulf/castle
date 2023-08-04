
frappe.ui.form.on("Employee", {
    refresh: function(frm) {
        frappe.msgprint(__("Message printed from Hooks"));

    }
    });
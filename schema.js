const abc = {
    OfficeID: {
        Name: "xyz",
        BOID: "",
        FinacleCode: "",
        MccamishCode: "",
        MailsCode: "",
        PGCode: "",
        IPPB: {
            IPPBID: "",
            IPPBPhoneNumber: "",
        }

    },
    Officials: {
        Official1: {
            Name: "",
            Age: "",
            Sex: "",
            Category: "",
            Date_of_Joining: "",
            Date_of_Birth: "",
            Date_of_Retirement: "",
            Phone_number: "",
            email_id: "",
            IPPB_Email_ID: "",
            etc_etc_etc: ""

        },
        Official2: {
            Name: "",
            Age: "",
            Sex: "",
            Category: "",
            Date_of_Joining: "",
            Date_of_Birth: "",
            Date_of_Retirement: "",
            Phone_number: "",
            email_id: "",
            IPPB_Email_ID: "",
            etc_etc_etc: ""

        },
        Official3: {
            Name: "",
            Age: "",
            Sex: "",
            Category: "",
            Date_of_Joining: "",
            Date_of_Birth: "",
            Date_of_Retirement: "",
            Phone_number: "",
            email_id: "",
            IPPB_Email_ID: "",
            etc_etc_etc: ""

        }
    }
}


function E() { 
    f0 = document.forms['addPassengerForm'] || document.forms['jpBook'] || document.forms['jpform']; 
    function F1(el, val) { 
        if (document.getElementById(el) && val != '') 
        document.getElementById(el).value = val; } 
        if (document.forms['loginFormId']) { }; 
        if (document.forms['jpform']) { 
            F1('jpform:fromStation', 'GORAKHPUR JN - GKP'); 
            F1('jpform:toStation', 'ALLAHABAD JN - ALD'); 
            F1('jpform:journeyDateInputDate', '05-03-2018'); 
            F1('ticketType', 'E_TICKET'); }; 
            var elements = document.getElementsByName('quota'); 
            for (i = 0; i < elements.length; i++) { 
                if (elements[i].value == 'TQ') { 
                    elements[i].checked = true; 
                } 
            } 
            if (f0['addPassengerForm:psdetail:0:psgnName']) 
            f0['addPassengerForm:psdetail:0:psgnName'].value = 'rajat paswan'; 
            dq = document.querySelector('input[size=\'16\'][id^=\'addPassengerForm:psdetail:0:\']'); 
            if (dq) dq.value = 'rajat paswan'; 
            if (f0['addPassengerForm:psdetail:0:psgnAge']) 
            f0['addPassengerForm:psdetail:0:psgnAge'].value = '24'; 
            if (f0['addPassengerForm:psdetail:0:berthChoice']) 
            f0['addPassengerForm:psdetail:0:berthChoice'].value = 'UB'; 
            if (f0['addPassengerForm:mobileNo']) f0['addPassengerForm:mobileNo'].value = '8882263883'; 
            if (f0['addPassengerForm:autoUpgrade']) { 
                f0['addPassengerForm:autoUpgrade'].checked = true; 
                f0['addPassengerForm:autoUpgrade'].removeAttribute('disabled'); 
            } 
            if (f0['addPassengerForm:travelInsurance']) 
            for (i = 0; i < f0['addPassengerForm:travelInsurance'].length; i++) { 
                if (D(f0['addPassengerForm:travelInsurance'][i].value, 'true')) { 
                    f0['addPassengerForm:travelInsurance'][i].checked = true; 
                } 
            } 
            function D(n, t) { 
                for (c = t.split('|'), d = !1, q = 0; q < c.length; q++)c[q] == n && (d = !0); return d 
            } 
            if (document.forms['jpBook']) { 
                try { 
                    if (document.getElementsByClassName('CASH_CARD')[0].style.display == 'none') 
                    eval(document.getElementById('CASH_CARD').getAttribute('onclick')); 
                } 
                catch (err) { } 
                try { 
                    if (document.querySelectorAll("input[value='71']").length > 1) 
                    document.querySelectorAll("input[value='71']")[1].click(); 
                    else document.querySelectorAll("input[value='71']")[0].click(); 
                } 
                catch (err) { } 
            }; 
        } 
        E()
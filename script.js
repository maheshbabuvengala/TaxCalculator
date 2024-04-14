        function validateNumberField() {
            let field = document.getElementById("aincome");
            let errorIcon = document.getElementById("erroricon1");

            if (isNaN(field.value)) {
                errorIcon.style.visibility = 'visible';
                errorIcon.setAttribute("title", "enter only numbers");
            }
            else {
                errorIcon.style.visibility = 'hidden';
            }
        }
        function validateNumberFields() {
            let field = document.getElementById("eincome");
            let errorIcon = document.getElementById("erroricon2");

            if (isNaN(field.value)) {
                errorIcon.style.visibility = 'visible';
                errorIcon.setAttribute("title", "enter only numbers");
            } else {
                errorIcon.style.visibility = 'hidden';
            }
        }
        function validateNumberFieldss() {
            let field = document.getElementById("deduction");
            let errorIcon = document.getElementById("erroricon3");

            if (isNaN(field.value)) {
                errorIcon.style.visibility = 'visible';
                errorIcon.setAttribute("title", "enter only numbers");
            } else {
                errorIcon.style.visibility = 'hidden';
            }
        }


        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })


        document.getElementById("submit").addEventListener("click", (event) => {
            event.preventDefault();

            let a = document.getElementById("aincome");
            let b = document.getElementById("eincome");
            let c = document.getElementById("age");
            let d = document.getElementById("deduction");
            let errorIcon1 = document.getElementById("erroricon1");
            let errorIcon2 = document.getElementById("erroricon2");
            let errorIcon3 = document.getElementById("erroricon3");
            let errorIcon4 = document.getElementById("erroricon4");

            if (a.value == "") {
                errorIcon1.style.visibility = 'visible';
                errorIcon1.setAttribute("title", "this input field is mandatory")
            }
            else {
                errorIcon1.style.visibility = 'hidden';
            }

            if (b.value == "") {
                errorIcon2.style.visibility = 'visible';
                errorIcon2.setAttribute("title", "this input field is mandatory")
            }
            else {
                errorIcon2.style.visibility = 'hidden';
            }

            if (d.value == "") {
                errorIcon3.style.visibility = 'visible';
                errorIcon3.setAttribute("title", "this input field is mandatory")
            }
            else {
                errorIcon3.style.visibility = 'hidden';
            }

            if (c.value == "0") {
                errorIcon4.style.visibility = 'visible';
                errorIcon4.setAttribute("title", "this input field is mandatory")
            }
            else {
                errorIcon4.style.visibility = 'hidden';
            }

            let l1 = a.value.length;
            let l2 = b.value.length;
            let l3 = d.value.length;

            if (l1 > 0 && l2 > 0 && l3 > 0) {
                let oai = parseInt(a.value) + parseInt(b.value) - parseInt(d.value);
                let e = 800000;
                let rincome = document.getElementById("rincome");

                if (oai > e && c.value == "1") {
                    let fir = (oai - e) * 0.03;
                    rincome.textContent = oai - fir;
                }
                else if (oai > e && c.value == "2") {
                    let sec = (oai - e) * 0.04;
                    rincome.textContent = oai - sec;
                }
                else if (oai > e && c.value == "3") {
                    let thi = (oai - e) * 0.01;
                    rincome.textContent = oai - thi;
                }
                else {
                    rincome.textContent = oai;
                }

                let myModal = new bootstrap.Modal(document.getElementById("myModal"));
                myModal.show();
            }
        });

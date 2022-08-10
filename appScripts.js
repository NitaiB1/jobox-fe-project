//this is to do form validation
function check() {
    var err = ''
    var errmsg = "The following Fields are empty: <br>"
    var state = "unchecked";
    if ($('#clientName').val() == "") {
        err = err + "Client name. <br>";
    }
    if ($('#contractDateStart').val() == "") {
        err = err + "Contract start date. <br>";
    }
    if ($('#contractDateEnd').val() == "") {
        err = err + "Contract end date. <br>";
    }
    if ($('#serviceCost').val() == "") {
        err = err + "Service cost. <br>";
    }
    if ($('#serviceDesc').val() == "") {
        err = err + "Service description. <br>";
    }
    if (err != '') {
        $('#errors').html('<div class="alert alert-danger" role="alert">' + errmsg + err + '</div>');
    } else {
        $('#errors').html('<button id="button" type="button" class="btn btn-primary btn-lg" onclick="generate()">Download</button>')
    }
}





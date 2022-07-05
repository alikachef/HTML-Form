document.getElementById('jobForm').addEventListener('submit', submitForm);


function submitForm(e){
    var fname = document.getElementById('fName').value;
    var lname = document.getElementById('lName').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;
    var phone = document.getElementById('phone').value;
    var position = document.getElementById('position').value;

    var job = {
        firstName: fname,
        lastName: lname,
        address1: address,
        city1: city,
        state1: state,
        zip1: zip,
        phoneNumber: phone,
        position1: position
    }

    if(localStorage.getItem('jobs') === null)
    {
        var jobs = [];
        jobs.push(job);
        localStorage.setItem('jobs', JSON.stringify(jobs));
    }
    else 
    {
        var jobs = JSON.parse(localStorage.getItem('jobs'));
        jobs.push(job);
        localStorage.setItem('jobs', JSON.stringify(jobs));
    }

    document.getElementById('jobForm').reset();
    fetchSeeker();
    e.preventDefault();


}

function fetchSeeker()
{
    var jobs = JSON.parse(localStorage.getItem('jobs'));
    var showList =document.getElementById('show');

    showList.innerHTML = '';

    

    for(var i=0; i < jobs.length; i++){
        var fname = jobs[i].firstName;
        var lname = jobs[i].lastName;
        var add = jobs[i].address1;
        var cityh = jobs[i].city1;
        var stateh = jobs[i].state1;
        var ziph = jobs[i].zip1;
        var phone = jobs[i].phoneNumber;
        var positionh = jobs[i].position1;

        showList.innerHTML +=  '<div class="mainForm ">'+ '<h4>' +
                                lname  + ", " +
                                fname + "</h4>" +
                                "<p>" + add + "<br>" + 
                                cityh + ", " + stateh + " " +ziph+ '<br>' + 
                                phone + "<br>" + positionh +
                                '</div>';

    }  
}


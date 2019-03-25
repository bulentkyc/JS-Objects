//————————————------------e-mail app-------------——————————//
/*
    1) Create a layout on html for your e-mail screen with to,cc,
        subject,...

    2) when click send button, store all data on an object.

    3) store all mail objects on an array.
    !!! You can take data from html input like this:
    getElementById('id').value;

    4) create another layout for inbox.

    5) read meail objects from array and show on a div or ul.
        for instance:
        on html : 
        <ul id='list'></ul>
        
        on JS: 
        for (i = 1; i<=emailList.length; i++){
            document.getElementById('list').innerHTML += '<li>' +
            emailList[i].email+
            '</li>';
        }

    6) create a preview screen and show more details while clicking
        different mails.
    
    ////////////////////////   Have fun 😃    /////////////////////

    If You'd like more challange:
    7) Add to your objects read-unread property.

    8) Style your mails differently about this.

    9) Create quotation options for reply. I f someone click reply refer
        the object and combine with new object
*/

//This array keeps the mail object
let eMails = [];

//Function creates objects for every e mail and push it to array
function sendEmail () {
    let to = document.getElementById('to').value;
    let cc = document.getElementById('cc').value;
    let subject = document.getElementById('subject').value;
    let text = document.getElementById('text').value;

    let eMail = {
        to,
        cc,
        subject,
        text
    }

    eMails.push(eMail);

    console.log(eMails);
}

//Hide compose and show inbox
function showInbox () {
    document.getElementById('compose').style.display = 'none';
    document.getElementById('inbox').style.display = 'block';
    showEmails();
}

//Hide inbox and show compose
function showCompose () {
    document.getElementById('compose').style.display = 'block';
    document.getElementById('inbox').style.display = 'none';
}

//Create a list for emails and prepapre onclicks
function showEmails () {
    //Clear the list on the begining to prevent dublicated mails
    document.getElementById('emailList').innerHTML = '';
    for (let i = 0; i < eMails.length; i++) {
        document.getElementById('emailList').innerHTML += 
        //insert list items to ul and create onclick with current indexes
        '<li onclick = "showContent(' + i + ')">' + 
        eMails[i].subject +
        '</li>';
    }
}

//When clicked an email on the list, this func. shows the content on div
function showContent (index) {
    document.getElementById('mailContent').innerHTML = eMails[index].text;
}



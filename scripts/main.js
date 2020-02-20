const journalEntry = () => {    
    const conceptsData = document.getElementById("concepts").value;
    const moodData = document.getElementById("mood").value;
    const dateData = document.getElementById("date").value;
    const journalData = document.getElementById("journal").value;

    var myData = `Concepts Covered:     ${conceptsData}                                   Daily Journal Entry: ${journalData}`;
    window.open(`mailto:mecarrolljr@tutanota.com?subject=NSS Daily Journal: ${dateData}   Current Mood:   ${moodData}&body=${myData}`);
}

// This is sample; do not edit or delete!!
// $(".btn.btn-primary.form-submit-me").click(function() {
//     var myData = "Email:  " + $("#exampleFormControlInput1").val() + "    " + "Rating:  " + $("#exampleFormControlSelect1").val() + "    " + "Additional Feedback:  " + $("#exampleFormControlTextarea2").val();
//     window.open('mailto:mecarrolljr@tutanota.com?subject=Michael Carroll Website Review&body=' + myData);
// })
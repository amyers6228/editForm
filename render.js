let profNum = 1;
const limit = 3;
let review = {
    profFirst: "",
    profLast: "",
    courseCode: "",
    rating: "",
    difficulty: "",
    retake: "",
    textbook: "",
    attendance: "",
    grade: "",
    attr: [""],
    textbox: ""
}

export const addProf = function() {
    profNum++;
    const prevNum = profNum-1;
    const newProf = `
    <div class="professor${profNum} field">
        <div class="field">
            <label for="professorFirst${profNum}" class="label">Professor ${profNum}'s First Name:</label>
            <div class="control">
                <input type="text" id="professorFirst${profNum}" class="professorFirst input" name="professorFirst" required>
            </div>
        </div>
        <div class="field">
            <label for="professorLast${profNum}" class="label">Professor ${profNum}'s Last Name:</label>
            <div class="control">
                <input type="text" id="professorLast${profNum}" class="professorLast input" name="professorLast" required> 
            </div>
        </div>
    </div>
    `
    $(".profButtons").append(`<button type="button" id="remButton${profNum}" class="removeProf button is-light">Remove Professor ${profNum}</button>`);
    if (profNum > 2) {
        $("#remButton" + prevNum).remove();
        $(".professors").append(newProf);
    } else {
        $(".professors").append(newProf);
    }
    $(".removeProf").on('click', removeProf);
}

export const removeProf = function() {
    const prevNum = profNum-1;
    if (prevNum == 1) {
        $(".professor" + profNum).remove();
        $("#remButton" + profNum).remove();
    } else {
        $(".professor" + profNum).remove();
        $("#remButton" + profNum).remove();
        $(".profButtons").append(`<button type="button" id="remButton${prevNum}" class="removeProf button is-light">Remove Professor ${prevNum}</button>`);
    }
    profNum--;
    $(".removeProf").on('click', removeProf);
}

export const loadForm = function() {
    const $root = $('#root');

    const editForm = `
    <div class="columns is-centered">
        <div class="column"></div>
        <div class="column">
            <div class="box theForm">
                <form action="" method="post">
                    <div class="field">
                        <div id="professors" class="professors field">
                            <div class="professor1 field">
                                <div class="field">
                                    <label for="professorFirst1" class="label">Professor's First Name:</label>
                                    <div class="control">
                                        <input type="text" id="professorFirst1" class="professorFirst input" name="professorFirst" required>
                                    </div>
                                </div>
                                <div class="field">
                                    <label for="professorLast1" class="label">Professor's Last Name:</label>
                                    <div class="control">
                                        <input type="text" id="professorLast1" class="professorLast input" name="professorLast" required>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="profButtons field is-grouped is-grouped-right"> 
                            <div class="control">
                                <button type="button" class="addProf button is-info">Add Another Professor</button>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="field">
                            <div class="courseCode control">
                                <label for="courseCode" class="label">Course Code: </label>
                                <input type="text" class="input" id="courseCode" name="courseCode" required>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <div class="rating">
                                <h4 class="label">How would you rate them?</h4>
                                <div class="ratingButtons">
                                    <input type="radio" class="radioButton" id="rating1" name="rating" value="1" required>
                                    <input type="radio" class="radioButton" id="rating2" name="rating" value="2">
                                    <input type="radio" class="radioButton" id="rating3" name="rating" value="3">
                                    <input type="radio" class="radioButton" id="rating4" name="rating" value="4">
                                    <input type="radio" class="radioButton" id="rating5" name="rating" value="5">
                                </div>
                                <div class="ratinglabels">
                                    <label for="rating1" class="radio radioLabel">1</label>
                                    <label for="rating2" class="radio radioLabel">2</label>
                                    <label for="rating3" class="radio radioLabel">3</label>
                                    <label for="rating4" class="radio radioLabel">4</label>
                                    <label for="rating5" class="radio radioLabel">5</label> 
                                </div>
                            </div>
                        </div>
                    </div>    
                    <div class="field">
                        <div class="control">
                            <div class="diff">
                                <h4 class="label">How difficult was the class?</h4>
                                <div class="diffButtons">
                                    <input type="radio" class="radioButton" id="diff1" name="diff" value="1" required>
                                    <input type="radio" class="radioButton" id="diff2" name="diff" value="2">
                                    <input type="radio" class="radioButton" id="diff3" name="diff" value="3">
                                    <input type="radio" class="radioButton" id="diff4" name="diff" value="4">
                                    <input type="radio" class="radioButton" id="diff5" name="diff" value="5">
                                </div>
                                <div class="difflabels">
                                    <label for="diff1" class="radio radioLabel">1</label>
                                    <label for="diff2" class="radio radioLabel">2</label>
                                    <label for="diff3" class="radio radioLabel">3</label>
                                    <label for="diff4" class="radio radioLabel">4</label>
                                    <label for="diff5" class="radio radioLabel">5</label> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <div class="retake">
                                <h4 class="label">Would you take them again?</h4>
                                <div class="retakeButtons">
                                    <input type="radio" class="radioButton2" id="retakeYes" name="retake" value="true" required>
                                    <input type="radio" class="radioButton2" id="retakeNo" name="retake" value="false">
                                </div>
                                <div class="retakelabels">
                                    <label for="retakeYes" class="radio radioLabel">Yes</label>
                                    <label for="retakeNo" class="radio radioLabel">No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <div class="book">
                                <h4 class="label">Did the course require a textbook? <em class="has-text-grey-dark">(Optional)</em></h4>
                                <div class="bookButtons">
                                    <input type="radio" class="radioButton2" id="bookYes" name="book" value="true">
                                    <input type="radio" class="radioButton2" id="bookNo" name="book" value="false">
                                </div>
                                <div class="bookLabels">
                                    <label for="bookYes" class="radio radioLabel">Yes</label>
                                    <label for="bookNo" class="radio radioLabel">No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <div class="attend">
                                <h4 class="label">Was attendance required? <em class="has-text-grey-dark">(Optional)</em></h4>
                                <div class="attendButtons">
                                    <input type="radio" class="radioButton2" id="attendYes" name="attend" value="Yes">
                                    <input type="radio" class="radioButton2" id="attendNo" name="attend" value="No">
                                </div>
                                <div class="attendLabels">
                                    <label for="attendYes" class="radio radioLabel">Yes</label>
                                    <label for="attendNo" class="radio radioLabel">No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <div class="grade">
                                <h4 class="label">What grade did you recieve? <em class="has-text-grey-dark">(Optional)</em><h4>
                                <div class="control">
                                    <div class="select">
                                        <select name="grade">
                                            <option class="gradeA" value="A">A</option>
                                            <option class="gradeA-" value="A-">A-</option>
                                            <option class="gradeB+" value="B+">B+</option>
                                            <option class="gradeB" value="B">B</option>
                                            <option class="gradeB-" value="B-">B-</option>
                                            <option class="gradeC+" value="C+">C+</option>
                                            <option class="gradeC" value="C">C</option>
                                            <option class="gradeC-" value="C-">C-</option>
                                            <option class="gradeD+" value="D+">D+</option>
                                            <option class="gradeD" value="D">D</option>
                                            <option class="gradeD-" value="D-">D-</option>
                                            <option class="gradeF" value="F">F</option>
                                            <option class="gradeWithdrawal" value="Withdrawal">Withdrawal</option>
                                            <option class="gradePass/Fail" value="Pass/Fail">Pass/Fail</option>
                                            <option class="gradeIncomplete" value="Incomplete">Incomplete</option>
                                            <option class="gradeNotSure" value="NotSure">Not Sure Yet</option>
                                            <option class="gradePreferNotToAnswer" value="PreferNotToAnswer">Prefer Not To Answer</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <div class="attr">
                                <h4 class="label">Which of these best describes the professor? (3 max) <em class="has-text-grey-dark">(Optional)</em></h4>
                                <label for="respect" class="checkbox">
                                    <input type="checkbox" class="attrCheckbox checkRespect" id="respect" name="respect" value="Respect">
                                    Respected
                                </label>
                                <label for="engaging" class="checkbox">
                                    <input type="checkbox" class="attrCheckbox checkEngaging" id="engaging" name="engaging" value="Engaging">
                                    Engaging
                                </label>
                                <label for="caring" class="checkbox">
                                    <input type="checkbox" class="attrCheckbox checkCaring" id="caring" name="caring" value="Caring">
                                    Caring
                                </label>
                                <label for="lecturer" class="checkbox">
                                    <input type="checkbox" class="attrCheckbox checkLecturer" id="lecturer" name="lecturer" value="Lecturer">
                                    Heavy Lecturer
                                </label>
                                <label for="tough" class="checkbox">
                                    <input type="checkbox" class="attrCheckbox checkTough" id="tough" name="tough" value="Tough">
                                    Tough Grader
                                </label>
                                <label for="few" class="checkbox">
                                    <input type="checkbox" class="attrCheckbox checkFew" id="few" name="few" value="Few">
                                    Few Grades
                                </label>
                                <label for="paper" class="checkbox">
                                    <input type="checkbox" class="attrCheckbox checkPaper" id="paper" name="paper" value="Paper">
                                    Paper Heavy
                                </label>
                                <label for="approchable" class="checkbox">
                                    <input type="checkbox" class="attrCheckbox checkApprochable" id="approchable" name="approachable" value="Approachable">
                                    Approchable
                                </label>
                                <label for="mandatory" class="checkbox">
                                    <input type="checkbox" class="attrCheckbox checkMandatory" id="mandatory" name="mandatory" value="Mandatory">
                                    Attend or Fail
                                </label>
                                <label for="participation" class="checkbox">
                                    <input type="checkbox" class="attrCheckbox checkParticipation" id="participation" name="participation" value="Participation">
                                    Participation Expected
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <div class="reviewText">
                                <h4 class="label">Give some specifics? <em class="has-text-grey-dark">(Required)</em></h4>
                                <textarea class="textarea" id="textbox" name="reviewText" rows="10" cols="30" required>${review.textbox}</textarea>
                            </div>
                        </div>
                    </div>
                    <div class="control">
                        <input type="submit" class="button is-light" value="Submit for Review">
                    </div>
                </form>
            </div>
        </div>
        <div class="column"></div>
    </div>
    `

    $root.append(editForm)

    $(".attrCheckbox").on('change', function(event) {
        if ($('input[type="checkbox"]:checked').length > 3) {
            $(this).prop('checked', false);
        }
    })
    $(".addProf").on('click', addProf);
}

$(document).ready(function() {
    loadForm();
    for (let i = 0; i < review.attr.length; i++) {
        $(".check" + review.attr[i]).attr("checked", "checked");
    }
    if (review.grade == "") {
        $(".gradePreferNotToAnswer").attr("selected", "selected");
    } else {
        $(".grade" + review.grade).attr("selected", "selected");
    }
    $("#attend" + review.attendance).attr("checked", "checked");
    $("#book" + review.textbook).attr("checked", "checked");
    $("#retake" + review.retake).attr("checked", "checked");
    $("#diff" + review.difficulty).attr("checked", "checked");
    $("#rating" + review.rating).attr("checked", "checked");
    if (review.profFirst == "") {
        $("#professorFirst1").attr("placeholder", "e.g. Ketan");
    } else {
        $("#professorFirst1").attr("value", review.profFirst);
    }
    if (review.profLast == "") {
        $("#professorLast1").attr("placeholder", "e.g. Mayer-Patel");
    } else {
        $("#professorLast1").attr("value", review.profLast);
    }
    if (review.courseCode == "") {
        $("#courseCode").attr("placeholder", "e.g. COMP426");
    } else {
        $("#courseCode").attr("value", review.courseCode);
    }
});